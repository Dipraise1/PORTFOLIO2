import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Code, Terminal, Sparkles, Star, Globe, Cpu } from 'lucide-react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20;
      const y = (clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const techStack = [
    'React', 'Node.js', 'Web3', 'Solidity', 'JavaScript', 'TypeScript',
    'Smart Contracts', 'DeFi', 'NFTs', 'Blockchain'
  ];

  // Enhanced image component with skeleton loading and effects
  const EnhancedImage = () => {
    return (
      <div className="relative w-full aspect-square lg:aspect-[4/5] max-w-2xl mx-auto">
        {/* Skeleton loader */}
        <div className={`absolute inset-0 bg-brown-medium/30 rounded-2xl animate-pulse ${imageLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`} />

        {/* Decorative elements */}
        <div className="absolute -inset-4 bg-gradient-to-r from-brown-lighter via-brown-lightest to-brown-lighter rounded-3xl opacity-20 blur-lg animate-pulse" />
        <div className="absolute -inset-0.5 bg-gradient-to-r from-brown-lighter to-brown-lightest rounded-2xl opacity-20 animate-gradient" />

        {/* Image container */}
        <div className="relative rounded-2xl overflow-hidden border-4 border-brown-lighter/20 aspect-square lg:aspect-[4/5] transform hover:scale-[1.02] transition-transform duration-500">
          {/* Main image with responsive sizing */}
          <img
            src="/pfp.png"
            alt="Divine - Web3 Developer"
            className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
            onLoad={() => setImageLoaded(true)}
          />

          {/* Overlay effects */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brown-dark/40" />
          <div className="absolute inset-0 bg-brown-dark/10 backdrop-blur-[1px] mix-blend-overlay" />
          
          {/* Animated grain effect */}
          <div className="absolute inset-0 opacity-20 mix-blend-overlay animate-grain" 
               style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%" height="100%" filter="url(%23noise)" opacity="0.5"/%3E%3C/svg%3E")' }} />

          {/* Interactive hover overlay */}
          <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-brown-dark/80 via-transparent to-transparent flex items-end justify-center p-6">
            <div className="text-center transform translate-y-4 hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-brown-lightest text-2xl font-bold mb-2">Web3 Developer</h3>
              <p className="text-brown-lighter">Building the Future of Web3</p>
            </div>
          </div>
        </div>

        {/* Floating badges with responsive positioning */}
        {[
          { icon: <Code size={20} />, text: "100+ Commits", color: "from-blue-500/80 to-blue-600/80" },
          { icon: <Globe size={20} />, text: "Web3 Expert", color: "from-purple-500/80 to-purple-600/80" },
          { icon: <Cpu size={20} />, text: "Smart Contracts", color: "from-green-500/80 to-green-600/80" }
        ].map((badge, index) => (
          <div
            key={index}
            className={`absolute backdrop-blur-sm px-4 py-2 rounded-lg flex items-center gap-2 animate-float shadow-lg
                      transform hover:scale-110 transition-transform duration-300
                      sm:text-sm md:text-base
                      ${index === 0 ? 'top-[15%] -left-[10%] lg:-left-[20%]' : 
                        index === 1 ? 'top-[45%] -right-[10%] lg:-right-[20%]' : 
                        'bottom-[15%] -left-[10%] lg:-left-[20%]'}`}
            style={{ 
              animationDelay: `${index * 0.5}s`,
              background: `linear-gradient(to right, ${badge.color.split(' ')[0]}, ${badge.color.split(' ')[1]})`
            }}
          >
            {badge.icon}
            <span className="text-white whitespace-nowrap font-medium">{badge.text}</span>
          </div>
        ))}

        {/* Decorative circles */}
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-32 h-32 rounded-full animate-pulse"
            style={{
              background: `radial-gradient(circle at center, ${['#FFE6CC33', '#E6C9A833', '#B89F8A33'][i]}, transparent)`,
              top: `${25 * i}%`,
              right: `${-10 - 15 * i}%`,
              animationDelay: `${i * 0.3}s`,
              filter: 'blur(20px)'
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-brown-dark to-brown-medium">
      {/* Background elements remain the same */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-20 animate-float"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle at center, ${['#FFE6CC', '#E6C9A8', '#B89F8A'][Math.floor(Math.random() * 3)]}, transparent)`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative container mx-auto px-4 sm:px-6 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left column content remains the same */}
          <div 
            className="relative z-10 text-center lg:text-left"
            style={{
              transform: `perspective(1000px) rotateX(${mousePosition.y * 0.05}deg) rotateY(${mousePosition.x * 0.05}deg)`
            }}
          >
            {/* Previous content remains the same */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-brown-lightest mb-4 justify-center lg:justify-start">
                <Terminal className="animate-bounce" size={24} />
                <span className="text-xl">Hello World! I'm</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                <span className="animate-gradient bg-gradient-to-r from-brown-lightest via-brown-lighter to-brown-lightest bg-clip-text text-transparent bg-[length:200%_auto]">
                  Divine
                </span>
              </h1>

              {/* Rest of the content remains the same */}
              {/* ... */}
            </div>
          </div>

          {/* Right column - Enhanced image */}
          <div className="relative z-10">
            <EnhancedImage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;