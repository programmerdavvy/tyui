import React from 'react';
import { Mail, Phone, MapPin, Github, Twitter, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Games', href: '#games' },
      { name: 'Services', href: '#services' },
      { name: 'Team', href: '#team' }
    ],
    support: [
      { name: 'Contact', href: '#contact' },
      { name: 'FAQ', href: '#' },
      { name: 'Support', href: '#' },
      { name: 'Privacy Policy', href: '#' }
    ],
    games: [
      { name: 'Puzzle Master Pro', href: '#' },
      { name: 'Quick Tap Frenzy', href: '#' },
      { name: 'Adventure Quest', href: '#' },
      { name: 'Coming Soon', href: '#games' }
    ]
  };

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/Untitled design (1).png" 
                alt="Velorn Studios" 
                className="w-10 h-10 object-contain"
              />
              <span className="text-2xl font-bold text-orange-500">Velorn Studios</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Creating engaging puzzle, hyper casual, and casual hybrid games that captivate players worldwide.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-4 h-4 text-orange-500" />
                <span className="text-sm">Sheridan, Wyoming</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-4 h-4 text-orange-500" />
                <span className="text-sm">+1 (409) 419-3594</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-4 h-4 text-orange-500" />
                <span className="text-sm">hello@velornstudios.com</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-orange-500 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-orange-500 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Games Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Our Games</h4>
            <ul className="space-y-2">
              {footerLinks.games.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-orange-500 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links & Newsletter */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex items-center space-x-6">
              <span className="text-gray-400 text-sm">Follow us:</span>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors group"
                  >
                    <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white" />
                  </a>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <input
                type="email"
                placeholder="Subscribe to our newsletter"
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
              />
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center space-x-1">
            <span>&copy; {currentYear} Velorn Studios. All rights reserved.</span>
            <span>•</span>
            <span className="flex items-center space-x-1">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>for gamers worldwide</span>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;