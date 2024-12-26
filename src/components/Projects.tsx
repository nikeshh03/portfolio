import React from 'react';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';
import { Briefcase, Users } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'HR Analytics Platform',
      description: 'Modern HR analytics platform built with React, TypeScript, and Supabase, offering real-time insights and data visualization for effective workforce management.',
      tech: ['React', 'TypeScript', 'Supabase', 'TailwindCSS', 'Chart.js'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015',
      icon: Briefcase,
      details: [
        'Developed responsive dashboard with real-time analytics',
        'Implemented secure authentication and role-based access',
        'Created interactive data visualizations using Chart.js',
        'Built RESTful API endpoints with Supabase functions'
      ],
      links: {
        github: 'https://github.com/nikeshh03',
        demo: 'https://hr-analytics-demo.netlify.app'
      }
    },
    {
      title: 'SmartTrack',
      description: 'Advanced facial recognition attendance system using deep learning, providing seamless and contactless attendance tracking with real-time monitoring.',
      tech: ['Python', 'TensorFlow', 'OpenCV', 'FastAPI', 'React'],
      image: 'https://images.unsplash.com/photo-1587837073080-448bc6a2329b?auto=format&fit=crop&q=80&w=2015',
      icon: Users,
      details: [
        'Implemented face detection using MTCNN with 99.5% accuracy',
        'Built real-time attendance tracking with facial recognition',
        'Developed dashboard for attendance monitoring and reports',
        'Integrated automated email notifications system'
      ],
      links: {
        github: 'https://github.com/nikeshh03'
      }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px]" />
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-pink-500/10 animate-pulse" style={{ animationDuration: '8s' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Innovative solutions combining modern web technologies with artificial intelligence
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;