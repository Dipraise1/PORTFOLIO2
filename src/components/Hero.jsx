import { ArrowRight, Github, Mail, MapPin } from 'lucide-react';
import { XIcon, TikTokIcon, TelegramIcon } from './icons';
import { SITE, NOW } from '../data/site';
import { projects } from '../data/projects';

const SOCIALS = [
  { href: SITE.github, label: 'GitHub', icon: <Github size={16} /> },
  { href: SITE.xHref, label: 'X', icon: <XIcon size={15} /> },
  { href: SITE.telegramHref, label: 'Telegram', icon: <TelegramIcon size={16} /> },
  { href: SITE.tiktok, label: 'TikTok', icon: <TikTokIcon size={15} /> },
];

const liveCount = projects.filter((p) => p.live).length;

const FACTS = [
  [`${projects.length}`, 'projects shipped'],
  [`${liveCount}`, 'live right now'],
  ['10+', 'chains built on'],
];

const Hero = () => (
  <section id="about" className="pt-[60px]">
    <div className="container-custom py-10 sm:py-14 lg:py-16">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-14">
        <div className="min-w-0">
          <div className="flex items-center gap-4">
            <img
              src="/pfp.jpg"
              alt="Divine Rapheal"
              width="64"
              height="80"
              className="h-20 w-16 shrink-0 rounded-md object-cover object-top"
            />
            <div className="min-w-0">
              <p className="font-display text-lg font-semibold leading-tight text-[var(--text)]">
                {SITE.name}
              </p>
              <p className="text-[13px] text-[var(--muted)]">
                {SITE.handle}, {SITE.role.toLowerCase()}
              </p>
              <p className="mt-0.5 flex items-center gap-1.5 text-[13px] text-[var(--muted)]">
                <MapPin size={13} aria-hidden="true" />
                {SITE.location}
              </p>
            </div>
          </div>

          <h1
            className="mt-8 max-w-[16ch] font-display font-semibold leading-[1.02] text-[var(--text)]"
            style={{ fontSize: 'clamp(2.3rem, 6.6vw, 4.4rem)' }}
          >
            Useful crypto products, built close to the metal.
          </h1>

          <p className="mt-6 max-w-[62ch] text-[14.5px] leading-7 text-[var(--text-2)]">
            I build wallets, smart contracts, trading engines and the React and React Native
            interfaces on top of them. Founder of{' '}
            <a className="link" href="https://sawawallet.org" target="_blank" rel="noreferrer">
              Sawa Wallet
            </a>{' '}
            and{' '}
            <a className="link" href={SITE.nexxra} target="_blank" rel="noreferrer">
              Nexxra Digitals
            </a>
            , working with crypto teams that need practical products, not pitch decks.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#work" className="btn-primary group">
              See the work
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#contact" className="btn-quiet">
              <Mail size={14} />
              Start a project
            </a>
            <div className="flex items-center gap-1 sm:ml-2">
              {SOCIALS.map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md text-[var(--muted)] transition-colors hover:bg-white/[0.06] hover:text-[var(--text)]"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <dl className="mt-10 grid max-w-xl grid-cols-3 border-t border-[var(--line)]">
            {FACTS.map(([value, label]) => (
              <div key={label} className="pr-3 pt-4">
                <dd className="font-display text-2xl font-semibold leading-none text-[var(--text)] sm:text-3xl">
                  {value}
                </dd>
                <dt className="mt-1.5 text-[12.5px] leading-snug text-[var(--muted)]">{label}</dt>
              </div>
            ))}
          </dl>
        </div>

        <aside className="self-start border-t border-[var(--line)] pt-5 lg:mt-2">
          <h2 className="font-display text-[15px] font-semibold text-[var(--text)]">Now building</h2>
          <dl className="mt-4 space-y-4">
            {NOW.map(([label, value]) => (
              <div key={label}>
                <dt className="label">{label}</dt>
                <dd className="text-[13.5px] text-[var(--text-2)]">{value}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-6 border-t border-[var(--line-soft)] pt-5">
            <h2 className="font-display text-[15px] font-semibold text-[var(--text)]">Open to new work</h2>
            <p className="mt-2 text-[13.5px] text-[var(--text-2)]">
              Best brief: a clear user flow, a real deadline, the contract surface, and the smallest
              version worth shipping.
            </p>
          </div>
        </aside>
      </div>
    </div>
  </section>
);

export default Hero;
