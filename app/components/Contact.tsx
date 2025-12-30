'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaArrowRight } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    {
      category: "Email",
      items: [
        {
          title: 'Personal',
          value: 'wapnethmitha@gmail.com',
          href: 'mailto:wapnethmitha@gmail.com',
          icon: FaEnvelope,
        },
        {
          title: 'Academic',
          value: 'pesandu.20232135@iit.ac.lk',
          href: 'mailto:pesandu.20232135@iit.ac.lk',
          icon: FaEnvelope,
        }
      ]
    },
    {
      category: "Social",
      items: [
        { title: 'GitHub', value: '@wapnethmitha', href: 'https://github.com/wapnethmitha', icon: FaGithub },
        { title: 'LinkedIn', value: 'in/pesandu-wanniarachchi', href: 'https://linkedin.com/in/pesandu-wanniarachchi', icon: FaLinkedin },
        { title: 'Instagram', value: '@pesaa.w', href: 'https://instagram.com/pesaa.w', icon: FaInstagram },
        { title: 'Facebook', value: 'Pesandu Wanniarachchi', href: 'https://www.facebook.com/share/1Ads5qqBdE/?mibextid=wwXIfr', icon: FaFacebook }
      ]
    }
  ];

  return (
    <section id="contact" className="min-h-screen bg-zinc-950 text-white py-20 px-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]" />
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-indigo-500/20 rounded-full blur-[60px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-20"
        >
          <motion.h2 
            className="text-6xl font-bold"
            whileHover={{ scale: 1.05 }}
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-clip-text text-transparent">
              Let&apos;s Connect
            </span>
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          {contactInfo.map((section, sectionIndex) => (
            <div key={section.category} className="space-y-8">
              <motion.h3 
                className="text-2xl font-semibold text-purple-400"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: sectionIndex * 0.2 }}
              >
                {section.category}
              </motion.h3>
              
              <div className="space-y-6">
                {section.items.map((item, index) => (
                  <motion.a
                    key={item.title}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ x: 10 }}
                    viewport={{ once: true }}
                    transition={{ delay: (sectionIndex * 0.2) + (index * 0.1) }}
                    className="flex items-center group cursor-pointer"
                  >
                    <div className="flex-1 flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-zinc-900/50 backdrop-blur-sm flex items-center justify-center
                        group-hover:bg-purple-500/20 transition-all duration-300">
                        <item.icon className="w-5 h-5 text-purple-400 group-hover:text-purple-300" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">{item.title}</p>
                        <p className="text-lg text-gray-200 group-hover:text-purple-400 transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </div>
                    <FaArrowRight className="w-4 h-4 text-gray-600 group-hover:text-purple-400 
                      opacity-0 group-hover:opacity-100 transform translate-x-[-10px] 
                      group-hover:translate-x-0 transition-all duration-300" />
                  </motion.a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Add this copyright section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20 pt-10 border-t border-zinc-800/50"
        >
          <p className="text-sm text-gray-500">
            © All rights reserved 2025-2026{' '}
            <span >
              pesanduwanniarachchi
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;