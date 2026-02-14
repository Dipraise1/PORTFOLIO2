import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code, Github, Mail, Terminal, Gamepad2, FileText } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import useTranslation from '../hooks/useTranslation';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, language, isAutoDetected, isLoading } = useTranslation();

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Animation variants
  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeOut'
      }
    })
  };

  const navItems = [
    { name: t('nav.about'), icon: <Terminal size={16} /> },
    { name: t('nav.projects'), icon: <Code size={16} /> },
    { name: t('nav.resume'), icon: <FileText size={16} /> },
    { name: t('nav.game'), icon: <Gamepad2 size={16} /> },
    { name: t('nav.contact'), icon: <Mail size={16} /> },
    { name: t('nav.github'), icon: <Github size={16} />, external: true, href: 'https://github.com/Dipraise1' }
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 ${
        scrolled 
          ? 'bg-[var(--color-secondary-darker)]/90 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      } transition-all duration-300`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <motion.a 
            href="/" 
            className="text-xl sm:text-2xl font-bold heading-gradient"
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
                target={item.external ? "_blank" : "_self"}
                rel={item.external ? "noreferrer" : ""}
                className="flex items-center gap-1.5 text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors duration-300
                         px-4 py-2 rounded-lg hover:bg-[var(--color-secondary-lighter)]/70 text-sm font-medium"
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
                <div className="text-xs text-[var(--color-text-secondary)] hidden sm:block flex items-center gap-1">
                  {isLoading ? (
                    <>
                      <div className="w-2 h-2 border border-[var(--color-primary)] border-t-transparent rounded-full animate-spin"></div>
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

          {/* Mobile Menu Button */}
          <motion.button 
            onClick={toggleMenu} 
            className="flex md:hidden text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors duration-300 
                     focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded-lg p-2"
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden absolute left-0 right-0 px-4"
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="card p-4 space-y-1 mb-4">
                {navItems.map((item, i) => (
                  <motion.a
                    key={item.name}
                    href={item.external ? item.href : `#${item.name.toLowerCase()}`}
                    target={item.external ? "_blank" : "_self"}
                    rel={item.external ? "noreferrer" : ""}
                    className="flex items-center gap-2 px-4 py-3 rounded-lg text-[var(--color-text-secondary)]
                              hover:text-[var(--color-primary)] hover:bg-[var(--color-secondary-darker)]/70 
                              transition-all duration-300 font-medium"
                    onClick={() => !item.external && setIsOpen(false)}
                    custom={i}
                    variants={navItemVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {item.icon}
                    {item.name}
                  </motion.a>
                ))}
                
                <div className="mt-3 space-y-2">
                  <LanguageSwitcher />
                  <motion.a
                    href="#contact"
                    className="btn-primary w-full flex justify-center items-center"
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
      </div>
    </motion.header>
  );
};

export default Header;
