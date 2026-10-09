import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code, Github, Mail, Terminal, FileText } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import useTranslation from '../hooks/useTranslation';

const Header = () => {
  const [isOpen, setIsOpen]       = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const [active, setActive]       = useState('about');
  const { t, language, isAutoDetected, isLoading } = useTranslation();

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Active section tracker
  useEffect(() => {
    const ids = ['about', 'projects', 'resume', 'testimonials', 'contact'];
    const observers = ids.map(id => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { threshold: 0.25 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach(o => o?.disconnect());
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const navItems = [
    { name: t('nav.about'),    id: 'about',    icon: <Terminal size={18} /> },
    { name: t('nav.projects'), id: 'projects', icon: <Code size={18} /> },
    { name: t('nav.resume'),   id: 'resume',   icon: <FileText size={18} /> },
    { name: t('nav.contact'),  id: 'contact',  icon: <Mail size={18} /> },
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(12,10,15,0.82)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(55,65,81,0.25)' : '1px solid transparent',
      }}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-14 sm:h-[58px]">

          {/* ── Logo ── */}
          <a
            href="/"
            className="font-display font-bold heading-gradient relative z-[60] flex-shrink-0"
            style={{ fontSize: '0.95rem', letterSpacing: '-0.01em' }}
          >
            PRAISE.ETH
          </a>

          {/* ── Desktop nav (centered) ── */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = active === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="relative px-3 py-1.5 font-ibm text-[9px] uppercase tracking-[0.2em] transition-colors duration-200"
                  style={{ color: isActive ? 'var(--color-text)' : 'var(--color-text-muted)' }}
                  onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = 'var(--color-text)'; }}
                  onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = 'var(--color-text-muted)'; }}
                >
                  {item.name}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-3 right-3 h-px"
                      style={{ background: 'var(--color-primary)' }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}

            {/* Vertical divider */}
            <span className="w-px h-4 mx-2" style={{ background: 'rgba(55,65,81,0.5)' }} />

            {/* GitHub icon */}
            <a
              href="https://github.com/Dipraise1"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg transition-all duration-200"
              style={{ color: 'var(--color-text-muted)' }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--color-text)'; e.currentTarget.style.background = 'rgba(55,65,81,0.2)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--color-text-muted)'; e.currentTarget.style.background = 'transparent'; }}
            >
              <Github size={16} />
            </a>

            {/* Language switcher */}
            {isAutoDetected && (
              <span className="font-ibm text-[9px] text-[var(--color-text-muted)] hidden lg:flex items-center gap-1 ml-1">
                {isLoading
                  ? <><span className="w-1.5 h-1.5 border border-[var(--color-primary)] border-t-transparent rounded-full animate-spin inline-block" /> Translating...</>
                  : `Auto · ${language.toUpperCase()}`
                }
              </span>
            )}
            <LanguageSwitcher />

            {/* Hire Me CTA */}
            <motion.a
              href="#contact"
              className="ml-2 font-ibm text-[10px] uppercase tracking-[0.18em] px-4 py-2 rounded-lg flex-shrink-0"
              style={{
                background: 'rgba(99,102,241,0.12)',
                border: '1px solid rgba(99,102,241,0.35)',
                color: 'var(--color-primary-lighter)',
                fontSize: '9px',
                padding: '5px 12px',
              }}
              whileHover={{ background: 'rgba(99,102,241,0.22)', borderColor: 'rgba(99,102,241,0.6)' }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              {t('nav.hireMe')}
            </motion.a>
          </nav>

          {/* ── Mobile hamburger ── */}
          <motion.button
            onClick={() => setIsOpen(o => !o)}
            className="flex md:hidden relative z-[60] p-2 rounded-lg transition-colors"
            style={{ color: 'var(--color-text)' }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.span key="x"
                  initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X size={22} />
                </motion.span>
              ) : (
                <motion.span key="menu"
                  initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu size={22} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* ── Mobile overlay ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col md:hidden"
            style={{ background: 'var(--color-background)' }}
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="flex flex-col h-full pt-20 px-6 pb-8 overflow-y-auto">
              <nav className="flex flex-col gap-1 flex-1">
                {[...navItems, { name: t('nav.github'), id: 'github', icon: <Github size={18} />, href: 'https://github.com/Dipraise1', external: true }].map((item, i) => (
                  <motion.a
                    key={item.id}
                    href={item.external ? item.href : `#${item.id}`}
                    target={item.external ? '_blank' : '_self'}
                    rel={item.external ? 'noreferrer' : ''}
                    className="flex items-center gap-4 px-4 py-4 rounded-xl transition-all duration-200 text-lg font-medium"
                    style={{
                      color: active === item.id ? 'var(--color-text)' : 'var(--color-text-secondary)',
                      border: '1px solid transparent',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(55,65,81,0.15)'; e.currentTarget.style.borderColor = 'rgba(55,65,81,0.3)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'transparent'; }}
                    onClick={() => !item.external && setIsOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0, transition: { delay: i * 0.07 } }}
                  >
                    <span style={{ color: 'var(--color-primary)' }}>{item.icon}</span>
                    {item.name}
                  </motion.a>
                ))}
              </nav>

              <div className="mt-6 space-y-3">
                <LanguageSwitcher />
                <motion.a
                  href="#contact"
                  className="btn-primary w-full flex justify-center items-center py-3 text-base"
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { delay: 0.35 } }}
                >
                  {t('nav.hireMe')}
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
