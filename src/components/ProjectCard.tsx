import React from 'react';
import { ExternalLink, Github, LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  image: string;
  icon: LucideIcon;
  details: string[];
  links?: {
    demo?: string;
    github?: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tech,
  image,
  icon: Icon,
  details,
  links
}) => {
  return (
    <div className="group relative overflow-hidden rounded-xl backdrop-blur-md bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-500">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative h-64 overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
          className="h-full"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black" />
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute top-4 left-4 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
          <Icon className="w-6 h-6 text-purple-400" />
        </div>
      </div>
      
      <div className="relative p-6">
        <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          {title}
        </h3>
        
        <p className="text-gray-300 mb-4 leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs backdrop-blur-md bg-white/5 border border-white/10 rounded-full text-gray-300 hover:bg-white/10 transition-colors"
            >
              {item}
            </span>
          ))}
        </div>

        <ul className="space-y-2 mb-6">
          {details.map((detail, index) => (
            <li key={index} className="flex items-start text-sm text-gray-300">
              <span className="w-2 h-2 mt-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-2 flex-shrink-0" />
              {detail}
            </li>
          ))}
        </ul>

        {links && (
          <div className="flex gap-6 pt-4 border-t border-white/10">
            {links.demo && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                href={links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-purple-400 hover:text-pink-400 transition-colors group"
              >
                <ExternalLink className="w-5 h-5" />
                <span>Live Demo</span>
              </motion.a>
            )}
            {links.github && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-purple-400 hover:text-pink-400 transition-colors group"
              >
                <Github className="w-5 h-5" />
                <span>Source Code</span>
              </motion.a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;