'use client'

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  const socialLinks = [
    { icon: FaEnvelope, href: 'mailto:wapnethmitha@gmail.com', label: 'Email' },
    { icon: FaGithub, href: 'https://github.com/wapnethmitha', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/pesandu-wanniarachchi', label: 'LinkedIn' },
  ];

  return (
    <section id="home" className="relative min-h-screen bg-zinc-950 overflow-hidden">
      {/* Gradient orbs background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[150px]"
          animate={{ 
            rotate: [0, 360]
          }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 min-h-screen flex flex-col justify-center px-4 pt-20">
        <div className="max-w-6xl mx-auto w-full">
          
          {/* Main content - centered layout */}
          <div className="flex flex-col items-center text-center">
            
            {/* Profile image with floating animation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative mb-8"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                {/* Rotating ring */}
                <motion.div
                  className="absolute -inset-3 rounded-full border border-purple-500/30"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute -inset-6 rounded-full border border-blue-500/20"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/40 to-purple-500/40 rounded-full blur-2xl scale-110" />
                
                <Image
                  src="/images/pesandu.png"
                  alt="Pesandu Wanniarachchi"
                  width={160}
                  height={160}
                  className="relative rounded-full border-2 border-purple-500/50 object-cover w-32 h-32 md:w-40 md:h-40"
                  priority
                />
                
                {/* Status indicator */}
                <motion.div
                  className="absolute -bottom-1 -right-1 bg-zinc-900 rounded-full p-1.5 border border-zinc-800"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring" }}
                >
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900/80 backdrop-blur-sm rounded-full border border-zinc-800 text-sm text-gray-400">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Available for Freelance
              </span>
            </motion.div>

            {/* Name and title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-4 mb-6"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="text-white">Hi, I&apos;m </span>
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Pesandu
                </span>
              </h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-gray-400 font-light"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Frontend Developer building{' '}
                <span className="text-purple-400 font-medium">fast, responsive websites & landing pages</span>
              </motion.p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-500 text-base md:text-lg max-w-xl mb-8 leading-relaxed"
            >
              I help individuals and small teams bring ideas to life with clean, modern, 
              and responsive web experiences using React & Next.js.
            </motion.p>

            {/* Tech stack pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center gap-2 mb-8"
            >
              {['React', 'Next.js', 'TypeScript', 'Tailwind CSS'].map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-3 py-1.5 bg-zinc-900/60 backdrop-blur-sm rounded-lg text-sm text-gray-400 border border-zinc-800/50 hover:border-purple-500/30 hover:text-purple-400 transition-all cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(147, 51, 234, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl font-medium text-white shadow-lg shadow-purple-500/20 transition-all"
              >
                Let&apos;s Work Together
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.02, backgroundColor: "rgba(147, 51, 234, 0.1)" }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3.5 border border-zinc-700 hover:border-purple-500/50 rounded-xl font-medium text-gray-300 transition-all"
              >
                View Projects
              </motion.a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-4 mb-8"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 flex items-center justify-center rounded-xl bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 text-gray-400 hover:text-purple-400 hover:border-purple-500/50 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>

            {/* Experience & Education badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row items-center gap-3"
            >
              {/* Trainee badge */}
              <div className="flex items-center gap-3 px-4 py-2 bg-zinc-900/40 backdrop-blur-sm rounded-lg border border-zinc-800/50">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center overflow-hidden border border-zinc-800/60">
                  <Image
                    src="/images/srilankanLogo.png"
                    alt="SriLankan Airlines logo"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <div className="text-left">
                  <p className="text-xs text-gray-500">Currently</p>
                  <p className="text-sm text-gray-300">Trainee Software Engineer @ <span className="text-blue-400">SriLankan Airlines</span></p>
                </div>
              </div>

              <span className="hidden sm:block text-zinc-700">|</span>

              {/* Education badge */}
              <div className="flex items-center gap-3 px-4 py-2 bg-zinc-900/40 backdrop-blur-sm rounded-lg border border-zinc-800/50">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center overflow-hidden border border-zinc-800/60">
                  <Image
                    src="/images/uniLogo.png"
                    alt="University of Westminster logo"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <div className="text-left">
                  <p className="text-xs text-gray-500">3rd-year BSc (Hons) Computer Science</p>
                  <p className="text-sm text-gray-300">University of Westminster <span className="text-gray-500">(IIT – Sri Lanka)</span></p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;