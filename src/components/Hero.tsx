import React from 'react';
import { Play, Gamepad2, Puzzle } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900/20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f97316%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse">
</div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo Animation */}
          <div className="mb-8 animate-bounce">
            <img 
              src="/Untitled design (1).png" 
              alt="Velorn Studios" 
              className="w-24 h-24 mx-auto mb-4 drop-shadow-2xl"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
            Velorn Studios
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Crafting engaging <span className="text-orange-500 font-semibold">puzzle</span>, 
            <span className="text-orange-500 font-semibold"> hyper casual</span>, and 
            <span className="text-orange-500 font-semibold"> casual hybrid games</span> that captivate players worldwide
          </p>

          {/* Feature Icons */}
          <div className="flex justify-center space-x-8 mb-12">
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mb-2 group-hover:bg-orange-500/30 transition-colors">
                <Puzzle className="w-8 h-8 text-orange-500" />
              </div>
              <span className="text-sm text-gray-400">Puzzle Games</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mb-2 group-hover:bg-orange-500/30 transition-colors">
                <Gamepad2 className="w-8 h-8 text-orange-500" />
              </div>
              <span className="text-sm text-gray-400">Casual Games</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mb-2 group-hover:bg-orange-500/30 transition-colors">
                <Play className="w-8 h-8 text-orange-500" />
              </div>
              <span className="text-sm text-gray-400">Hyper Casual</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#games"
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Explore Our Games
            </a>
            <a
              href="#contact"
              className="border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-full font-semibold hover:bg-orange-500 hover:text-white transform hover:scale-105 transition-all duration-200"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-orange-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-orange-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
