import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code, Github, Mail, Terminal, FileText } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import useTranslation from '../hooks/useTranslation';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, language, isAutoDetected, isLoading } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const navItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.07, duration: 0.35, ease: 'easeOut' }
    }),
    exit: { opacity: 0, x: -20 }
  };

  const navItems = [
    { name: t('nav.about'),    icon: <Terminal size={18} /> },
    { name: t('nav.projects'), icon: <Code size={18} /> },
    { name: t('nav.resume'),   icon: <FileText size={18} /> },
    { name: t('nav.contact'),  icon: <Mail size={18} /> },
    { name: t('nav.github'),   icon: <Github size={18} />, external: true, href: 'https://github.com/Dipraise1' }
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[var(--color-secondary-darker)]/90 backdrop-blur-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <motion.a
            href="/"
            className="text-lg sm:text-xl font-bold heading-gradient relative z-[60]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            PRAISE.ETH
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.external ? item.href : `#${item.name.toLowerCase()}`}
                target={item.external ? '_blank' : '_self'}
                rel={item.external ? 'noreferrer' : ''}
                className="flex items-center gap-1.5 text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-[var(--color-secondary-lighter)]/70 text-sm font-medium"
                custom={i}
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.icon}
                {item.name}
              </motion.a>
            ))}
            <div className="flex items-center gap-2">
              {isAutoDetected && (
                <div className="text-xs text-[var(--color-text-secondary)] hidden sm:flex items-center gap-1">
                  {isLoading ? (
                    <>
                      <div className="w-2 h-2 border border-[var(--color-primary)] border-t-transparent rounded-full animate-spin" />
                      Translating...
                    </>
                  ) : (
                    `Auto-translated to ${language.toUpperCase()}`
                  )}
                </div>
              )}
              <LanguageSwitcher />
            </div>
            <motion.a
              href="#contact"
              className="btn-primary ml-2 py-2 text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              {t('nav.hireMe')}
            </motion.a>
          </div>

          {/* Mobile hamburger — always on top */}
          <motion.button
            onClick={() => setIsOpen(o => !o)}
            className="flex md:hidden relative z-[60] text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded-lg p-2"
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X size={24} />
                </motion.span>
              ) : (
                <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu size={24} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col md:hidden bg-[var(--color-background)]"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {/* Inner scroll area with top padding for the header bar */}
            <div className="flex flex-col h-full pt-20 px-6 pb-8 overflow-y-auto">
              <nav className="flex flex-col gap-1 flex-1">
                {navItems.map((item, i) => (
                  <motion.a
                    key={item.name}
                    href={item.external ? item.href : `#${item.name.toLowerCase()}`}
                    target={item.external ? '_blank' : '_self'}
                    rel={item.external ? 'noreferrer' : ''}
                    className="flex items-center gap-4 px-4 py-4 rounded-xl text-[var(--color-text)] hover:text-[var(--color-primary)] hover:bg-[var(--color-secondary-lighter)]/60 transition-all duration-200 text-lg font-medium border border-transparent hover:border-[var(--color-border)]/40"
                    onClick={() => !item.external && setIsOpen(false)}
                    custom={i}
                    variants={navItemVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <span className="text-[var(--color-primary)]">{item.icon}</span>
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
                  custom={navItems.length}
                  variants={navItemVariants}
                  initial="hidden"
                  animate="visible"
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
