import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import LiveChat from './pages/LiveChat';

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

  const PortfolioHome = () => (
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
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-background)] to-[var(--color-secondary-darker)]"></div>
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `radial-gradient(var(--color-primary-lighter) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          ></div>
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

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PortfolioHome />} />
        <Route path="/live-chat" element={<LiveChat />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;