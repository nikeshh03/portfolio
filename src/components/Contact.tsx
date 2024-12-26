import React from 'react';
import { Phone, Mail, MapPin, Send, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      text: '+91 - 9307101041',
      href: 'tel:+919307101041',
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Mail,
      title: 'Email',
      text: 'work.nikeshmpatil@gmail.com',
      href: 'mailto:work.nikeshmpatil@gmail.com',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      icon: MapPin,
      title: 'Location',
      text: 'Dhule, Maharashtra, India',
      href: null,
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      title: 'GitHub',
      href: 'https://github.com/nikeshh03',
      gradient: 'from-gray-600 to-gray-800'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      href: 'https://linkedin.com/in/nikeshh03',
      gradient: 'from-blue-500 to-blue-700'
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-gradient-to-b from-gray-900 to-black">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Let's connect and discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="group backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              <div className={`inline-block p-3 rounded-lg bg-gradient-to-r ${info.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <info.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-200">
                {info.title}
              </h3>
              {info.href ? (
                <a
                  href={info.href}
                  className="text-gray-300 hover:text-purple-500 transition-colors"
                >
                  {info.text}
                </a>
              ) : (
                <span className="text-gray-300">{info.text}</span>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-8">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center"
            >
              <div className={`p-4 rounded-full bg-gradient-to-r ${link.gradient} group-hover:scale-110 transition-transform duration-300`}>
                <link.icon className="w-6 h-6 text-white" />
              </div>
              <span className="mt-2 text-sm text-gray-400 group-hover:text-white transition-colors">
                {link.title}
              </span>
            </a>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="mailto:work.nikeshmpatil@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:opacity-90 transition-opacity group"
          >
            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            Send Message
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;