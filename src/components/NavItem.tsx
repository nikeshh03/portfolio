import React from 'react';
import { LucideIcon } from 'lucide-react';

interface NavItemProps {
  href: string;
  icon: LucideIcon;
  label: string;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ href, icon: Icon, label, onClick }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className="group flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/5 transition-colors"
    >
      <Icon className="w-5 h-5 text-gray-400 group-hover:text-purple-500 transition-colors" />
      <span className="text-gray-300 group-hover:text-white transition-colors">
        {label}
      </span>
    </a>
  );
};

export default NavItem;