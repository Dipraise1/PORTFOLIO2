import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Game from './components/Game';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import VisitorCounter from './components/VisitorCounter';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    // Register service worker only in production so localhost dev shows live updates
    const isDev = import.meta.env.DEV || window.location.hostname === 'localhost';
    if (!isDev && 'serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    }

    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <LoadingScreen isLoading={isLoading} onComplete={handleLoadingComplete} />

      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-accent)] to-[var(--color-primary)] z-[60] origin-left"
        style={{ scaleX }}
      />

      <div className="relative min-h-screen overflow-hidden bg-[var(--color-background)]">
        {/* Animated background */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          {/* Subtle gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-background)] to-[var(--color-secondary-darker)]"></div>

          {/* Minimal grid pattern for texture */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `radial-gradient(var(--color-primary-lighter) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          ></div>

          {/* Floating ambient orbs */}
          <motion.div
            className="absolute top-[10%] left-[15%] w-[500px] h-[500px] rounded-full bg-[var(--color-primary)]/5 blur-[120px]"
            animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-[var(--color-accent)]/5 blur-[100px]"
            animate={{ x: [0, -50, 0], y: [0, 40, 0] }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          />
          <motion.div
            className="absolute top-[50%] left-[50%] w-[300px] h-[300px] rounded-full bg-[var(--color-primary-lighter)]/3 blur-[80px]"
            animate={{ x: [0, 30, -20, 0], y: [0, -40, 20, 0] }}
            transition={{ duration: 28, repeat: Infinity, ease: "easeInOut", delay: 6 }}
          />
        </div>

        <Header />
        
        <main className="relative pt-16 sm:pt-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoading ? 0 : 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Hero />
            <Projects />
            <Resume />
            <Testimonials />
            <Game />
            <Contact />
          </motion.div>
        </main>
        
        <Footer />
        <VisitorCounter />
        <Analytics />
      </div>
    </>
  );
};

export default App;