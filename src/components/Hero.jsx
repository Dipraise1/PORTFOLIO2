import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code, Terminal, Globe, Cpu, ArrowRight, MessageCircle, Zap, Database, Layers, Building2 } from 'lucide-react';
import useTranslation from '../hooks/useTranslation';

// ─── Typewriter hook ───────────────────────────────────────────────────────────
const useTypewriter = (words, speed = 75, deleteSpeed = 38, pause = 2000) => {
  const [displayText, setDisplayText] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [phase, setPhase] = useState('typing');

  useEffect(() => {
    const word = words[wordIdx % words.length];

    if (phase === 'typing') {
      if (displayText.length < word.length) {
        const t = setTimeout(() => setDisplayText(word.slice(0, displayText.length + 1)), speed);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setPhase('deleting'), pause);
        return () => clearTimeout(t);
      }
    }

    if (phase === 'deleting') {
      if (displayText.length > 0) {
        const t = setTimeout(() => setDisplayText(d => d.slice(0, -1)), deleteSpeed);
        return () => clearTimeout(t);
      } else {
        setWordIdx(i => i + 1);
        setPhase('typing');
      }
    }
  }, [displayText, phase, wordIdx, words, speed, deleteSpeed, pause]);

  return { displayText };
};

// ─── Constants (defined outside component so they never change identity) ──────
const tagVariants = {
  hidden: { opacity: 0, scale: 0.7, y: 10 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 220, damping: 18 } }
};
const tagContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } }
};
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
};
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }
};

const STATS = [
  { label: 'Projects',      value: '17+',      icon: <Layers size={14} /> },
  { label: 'GitHub Repos',  value: '30+',       icon: <Code size={14} /> },
  { label: 'Chains Shipped',value: '5+',        icon: <Database size={14} /> },
  { label: 'Focus',         value: 'Web3 & AI', icon: <Zap size={14} /> },
];

const BADGES = [
  { icon: <Code size={16} />, text: '17+ Projects', pos: 'top-[15%] -left-[10%] lg:-left-[20%]', x: -50 },
  { icon: <Globe size={16} />, text: 'Web3 Expert',  pos: 'top-[45%] -right-[10%] lg:-right-[20%]', x: 50 },
  { icon: <Cpu size={16} />,  text: '5 Chains',     pos: 'bottom-[15%] -left-[10%] lg:-left-[20%]', x: -50 },
];

const ROLES = [
  'Web3 Developer',
  'Blockchain Engineer',
  'Full-Stack Builder',
  'AI & DeFi Dev',
  'Smart Contract Dev',
];

