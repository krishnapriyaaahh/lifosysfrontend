import React, { useState, useEffect } from 'react';
import { 
  Briefcase, 
  TrendingUp, 
  Zap, 
  Bookmark, 
  ChevronUp, 
  Search, 
  Plus, 
  MessageSquare, 
  Star, 
  Users, 
  Eye,
  User,
  Lightbulb,
  Wrench,
  Sparkles,
  Bot,
  Palette,
  Box
} from 'lucide-react';

// Enhanced sidebar item with hover animations
const SidebarItem = ({ icon, label, count }) => (
  <div className="group flex items-center p-4 my-2 rounded-xl text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-blue-600/20 cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg border border-transparent hover:border-purple-500/30">
    <div className="text-xl mr-4 group-hover:scale-110 transition-transform duration-200">{icon}</div>
    <div className="flex-1">
      <span className="font-medium text-sm">{label}</span>
      {count && <div className="text-xs text-gray-500 mt-1">{count} tools</div>}
    </div>
    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  </div>
);

// Enhanced Logo component with gradient animations
const Logo = ({ children, gradient = "from-purple-500 to-blue-600" }) => (
  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center text-3xl text-white shadow-2xl transform transition-all duration-300 hover:scale-110 hover:rotate-3 relative overflow-hidden`}>
    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
    <div className="relative z-10">{children}</div>
  </div>
);

// Enhanced tool card with glassmorphism and animations
const ToolCard = ({ logo, name, description, tags, bookmarks, votes, redirectUrl, gradient, isPopular }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [currentVotes, setCurrentVotes] = useState(parseInt(votes));

  const handleRedirect = () => {
    window.open(redirectUrl, '_blank');
  };

  const handleBookmark = (e) => {
    e.stopPropagation();
    setIsBookmarked(!isBookmarked);
  };

  const handleVote = (e) => {
    e.stopPropagation();
    setCurrentVotes(prev => prev + 1);
  };

  return (
    <div 
      className={`group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl shadow-2xl p-8 mb-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 cursor-pointer transform hover:scale-[1.02] hover:shadow-purple-500/20 ${isHovered ? 'shadow-2xl' : ''}`}
      onClick={handleRedirect}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-blue-600/5 to-pink-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Popular badge */}
      {isPopular && (
        <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
          <Star size={12} />
          Popular
        </div>
      )}
      
      <div className="relative z-10 flex">
        <div className="flex-shrink-0 mr-8">
          <Logo gradient={gradient}>{logo}</Logo>
        </div>
        
        <div className="flex-grow">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">{name}</h3>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Users size={14} />
              <span>{bookmarks}</span>
              <Eye size={14} className="ml-2" />
              <span>12.4k</span>
            </div>
          </div>
          
          <p className="text-gray-300 mt-2 mb-4 text-base leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{description}</p>
          
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-blue-300 text-xs font-semibold px-3 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full border border-blue-500/30 hover:border-blue-400/50 hover:from-blue-600/30 hover:to-purple-600/30 transition-all duration-300 cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col items-end pl-8 gap-4">
          <button
            onClick={handleBookmark}
            className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
              isBookmarked 
                ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg' 
                : 'bg-gray-700/50 text-gray-400 hover:text-white hover:bg-gray-600/50'
            }`}
          >
            <Bookmark size={20} fill={isBookmarked ? 'currentColor' : 'none'} />
          </button>
          
          <div className="flex flex-col items-center">
            <button
              onClick={handleVote}
              className="group/vote flex flex-col items-center p-3 rounded-xl bg-gray-700/30 hover:bg-gradient-to-r hover:from-green-500/20 hover:to-emerald-500/20 border border-gray-600/50 hover:border-green-400/50 transition-all duration-300 transform hover:scale-105"
            >
              <ChevronUp size={24} className="text-gray-400 group-hover/vote:text-green-400 transition-colors duration-300" />
              <div className="text-white font-bold text-lg mt-1">{currentVotes}</div>
              <div className="text-gray-500 text-xs">votes</div>
            </button>
          </div>
        </div>
      </div>
      
      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </div>
  );
};

// Floating particles background
const FloatingParticles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 20 + 10,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-purple-400/20 to-blue-400/20 animate-pulse"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

