import React, { useState, useEffect } from 'react';
import { Sparkles, Bot, Zap, Star } from 'lucide-react';

// Enhanced Button1 component with scroll functionality
const Button1 = () => {
  const handleGetStarted = () => {
    // Scroll to the Hero2 section
    const hero2Element = document.getElementById('hero2-section');
    if (hero2Element) {
      hero2Element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      // Fallback: scroll down by viewport height if Hero2 element not found
      window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <button 
      onClick={handleGetStarted}
      className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg active:scale-95"
    >
      Get Started
    </button>
  );
  
  
};

// Floating particles background
const FloatingParticles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 2,
      duration: Math.random() * 25 + 15,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-gray-600/5 to-gray-500/5 animate-pulse"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

// Animated gradient orbs
const GradientOrbs = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large orb - top left */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" 
           style={{ animationDuration: '6s' }} />
      
      {/* Medium orb - top right */}
      <div className="absolute -top-20 -right-32 w-64 h-64 bg-gradient-to-br from-pink-500/8 to-purple-500/8 rounded-full blur-2xl animate-pulse" 
           style={{ animationDuration: '5s', animationDelay: '2s' }} />
      
      {/* Small orb - bottom left */}
      <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-2xl animate-pulse" 
           style={{ animationDuration: '7s', animationDelay: '3s' }} />
      
      {/* Moving orb */}
      <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-br from-gray-600/20 to-gray-700/20 rounded-full blur-xl animate-pulse" 
           style={{ animationDuration: '8s' }} />
    </div>
  );
};

// Animated icons floating around
const FloatingIcons = () => {
  const icons = [
    { Icon: Sparkles, position: 'top-20 left-20', delay: '0s' },
    { Icon: Bot, position: 'top-32 right-32', delay: '1s' },
    { Icon: Zap, position: 'bottom-40 left-32', delay: '2s' },
    { Icon: Star, position: 'bottom-20 right-20', delay: '0.5s' },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {icons.map(({ Icon, position, delay }, index) => (
        <div
          key={index}
          className={`absolute ${position} text-gray-600/20 animate-pulse`}
          style={{ 
            animationDuration: '3s',
            animationDelay: delay,
            animationDirection: index % 2 === 0 ? 'normal' : 'reverse'
          }}
        >
          <Icon size={24} />
        </div>
      ))}
    </div>
  );
};

// Glowing text effect - more subtle for dark theme
const GlowingText = ({ children, className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent blur-sm opacity-20">
        {children}
      </div>
      <div className="relative text-white">
        {children}
      </div>
    </div>
  );
};

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <GradientOrbs />
      <FloatingParticles />
      <FloatingIcons />
      
      {/* Interactive cursor follow effect */}
      <div 
        className="absolute w-96 h-96 bg-gradient-to-r from-gray-700/3 to-gray-600/3 rounded-full blur-3xl pointer-events-none transition-all duration-1000 ease-out"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: 'translate(-50%, -50%)',
        }}
      />
      
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-6xl mx-auto px-6">
        {/* Animated badge */}
        <div className="mb-8 animate-fadeInDown">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-800/60 to-gray-700/60 backdrop-blur-xl border border-gray-600/30 rounded-full text-gray-300 text-sm font-medium">
            <Sparkles size={16} className="animate-spin" style={{ animationDuration: '4s' }} />
            <span>Powered by Advanced AI Technology</span>
            <div className="w-2 h-2 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full animate-pulse" />
          </div>
        </div>

        {/* Main Headlines with enhanced animations */}
        <div className="space-y-4 mb-8">
          <h1 className="text-4xl md:text-7xl font-bold mb-4 font-bungee animate-fadeInUp">
            <GlowingText>Everything your business needs</GlowingText>
          </h1>
          
          <h1 className="text-4xl md:text-7xl font-bold mb-4 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <span className="text-white">to master </span>
            <span className="relative">
              <span className="bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent font-bold">
                AI
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-gray-400 to-gray-300 rounded-lg blur opacity-10 animate-pulse" />
            </span>
            <span className="text-white">, all in one place.</span>
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
          Discover, compare, and integrate the world's most powerful AI tools. 
          <span className="text-gray-200"> Transform your workflow</span> with intelligent automation.
        </p>

        {/* CTA Section */}
        <div className="flex items-center justify-center animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
          <div className="transform hover:scale-105 transition-all duration-300">
            <Button1 />
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
          <p className="text-gray-500 text-sm mb-6">Trusted by 10,000+ businesses worldwide</p>
          <div className="flex items-center justify-center gap-8 opacity-50">
            {['Enterprise', 'Startup', 'Agency', 'Freelancer'].map((type, index) => (
              <div key={index} className="px-4 py-2 bg-gray-800/50 rounded-lg text-gray-400 text-xs font-medium">
                {type}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none" />
      
      {/* Custom animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fadeInDown {
          animation: fadeInDown 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default Hero;