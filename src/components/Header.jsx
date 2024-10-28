
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react'; // Using lucide-react instead of heroicons

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.header
      className="bg-[#2D1810] shadow-lg border-b border-[#3D261C]" // Dark brown background
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a 
            href="/" 
            className="text-2xl font-bold text-[#E6C9A8] hover:text-[#FFE6CC] transition-colors duration-300"
          >
        PRAISE.ETH.!!
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {['About', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[#B89F8A] hover:text-[#E6C9A8] transition-all duration-300 
                         px-4 py-2 rounded-md hover:bg-[#3D261C] text-sm font-medium"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button 
              onClick={toggleMenu} 
              className="text-[#B89F8A] hover:text-[#E6C9A8] transition-colors duration-300 
                       focus:outline-none focus:ring-2 focus:ring-[#3D261C] rounded-md p-2"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[#3D261C] rounded-lg mt-2 
                          shadow-lg border border-[#4D362C]"
            >
              {['About', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-3 py-2 rounded-md text-base font-medium 
                           text-[#B89F8A] hover:text-[#E6C9A8] hover:bg-[#2D1810] 
                           transition-all duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;
