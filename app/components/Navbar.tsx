'use client'

import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const navItems = ['Home', 'Frameworks', 'Projects', 'Approach', 'Contact'];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed top-0 w-full z-50 px-4 py-4">
      <motion.nav 
        className="relative max-w-xl mx-auto"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        {/* Glow effect background */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/15 via-blue-600/15 to-purple-600/1 rounded-full blur-xl" />
        
        {/* Main navbar */}
        <div className="relative bg-zinc-950/50 backdrop-blur-md rounded-full border border-zinc-800/50 overflow-hidden">
          <div className="px-4 py-2">
            <motion.div 
              className="flex justify-center items-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {navItems.map((item, index) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="relative text-gray-300 text-sm font-medium"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: index * 0.1 + 0.3,
                    type: "spring",
                    stiffness: 300
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="relative z-10 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text hover:from-purple-500 hover:to-blue-400 transition-all duration-300">
                    {item}
                  </span>
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;