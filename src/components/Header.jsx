import { useState, useEffect } from 'react';
import { Menu, X, Github } from 'lucide-react';
import { SITE } from '../data/site';

const NAV = [
  { name: 'Work', id: 'work' },
  { name: 'Experience', id: 'experience' },
  { name: 'Clients', id: 'clients' },
  { name: 'Contact', id: 'contact' },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const els = NAV.map((n) => document.getElementById(n.id)).filter(Boolean);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-colors duration-200"
      style={{
        background: scrolled || open ? 'rgba(12,10,15,0.88)' : 'transparent',
        backdropFilter: scrolled || open ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled || open ? 'blur(16px)' : 'none',
        borderBottom: `1px solid ${scrolled ? 'var(--line-soft)' : 'transparent'}`,
      }}
    >
      <div className="container-custom flex h-[60px] items-center justify-between">
        <a href="/" className="font-display text-[15px] font-bold tracking-tight text-[var(--text)]">
          Praise.eth
        </a>

        <nav aria-label="Main" className="hidden items-center gap-7 md:flex">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={active === item.id ? 'true' : undefined}
              className="text-[13px] transition-colors hover:text-[var(--text)]"
              style={{ color: active === item.id ? 'var(--text)' : 'var(--muted)' }}
            >
              {item.name}
            </a>
          ))}
          <a
            href={SITE.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-[var(--muted)] transition-colors hover:text-[var(--text)]"
          >
            <Github size={17} />
          </a>
          <a href="#contact" className="btn-primary !px-3.5 !py-2">
            Hire me
          </a>
        </nav>

        <button
          onClick={() => setOpen((o) => !o)}
          className="-mr-2 p-2 text-[var(--text)] md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav
          aria-label="Mobile"
          className="container-custom flex h-[calc(100dvh-60px)] flex-col pb-8 pt-4 md:hidden"
        >
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className="border-b border-[var(--line-soft)] py-4 font-display text-2xl font-semibold text-[var(--text)]"
            >
              {item.name}
            </a>
          ))}
          <a
            href={SITE.github}
            target="_blank"
            rel="noreferrer"
            className="border-b border-[var(--line-soft)] py-4 font-display text-2xl font-semibold text-[var(--text)]"
          >
            GitHub
          </a>
          <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-auto w-full !py-3.5 !text-sm">
            Hire me
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
