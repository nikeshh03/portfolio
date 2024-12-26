import React from 'react';
import { Github, Linkedin, Mail, Heart, Coffee } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/nikeshh03',
      label: 'GitHub',
      color: 'hover:text-purple-500'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/nikeshh03',
      label: 'LinkedIn',
      color: 'hover:text-blue-500'
    },
    {
      icon: Mail,
      href: 'mailto:work.nikeshmpatil@gmail.com',
      label: 'Email',
      color: 'hover:text-pink-500'
    }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black py-12">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 items-center border-b border-white/10 pb-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
              Nikesh Patil
            </h3>
            <p className="text-gray-400">
              AI/ML Engineer & Full Stack Developer
            </p>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center space-x-6">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transform hover:scale-110 transition-all duration-300 ${link.color}`}
                  aria-label={link.label}
                >
                  <link.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Let's Connect
            </a>
          </div>
        </div>
        
        <div className="pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>and</span>
            <Coffee className="w-4 h-4 text-yellow-500" />
            <span>by Nikesh Patil</span>
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;