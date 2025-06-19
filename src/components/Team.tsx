import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Lead Game Developer",
      bio: "10+ years of experience in game development with expertise in Unity and mobile optimization.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      skills: ["Unity", "C#", "Mobile Development", "Game Architecture"],
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Sarah Johnson",
      role: "Creative Director",
      bio: "Passionate about creating engaging user experiences and innovative game mechanics.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      skills: ["Game Design", "UI/UX", "Art Direction", "Creative Strategy"],
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Mike Rodriguez",
      role: "Technical Artist",
      bio: "Bridging the gap between art and technology to create visually stunning games.",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      skills: ["3D Modeling", "Shaders", "Animation", "Technical Art"],
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Emily Davis",
      role: "Game Designer",
      bio: "Specializes in puzzle mechanics and level design with a focus on player engagement.",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
      skills: ["Level Design", "Puzzle Mechanics", "Player Psychology", "Balancing"],
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#"
      }
    }
  ];

  return (
    <section id="team" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our talented team of developers, designers, and artists work together to create 
            exceptional gaming experiences that players love.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700/50 hover:border-orange-500/30 transition-all duration-300 group hover:transform hover:scale-105">
              <div className="relative overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <div className="flex space-x-3">
                    <a href={member.social.github} className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                      <Github className="w-4 h-4 text-white" />
                    </a>
                    <a href={member.social.linkedin} className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                      <Linkedin className="w-4 h-4 text-white" />
                    </a>
                    <a href={member.social.twitter} className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                      <Twitter className="w-4 h-4 text-white" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-orange-500 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{member.bio}</p>
                
                <div className="space-y-2">
                  <h4 className="text-white font-semibold text-sm">Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-2 py-1 bg-orange-500/20 text-orange-400 text-xs rounded-full border border-orange-500/30">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 rounded-2xl p-8 border border-orange-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Join Our Team</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for creating amazing games. 
              If you're interested in joining our team, we'd love to hear from you.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-200"
            >
              <Mail className="w-4 h-4" />
              <span>Get In Touch</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;