const AppUI = () => {
  const [activeTab, setActiveTab] = useState('popular');
  const [searchQuery, setSearchQuery] = useState('');

  const tools = [
    {
      logo: <Sparkles />,
      name: 'ChatGPT',
      description: 'Revolutionize interaction, creativity, and innovation with the leader in AI conversation and content generation.',
      tags: ['#writing generators', '#ai chatbots', '#education', '#productivity'],
      bookmarks: '5592',
      votes: '847',
      redirectUrl: 'https://openai.com/chatgpt',
      gradient: 'from-green-500 to-emerald-600',
      isPopular: true
    },
    {
      logo: <Bot />,
      name: 'Claude 4',
      description: 'Next-generation AI assistant for complex reasoning, analysis, and creative tasks with unmatched safety.',
      tags: ['#ai chatbots', '#analysis', '#coding', '#research'],
      bookmarks: '2847',
      votes: '623',
      redirectUrl: 'https://www.anthropic.com/claude',
      gradient: 'from-purple-500 to-indigo-600',
      isPopular: true
    },
    {
      logo: <Palette />,
      name: 'Midjourney',
      description: 'Transform imagination into stunning visual art with AI-powered image generation and artistic creativity.',
      tags: ['#text to image', '#art generation', '#design', '#creative'],
      bookmarks: '4291',
      votes: '534',
      redirectUrl: 'https://www.midjourney.com',
      gradient: 'from-pink-500 to-rose-600'
    },
    {
      logo: <Zap />,
      name: 'Stable Diffusion',
      description: 'Open-source AI image generation with unlimited creative potential and customizable models.',
      tags: ['#open source', '#image generation', '#customizable'],
      bookmarks: '1832',
      votes: '412',
      redirectUrl: 'https://stability.ai',
      gradient: 'from-orange-500 to-red-600'
    }
  ];

  const categories = [
    { icon: <MessageSquare />, label: 'AI Chatbots & Assistants', count: 47 },
    { icon: <Palette />, label: 'Design & Creative Tools', count: 33 },
    { icon: <Wrench />, label: 'Writing & Content', count: 52 },
    { icon: <Briefcase />, label: 'Business & Productivity', count: 28 },
    { icon: <TrendingUp />, label: 'Marketing & Growth', count: 39 },
    { icon: <Lightbulb />, label: 'Research & Analysis', count: 24 },
    { icon: <Zap />, label: 'Developer Tools', count: 31 },
    { icon: <User />, label: 'Personal Assistant', count: 19 },
  ];

  return (
    <div className="relative flex bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen font-sans overflow-hidden">
      <FloatingParticles />
      
      {/* Enhanced Sidebar */}
      <div className="relative bg-gradient-to-b from-gray-900/90 to-gray-800/90 backdrop-blur-xl w-1/3 p-8 border-r border-gray-700/50 shadow-2xl">
        <div className="sticky top-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 bg-clip-text text-transparent mb-2">
              AI Tools Hub
            </h1>
            <p className="text-gray-400 text-sm">Discover the future of productivity</p>
          </div>
          
          {/* Search Bar */}
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-600/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:bg-gray-700/50 transition-all duration-300"
            />
          </div>
          
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <div className="w-1 h-6 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full"></div>
            Popular Categories
          </h2>
          
          <div className="space-y-1">
            {categories.map((cat, index) => (
              <SidebarItem key={index} icon={cat.icon} label={cat.label} count={cat.count} />
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Main Content */}
      <div className="flex-1 relative p-8 overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold text-white mb-2">Trending AI Tools</h2>
            <p className="text-gray-400">Discover the most popular AI tools used by professionals worldwide</p>
          </div>
          
          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              <Plus size={20} />
              Submit Tool
            </button>
          </div>
        </div>

        {/* Tools Grid */}
        <div className="space-y-6">
          {tools.map((tool, index) => (
            <ToolCard key={index} {...tool} />
          ))}
        </div>
        
        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-gray-700/50 to-gray-600/50 text-white rounded-2xl font-semibold hover:from-gray-600/50 hover:to-gray-500/50 transition-all duration-300 transform hover:scale-105 border border-gray-600/50 hover:border-gray-500/50">
            Load More Tools
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppUI;