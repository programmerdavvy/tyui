import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Globe } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["1309 Coffeen Avenue STE 1200", "Sheridan, Wyoming 82801"],
      link: "https://maps.google.com/?q=1309+Coffeen+Avenue+STE+1200+Sheridan+Wyoming+82801"
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (409) 419-3594"],
      link: "tel:+14094193594"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["hello@velornstudios.com", "support@velornstudios.com"],
      link: "mailto:hello@velornstudios.com"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Weekend: By Appointment"],
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to start your next gaming project? We'd love to hear from you. 
            Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                      <info.icon className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{info.title}</h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-400">
                          {info.link ? (
                            <a href={info.link} className="hover:text-orange-500 transition-colors">
                              {detail}
                            </a>
                          ) : (
                            detail
                          )}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/10 rounded-xl p-6 border border-orange-500/20">
              <div className="flex items-center space-x-3 mb-4">
                <Globe className="w-6 h-6 text-orange-500" />
                <h4 className="text-white font-semibold">Global Reach</h4>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                While we're based in Wyoming, we work with clients worldwide. 
                Our games have reached players across all continents, and we're 
                always excited to collaborate on international projects.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-700/50">
            <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                >
                  <option value="">Select a subject</option>
                  <option value="game-development">Game Development</option>
                  <option value="consulting">Consulting</option>
                  <option value="partnership">Partnership</option>
                  <option value="support">Support</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors resize-none"
                  placeholder="Tell us about your project or inquiry..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 rounded-2xl p-8 border border-orange-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Let's Create Something Amazing</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Whether you have a game concept, need development services, or want to discuss a partnership, 
              we're here to help turn your vision into reality. Let's build the next great gaming experience together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;