import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* eslint-disable react/prop-types */

const STEPS = [
  { progress: 15,  cmd: 'initializing_portfolio',      out: 'Environment ready' },
  { progress: 30,  cmd: 'loading_web3_modules',         out: 'Solana · EVM · Bittensor' },
  { progress: 50,  cmd: 'compiling_smart_contracts',    out: 'Rust + Solidity compiled' },
  { progress: 68,  cmd: 'fetching_project_data',        out: '17 projects indexed' },
  { progress: 84,  cmd: 'connecting_blockchain_nodes',  out: '5 chains online' },
  { progress: 100, cmd: 'launching_experience',         out: 'Welcome — PRAISE.ETH' },
];

const LoadingScreen = ({ isLoading, onComplete }) => {
  const [progress, setProgress]   = useState(0);
  const [stepIdx, setStepIdx]     = useState(-1);   // which step is "active"
  const [lines, setLines]         = useState([]);    // completed terminal lines
  const [cursorOn, setCursorOn]   = useState(true);

  // Blinking cursor
  useEffect(() => {
    const t = setInterval(() => setCursorOn(v => !v), 530);
    return () => clearInterval(t);
  }, []);

  // Step sequencer
  useEffect(() => {
    if (!isLoading) return;

    let idx = 0;
    const run = () => {
      if (idx >= STEPS.length) {
        setTimeout(onComplete, 500);
        return;
      }
      const step = STEPS[idx];
      setStepIdx(idx);
      setProgress(step.progress);

      setTimeout(() => {
        setLines(prev => [...prev, { cmd: step.cmd, out: step.out }]);
        setStepIdx(-1);
        idx++;
        setTimeout(run, 180);
      }, 340);
    };

    const initial = setTimeout(run, 400);
    return () => clearTimeout(initial);
  }, [isLoading, onComplete]);

  const activeCmd = stepIdx >= 0 ? STEPS[stepIdx].cmd : null;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--color-background)] overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.55, ease: 'easeInOut' }}
        >
          {/* Subtle dot grid */}
          <div
            className="absolute inset-0 opacity-[0.025] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(var(--color-primary-lighter) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />

          {/* Ambient glow */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[var(--color-primary)] opacity-[0.05] blur-[120px] pointer-events-none" />

          <div className="w-full max-w-md px-6 flex flex-col items-center gap-8">

            {/* Logo */}
            <motion.div
              className="flex flex-col items-center gap-3"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] flex items-center justify-center shadow-lg shadow-[var(--color-primary)]/20">
                <span className="text-white font-black text-xl tracking-tight">P</span>
              </div>
              <h1 className="text-2xl font-bold heading-gradient tracking-wide">PRAISE.ETH</h1>
              <p className="text-[var(--color-text-muted)] text-xs tracking-widest uppercase">Web3 · AI · Blockchain</p>
            </motion.div>

            {/* Terminal window */}
            <motion.div
              className="w-full rounded-xl border border-[var(--color-border)]/60 bg-[var(--color-secondary-lighter)]/70 backdrop-blur-sm overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Title bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--color-border)]/40 bg-[var(--color-secondary-darker)]/60">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-2 text-[var(--color-text-muted)] text-xs font-mono">~/praise-portfolio</span>
              </div>

              {/* Terminal body */}
              <div className="p-4 font-mono text-xs space-y-1.5 min-h-[160px]">
                {lines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-0.5"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-[var(--color-primary)]">❯</span>
                      <span className="text-[var(--color-text-secondary)]">{line.cmd}</span>
                    </div>
                    <div className="pl-5 text-emerald-400/80">✓ {line.out}</div>
                  </motion.div>
                ))}

                {/* Active (typing) line */}
                {activeCmd && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-2"
                  >
                    <span className="text-[var(--color-accent)]">❯</span>
                    <span className="text-[var(--color-text)]">{activeCmd}</span>
                    <span
                      className="inline-block w-[6px] h-[13px] bg-[var(--color-primary)] rounded-sm"
                      style={{ opacity: cursorOn ? 1 : 0 }}
                    />
                  </motion.div>
                )}

                {/* Idle cursor when no step running */}
                {!activeCmd && lines.length < STEPS.length && (
                  <div className="flex items-center gap-2">
                    <span className="text-[var(--color-primary)]">❯</span>
                    <span
                      className="inline-block w-[6px] h-[13px] bg-[var(--color-primary)] rounded-sm"
                      style={{ opacity: cursorOn ? 1 : 0 }}
                    />
                  </div>
                )}
              </div>
            </motion.div>

            {/* Progress bar + percentage */}
            <motion.div
              className="w-full space-y-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-[var(--color-text-muted)]">loading</span>
                <span className="text-[var(--color-primary)] font-semibold">{progress}%</span>
              </div>
              <div className="w-full h-1 rounded-full bg-[var(--color-secondary-lighter)] overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-accent)] to-[var(--color-primary)] bg-[length:200%_auto]"
                  style={{ backgroundPosition: `${100 - progress}% 0` }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                />
              </div>
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
