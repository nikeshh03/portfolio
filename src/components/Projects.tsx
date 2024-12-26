import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'HR Analytics Platform',
      description: 'Full-stack HR analytics solution for workforce management and prediction.',
      tech: ['Django', 'ReactJS', 'PostgreSQL', 'Hugging Face'],
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800',
      details: [
        'Built interface using Hugging Face for integrated ML models',
        'Implemented real-time predictions for workforce management',
        'Developed full-stack solution with Django and ReactJS'
      ],
      links: {
        github: 'https://github.com/nikeshh03'
      }
    },
    {
      title: 'Deepfake Detection using HMD Net',
      description: 'Advanced AI-powered deepfake detection system using hybrid multimodal approach.',
      tech: ['Python', 'TensorFlow', 'OpenCV', 'Bi-LSTM'],
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800',
      details: [
        'Developed Hybrid Multimodal Detection Network',
        'Integrated XAI for transparent decision explanations',
        'Used unique Indian datasets for refined accuracy'
      ],
      links: {
        github: 'https://github.com/nikeshh03'
      }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;