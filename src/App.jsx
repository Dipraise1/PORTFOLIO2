import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Game from './components/Game';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--color-background)]">
      {/* Animated background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden opacity-40">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-background)] to-[var(--color-secondary-darker)]"></div>
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(var(--color-primary-lighter) 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}
        ></div>
        
        {/* Blurred blobs */}
        {[...Array(5)].map((_, i) => (
          <div
            key={`blob-${i}`}
            className="absolute rounded-full animate-float opacity-20 blur-3xl"
            style={{
              width: `${Math.random() * 400 + 200}px`,
              height: `${Math.random() * 400 + 200}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 2 === 0 
                ? `radial-gradient(circle at center, var(--color-primary), transparent)`
                : `radial-gradient(circle at center, var(--color-accent), transparent)`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${20 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      <Header />
      
      <main className="relative pt-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Hero />
          <Projects />
          <Game />
          <Contact />
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;