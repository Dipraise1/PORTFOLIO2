import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Github,
  Mail,
  MessageCircle,
  Radio,
} from 'lucide-react';
import useTranslation from '../hooks/useTranslation';

const XIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const TikTokIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.19 8.19 0 004.79 1.53V6.77a4.85 4.85 0 01-1.02-.08z" />
  </svg>
);

const SOCIALS = [
  { href: 'https://github.com/Dipraise1', label: 'GitHub', icon: <Github size={15} /> },
  { href: 'https://x.com/divinecodes11?s=21', label: 'X', icon: <XIcon /> },
  { href: 'https://www.tiktok.com/@divin3.eth?_r=1&_t=ZS-95Sk7mHgmzE', label: 'TikTok', icon: <TikTokIcon /> },
  { href: 'https://t.me/jokersrequired', label: 'Telegram', icon: <MessageCircle size={15} /> },
];

const STATS = [
  ['17+', 'projects'],
  ['30+', 'repos'],
  ['5+', 'chains'],
];

const WORK = [
  {
    id: '01',
    name: 'Sawa Wallet',
    type: 'mobile wallet',
    detail: 'USDC sends by phone number',
    href: 'https://sawawallet.org',
  },
  {
    id: '02',
    name: 'Engram',
    type: 'ai infra',
    detail: 'decentralized vector memory',
    href: 'https://theengram.space',
  },
  {
    id: '03',
    name: 'Nexxra Digitals',
    type: 'studio',
    detail: 'client product builds',
    href: 'https://nexxradigitals.com',
  },
];

