'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaUserAlt, FaMobileAlt, FaPalette, FaCode, FaRocket } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: FaUserAlt,
      title: 'Personal Portfolios',
      description: 'Clean, modern portfolio websites that showcase your work and make a great first impression.',
      features: ['Responsive design', 'Fast loading', 'SEO friendly']
    },
    {
      icon: FaRocket,
      title: 'Landing Pages',
      description: 'High-converting landing pages with conversion-focused layouts that capture attention and drive action.',
      features: ['Conversion-focused', 'Call-to-action optimized', 'Mobile optimized']
    },
    {
      icon: FaLaptopCode,
      title: 'Business Websites',
      description: 'Simple, professional websites for small businesses and startups.',
      features: ['Contact forms', 'Clean layouts', 'Easy navigation']
    },
    {
      icon: FaMobileAlt,
      title: 'Responsive Web Design',
      description: 'Websites that look great on all devices - desktop, tablet, and mobile.',
      features: ['Mobile-first approach', 'Flexible layouts', 'Touch friendly']
    },
    {
      icon: FaPalette,
      title: 'UI Implementation',
      description: 'Transform Figma or design mockups into pixel-perfect, functional interfaces.',
      features: ['Design to code', 'Pixel perfect', 'Interactive elements']
    },
    {
      icon: FaCode,
      title: 'Frontend for Web Apps',
      description: 'Build the user interface layer for web applications using React and modern tools.',
      features: ['Component based', 'State management', 'API integration']
    }
  ];

  return (
    <section id="services" className="min-h-screen bg-zinc-950 text-white py-20 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-5xl font-bold">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-clip-text text-transparent">
              What I Can Build
            </span>
          </h2>
          <motion.p 
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Looking for a frontend developer? Here&apos;s how I can help bring your ideas to life.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 0 30px rgba(147, 51, 234, 0.15)"
              }}
              className="group relative bg-zinc-900/50 backdrop-blur-sm rounded-xl p-6 border border-zinc-800/50 hover:border-purple-500/30 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-4 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                <service.icon className="w-7 h-7 text-purple-400" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, idx) => (
                  <span 
                    key={idx}
                    className="text-xs px-2 py-1 bg-zinc-800/50 rounded-full text-gray-400 border border-zinc-700/50"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Hover gradient overlay */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4">Have a project in mind?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-purple-500/25"
          >
            Let&apos;s Work Together
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
