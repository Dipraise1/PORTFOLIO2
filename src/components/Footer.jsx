import { Github, Mail, ArrowUp } from 'lucide-react';
import { XIcon, TikTokIcon, TelegramIcon } from './icons';
import { SITE } from '../data/site';

const SOCIALS = [
  { icon: <Github size={16} />, href: SITE.github, label: 'GitHub' },
  { icon: <XIcon size={15} />, href: SITE.xHref, label: 'X' },
  { icon: <TelegramIcon size={16} />, href: SITE.telegramHref, label: 'Telegram' },
  { icon: <TikTokIcon size={15} />, href: SITE.tiktok, label: 'TikTok' },
  { icon: <Mail size={16} />, href: `mailto:${SITE.email}`, label: 'Email' },
];

const LINKS = [
  { name: 'Work', href: '/#work' },
  { name: 'Experience', href: '/#experience' },
  { name: 'Contact', href: '/#contact' },
  { name: 'CV', href: '/cv' },
  { name: 'Nexxra Digitals', href: SITE.nexxra, external: true },
];

const Footer = () => (
  <footer className="border-t border-[var(--line-soft)] py-10">
    <div className="container-custom">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-sm">
          <p className="font-display text-lg font-bold text-[var(--text)]">Praise.eth</p>
          <p className="mt-1 text-[13.5px] text-[var(--muted)]">
            {SITE.name}. Wallets, smart contracts, trading engines and apps, built from{' '}
            {SITE.location}.
          </p>
          <div className="-ml-2.5 mt-3 flex items-center">
            {SOCIALS.map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-md text-[var(--muted)] transition-colors hover:text-[var(--text)]"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-7 gap-y-2 text-[13.5px]">
          {LINKS.map(({ name, href, external }) => (
            <a
              key={name}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              className="text-[var(--muted)] transition-colors hover:text-[var(--text)]"
            >
              {name}
            </a>
          ))}
        </nav>
      </div>

      <div className="mt-8 flex items-center justify-between border-t border-[var(--line-soft)] pt-5">
        <p className="text-[12.5px] text-[var(--muted)]">
          © {new Date().getFullYear()} {SITE.name}
        </p>
        <a
          href="#about"
          aria-label="Back to top"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-[var(--muted)] transition-colors hover:text-[var(--text)]"
        >
          <ArrowUp size={16} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
