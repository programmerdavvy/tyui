import React from 'react';
import { Code, Palette, Smartphone, Gamepad2, Zap, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Game Development",
      description: "Full-cycle game development from concept to launch, specializing in puzzle, hyper casual, and casual hybrid games.",
      features: ["Unity & Unreal Engine", "Cross-platform Development", "Performance Optimization", "Code Architecture"]
    },
    {
      icon: Palette,
      title: "Game Design",
      description: "Creative game design services that focus on engaging gameplay mechanics and user experience.",
      features: ["Gameplay Mechanics", "Level Design", "UI/UX Design", "Art Direction"]
    },
    {
      icon: Smartphone,
      title: "Mobile Optimization",
      description: "Specialized mobile game optimization for iOS and Android platforms with focus on performance.",
      features: ["Platform Optimization", "Touch Controls", "Battery Efficiency", "App Store Optimization"]
    },
    {
      icon: Gamepad2,
      title: "Game Testing",
      description: "Comprehensive game testing services to ensure quality and bug-free gaming experiences.",
      features: ["Quality Assurance", "Performance Testing", "User Experience Testing", "Platform Compatibility"]
    },
    {
      icon: Zap,
      title: "Rapid Prototyping",
      description: "Quick game prototyping services to validate concepts and mechanics before full development.",
      features: ["Concept Validation", "Mechanic Testing", "Market Research", "Iterative Design"]
    },
    {
      icon: Users,
      title: "Consulting",
      description: "Game development consulting for studios and independent developers looking to improve their games.",
      features: ["Technical Consulting", "Design Review", "Monetization Strategy", "Publishing Guidance"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-800/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive game development services to bring your gaming ideas to life. 
            From concept to launch, we've got you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-900/50 rounded-xl p-8 border border-gray-700/50 hover:border-orange-500/30 transition-all duration-300 group hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:from-orange-500/30 group-hover:to-orange-600/30 transition-colors">
                <service.icon className="w-8 h-8 text-orange-500" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 pt-6 border-t border-gray-700/50">
                <button className="text-orange-500 font-semibold hover:text-orange-400 transition-colors flex items-center space-x-2 group">
                  <span>Learn More</span>
                  <div className="w-4 h-4 border-2 border-orange-500 rounded-full flex items-center justify-center group-hover:border-orange-400 transition-colors">
                    <div className="w-1 h-1 bg-orange-500 rounded-full group-hover:bg-orange-400 transition-colors"></div>
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-orange-500/10 to-orange-600/10 rounded-2xl p-8 border border-orange-500/20">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Start Your Project?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's discuss your game development needs and create something amazing together. 
              We're here to turn your vision into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-200"
              >
                Get Started
              </a>
              <a
                href="#games"
                className="border-2 border-orange-500 text-orange-500 px-8 py-3 rounded-full font-semibold hover:bg-orange-500 hover:text-white transform hover:scale-105 transition-all duration-200"
              >
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;