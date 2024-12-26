import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  image: string;
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
  details,
  links
}) => {
  return (
    <div className="group relative overflow-hidden rounded-xl backdrop-blur-md bg-white/5 border border-white/10 transition-all duration-500 hover:scale-[1.02] hover:bg-white/10">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      
      <div className="relative p-6">
        <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          {title}
        </h3>
        
        <p className="text-gray-300 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs backdrop-blur-md bg-white/5 border border-white/10 rounded-full text-gray-300"
            >
              {item}
            </span>
          ))}
        </div>

        <ul className="space-y-2 mb-4">
          {details.map((detail, index) => (
            <li key={index} className="flex items-start text-sm text-gray-300">
              <span className="w-2 h-2 mt-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-2 flex-shrink-0" />
              {detail}
            </li>
          ))}
        </ul>

        {links && (
          <div className="flex gap-4 mt-4">
            {links.demo && (
              <a
                href={links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-purple-500 hover:text-pink-500 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
            {links.github && (
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-purple-500 hover:text-pink-500 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Source</span>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;