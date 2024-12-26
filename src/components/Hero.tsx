import React from 'react';
import { Github, Linkedin, Mail, ChevronDown, Terminal } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-16 bg-gradient-to-b from-black via-purple-900/10 to-black">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072')] bg-cover bg-center opacity-10" />
      
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-pink-500/10 animate-pulse" style={{ animationDuration: '8s' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="flex items-center justify-center mb-6">
          <Terminal className="w-12 h-12 text-purple-500 animate-pulse" />
        </div>
        
        <h1 className="text-5xl sm:text-7xl font-bold mb-6 tracking-tight">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            AI/ML Engineer
          </span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Crafting intelligent solutions with cutting-edge AI technology for real-world applications.
          Specialized in Deep Learning, NLP, and Computer Vision.
        </p>
        
        <div className="flex justify-center space-x-8 mb-16">
          {[
            { href: "https://github.com/nikeshh03", icon: Github, label: "GitHub" },
            { href: "https://linkedin.com/in/nikeshh03", icon: Linkedin, label: "LinkedIn" },
            { href: "mailto:work.nikeshmpatil@gmail.com", icon: Mail, label: "Email" }
          ].map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center transform hover:scale-110 transition-all duration-300"
            >
              <div className="p-4 rounded-full bg-white/5 border border-white/10 group-hover:border-purple-500 transition-colors">
                <link.icon className="w-6 h-6 text-gray-300 group-hover:text-purple-500 transition-colors" />
              </div>
              <span className="mt-2 text-sm text-gray-400 group-hover:text-purple-500 transition-colors">
                {link.label}
              </span>
            </a>
          ))}
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <ChevronDown className="w-8 h-8 text-purple-500 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;