import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  title: string;
  icon: LucideIcon;
  skills: string[];
}

const SkillCard: React.FC<SkillCardProps> = ({ title, icon: Icon, skills }) => {
  return (
    <div className="group backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors">
      <div className="flex items-center mb-4">
        <Icon className="w-6 h-6 text-purple-500 group-hover:text-pink-500 transition-colors" />
        <h3 className="text-xl font-semibold ml-2 text-gray-200">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 text-sm backdrop-blur-md bg-black/20 border border-white/10 rounded-full text-gray-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;