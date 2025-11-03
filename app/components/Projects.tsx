'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaYoutube, FaExternalLinkAlt } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  image: string;
  links: {
    github?: string;
    youtube?: string;
    live?: string;
  };
  tags: string[];
  category: 'featured' | 'other';
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: 'Pause+ Social Media Detox App (Ongoing)',
      description: 'Developed the gamified experience and ranking system as a collaborative effort. Created and produced the marketing video for app promotion and user engagement.',
      image: '/images/pause.png',
      links: {
        youtube: 'https://youtu.be/VFHqTC7uQrg?si=wB2nI3EV3Fbelzvf',
        live: 'https://pauseplus.click'
      },
      tags: ['React Native', 'Node.js', 'MongoDB'],
      category: 'featured'
    },
    {
      title: 'Nestora Real Estate Platform',
      description: 'A property listing website with advanced search and filtering. Features detailed property views including floor plans, location maps and Built with a user-friendly interface for seamless real estate browsing.',
      image: '/images/nestora.png',
      links: {
        github: 'https://github.com/wapnethmitha/Nestora-RealEstate',
      },
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      category: 'featured'
    },
    {
      title: 'Plane Ticket Management System',
      description: 'Java application for airline ticket operations including purchasing, cancelling, and viewing ticket details. Features an interactive seat map showing available and booked seats.',
      image: '/images/planeseatmanagement.png',
      links: {
        github: 'https://github.com/wapnethmitha/Plane-Ticket_Management-System'
      },
      tags: ['Java', 'Spring Boot', 'MySQL'],
      category: 'featured'
    },
    {
      title: 'Bookstore Management API',
      description: 'RESTful APIs for managing books, customers, and orders in a bookstore. Tested using Postman to ensure proper functionality and error handling.',
      image: '/images/bookstoreapi.png',
      links: {
        github: 'https://github.com/wapnethmitha/Book-Store-API'
      },
      tags: ['Node.js', 'Express', 'MongoDB'],
      category: 'other'
    },
    {
      title: 'Event Ticketing System',
      description: 'Multi-threaded app where vendors release tickets and users buy them via a producer-consumer model. Shows concurrency and thread use.',
      image: '/images/eventticketingsystem.png',
      links: {
        github: 'https://github.com/wapnethmitha/Event-Ticketing-System'
      },
      tags: ['React', 'Node.js', 'Socket.io'],
      category: 'other'
    },
    {
      title: 'Student Grading System',
      description: 'Python program that classifies student progress and displays results as a histogram. Focuses on decision-making logic and data visualization.',
      image: '/images/studentgradingsystem.webp',
      links: {
        github: 'https://github.com/wapnethmitha/Student-Grading_System'
      },
      tags: ['Python', 'SQLite', 'Tkinter'],
      category: 'other'
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
            Here are some of my key academic projects that showcase my skills in software development, 
            problem-solving, and technical implementation.
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
                <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

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