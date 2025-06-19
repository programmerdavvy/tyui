import React from 'react';
import { Target, Users, Lightbulb, Award } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '50+', label: 'Games Published', icon: Award },
    { number: '10M+', label: 'Downloads', icon: Users },
    { number: '5+', label: 'Years Experience', icon: Target },
    { number: '100%', label: 'Passion Driven', icon: Lightbulb },
  ];

  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
            About Velorn Studios
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We are passionate game developers dedicated to creating memorable gaming experiences 
            that bring joy, challenge, and entertainment to players around the world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              At Velorn Studios, we believe that great games start with great ideas. Our mission is to 
              craft engaging puzzle, hyper casual, and casual hybrid games that not only entertain but 
              also challenge players to think creatively and have fun.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              We combine innovative gameplay mechanics with polished design to create experiences that 
              are easy to learn but hard to master, ensuring our games appeal to both casual and dedicated gamers.
            </p>
            <div className="flex space-x-4 pt-4">
              <div className="w-2 h-16 bg-gradient-to-b from-orange-500 to-orange-600 rounded-full"></div>
              <div className="space-y-2">
                <h4 className="text-orange-500 font-semibold">Innovation First</h4>
                <p className="text-gray-400">We push boundaries to create unique gaming experiences</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-2xl p-8 backdrop-blur-sm border border-orange-500/20">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-orange-500/30 transition-colors">
                      <stat.icon className="w-8 h-8 text-orange-500" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-500/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-orange-600/10 rounded-full blur-xl"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700/50 hover:border-orange-500/30 transition-colors group">
            <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-500/30 transition-colors">
              <Target className="w-6 h-6 text-orange-500" />
            </div>
            <h4 className="text-xl font-semibold text-white mb-3">Player-Focused Design</h4>
            <p className="text-gray-400">Every decision we make is centered around creating the best possible experience for our players.</p>
          </div>
          
          <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700/50 hover:border-orange-500/30 transition-colors group">
            <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-500/30 transition-colors">
              <Lightbulb className="w-6 h-6 text-orange-500" />
            </div>
            <h4 className="text-xl font-semibold text-white mb-3">Creative Innovation</h4>
            <p className="text-gray-400">We constantly explore new ideas and mechanics to keep our games fresh and exciting.</p>
          </div>
          
          <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700/50 hover:border-orange-500/30 transition-colors group">
            <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-500/30 transition-colors">
              <Award className="w-6 h-6 text-orange-500" />
            </div>
            <h4 className="text-xl font-semibold text-white mb-3">Quality Excellence</h4>
            <p className="text-gray-400">We maintain the highest standards in game development, from concept to release.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;