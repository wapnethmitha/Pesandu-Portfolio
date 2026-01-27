'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaYoutube, FaExternalLinkAlt } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  highlights: string[];
  image: string;
  links: {
    github?: string;
    youtube?: string;
    live?: string;
  };
  tags: string[];
  category: 'featured' | 'other';
  projectType: 'university' | 'personal' | 'collaborative';
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: 'EduPredict - AI Study Copilot',
      description: 'AI powered study companion that predicts study hours needed to hit target scores.',
      highlights: [
        'Designed & built interactive dashboard UI with Next.js',
        'Created mood-aware face analyzer interface',
        'Implemented clean, intuitive data visualizations'
      ],
      image: '/images/edupredict.png',
      links: {
        live: 'https://edupredict-iptq.onrender.com/'
      },
      tags: ['Next.js', 'TypeScript', 'Machine Learning'],
      category: 'featured',
      projectType: 'personal'
    },
    {
      title: 'Pause+ Social Media Detox App',
      description: 'Collaborative mobile app helping users reduce social media addiction.',
      highlights: [
        'Built React Native screens with gamified UX',
        'Developed ranking system & achievement UI',
        'Created engaging marketing video for promotion'
      ],
      image: '/images/pause.png',
      links: {
        youtube: 'https://youtu.be/VFHqTC7uQrg?si=wB2nI3EV3Fbelzvf',
        live: 'https://pauseplus.click'
      },
      tags: ['React Native', 'Node.js', 'MongoDB'],
      category: 'featured',
      projectType: 'collaborative'
    },
    {
      title: 'Nestora Real Estate Platform',
      description: 'Property listing website with advanced search and filtering capabilities.',
      highlights: [
        'Built responsive UI using React & Tailwind CSS',
        'Implemented property listing and filtering UI',
        'Focused on clean layout and usability'
      ],
      image: '/images/nestora.png',
      links: {
        github: 'https://github.com/wapnethmitha/Nestora-RealEstate',
      },
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      category: 'featured',
      projectType: 'university'
    },
    {
      title: 'Plane Ticket Management System',
      description: 'Java application for comprehensive airline ticket operations.',
      highlights: [
        'Built interactive seat map visualization',
        'Implemented ticket purchase and cancellation flow',
        'Designed clean, functional user interface'
      ],
      image: '/images/planeseatmanagement.png',
      links: {
        github: 'https://github.com/wapnethmitha/Plane-Ticket_Management-System'
      },
      tags: ['Java', 'Spring Boot', 'MySQL'],
      category: 'featured',
      projectType: 'university'
    },
    {
      title: 'Bookstore Management API',
      description: 'RESTful APIs for managing books, customers, and orders.',
      highlights: [
        'Designed clean RESTful API architecture',
        'Implemented CRUD operations with error handling',
        'Tested thoroughly using Postman'
      ],
      image: '/images/bookstoreapi.png',
      links: {
        github: 'https://github.com/wapnethmitha/Book-Store-API'
      },
      tags: ['Node.js', 'Express', 'MongoDB'],
      category: 'other',
      projectType: 'university'
    },
    {
      title: 'Event Ticketing System',
      description: 'Multi-threaded app demonstrating concurrency concepts.',
      highlights: [
        'Implemented producer-consumer design pattern',
        'Built real-time ticket availability tracking',
        'Demonstrated thread-safe operations'
      ],
      image: '/images/eventticketingsystem.png',
      links: {
        github: 'https://github.com/wapnethmitha/Event-Ticketing-System'
      },
      tags: ['React', 'Node.js', 'Socket.io'],
      category: 'other',
      projectType: 'university'
    },
    {
      title: 'Student Grading System',
      description: 'Python program for student progress tracking and visualization.',
      highlights: [
        'Built data classification logic for student progress',
        'Implemented histogram visualization for results',
        'Designed intuitive command-line interface'
      ],
      image: '/images/studentgradingsystem.webp',
      links: {
        github: 'https://github.com/wapnethmitha/Student-Grading_System'
      },
      tags: ['Python', 'SQLite', 'Tkinter'],
      category: 'other',
      projectType: 'university'
    }
  ];

  return (
    <section id="projects" className="min-h-screen bg-zinc-950 text-white py-20 px-4 overflow-hidden">
      <motion.div 
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-5xl font-bold">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-clip-text text-transparent">
              My Projects
            </span>
          </h2>
          <motion.p 
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Real projects that demonstrate my ability to build clean, functional interfaces.
            Each project showcases different skills and problem-solving approaches.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.02,
                rotateY: 5,
                boxShadow: "0 0 20px rgba(147, 51, 234, 0.2)"
              }}
              className="group relative bg-zinc-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-zinc-800/50"
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600/70 via-blue-500/20 to-purple-600/70"
                animate={{
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />

              {/* Project Image */}
              <div className="relative h-32 md:h-40">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover filter brightness-75 group-hover:brightness-100 transition-all duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-4 relative z-10">
                {/* Project Type Badge */}
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    project.projectType === 'university' 
                      ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' 
                      : project.projectType === 'collaborative'
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                  }`}>
                    {project.projectType === 'university' ? '📚 University Project' : 
                     project.projectType === 'collaborative' ? '🤝 Collaborative Project' : 
                     '💻 Personal Project'}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3">
                  {project.description}
                </p>
                
                {/* Highlights/Bullet Points */}
                <ul className="text-gray-400 text-xs space-y-1 mb-4">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-purple-400 mt-0.5">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Links with enhanced animations */}
                <div className="flex gap-3">
                  {project.links.github && (
                    <motion.a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-purple-400"
                      whileHover={{ 
                        scale: 1.2,
                        rotate: [0, -10, 10, -10, 0],
                        transition: { duration: 0.3 }
                      }}
                    >
                      <FaGithub size={20} />
                    </motion.a>
                  )}
                  {project.links.youtube && (
                    <motion.a
                      href={project.links.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-red-500"
                      whileHover={{ 
                        scale: 1.2,
                        rotate: [0, -10, 10, -10, 0],
                        transition: { duration: 0.3 }
                      }}
                    >
                      <FaYoutube size={20} />
                    </motion.a>
                  )}
                  {project.links.live && (
                    <motion.a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400"
                      whileHover={{ 
                        scale: 1.2,
                        rotate: [0, -10, 10, -10, 0],
                        transition: { duration: 0.3 }
                      }}
                    >
                      <FaExternalLinkAlt size={20} />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;