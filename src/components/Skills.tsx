import React from 'react';
import { Code2, Database, Brain, Wrench } from 'lucide-react';
import SkillCard from './SkillCard';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code2,
      skills: ['Python', 'JavaScript']
    },
    {
      title: 'Frameworks & Libraries',
      icon: Database,
      skills: ['Flask', 'Django', 'ReactJS', 'TailwindCSS', 'TensorFlow', 'Keras']
    },
    {
      title: 'Machine Learning',
      icon: Brain,
      skills: ['Machine Learning', 'Deep Learning', 'LLM', 'RAG', 'Agents', 'Prompt Engineering', 'NLP']
    },
    {
      title: 'Tools & Technologies',
      icon: Wrench,
      skills: ['Git', 'Github', 'Hugging Face', 'Kaggle', 'Google Colab', 'MLFlow', 'PostgreSQL']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Skills & Certifications
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;