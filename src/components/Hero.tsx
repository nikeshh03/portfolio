import React from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            AI/ML Engineer
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Building intelligent solutions with cutting-edge AI technology for real-world applications
        </p>
        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://github.com/nikeshh03"
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-110 transition-transform"
          >
            <Github className="w-8 h-8" />
          </a>
          <a
            href="https://linkedin.com/in/nikeshh03"
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-110 transition-transform"
          >
            <Linkedin className="w-8 h-8" />
          </a>
          <a
            href="mailto:work.nikeshmpatil@gmail.com"
            className="transform hover:scale-110 transition-transform"
          >
            <Mail className="w-8 h-8" />
          </a>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8" />
        </div>
      </div>
    </section>
  );
};

export default Hero;