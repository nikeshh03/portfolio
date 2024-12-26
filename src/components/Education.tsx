import React from 'react';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'B.Tech in Artificial Intelligence and Machine Learning',
      institution: 'R. C. Patel Institute of Technology',
      period: '2021 - 2025'
    },
    {
      degree: 'HSC in Science stream',
      institution: 'Jai Hind Junior College',
      period: '2019 - 2021'
    },
    {
      degree: 'SSC',
      institution: 'Jai Hind High School',
      period: '2009 - 2019'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Education
          </span>
        </h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-black p-6 rounded-lg border border-gray-800 flex items-start"
            >
              <div className="mr-4">
                <GraduationCap className="w-8 h-8 text-purple-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                <p className="text-gray-400">{edu.institution}</p>
                <p className="text-gray-500">{edu.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;