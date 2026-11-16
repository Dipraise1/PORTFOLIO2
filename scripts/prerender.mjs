// Runs after `vite build` and `vite build --ssr`.
// Renders the real React tree to static HTML for each indexable route, so crawlers, link
// previews and the first paint all get real content instead of an empty <div id="root">.
// Also writes sitemap.xml and the structured data from the same project list the UI uses.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const { render, projects, featured, SITE, SERVICES } = await import(
  pathToFileURL(path.join(root, 'dist-ssr/entry-server.js')).href
);

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

const PAGES = [
  {
    route: '/',
    out: 'index.html',
    title: 'Divine Rapheal (Praise.eth) | Web3 and Full-Stack Developer',
    description:
      'Divine Rapheal builds crypto wallets, smart contracts, trading bots and mobile apps. Founder of Sawa Wallet and Nexxra Digitals, based in Abuja, Nigeria and working with teams worldwide.',
    ogDescription: `Wallets, smart contracts, trading engines and apps. See Sawa Wallet, FLÈA, WayaTix, Engram and ${projects.length - 4} more projects.`,
  },
  {
    route: '/cv',
    out: 'cv/index.html',
    title: 'CV | Divine Rapheal, Web3 and Full-Stack Developer',
    description:
      'CV of Divine Rapheal: founder of Sawa Wallet, senior Web3 developer. Solidity, Rust, TypeScript, React Native. View or download the PDF.',
  },
];

const person = {
  '@type': 'Person',
  '@id': `${SITE.url}/#person`,
  name: SITE.name,
  alternateName: [SITE.handle, 'PRAISE.ETH', SITE.brand],
  url: `${SITE.url}/`,
  image: `${SITE.url}/pfp.png`,
  jobTitle: 'Web3 and Full-Stack Developer',
  description:
    'Web3 product engineer building wallets, smart contracts, trading engines and mobile apps.',
  email: `mailto:${SITE.email}`,
  address: { '@type': 'PostalAddress', addressLocality: 'Abuja', addressCountry: 'NG' },
  sameAs: [SITE.github, SITE.xHref, SITE.telegramHref, SITE.tiktok],
  worksFor: [
    { '@type': 'Organization', name: 'Sawa Wallet', url: 'https://sawawallet.org' },
    { '@type': 'Organization', name: 'Nexxra Digitals', url: SITE.nexxra },
  ],
  knowsAbout: [
    ...SERVICES,
    'Solidity', 'Rust', 'TypeScript', 'React', 'React Native', 'Next.js', 'Solana', 'Ethereum', 'DeFi',
  ],
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    person,
    {
      '@type': 'WebSite',
      '@id': `${SITE.url}/#website`,
      url: `${SITE.url}/`,
      name: `${SITE.name} (${SITE.brand})`,
      inLanguage: 'en',
      publisher: { '@id': `${SITE.url}/#person` },
    },
    {
      '@type': 'ProfilePage',
      '@id': `${SITE.url}/#profile`,
      url: `${SITE.url}/`,
      mainEntity: { '@id': `${SITE.url}/#person` },
      isPartOf: { '@id': `${SITE.url}/#website` },
    },
    {
      '@type': 'ItemList',
      name: 'Projects by Divine Rapheal',
      numberOfItems: projects.length,
      itemListElement: projects.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': p.kind === 'web' ? 'WebSite' : 'SoftwareApplication',
          name: p.title,
          description: p.description ? `${p.summary} ${p.description}` : p.summary,
          ...(p.live || p.github ? { url: p.live || p.github } : {}),
          ...(p.github ? { codeRepository: p.github } : {}),
          creator: { '@id': `${SITE.url}/#person` },
          keywords: p.tech.join(', '),
        },
      })),
    },
  ],
};

for (const page of PAGES) {
  const url = `${SITE.url}${page.route === '/' ? '/' : page.route}`;
  const head = `<title>${esc(page.title)}</title>
    <meta name="description" content="${esc(page.description)}" />
    <link rel="canonical" href="${url}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:title" content="${esc(page.title)}" />
    <meta property="og:description" content="${esc(page.ogDescription || page.description)}" />`;

  const preload =
    page.route === '/'
      ? featured
          .slice(0, 0)
          .map((p) => `<link rel="preload" as="image" href="/work/${p.shot}-640.webp" />`)
          .join('')
      : '';

  const html = template
    .replace(/<!--head:start[\s\S]*?<!--head:end-->/, head + preload)
    .replace(
      '<!--jsonld-->',
      page.route === '/'
        ? `<script type="application/ld+json">${JSON.stringify(jsonLd).replace(/</g, '\\u003c')}</script>`
        : ''
    )
    .replace('<!--app-html-->', render(page.route));

  const file = path.join(dist, page.out);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
  console.log(`prerendered ${page.route} -> dist/${page.out} (${(html.length / 1024).toFixed(1)} kB)`);
}

// Client-only shell for routes that are not prerendered (e.g. /live-chat).
fs.writeFileSync(
  path.join(dist, 'app.html'),
  template
    .replace('<!--head:start', '<meta name="robots" content="noindex" /><!--head:start')
    .replace('<!--jsonld-->', '')
    .replace('<!--app-html-->', '')
);

const today = new Date().toISOString().slice(0, 10);
fs.writeFileSync(
  path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${PAGES.map(
  (p) => `  <url>
    <loc>${SITE.url}${p.route === '/' ? '/' : p.route}</loc>
    <lastmod>${today}</lastmod>
  </url>`
).join('\n')}
</urlset>
`
);
console.log('wrote sitemap.xml');

// Plain-text summary for AI crawlers and assistants.
const line = (p) => `- ${p.live || p.github ? `[${p.title}](${p.live || p.github})` : p.title}: ${p.summary}`;
fs.writeFileSync(
  path.join(dist, 'llms.txt'),
  `# ${SITE.name} (${SITE.handle})

> Web3 and full-stack developer based in ${SITE.location}. Builds crypto wallets, smart contracts, trading engines, Telegram bots and mobile apps. Founder of Sawa Wallet and Nexxra Digitals.

## Contact
- Email: ${SITE.email}
- Telegram: ${SITE.telegramHref}
- X: ${SITE.xHref}
- GitHub: ${SITE.github}
- CV: ${SITE.url}/cv

## Selected work
${featured.map(line).join('\n')}

## Other projects
${projects.filter((p) => !p.featured).map(line).join('\n')}
`
);
console.log('wrote llms.txt');
