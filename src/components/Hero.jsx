import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Github, MessageCircle, ArrowRight, Zap,
  Building2, Code, Database, Layers,
} from 'lucide-react';
import useTranslation from '../hooks/useTranslation';

const XIcon = ({ size = 17 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const TikTokIcon = ({ size = 17 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.19 8.19 0 004.79 1.53V6.77a4.85 4.85 0 01-1.02-.08z" />
  </svg>
);

// ─── Typewriter ─────────────────────────────────────────────────────────────────
const useTypewriter = (words, speed = 72, deleteSpeed = 36, pause = 2200) => {
  const [displayText, setDisplayText] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [phase, setPhase] = useState('typing');

  useEffect(() => {
    const word = words[wordIdx % words.length];
    if (phase === 'typing') {
      if (displayText.length < word.length) {
        const t = setTimeout(() => setDisplayText(word.slice(0, displayText.length + 1)), speed);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setPhase('deleting'), pause);
      return () => clearTimeout(t);
    }
    if (phase === 'deleting') {
      if (displayText.length > 0) {
        const t = setTimeout(() => setDisplayText(d => d.slice(0, -1)), deleteSpeed);
        return () => clearTimeout(t);
      }
      setWordIdx(i => i + 1);
      setPhase('typing');
    }
  }, [displayText, phase, wordIdx, words, speed, deleteSpeed, pause]);

  return { displayText };
};

// ─── Network Canvas ─────────────────────────────────────────────────────────────
const NetworkCanvas = () => {
  const canvasRef = useRef(null);
  const stateRef = useRef({ nodes: [], frame: null, W: 0, H: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const s = stateRef.current;

    const initNodes = (w, h) => {
      s.W = w; s.H = h;
      const count = Math.max(18, Math.min(44, Math.floor((w * h) / 24000)));
      s.nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.2, vy: (Math.random() - 0.5) * 0.2,
        r: Math.random() * 1.3 + 0.6,
        pulse: Math.random() * Math.PI * 2,
        type: Math.random() > 0.6 ? 'hex' : 'dot',
        colIdx: Math.floor(Math.random() * 2),
      }));
    };

    const resize = () => {
      const w = canvas.offsetWidth, h = canvas.offsetHeight;
      if (!w || !h) return;
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.scale(dpr, dpr);
      initNodes(w, h);
    };

    resize();

    const COLS = [[99, 102, 241], [34, 211, 238]];

    const draw = () => {
      const { nodes, W, H } = s;
      if (!W || !H) { s.frame = requestAnimationFrame(draw); return; }
      ctx.clearRect(0, 0, W, H);
      nodes.forEach((n, i) => {
        n.x += n.vx; n.y += n.vy;
        if (n.x < -12) n.x = W + 12; else if (n.x > W + 12) n.x = -12;
        if (n.y < -12) n.y = H + 12; else if (n.y > H + 12) n.y = -12;
        n.pulse += 0.012;
        const col = COLS[n.colIdx];
        for (let j = i + 1; j < nodes.length; j++) {
          const m = nodes[j], dx = n.x - m.x, dy = n.y - m.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 27225) {
            const a = (1 - Math.sqrt(d2) / 165) * 0.062;
            ctx.beginPath(); ctx.moveTo(n.x, n.y); ctx.lineTo(m.x, m.y);
            ctx.strokeStyle = `rgba(99,102,241,${a})`; ctx.lineWidth = 0.4; ctx.stroke();
          }
        }
        const alpha = 0.3 + Math.sin(n.pulse) * 0.12;
        if (n.type === 'hex') {
          const hr = (n.r + Math.sin(n.pulse) * 0.3) * 3.6;
          ctx.beginPath();
          for (let k = 0; k < 6; k++) {
            const a = (k * Math.PI) / 3 - Math.PI / 6;
            k === 0 ? ctx.moveTo(n.x + hr * Math.cos(a), n.y + hr * Math.sin(a))
                    : ctx.lineTo(n.x + hr * Math.cos(a), n.y + hr * Math.sin(a));
          }
          ctx.closePath();
          ctx.strokeStyle = `rgba(${col.join(',')},${alpha})`; ctx.lineWidth = 0.5; ctx.stroke();
        } else {
          const pr = n.r + Math.sin(n.pulse) * 0.28;
          ctx.beginPath(); ctx.arc(n.x, n.y, pr, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${col.join(',')},${alpha + 0.1})`; ctx.fill();
        }
      });
      s.frame = requestAnimationFrame(draw);
    };

    s.frame = requestAnimationFrame(draw);
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    return () => { cancelAnimationFrame(s.frame); ro.disconnect(); };
  }, []);

  return (
    <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.68 }} />
  );
};

// ─── Small chamfered portrait ────────────────────────────────────────────────────
const CLIP = 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))';

const Portrait = ({ size }) => {
  const [loaded, setLoaded] = useState(false);
  const pts = `0,0 ${size - 20},0 ${size},20 ${size},${size} 20,${size} 0,${size - 20}`;
  return (
    <div className="relative flex-shrink-0" style={{ width: size, height: size }}>
      <div className="absolute inset-0 opacity-45" style={{
        clipPath: CLIP,
        background: 'linear-gradient(135deg, rgba(99,102,241,0.7), rgba(34,211,238,0.45))',
        filter: 'blur(10px)', transform: 'scale(1.1)',
      }} />
      {!loaded && (
        <div className="absolute inset-0 animate-pulse-soft" style={{ clipPath: CLIP, background: 'var(--color-secondary-lighter)' }} />
      )}
      <div style={{ clipPath: CLIP, width: '100%', height: '100%' }}>
        <img src="/pfp.jpg" alt="Divine" className="w-full h-full block"
          style={{ objectFit: 'cover', objectPosition: 'top' }}
          onLoad={() => setLoaded(true)} />
      </div>
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox={`0 0 ${size} ${size}`} fill="none">
        <polygon points={pts} stroke="rgba(99,102,241,0.35)" strokeWidth="1.5" fill="none" />
      </svg>
    </div>
  );
};

// ─── Data ────────────────────────────────────────────────────────────────────────
const ROLES = ['Web3 Developer', 'Blockchain Engineer', 'Full-Stack Builder', 'AI & DeFi Dev', 'Smart Contract Dev'];

const STATS = [
  { label: 'Projects', value: '17+', icon: <Layers size={11} /> },
  { label: 'Repos',    value: '30+', icon: <Code size={11} /> },
  { label: 'Chains',   value: '5+',  icon: <Database size={11} /> },
  { label: 'Focus',    value: 'Web3',icon: <Zap size={11} /> },
];

const TECH = [
  'Solidity','React','Node.js','TypeScript','Rust','Python',
  'Web3.js','DeFi','Smart Contracts','Ethereum','Solana','IPFS','GraphQL','Docker','Flutter',
];

const SOCIALS = [
  { href: 'https://github.com/Dipraise1',                                label: 'GitHub',   icon: <Github size={17} /> },
  { href: 'https://x.com/divinecodes11?s=21',                           label: 'X',        icon: <XIcon /> },
  { href: 'https://www.tiktok.com/@divin3.eth?_r=1&_t=ZS-95Sk7mHgmzE', label: 'TikTok',   icon: <TikTokIcon /> },
  { href: 'https://t.me/jokersrequired',                                 label: 'Telegram', icon: <MessageCircle size={17} /> },
];

const containerV = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
};
const itemV = {
  hidden: { y: 14, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

// ─── Hero ────────────────────────────────────────────────────────────────────────
const Hero = () => {
  const { t } = useTranslation();
  const { displayText } = useTypewriter(ROLES);

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex items-center py-8 sm:py-20 overflow-hidden" id="about">
      <NetworkCanvas />

      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/4 w-[580px] h-[580px] rounded-full opacity-[0.04] blur-[120px]"
          style={{ background: 'radial-gradient(circle, #6366f1, transparent 70%)' }} />
        <div className="absolute bottom-10 right-1/3 w-[420px] h-[420px] rounded-full opacity-[0.03] blur-[100px]"
          style={{ background: 'radial-gradient(circle, #22d3ee, transparent 70%)' }} />
      </div>

      <div className="container-custom w-full">
        <motion.div
          className="lg:grid lg:grid-cols-[1fr_220px] lg:gap-16 lg:items-center"
          variants={containerV} initial="hidden" animate="visible"
        >

          {/* ─── Text ──────────────────────────────────────────────────────── */}
          <div className="text-center lg:text-left">

            {/* Greeting */}
            <motion.div
              className="flex items-center gap-2 mb-5 justify-center lg:justify-start"
              variants={itemV}
            >
              <span className="font-ibm text-[var(--color-cyan)] text-sm select-none opacity-80">//</span>
              <span className="font-ibm text-[var(--color-text-muted)] text-sm tracking-wide">
                {t('hero.helloWorld')}
              </span>
            </motion.div>

            {/* Name — full editorial width */}
            <motion.div className="mb-3" variants={itemV}>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <h1
                  className="font-display font-bold leading-[0.84] tracking-tighter heading-gradient"
                  style={{ fontSize: 'clamp(4.2rem, 11.5vw, 9.5rem)' }}
                >
                  DIVINE
                </h1>
                <img
                  src="/pfp.jpg"
                  alt=""
                  aria-hidden="true"
                  className="rounded-full object-cover object-top flex-shrink-0 self-center"
                  style={{
                    width: 'clamp(42px, 5.5vw, 72px)',
                    height: 'clamp(42px, 5.5vw, 72px)',
                    border: '1.5px solid rgba(99,102,241,0.45)',
                    boxShadow: '0 0 12px rgba(99,102,241,0.2)',
                  }}
                />
              </div>
              <a
                href="https://nexxradigitals.com"
                target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-1.5 mt-2 font-ibm text-[var(--color-text-muted)] hover:text-[var(--color-cyan)] transition-colors text-[11px] tracking-wide"
              >
                <Building2 size={11} />
                CEO, Nexxra Digitals
              </a>
            </motion.div>

            {/* Horizontal rule divider */}
            <motion.div className="flex items-center gap-3 mb-5 justify-center lg:justify-start" variants={itemV}>
              <div
                className="h-px flex-1 max-w-[200px]"
                style={{ background: 'linear-gradient(to right, rgba(99,102,241,0.45), transparent)' }}
              />
              <span className="font-ibm text-[9px] tracking-[0.3em] uppercase opacity-40 text-[var(--color-primary)]">WEB3 · AI · BLOCKCHAIN</span>
            </motion.div>

            {/* Role typewriter */}
            <motion.div
              className="flex items-center gap-2 justify-center lg:justify-start mb-6 min-h-[1.75rem]"
              variants={itemV}
            >
              <span className="font-ibm text-[var(--color-cyan)] select-none text-sm">›</span>
              <span className="font-ibm text-[var(--color-text-secondary)] text-sm sm:text-base tracking-wide">
                {displayText}
              </span>
              <motion.span
                className="inline-block w-[2px] h-4 sm:h-5 rounded-full flex-shrink-0"
                style={{ background: 'var(--color-cyan)' }}
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.78, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>

            {/* Bio */}
            <motion.p
              className="text-[var(--color-text-secondary)] text-xs sm:text-sm leading-relaxed mb-5 max-w-sm mx-auto lg:mx-0"
              variants={itemV}
            >
              {t('hero.description')}
            </motion.p>

            {/* Stats — inline strip with dividers */}
            <motion.div
              className="flex items-center justify-center lg:justify-start mb-6"
              style={{ borderLeft: '2px solid rgba(99,102,241,0.3)' }}
              variants={itemV}
            >
              {STATS.map((s, i) => (
                <div key={s.label} className="flex flex-col items-center lg:items-start px-3 sm:px-4 first:pl-3"
                  style={i > 0 ? { borderLeft: '1px solid rgba(55,65,81,0.45)' } : {}}>
                  <span className="font-display font-bold text-[var(--color-text)] text-base sm:text-lg leading-none">
                    {s.value}
                  </span>
                  <span className="font-ibm text-[var(--color-text-muted)] text-[8px] uppercase tracking-widest mt-1">
                    {s.label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Tech marquee */}
            <motion.div className="relative mb-6 overflow-hidden" variants={itemV}>
              <div className="absolute left-0 top-0 bottom-0 w-8 z-10 pointer-events-none"
                style={{ background: 'linear-gradient(to right, var(--color-background), transparent)' }} />
              <div className="absolute right-0 top-0 bottom-0 w-8 z-10 pointer-events-none"
                style={{ background: 'linear-gradient(to left, var(--color-background), transparent)' }} />
              <div className="flex gap-1.5 animate-tech-scroll">
                {[...TECH, ...TECH].map((tech, i) => (
                  <span key={i} className="inline-flex items-center flex-shrink-0 px-2 py-1 rounded font-ibm text-[9px] uppercase tracking-widest"
                    style={{ background: 'rgba(22,27,34,0.85)', border: '1px solid rgba(55,65,81,0.45)', color: 'var(--color-text-muted)' }}>
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start mb-5"
              variants={itemV}
            >
              <a href="#projects" className="btn-primary flex items-center gap-2 group w-full sm:w-auto justify-center">
                {t('hero.viewProjects')}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="btn-secondary flex items-center gap-2 w-full sm:w-auto justify-center">
                {t('hero.contactMe')}
              </a>
            </motion.div>

            {/* Socials + live status */}
            <motion.div
              className="flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start"
              variants={itemV}
            >
              <div className="flex items-center gap-0.5">
                {SOCIALS.map(({ href, label, icon }) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                    className="p-2 rounded-lg text-[var(--color-text-muted)] hover:text-[var(--color-primary-lighter)] hover:bg-[rgba(99,102,241,0.07)] transition-all duration-200">
                    {icon}
                  </a>
                ))}
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full"
                style={{ background: 'rgba(22,27,34,0.8)', border: '1px solid rgba(99,102,241,0.18)' }}>
                <span className="relative flex h-1.5 w-1.5 flex-shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                </span>
                <span className="font-ibm text-[var(--color-text-muted)] text-[10px]">Building</span>
                <span className="font-ibm text-[var(--color-primary-lighter)] text-[10px] font-medium">Engram + Sawa Wallet</span>
              </div>
            </motion.div>
          </div>

          {/* ─── Desktop portrait panel ──────────────────────────────────── */}
          <motion.div
            className="hidden lg:flex items-center justify-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative flex flex-col items-center" style={{ padding: '32px 24px' }}>
              {/* Corner brackets */}
              <span className="absolute top-0 left-0 w-5 h-5" style={{ borderTop: '1px solid rgba(99,102,241,0.4)', borderLeft: '1px solid rgba(99,102,241,0.4)' }} />
              <span className="absolute top-0 right-0 w-5 h-5" style={{ borderTop: '1px solid rgba(99,102,241,0.4)', borderRight: '1px solid rgba(99,102,241,0.4)' }} />
              <span className="absolute bottom-0 left-0 w-5 h-5" style={{ borderBottom: '1px solid rgba(99,102,241,0.4)', borderLeft: '1px solid rgba(99,102,241,0.4)' }} />
              <span className="absolute bottom-0 right-0 w-5 h-5" style={{ borderBottom: '1px solid rgba(99,102,241,0.4)', borderRight: '1px solid rgba(99,102,241,0.4)' }} />

              {/* Top label */}
              <div
                className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-2 py-0.5 font-ibm text-[8px] uppercase tracking-[0.2em] whitespace-nowrap"
                style={{ background: 'var(--color-background)', color: 'var(--color-cyan)', border: '1px solid rgba(34,211,238,0.22)', borderRadius: 3 }}
              >
                PRAISE.ETH
              </div>

              <Portrait size={118} />

              {/* Availability */}
              <div className="mt-4 flex items-center gap-1.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                </span>
                <span className="font-ibm text-[9px] uppercase tracking-widest text-[var(--color-text-muted)]">Available</span>
              </div>

              {/* Tech chips */}
              <div className="mt-5 flex flex-col items-stretch gap-1.5 w-full">
                {[
                  ['Solidity', 'rgba(99,102,241,0.1)', '#a5b4fc', 'rgba(99,102,241,0.22)'],
                  ['React',    'rgba(34,211,238,0.07)', '#67e8f9', 'rgba(34,211,238,0.18)'],
                  ['Web3.js',  'rgba(99,102,241,0.1)', '#a5b4fc', 'rgba(99,102,241,0.22)'],
                ].map(([tech, bg, color, border]) => (
                  <span key={tech}
                    className="font-ibm text-[8px] uppercase tracking-wider px-2 py-1 rounded text-center"
                    style={{ background: bg, color, border: `1px solid ${border}` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          className="hidden sm:flex flex-col items-center gap-2 absolute bottom-6 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2, duration: 0.6 }}
        >
          <span className="font-ibm text-[var(--color-text-muted)] text-[9px] tracking-[0.35em] uppercase">scroll</span>
          <motion.div className="w-px h-8"
            style={{ background: 'linear-gradient(to bottom, var(--color-primary), transparent)' }}
            animate={{ scaleY: [1, 0.3, 1], opacity: [0.8, 0.25, 0.8] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
