import React from 'react';
import { Code2, Database, Brain, Wrench } from 'lucide-react';
import SkillCard from './SkillCard';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code2,
      skills: [
        { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' }
      ]
    },
    {
      title: 'Frameworks & Libraries',
      icon: Database,
      skills: [
        { name: 'Flask', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
        { name: 'Django', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
        { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'TailwindCSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
        { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
        { name: 'Keras', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg' }
      ]
    },
    {
      title: 'Machine Learning',
      icon: Brain,
      skills: [
        { name: 'Machine Learning', logo: 'https://img.icons8.com/color/48/000000/machine-learning.png' },
        { name: 'Deep Learning', logo: 'https://img.icons8.com/color/48/000000/neural-network.png' },
        { name: 'LLM', logo: 'https://img.icons8.com/color/48/000000/artificial-intelligence.png' },
        { name: 'RAG', logo: 'https://img.icons8.com/color/48/000000/document-exchange.png' },
        { name: 'NLP', logo: 'https://img.icons8.com/color/48/000000/language.png' }
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: Wrench,
      skills: [
        { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
        { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
        { name: 'Hugging Face', logo: 'https://huggingface.co/front/assets/huggingface_logo.svg' },
        { name: 'MLFlow', logo: 'https://raw.githubusercontent.com/mlflow/mlflow/master/docs/source/_static/MLflow-logo-final-black.png' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Skills & Expertise
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