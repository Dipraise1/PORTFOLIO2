/* eslint-disable react/prop-types */
import { useState } from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import { featured, rest, KINDS } from '../data/projects';
import { SITE } from '../data/site';

const FOLD = 10;

const host = (url) => url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');

const FeaturedCard = ({ p, eager }) => (
  <article className="work-card flex flex-col">
    <a
      href={p.live}
      target="_blank"
      rel="noreferrer"
      className="shot"
      aria-label={`Open ${p.title} (${host(p.live)})`}
    >
      <img
        src={`/work/${p.shot}-1200.webp`}
        srcSet={`/work/${p.shot}-640.webp 640w, /work/${p.shot}-1200.webp 1200w`}
        sizes="(min-width: 768px) 540px, 100vw"
        width="1200"
        height="750"
        alt={`${p.title} home page`}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
      />
    </a>
    <div className="mt-4 flex items-baseline justify-between gap-4">
      <h3 className="font-display text-xl font-semibold text-[var(--text)]">{p.title}</h3>
      <div className="flex shrink-0 items-center gap-3 text-[13px]">
        {p.github && (
          <a href={p.github} target="_blank" rel="noreferrer" className="link inline-flex items-center gap-1">
            <Github size={13} aria-hidden="true" />
            Source
          </a>
        )}
        <a href={p.live} target="_blank" rel="noreferrer" className="link inline-flex items-center gap-1">
          {host(p.live)}
          <ArrowUpRight size={13} aria-hidden="true" />
        </a>
      </div>
    </div>
    <p className="mt-1 text-[14.5px] text-[var(--text)]">{p.summary}</p>
    <p className="mt-2 text-[13.5px] text-[var(--muted)]">{p.description}</p>
    <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Built with">
      {p.tech.map((t) => (
        <li key={t} className="tag">
          {t}
        </li>
      ))}
    </ul>
  </article>
);

const Row = ({ p, hidden }) => (
  <li hidden={hidden} className="gap-x-6 gap-y-1 border-b border-[var(--line-soft)] py-4 md:grid-cols-[200px_minmax(0,1fr)_auto] md:items-baseline [&:not([hidden])]:grid">
    <h3 className="font-display text-[15.5px] font-semibold text-[var(--text)]">{p.title}</h3>
    <div className="min-w-0">
      <p className="text-[13.5px] text-[var(--text-2)]">{p.summary}</p>
      <p className="mt-1 text-[12.5px] text-[var(--muted)]">
        {p.tech.join(', ')}
        {p.note ? `. ${p.note}.` : ''}
      </p>
    </div>
    <div className="flex items-center gap-4 text-[13px] md:justify-end">
      {p.github && (
        <a href={p.github} target="_blank" rel="noreferrer" className="link" aria-label={`Source, ${p.title} on GitHub`}>
          Source
        </a>
      )}
      {p.live && (
        <a href={p.live} target="_blank" rel="noreferrer" className="link inline-flex items-center gap-1" aria-label={`${p.live.includes('t.me/') ? 'Telegram' : 'Live'}, open ${p.title}`}>
          {p.live.includes('t.me/') ? 'Telegram' : 'Live'}
          <ArrowUpRight size={13} aria-hidden="true" />
        </a>
      )}
    </div>
  </li>
);

const Work = () => {
  const [kind, setKind] = useState('all');
  const [expanded, setExpanded] = useState(false);
  const kinds = Object.keys(KINDS).filter((k) => k === 'all' || rest.some((p) => p.kind === k));
  const shown = kind === 'all' ? rest : rest.filter((p) => p.kind === kind);
  // Every row stays in the DOM (for search engines and find-in-page); long lists are just folded.
  const folded = !expanded && kind === 'all' && shown.length > FOLD;

  return (
    <section id="work" className="section">
      <div className="container-custom">
        <h2 className="section-title">Selected work</h2>
        <p className="section-lede">
          Six products that are live today.
        </p>

        <div className="mt-10 grid gap-x-8 gap-y-12 md:grid-cols-2">
          {featured.map((p, i) => (
            <FeaturedCard key={p.slug} p={p} eager={i < 2} />
          ))}
        </div>

        <div id="projects" className="mt-20">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="section-title">Everything else</h2>
            <div role="tablist" aria-label="Filter projects" className="-mx-1 flex flex-wrap">
              {kinds.map((k) => (
                <button
                  key={k}
                  role="tab"
                  aria-selected={kind === k}
                  onClick={() => setKind(k)}
                  className="mx-1 border-b-2 px-1.5 py-1.5 text-[13px] transition-colors hover:text-[var(--text)]"
                  style={{
                    color: kind === k ? 'var(--text)' : 'var(--muted)',
                    borderColor: kind === k ? 'var(--accent)' : 'transparent',
                  }}
                >
                  {KINDS[k]}
                </button>
              ))}
            </div>
          </div>

          <ul className="mt-6 border-t border-[var(--line)]">
            {shown.map((p, i) => (
              <Row key={p.slug} p={p} hidden={folded && i >= FOLD} />
            ))}
          </ul>

          {folded && (
            <button onClick={() => setExpanded(true)} className="btn-quiet mt-6">
              Show all {shown.length} projects
            </button>
          )}

          <p className="mt-6 text-[13.5px] text-[var(--muted)]">
            More on{' '}
            <a href={SITE.github} target="_blank" rel="noreferrer" className="link">
              GitHub
            </a>
            . Some client work is private and not listed here.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Work;
