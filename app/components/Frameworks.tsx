'use client'

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface TechSkill {
  name: string;
  icon: string;
  description: string;
  category: 'frontend' | 'other';
  featured?: boolean;
}

const FrameworkCard = ({ skill, index }: { skill: TechSkill; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      key={skill.name}
      className="relative group perspective-1000 min-h-[220px]" // Reduced height
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Main card */}
      <motion.div 
        className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 rounded-xl p-6 h-full relative overflow-hidden transform-gpu cursor-pointer flex flex-col items-center justify-center" // Reduced padding
        animate={{ 
          scale: isHovered ? 1.02 : 1,
          rotateX: isHovered ? 5 : 0,
          rotateY: isHovered ? 5 : 0,
        }}
        transition={{ duration: 0.2 }}
      >
        {/* Default content */}
        <motion.div
          className="flex flex-col items-center gap-3 relative z-10 w-full" // Reduced gap
          animate={{
            opacity: isHovered ? 0 : 1,
            scale: isHovered ? 0.8 : 1,
          }}
          transition={{ duration: 0.2 }}
        >
          <div className="w-18 h-18 relative bg-gradient-to-br"><Image
              src={skill.icon}
              alt={skill.name}
              fill
              className="object-contain p-1 filter drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]"
            />
          </div>

          <div className="text-center">
            <motion.h3 className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-1">{skill.name}
            </motion.h3>
            <span className="text-xs text-gray-400">{skill.category === 'frontend' ? '⭐ Core Stack' : 'Additional'}</span> </div>
        </motion.div>

        {/* Description overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-black/95 to-purple-900/95 backdrop-blur-sm
            flex items-center justify-center p-6" // Reduced padding
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: isHovered ? 1 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20
          }}
        >
          <div className="flex flex-col items-center gap-4"> {/* Reduced gap */}
            <motion.h4
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent text-center" // Reduced title size
            >
              {skill.name}
            </motion.h4>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-200 text-center leading-relaxed text-sm" // Reduced description text size
            >
              {skill.description}
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
;;;;;;;;;;
const Frameworks = () => {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  const skills: TechSkill[] = [
    // ✅ FEATURED FRONTEND STACK
    {
      name: 'React.js',
      icon: '/icons/reactjs.png',
      description: 'My go-to library for building interactive user interfaces. Used in multiple projects to create dynamic, component-based web applications.',
      category: 'frontend',
      featured: true
    },
    {
      name: 'Next.js',
      icon: '/icons/nextjs.png',
      description: 'Framework of choice for building fast, SEO-friendly websites. Powers this portfolio and several client-ready projects.',
      category: 'frontend',
      featured: true
    },
    {
      name: 'JavaScript',
      icon: '/icons/javascript.png',
      description: 'Core language for all my frontend work. Proficient in modern ES6+ features for clean, maintainable code.',
      category: 'frontend',
      featured: true
    },
    {
      name: 'Tailwind CSS',
      icon: '/icons/tailwind.png',
      description: 'My preferred styling solution for rapid UI development. Creates clean, responsive designs with utility-first approach.',
      category: 'frontend',
      featured: true
    },
    {
      name: 'HTML5',
      icon: '/icons/html5.png',
      description: 'Strong foundation in semantic HTML for accessible, well-structured web pages that rank well in search engines.',
      category: 'frontend',
      featured: true
    },
    {
      name: 'Framer Motion',
      icon: '/icons/framer.png',
      description: 'Used to create smooth, professional animations that enhance user experience and bring interfaces to life.',
      category: 'frontend',
      featured: true
    },
    // ⚠️ OTHER SKILLS (de-emphasized)
    {
      name: 'Node.js',
      icon: '/icons/nodejs.png',
      description: 'Backend runtime for JavaScript. Used for API development and server-side functionality when needed.',
      category: 'other'
    },
    {
      name: 'Python',
      icon: '/icons/python.png',
      description: 'Applied in data science, automation, and academic projects. Comfortable with scripting and backend logic.',
      category: 'other'
    },
    {
      name: 'Java',
      icon: '/icons/java.png',
      description: 'Strong OOP foundation from academic projects. Experience with backend development and system design.',
      category: 'other'
    },
    {
      name: 'Spring Boot',
      icon: '/icons/spring.png',
      description: 'Java backend framework used in full-stack academic projects for building robust APIs.',
      category: 'other'
    },
    {
      name: 'React Native',
      icon: '/icons/reactnative.png',
      description: 'Cross-platform mobile development. Collaborated on Pause+, a social media detox app.',
      category: 'other'
    },
  ];

  const featuredSkills = skills.filter(s => s.featured);
  const otherSkills = skills.filter(s => !s.featured);

  return (
    <section id="frameworks" className="min-h-screen bg-zinc-950 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 
            bg-clip-text text-transparent mb-4 leading-relaxed py-1">
            My Frontend Stack
          </h2>
          <p className="text-gray-400 text-lg">
            The tools I use to build modern, responsive websites
          </p>
        </motion.div>

        {/* Featured Frontend Technologies */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {featuredSkills.map((skill, index) => (
            <FrameworkCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>

        {/* Other Skills - Smaller, de-emphasized section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <h3 className="text-lg text-gray-500 text-center mb-6">Also familiar with</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {otherSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-2 px-4 py-2 bg-zinc-900/50 backdrop-blur-sm rounded-lg border border-zinc-800/50 hover:border-zinc-700 transition-all"
              >
                <div className="w-5 h-5 relative">
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-sm text-gray-400">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Currently Exploring section */}
        <motion.div 
          className="mt-20 relative py-12 px-4 rounded-2xl overflow-hidden border border-purple-500/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {isClient && (
            <div className="absolute inset-0 overflow-hidden">
              {/* Moving blue lines */}
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={`line-${i}`}
                  className="absolute h-[1px] bg-gradient-to-r from-transparent via-blue-600/100 to-transparent"
                  style={{
                    width: `${30 + Math.floor(i / 5) * 20}px`,
                    top: `${Math.floor(Math.random() * 100)}%`,
                    left: `${Math.floor(Math.random() * 100)}%`,
                  }}
                  animate={{
                    x: ['-100%', '100%'],
                    opacity: [0, 0.5, 0],
                  }}
                  transition={{
                    duration: 2 + (i % 3),
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.2,
                  }}
                />
              ))}

              {/* Glowing stars */}
              {[...Array(40)].map((_, i) => (
                <motion.div
                  key={`star-${i}`}
                  className="absolute rounded-full bg-white/80"
                  style={{
                    width: '2px',
                    height: '2px',
                    top: `${Math.floor(Math.random() * 100)}%`,
                    left: `${Math.floor(Math.random() * 100)}%`,
                    boxShadow: '0 0 4px #fff, 0 0 6px #fff',
                  }}
                  animate={{
                    opacity: [0.2, 0.8, 0.2],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 2 + (i % 2),
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.1,
                  }}
                />
              ))}
            </div>
          )}

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-blue-900/10 backdrop-blur-[1px]" />
          
          {/* Content */}
          <div className="relative text-center space-y-4 z-10">
            <h3 className="text-xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-medium">
              Always Learning, Always Growing !
            </h3>
            
            <p className="text-gray-400 text-sm max-w-lg mx-auto">
              Continuously exploring new technologies and expanding my skill set.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Frameworks;