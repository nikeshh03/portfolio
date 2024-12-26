import React from 'react';
import { LucideIcon } from 'lucide-react';

interface Skill {
  name: string;
  logo: string;
}

interface SkillCardProps {
  title: string;
  icon: LucideIcon;
  skills: Skill[];
}

const SkillCard: React.FC<SkillCardProps> = ({ title, icon: Icon, skills }) => {
  return (
    <div className="group backdrop-blur-md bg-white/5 border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-[1.02]">
      <div className="flex items-center mb-6">
        <Icon className="w-8 h-8 text-purple-500 group-hover:text-pink-500 transition-colors" />
        <h3 className="text-2xl font-semibold ml-3 text-gray-200">{title}</h3>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-3 backdrop-blur-md bg-black/20 border border-white/10 rounded-lg hover:bg-white/5 transition-all duration-300 group"
          >
            <img
              src={skill.logo}
              alt={skill.name}
              className="w-10 h-10 mb-2 filter group-hover:brightness-125 transition-all duration-300"
            />
            <span className="text-sm text-gray-300 text-center">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;