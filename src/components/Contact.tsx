import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      text: '+91 - 9307101041',
      href: 'tel:+919307101041'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      text: 'work.nikeshmpatil@gmail.com',
      href: 'mailto:work.nikeshmpatil@gmail.com'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      text: 'Dhule, Maharashtra, India',
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Get in Touch
          </span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                {info.icon}
              </div>
              {info.href ? (
                <a
                  href={info.href}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {info.text}
                </a>
              ) : (
                <span className="text-gray-300">{info.text}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;