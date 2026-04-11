import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* eslint-disable react/prop-types */
const LoadingScreen = ({ isLoading, onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isLoading) return;
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 300);
          return 100;
        }
        return p + 2;
      });
    }, 40);
    return () => clearInterval(interval);
  }, [isLoading, onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[var(--color-background)]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <motion.h1
            className="text-xl font-bold heading-gradient mb-8 tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            PRAISE.ETH
          </motion.h1>

          <div className="w-40 h-[2px] bg-[var(--color-secondary-lighter)] rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] rounded-full"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.04, ease: 'linear' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
