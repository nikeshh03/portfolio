import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, User, Briefcase, Code2, GraduationCap, MessageSquare } from 'lucide-react';
import NavItem from './NavItem';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '#about', icon: User, label: 'About' },
    { href: '#projects', icon: Briefcase, label: 'Projects' },
    { href: '#skills', icon: Code2, label: 'Skills' },
    { href: '#education', icon: GraduationCap, label: 'Education' },
    { href: '#contact', icon: MessageSquare, label: 'Contact' }
  ];

  const socialLinks = [
    { href: 'https://github.com/nikeshh03', icon: Github },
    { href: 'https://linkedin.com/in/nikeshh03', icon: Linkedin },
    { href: 'mailto:work.nikeshmpatil@gmail.com', icon: Mail }
  ];

  return (
    <nav className="fixed w-full backdrop-blur-md bg-black/50 z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Nikesh Patil
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navItems.map((item) => (
              <NavItem
                key={item.href}
                href={item.href}
                icon={item.icon}
                label={item.label}
              />
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-white/5 transition-colors"
              >
                <link.icon className="w-5 h-5 text-gray-400 hover:text-purple-500 transition-colors" />
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-400" />
            ) : (
              <Menu className="w-6 h-6 text-gray-400" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden backdrop-blur-md bg-black/50 border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <NavItem
                key={item.href}
                href={item.href}
                icon={item.icon}
                label={item.label}
                onClick={() => setIsOpen(false)}
              />
            ))}
          </div>
          <div className="flex justify-center space-x-6 py-4 border-t border-white/10">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-white/5 transition-colors"
              >
                <link.icon className="w-5 h-5 text-gray-400 hover:text-purple-500 transition-colors" />
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;