const NOW = [
  ['wallet rails', 'Solana, Base, Polygon'],
  ['contract work', 'escrow, keepers, DeFi checks'],
  ['automation', 'Telegram bots, trading tools, alerts'],
  ['interfaces', 'React, React Native, TypeScript'],
];

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="relative overflow-hidden border-b border-white/[0.06]"
      style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.025), rgba(255,255,255,0) 70%)' }}
    >
      <div className="container-custom">
        <div className="mx-auto max-w-[366px] py-7 sm:max-w-none sm:py-9 lg:py-11">
          <div className="grid min-w-0 gap-4 lg:grid-cols-[minmax(0,1fr)_320px]">
            <div className="min-w-0 border-y border-white/10">
              <div className="grid min-w-0 lg:grid-cols-[168px_minmax(0,1fr)]">
                <aside className="border-b border-white/10 p-4 lg:border-b-0 lg:border-r">
                  <div className="flex items-center gap-3 lg:block">
                    <img
                      src="/pfp.jpg"
                      alt="Divine Rapheal"
                      className="h-20 w-16 shrink-0 rounded-sm border border-white/10 object-cover object-top lg:h-[138px] lg:w-full"
                    />
                    <div className="min-w-0 lg:mt-4">
                      <p className="font-display text-base font-semibold leading-none text-[var(--color-text)]">
                        Praise.eth
                      </p>
                      <p className="mt-1.5 font-ibm text-[9px] uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
                        Divine Rapheal
                      </p>
                      <a
                        href="https://nexxradigitals.com"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-3 inline-flex items-center gap-1.5 font-ibm text-[9px] uppercase tracking-[0.14em] text-[var(--color-primary-lighter)] transition-colors hover:text-white"
                      >
                        <Building2 size={11} />
                        Nexxra
                      </a>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {SOCIALS.map(({ href, label, icon }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={label}
                        className="inline-flex h-7 w-7 items-center justify-center rounded border border-white/10 bg-white/[0.025] text-[var(--color-text-muted)] transition-colors hover:border-white/20 hover:text-white"
                      >
                        {icon}
                      </a>
                    ))}
                  </div>
                </aside>

                <div className="min-w-0 p-4 sm:p-5 lg:p-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-ibm text-[9px] uppercase tracking-[0.22em] text-[var(--color-text-muted)]">
                      web3 product engineer
                    </span>
                    <span className="h-px w-7 bg-white/15" />
                    <span className="font-ibm text-[9px] uppercase tracking-[0.18em] text-[var(--color-primary-lighter)]">
                      shipping wallets / bots / contracts
                    </span>
                  </div>

                  <h1
                    className="mt-4 max-w-3xl font-display font-semibold leading-[1.04] text-[var(--color-text)]"
                    style={{ fontSize: 'clamp(1.45rem, 6vw, 2.65rem)' }}
                  >
                    Useful crypto products, built close to the metal.
                  </h1>

                  <p className="mt-4 max-w-2xl font-ibm text-xs leading-6 text-[var(--color-text-secondary)] sm:text-[13px]">
                    {t('hero.description')}
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-2">
                    <a
                      href="#projects"
                      className="group inline-flex items-center gap-2 rounded bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-darker)] px-3.5 py-2 font-ibm text-[13px] font-semibold text-white transition-transform hover:-translate-y-0.5"
                    >
                      {t('hero.viewProjects')}
                      <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </a>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 rounded border border-white/12 bg-white/[0.025] px-3.5 py-2 font-ibm text-[13px] font-semibold text-[var(--color-text)] transition-colors hover:border-[rgba(165,180,252,0.45)] hover:text-[var(--color-primary-lighter)]"
                    >
                      <Mail size={13} />
                      {t('hero.contactMe')}
                    </a>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-[repeat(3,minmax(0,1fr))] border-t border-white/10">
                {STATS.map(([value, label]) => (
                  <div key={label} className="min-w-0 border-r border-white/10 px-3 py-3 last:border-r-0 sm:px-4">
                    <p className="font-display text-lg font-semibold leading-none text-[var(--color-text)]">{value}</p>
                    <p className="mt-1 font-ibm text-[9px] uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
                      {label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-[repeat(2,minmax(0,1fr))] border-t border-white/10 min-[520px]:grid-cols-[repeat(3,minmax(0,1fr))] sm:block">
                {WORK.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group relative flex min-h-[114px] min-w-0 flex-col justify-between border-r border-b border-white/10 px-3 py-3 even:border-r-0 last:border-b-0 sm:grid sm:min-h-0 sm:grid-cols-[42px_120px_minmax(0,1fr)_auto] sm:items-center sm:gap-2 sm:border-r-0 sm:border-b sm:px-4 sm:last:border-b-0"
                  >
                    <span className="font-ibm text-[9px] text-[var(--color-primary-lighter)] sm:block">{item.id}</span>
                    <span className="mt-2 min-w-0 break-words font-ibm text-[8px] uppercase tracking-[0.14em] text-[var(--color-text-muted)] sm:mt-0 sm:text-[9px] sm:tracking-[0.16em]">
                      {item.type}
                    </span>
                    <span className="mt-3 block min-w-0 sm:mt-0">
                      <span className="block break-words font-display text-[13px] font-semibold leading-tight text-[var(--color-text)] sm:text-sm">
                        {item.name}
                      </span>
                      <span className="mt-1 block break-words font-ibm text-[11px] leading-4 text-[var(--color-text-muted)] sm:text-xs">
                        {item.detail}
                      </span>
                    </span>
                    <ArrowUpRight
                      size={13}
                      className="absolute right-3 top-3 text-[var(--color-text-muted)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--color-primary-lighter)] sm:static sm:block"
                    />
                  </a>
                ))}
              </div>
            </div>

            <aside className="border-y border-white/10 p-4 lg:p-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="font-ibm text-[9px] uppercase tracking-[0.22em] text-[var(--color-text-muted)]">
                  now building
                </span>
                <span className="inline-flex items-center gap-1.5 font-ibm text-[9px] uppercase tracking-[0.14em] text-[var(--color-primary-lighter)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]" />
                  open
                </span>
              </div>

              <div className="mt-4 space-y-4">
                {NOW.map(([label, value]) => (
                  <div key={label} className="grid grid-cols-[18px_minmax(0,1fr)] gap-3">
                    <Radio size={13} className="mt-0.5 text-[var(--color-primary-lighter)]" />
                    <div>
                      <p className="font-ibm text-[9px] uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
                        {label}
                      </p>
                      <p className="mt-1 font-ibm text-xs leading-5 text-[var(--color-text-secondary)]">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 border-t border-white/10 pt-4">
                <p className="font-ibm text-[9px] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                  preferred brief
                </p>
                <p className="mt-2 font-ibm text-xs leading-5 text-[var(--color-text-secondary)]">
                  Clear user flow, real deadline, contract surface, and the smallest shippable version.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
