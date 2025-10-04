import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code, Terminal, Globe, Cpu, ArrowRight, MessageCircle } from 'lucide-react';
import useTranslation from '../hooks/useTranslation';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [imageLoaded, setImageLoaded] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20;
      const y = (clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const techStack = [
    'React', 'Node.js', 'Web3', 'Solidity', 'JavaScript', 'TypeScript',
    'Rust', 'Python', 'Figma', 'Terminal', 'Smart Contracts', 'DeFi', 'NFTs', 'Blockchain',
    'Flutter', 'React Native', 'Mobile Apps', 'iOS', 'Android'
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  // Enhanced image component
  const EnhancedImage = () => {
    return (
      <motion.div 
        className="relative w-full aspect-square lg:aspect-[4/5] max-w-2xl mx-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {/* Skeleton loader */}
        <div className={`absolute inset-0 bg-[var(--color-secondary-lighter)] rounded-2xl animate-pulse-soft ${imageLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`} />

        {/* Decorative elements */}
        <div className="absolute -inset-4 bg-gradient-to-r from-[var(--color-primary-lighter)]/20 via-[var(--color-primary)]/20 to-[var(--color-primary-lighter)]/20 rounded-3xl opacity-30 blur-xl animate-pulse-soft" />
        <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--color-primary-lighter)]/40 to-[var(--color-primary)]/40 rounded-2xl opacity-30 animate-gradient" />

        {/* Image container */}
        <div className="group relative rounded-2xl overflow-hidden border-2 border-[var(--color-border)] aspect-square lg:aspect-[4/5] transform hover:scale-[1.02] transition-transform duration-500 shadow-xl">
          {/* Main image with responsive sizing */}
          <img
            src="/pfp.png"
            alt="Divine - Web3 Developer"
            className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
            onLoad={() => setImageLoaded(true)}
          />

          {/* Overlay effects */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-secondary-darker)]/70" />
          
          {/* Animated grain effect */}
          <div className="absolute inset-0 opacity-20 mix-blend-overlay animate-grain" 
               style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E\")" }} />

          {/* Interactive hover overlay */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-[var(--color-secondary-darker)]/80 via-transparent to-transparent flex items-end justify-center p-6">
            <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-[var(--color-text)] text-2xl font-bold mb-2">Web3 Developer</h3>
              <p className="text-[var(--color-text-secondary)]">Building the Future of Web3</p>
            </div>
          </div>
        </div>

        {/* Floating badges with responsive positioning */}
        {[
          { icon: <Code size={20} />, text: "100+ Commits", color: "from-blue-500/80 to-blue-600/80" },
          { icon: <Globe size={20} />, text: "Web3 Expert", color: "from-purple-500/80 to-purple-600/80" },
          { icon: <Cpu size={20} />, text: "Smart Contracts", color: "from-green-500/80 to-green-600/80" }
        ].map((badge, index) => (
          <motion.div
            key={index}
            className={`absolute backdrop-blur-sm px-4 py-2 rounded-lg flex items-center gap-2 shadow-lg z-10
                      transform hover:scale-110 transition-transform duration-300
                      sm:text-sm md:text-base
                      ${index === 0 ? 'top-[15%] -left-[10%] lg:-left-[20%]' : 
                        index === 1 ? 'top-[45%] -right-[10%] lg:-right-[20%]' : 
                        'bottom-[15%] -left-[10%] lg:-left-[20%]'}`}
            style={{ 
              background: `linear-gradient(to right, ${badge.color.split(' ')[0]}, ${badge.color.split(' ')[1]})`
            }}
            initial={{ opacity: 0, x: index === 1 ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
          >
            {badge.icon}
            <span className="text-white whitespace-nowrap font-medium">{badge.text}</span>
          </motion.div>
        ))}
      </motion.div>
    );
  };

  return (
    <section className="relative min-h-screen py-16 flex items-center" id="about">
      <div className="container-custom">
        <motion.div 
          className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left column content */}
          <motion.div 
            className="relative z-10 text-center lg:text-left"
            style={{
              transform: `perspective(1000px) rotateX(${mousePosition.y * 0.03}deg) rotateY(${mousePosition.x * 0.03}deg)`
            }}
          >
            <div className="space-y-8">
              <motion.div 
                className="inline-flex items-center gap-2 text-[var(--color-text-secondary)] justify-center lg:justify-start px-4 py-2 rounded-full bg-[var(--color-secondary-lighter)]/50 border border-[var(--color-border)]"
                variants={itemVariants}
              >
                <Terminal className="text-[var(--color-primary)]" size={18} />
                <span className="text-sm font-medium">{t('hero.helloWorld')}</span>
              </motion.div>

              <motion.h1 
                className="text-5xl sm:text-6xl lg:text-7xl font-bold space-y-2"
                variants={itemVariants}
              >
                <span className="heading-gradient block">Divine</span>
                <span className="text-[var(--color-text)] block text-4xl sm:text-5xl lg:text-6xl">{t('hero.web3Developer')}</span>
              </motion.h1>

              <motion.p 
                className="text-[var(--color-text-secondary)] text-lg max-w-lg mx-auto lg:mx-0"
                variants={itemVariants}
              >
                {t('hero.description')}
              </motion.p>

              <motion.div 
                className="flex flex-wrap gap-3 justify-center lg:justify-start"
                variants={itemVariants}
              >
                {techStack.slice(0, 10).map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3 py-1.5 bg-[var(--color-secondary-lighter)]/70 border border-[var(--color-border)] rounded-md text-sm text-[var(--color-text-secondary)]"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>

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

              <motion.div 
                className="flex items-center gap-4 justify-center lg:justify-start text-[var(--color-text-secondary)]"
                variants={itemVariants}
              >
                <a 
                  href="https://github.com/Dipraise1" 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:text-[var(--color-primary)] transition-colors p-2"
                  aria-label="GitHub Profile"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="https://t.me/+l_zN6tKLVUkwNDc5" 
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[var(--color-primary)] transition-colors p-2"
                  aria-label="Telegram Channel"
                >
                  <MessageCircle size={24} />
                </a>
                <a 
                  href="https://deesporfolio.vercel.app" 
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[var(--color-primary)] transition-colors p-2"
                  aria-label="Portfolio Website"
                >
                  <ExternalLink size={24} />
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Right column - Enhanced image */}
          <div className="relative z-10">
            <EnhancedImage />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;