'use client'

import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { FaLightbulb, FaCode, FaRocket, FaUsers } from 'react-icons/fa';

interface PhilosophyItem {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
}

const PhilosophyCard = ({ item, index }: { item: PhilosophyItem; index: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  // Reduced rotation angle for smoother effect
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.x + rect.width / 2;
    const centerY = rect.y + rect.height / 2;
    const mouseX = event.clientX - centerX;
    const mouseY = event.clientY - centerY;

    // Added damping factor for smoother movement
    x.set(mouseX * 0.5);
    y.set(mouseY * 0.5);
  };

  const handleMouseLeave = () => {
    // Added smooth transition back to initial position
    x.set(0, true);
    y.set(0, true);
  };

  return (
    <motion.div
      className="group perspective-1000"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        transition={{ type: "spring", stiffness: 150, damping: 20 }} // Added spring physics
        className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 rounded-xl p-8 h-full 
          hover:border-purple-500/50 transition-all duration-300
          hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transform-gpu"
      >
        <motion.div
          className="flex items-start gap-4"
          style={{ transform: "translateZ(40px)" }}
        >
          <div className={`p-3 rounded-lg bg-gradient-to-br ${item.color} opacity-80 group-hover:opacity-100 
            transition-all duration-300`}
          >
            <item.icon className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 
              bg-clip-text text-transparent"
            >
              {item.title}
            </h3>
            <p className="text-gray-400 leading-relaxed">
              {item.description}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const Approach = () => {
  const philosophies = [
    {
      icon: FaLightbulb,
      title: "Problem-First Mindset",
      description: "Understand the problem before writing code. Every line should serve a purpose and add value.",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: FaCode,
      title: "Clean & Maintainable Code",
      description: "Write clean, documented, maintainable code. Focus on solutions that are efficient and easy to understand.",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: FaRocket,
      title: "Continuous Learning",
      description: "Stay updated with latest trends and best practices. Constantly expanding my skill set.",
      color: "from-indigo-400 to-indigo-600"
    },
    {
      icon: FaUsers,
      title: "User-Centric Design",
      description: "The end user's experience is paramount. Create intuitive interfaces that solve real problems.",
      color: "from-blue-400 to-purple-600"
    }
  ];

  return (
    <section id="approach" className="min-h-screen bg-zinc-950 text-white py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl font-bold mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-clip-text text-transparent">
              My Approach
            </span>
          </motion.h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Beyond just coding, I believe in creating meaningful solutions that make a difference
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {philosophies.map((item, index) => (
            <PhilosophyCard key={item.title} item={item} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="mt-20 text-center"
        >
          <blockquote className="text-2xl font-light italic text-gray-300 max-w-3xl mx-auto">
            &quot;I strive to create solutions that not only work well but also inspire and make a positive impact on people&apos;s lives.&quot;
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default Approach;