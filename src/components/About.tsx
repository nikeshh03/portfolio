import React from 'react';
import { Brain, Code, MessageSquare } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-900 p-6 rounded-lg">
            <Brain className="w-12 h-12 mb-4 text-purple-500" />
            <h3 className="text-xl font-semibold mb-2">AI Expertise</h3>
            <p className="text-gray-400">
              Specialized in deep learning, NLP, and real-time data-centric projects including deepfake detection
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <Code className="w-12 h-12 mb-4 text-pink-500" />
            <h3 className="text-xl font-semibold mb-2">Full Stack Development</h3>
            <p className="text-gray-400">
              Experience with modern web technologies including Django, ReactJS, and PostgreSQL
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <MessageSquare className="w-12 h-12 mb-4 text-purple-500" />
            <h3 className="text-xl font-semibold mb-2">Communication</h3>
            <p className="text-gray-400">
              Strong communication skills with ability to explain complex technical concepts clearly
            </p>
          </div>
        </div>
        <div className="mt-12 text-gray-400 leading-relaxed">
          <p className="mb-4">
            Dedicated AI/ML software engineer with hands-on experience in building and deploying AI-based solutions. 
            Experienced in deep learning, natural language processing, and real-time data-centric projects including 
            the detection of deepfakes with advanced AI models such as Hybrid Multimodal Detection (HMD-Net) and 
            Explainable AI (XAI).
          </p>
          <p>
            Proven capability to build scalable solutions aligned to specific use cases by using cutting-edge AI 
            technology for real-world applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;