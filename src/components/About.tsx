import React from 'react';
import { Brain, Code, MessageSquare, Award, Lightbulb, Target } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Expertise',
      description: 'Specialized in deep learning, NLP, and real-time data-centric projects including deepfake detection',
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'Experience with modern web technologies including Django, ReactJS, and PostgreSQL',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      icon: MessageSquare,
      title: 'Communication',
      description: 'Strong communication skills with ability to explain complex technical concepts clearly',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Award,
      title: 'Achievement Oriented',
      description: 'Proven track record of delivering high-impact AI solutions and meeting project goals',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Focus',
      description: 'Constantly exploring cutting-edge AI technologies and implementing novel solutions',
      gradient: 'from-rose-500 to-pink-500'
    },
    {
      icon: Target,
      title: 'Problem Solving',
      description: 'Analytical approach to solving complex technical challenges with practical solutions',
      gradient: 'from-pink-500 to-purple-500'
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Dedicated AI/ML software engineer with hands-on experience in building and deploying AI-based solutions.
            Passionate about creating innovative solutions that make a real impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              <div className={`inline-block p-3 rounded-lg bg-gradient-to-r ${feature.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-200">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;