const TECH_STACK = [
  'React', 'Node.js', 'Web3', 'Solidity', 'JavaScript',
  'TypeScript', 'Rust', 'Python', 'Smart Contracts', 'DeFi',
];

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { t } = useTranslation();
  const { displayText } = useTypewriter(ROLES);

  return (
    <section className="relative min-h-[85vh] sm:min-h-screen py-6 sm:py-16 flex items-center" id="about">
      {/* Ambient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-[var(--color-primary)] opacity-[0.04] blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[var(--color-accent)] opacity-[0.035] blur-3xl" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-purple-600 opacity-[0.03] blur-3xl" />
      </div>

      <div className="container-custom">
        <motion.div
          className="grid lg:grid-cols-2 gap-6 lg:gap-16 items-center mt-8 sm:mt-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* ── Left column ─────────────────────────────────────────────────── */}
          <motion.div className="relative z-10 text-center lg:text-left">
            <div className="space-y-5 sm:space-y-6">

              {/* Hello badge */}
              <motion.div
                className="inline-flex items-center gap-2 text-[var(--color-text-secondary)] justify-center lg:justify-start px-4 py-2 rounded-full bg-[var(--color-secondary-lighter)]/50 border border-[var(--color-border)]"
                variants={itemVariants}
              >
                <Terminal className="text-[var(--color-primary)]" size={16} />
                <span className="text-sm font-medium">{t('hero.helloWorld')}</span>
              </motion.div>

              {/* Name + animated role */}
              <motion.div className="space-y-1 sm:space-y-2" variants={itemVariants}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold heading-gradient">
                  Divine
                </h1>
                <a
                  href="https://nexxradigitals.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors text-xs sm:text-sm"
                >
                  <Building2 size={13} />
                  <span>CEO, Nexxra Digitals</span>
                </a>
                <div className="flex items-center gap-2 justify-center lg:justify-start min-h-[2.5rem]">
                  <span className="text-[var(--color-text-secondary)] text-lg sm:text-xl lg:text-2xl font-medium">
                    {displayText}
                  </span>
                  <motion.span
                    className="inline-block w-[2px] h-6 sm:h-7 bg-[var(--color-primary)] rounded-full"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
                  />
                </div>
              </motion.div>

              {/* Description */}
              <motion.p
                className="text-[var(--color-text-secondary)] text-xs sm:text-sm lg:text-base max-w-lg mx-auto lg:mx-0"
                variants={itemVariants}
              >
                {t('hero.description')}
              </motion.p>

              {/* Stats row */}
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-4 gap-2 max-w-lg mx-auto lg:mx-0"
                variants={itemVariants}
              >
                {STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col items-center lg:items-start gap-0.5 px-3 py-2.5 rounded-lg bg-[var(--color-secondary-lighter)]/60 border border-[var(--color-border)]/60"
                  >
                    <div className="flex items-center gap-1 text-[var(--color-primary)] text-xs">
                      {stat.icon}
                      <span className="text-[var(--color-text-muted)] text-[10px]">{stat.label}</span>
                    </div>
                    <span className="text-[var(--color-text)] font-bold text-sm">{stat.value}</span>
                  </div>
                ))}
              </motion.div>

              {/* Tech tags */}
              <motion.div
                className="flex flex-wrap gap-2 justify-center lg:justify-start"
                variants={tagContainer}
                initial="hidden"
                animate="visible"
              >
                {TECH_STACK.map((tech) => (
                  <motion.span
                    key={tech}
                    variants={tagVariants}
                    whileHover={{ scale: 1.08, borderColor: 'var(--color-primary)', color: 'var(--color-primary-lighter)' }}
                    className="px-3 py-1.5 bg-[var(--color-secondary-lighter)]/70 border border-[var(--color-border)] rounded-md text-xs sm:text-sm text-[var(--color-text-secondary)] cursor-default transition-colors"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>

              {/* CTA buttons */}
              <motion.div
                className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
                variants={itemVariants}
              >
                <a href="#projects" className="btn-primary flex items-center gap-2 group w-full sm:w-auto">
                  {t('hero.viewProjects')}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#contact" className="btn-secondary flex items-center gap-2 w-full sm:w-auto">
                  {t('hero.contactMe')}
                </a>
              </motion.div>

              {/* Social links */}
              <motion.div
                className="flex items-center gap-4 justify-center lg:justify-start text-[var(--color-text-secondary)]"
                variants={itemVariants}
              >
                <a href="https://github.com/Dipraise1" target="_blank" rel="noreferrer"
                  className="hover:text-[var(--color-primary)] transition-colors p-2" aria-label="GitHub Profile">
                  <Github size={22} />
                </a>
                <a href="https://t.me/jokersrequired" target="_blank" rel="noreferrer"
                  className="hover:text-[var(--color-primary)] transition-colors p-2" aria-label="Telegram Channel">
                  <MessageCircle size={22} />
                </a>
                <a href="https://divinebuilds.online" target="_blank" rel="noreferrer"
                  className="hover:text-[var(--color-primary)] transition-colors p-2" aria-label="Portfolio Website">
                  <ExternalLink size={22} />
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* ── Right column — image (inlined, never remounts) ───────────────── */}
          <div className="relative z-10 pb-6 sm:pb-0">
            <motion.div
              className="relative w-full max-w-sm sm:max-w-xl lg:max-w-2xl mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Skeleton */}
              <div className={`absolute inset-0 bg-[var(--color-secondary-lighter)] rounded-2xl animate-pulse-soft transition-opacity duration-500 ${imageLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} />

              {/* Photo */}
              <div className="group relative rounded-2xl overflow-hidden border border-[var(--color-border)]/60 hover:scale-[1.02] transition-transform duration-500 aspect-square">
                <img
                  src="/pfp.jpg"
                  alt="Divine - Web3 Developer"
                  className="w-full h-full object-cover object-top block"
                  onLoad={() => setImageLoaded(true)}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-secondary-darker)]/60" />
                <div className="hero-hover-overlay absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-[var(--color-secondary-darker)]/80 via-transparent to-transparent flex items-end justify-center p-6">
                  <div className="text-center translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-[var(--color-text)] text-2xl font-bold mb-1">Web3 Developer</h3>
                    <p className="text-[var(--color-text-secondary)] text-sm">Building the Future of Web3</p>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              {BADGES.map((badge, i) => (
                <motion.div
                  key={i}
                  className={`absolute px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg hidden sm:flex items-center gap-2 z-20 text-xs sm:text-sm backdrop-blur-sm shadow-lg hover:scale-110 transition-transform duration-300 bg-[var(--color-secondary-lighter)]/60 border border-[var(--color-border)]/60 ${badge.pos}`}
                  initial={{ opacity: 0, x: badge.x }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.2 }}
                >
                  <span className="text-[var(--color-primary)]">{badge.icon}</span>
                  <span className="text-[var(--color-text-secondary)] whitespace-nowrap font-medium">{badge.text}</span>
                </motion.div>
              ))}

              {/* Currently building pill */}
              <motion.div
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-20 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-secondary-lighter)] border border-[var(--color-primary)]/40 shadow-lg whitespace-nowrap text-xs"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-[var(--color-text-secondary)]">Building</span>
                <span className="text-[var(--color-primary-lighter)] font-semibold">Engram + Sawa Wallet</span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="hidden sm:flex flex-col items-center gap-2 absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
        >
          <span className="text-[var(--color-text-muted)] text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            className="w-px h-10 bg-gradient-to-b from-[var(--color-primary)] to-transparent"
            animate={{ scaleY: [1, 0.4, 1], opacity: [1, 0.4, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
