import React from 'react';
import { ExternalLink, Star, Download, Users } from 'lucide-react';

const Games = () => {
  const games = [
    {
      title: "Puzzle Master Pro",
      category: "Puzzle",
      description: "Challenge your mind with intricate puzzles that test logic and creativity. Features over 200 handcrafted levels.",
      image: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.8,
      downloads: "2M+",
      status: "Live"
    },
    {
      title: "Quick Tap Frenzy",
      category: "Hyper Casual",
      description: "Fast-paced tapping game that tests your reflexes. Simple to play, impossible to master.",
      image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.6,
      downloads: "5M+",
      status: "Live"
    },
    {
      title: "Adventure Quest",
      category: "Casual Hybrid",
      description: "Embark on epic adventures combining puzzle-solving with casual gameplay mechanics.",
      image: "https://images.pexels.com/photos/1293261/pexels-photo-1293261.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.9,
      downloads: "1.5M+",
      status: "Live"
    },
    {
      title: "Color Cascade",
      category: "Puzzle",
      description: "Match colors in this visually stunning puzzle game with physics-based gameplay.",
      image: "https://images.pexels.com/photos/1337247/pexels-photo-1337247.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.7,
      downloads: "800K+",
      status: "Coming Soon"
    },
    {
      title: "Swipe & Score",
      category: "Hyper Casual",
      description: "Addictive swiping mechanics meet strategic gameplay in this innovative casual game.",
      image: "https://images.pexels.com/photos/194511/pexels-photo-194511.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.5,
      downloads: "3M+",
      status: "Live"
    },
    {
      title: "Mind Maze",
      category: "Casual Hybrid",
      description: "Navigate through complex mazes while solving puzzles and collecting rewards.",
      image: "https://images.pexels.com/photos/1040157/pexels-photo-1040157.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.8,
      downloads: "Coming Soon",
      status: "In Development"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Puzzle': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Hyper Casual': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Casual Hybrid': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live': return 'bg-green-500/20 text-green-400';
      case 'Coming Soon': return 'bg-yellow-500/20 text-yellow-400';
      case 'In Development': return 'bg-orange-500/20 text-orange-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <section id="games" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
            Our Games
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover our collection of engaging games across puzzle, hyper casual, and casual hybrid genres. 
            Each game is crafted with love and attention to detail.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <div key={index} className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700/50 hover:border-orange-500/30 transition-all duration-300 group hover:transform hover:scale-105">
              <div className="relative overflow-hidden">
                <img 
                  src={game.image} 
                  alt={game.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(game.category)}`}>
                    {game.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(game.status)}`}>
                    {game.status}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-600 transition-colors flex items-center space-x-2">
                    <ExternalLink className="w-4 h-4" />
                    <span>View Game</span>
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{game.title}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{game.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm text-gray-300">{game.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Download className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-300">{game.downloads}</span>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                    <Users className="w-4 h-4 text-orange-500" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-6">More exciting games coming soon!</p>
          <a
            href="#contact"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-200"
          >
            <span>Stay Updated</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Games;