import React, { useState, useEffect } from 'react';
import { Github, Twitter, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [year] = useState(new Date().getFullYear());
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20;
      const y = (clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <footer className="relative overflow-hidden py-12 px-8">
      {/* Animated background with gradient and "video-like" effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-brown-dark via-brown-medium to-brown-dark">
        <div className="absolute inset-0 opacity-30">
          {/* Animated shapes that create a video-like background effect */}
          <div className="absolute w-full h-full animate-slide">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full opacity-20"
                style={{
                  width: `${Math.random() * 100 + 50}px`,
                  height: `${Math.random() * 100 + 50}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  background: `radial-gradient(circle at center, ${['#FFE6CC', '#E6C9A8', '#B89F8A'][Math.floor(Math.random() * 3)]}, transparent)`,
                  animation: `float ${Math.random() * 10 + 5}s infinite linear`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main content with 3D effect */}
      <div 
        className="relative z-10 max-w-6xl mx-auto"
        style={{
          transform: `perspective(1000px) rotateX(${mousePosition.y * 0.1}deg) rotateY(${mousePosition.x * 0.1}deg)`
        }}
      >
        {/* Main heading with glowing effect */}
        <h2 className="text-4xl font-bold mb-8 relative">
          <span className="animate-gradient bg-gradient-to-r from-brown-lightest via-brown-lighter to-brown-lightest bg-clip-text text-transparent bg-[length:200%_auto]">
            Let's Create Something Amazing Together
          </span>
        </h2>

        {/* Social links */}
        <div className="flex justify-center gap-6 mb-8">
          {[
            { Icon: Github, href: "https://github.com", label: "GitHub" },
            { Icon: Twitter, href: "https://x.com/divine_js2", label: "Twitter" },
            { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
            { Icon: Mail, href: "mailto:raphealdivine2@gmail.com", label: "Email" }
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-2 hover:scale-110 transition-transform duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-brown-lighter to-brown-lightest rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              <Icon 
                size={24} 
                className="text-brown-lightest transform group-hover:rotate-12 transition-transform duration-300"
              />
            </a>
          ))}
        </div>

        {/* Footer text with animated border */}
        <div className="relative p-6 rounded-xl overflow-hidden group">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-brown-lighter via-brown-lightest to-brown-lighter opacity-10 animate-gradient" />
          </div>
          
          <div className="relative z-10 flex flex-col items-center gap-4">
            <p className="text-brown-lightest text-lg">
              Made with <Heart className="inline-block text-red-500 animate-bounce" size={16} /> by Divine
            </p>
            <p className="text-brown-lighter">
              &copy; {year} Web3 Developer Portfolio. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;