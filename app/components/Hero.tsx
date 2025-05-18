'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  
  useEffect(() => {
    // Set initial window size
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });

    // Update window size on resize
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const socialLinks = [
    { icon: FaEnvelope, href: 'mailto:wapnethmitha@gmail.com', color: 'hover:text-blue-400' },
    { icon: FaGithub, href: 'https://github.com/wapnethmitha', color: 'hover:text-purple-400' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/pesandu-wanniarachchi', color: 'hover:text-blue-500' },
    { icon: FaInstagram, href: 'https://instagram.com/pesaa.w', color: 'hover:text-purple-500' },
    { icon: FaFacebook, href: 'https://www.facebook.com/share/1Ads5qqBdE/?mibextid=wwXIfr', color: 'hover:text-blue-600' },
  ];

  return (
    <section id="home" className="relative min-h-screen bg-zinc-950">
      <div className="pt-20"> {/* Added padding-top to account for navbar */}
        <div className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center text-white px-4 overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0">
            {windowSize.width > 0 && [...Array(100)].map((_, i) => ( // Increased number of dots
              <motion.div
                key={i}
                className="absolute h-1.5 w-1.5 bg-blue-400/20 rounded-full" // Increased dot size
                animate={{
                  scale: [1, 2, 1], // Increased scale range
                  opacity: [0.2, 0.5, 0.2], // Adjusted opacity
                  x: [
                    Math.random() * windowSize.width * 1.5 - windowSize.width * 0.25, // Wider movement range
                    Math.random() * windowSize.width * 1.5 - windowSize.width * 0.25
                  ],
                  y: [
                    Math.random() * windowSize.height * 1.5 - windowSize.height * 0.25, // Wider movement range
                    Math.random() * windowSize.height * 1.5 - windowSize.height * 0.25
                  ],
                }}
                transition={{
                  duration: Math.random() * 50 + 20, // Adjusted duration for varied speeds
                  repeat: Infinity,
                  ease: "linear",
                  delay: Math.random() * -20 // Added random delays for more natural movement
                }}
              />
            ))}
          </div>

          <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-20 z-10">
            <motion.div 
              className="flex-1 space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h1 className="text-4xl md:text-6xl font-bold">
                  <span className="text-gray-300">Hi,</span>{" "}
                  <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-clip-text text-transparent">
                    I&apos;m Pesandu
                  </span>
                </h1>
                <h2 className="text-2xl md:text-3xl text-gray-400 font-light">
                  wanniarachchi
                </h2>
              </motion.div>

              <motion.div
        className="text-xl md:text-2xl text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <span className="text-purple-400">{"<"}</span>
        <TypeAnimation
          sequence={[
            2000,
            'Creative Developer',
            2000,
            'UI/UX Enthusiast',
            2000,
            'Problem Solver',
            2000,
            'Tech Explorer',
            2000,
            'Aviation Enthusiast',
            2000,
            'Quick Learner & Adaptable',
            2000,
            'Tech Enthusiast',
            2000,
          ]}
          wrapper="span"
          speed={25}
          deletionSpeed={45}
          repeat={Infinity}
          className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-clip-text text-transparent px-2"
          style={{ 
            fontSize: 'inherit', 
            display: 'inline-block',
            fontWeight: '600',
          }}
        />
        <span className="text-purple-400">{"/>"}</span>
      </motion.div>

              <motion.div 
                className="flex gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-2xl text-gray-400 transition-colors ${social.color}`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            <motion.div 
              className="flex-1 relative"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="w-64 h-64 md:w-80 md:h-80 relative mx-auto group"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl"></div>
                <Image
                  src="/images/pesandu.png"
                  alt="Pesandu Wanniarachchi"
                  width={320}
                  height={320}
                  className="rounded-full relative z-10 border-4 border-purple-600 object-cover"
                  priority
                />
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent via-purple-900/50 to-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col items-center justify-end pb-12 px-4"
                >
                  <span className="text-white font-medium text-lg">Computer Science Undergraduate</span>
                  <span className="text-gray-300 text-sm mt-1">University of Westminster</span>
                  <span className="text-blue-400 text-sm">(IIT-Sri Lanka)</span>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;