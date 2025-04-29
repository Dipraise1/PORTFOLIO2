import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Mail, Heart, Code, Sparkles, ArrowUp, MessageCircle } from 'lucide-react';

const Footer = () => {
  const [year] = useState(new Date().getFullYear());
  
  const links = [
    { title: 'Social', items: [
      { name: 'Twitter', href: 'https://x.com/divine_js2' },
      { name: 'GitHub', href: 'https://github.com/Dipraise1' },
      { name: 'Telegram', href: 'https://t.me/+l_zN6tKLVUkwNDc5' }
    ]},
    { title: 'Resources', items: [
      { name: 'Portfolio', href: 'https://deesporfolio.vercel.app' },
      { name: 'Projects', href: '#projects' },
      { name: 'Contact', href: '#contact' }
    ]},
    { title: 'Legal', items: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' }
    ]}
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative mt-12 pt-16 pb-8 border-t border-[var(--color-border)]">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-[var(--color-secondary-darker)] opacity-50"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[var(--color-primary)]/10 blur-lg"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [Math.random() * 50, Math.random() * -50, Math.random() * 50],
              y: [Math.random() * 30, Math.random() * -30, Math.random() * 30],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              repeat: Infinity,
              duration: 15 + Math.random() * 10,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        {/* Footer top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          {/* Brand section */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold heading-gradient mb-4">PRAISE.ETH</h3>
              <p className="text-[var(--color-text-secondary)] mb-6 max-w-md">
                Building the decentralized future through Web3 technologies, smart contracts, and blockchain innovation.
              </p>
              
              {/* Social links */}
              <div className="flex gap-4">
                {[
                  { Icon: Github, href: "https://github.com/Dipraise1", label: "GitHub", color: "hover:bg-gray-800" },
                  { Icon: Twitter, href: "https://x.com/divine_js2", label: "Twitter", color: "hover:bg-blue-500" },
                  { Icon: MessageCircle, href: "https://t.me/+l_zN6tKLVUkwNDc5", label: "Telegram", color: "hover:bg-blue-400" },
                  { Icon: Mail, href: "mailto:raphealdivine2@gmail.com", label: "Email", color: "hover:bg-red-500" }
                ].map(({ Icon, href, label, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2.5 rounded-lg bg-[var(--color-secondary-lighter)] text-[var(--color-text-secondary)] ${color} hover:text-white transition-colors duration-300`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Quick links */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {links.map((category, idx) => (
                <motion.div 
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <h4 className="text-lg font-semibold text-[var(--color-text)] mb-4">{category.title}</h4>
                  <ul className="space-y-2">
                    {category.items.map(item => (
                      <li key={item.name}>
                        <a 
                          href={item.href}
                          className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors duration-300 flex items-center gap-1"
                        >
                          <Sparkles className="h-3 w-3 opacity-0 group-hover:opacity-100" />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent my-8"></div>
        
        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-2"
          >
            <Code size={18} className="text-[var(--color-primary)]" />
            <p className="text-[var(--color-text-secondary)]">
              Made with <Heart className="inline-block text-red-500 animate-pulse-soft" size={14} /> by Divine | &copy; {year} All rights reserved
            </p>
          </motion.div>
          
          <motion.button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-[var(--color-secondary-lighter)] hover:bg-[var(--color-primary)] text-[var(--color-text-secondary)] hover:text-white transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;