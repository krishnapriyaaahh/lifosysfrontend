import React, { useState, useEffect } from 'react';
import { Sparkles, Bot, Zap, Star, Users, Award } from 'lucide-react';

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

const AboutPage = () => {
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
  <div id="about" className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 min-h-screen py-20 px-4 overflow-hidden">
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

      <div className="relative z-10 max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16 animate-fadeInDown">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-50 mb-4">
            Our Origin
          </h1>
          <p className="text-lg sm:text-xl text-gray-400">
            We are dedicated to building a community that helps you discover and leverage the best AI tools.
          </p>
        </div>

        {/* Our Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          <div className="md:order-2">
            <div className="w-full h-80 bg-gradient-to-br from-gray-700/30 to-gray-800/30 backdrop-blur-xl border border-gray-600/30 rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-300 flex items-center justify-center">
              <div className="text-center text-gray-400">
                <Bot size={80} className="mx-auto mb-4 opacity-50" />
                <p className="text-sm">Our Team Working</p>
              </div>
            </div>
          </div>
          <div className="md:order-1">
            <h2 className="text-3xl font-semibold mb-4 text-white">Our Story</h2>
            <p className="mb-4 leading-relaxed text-gray-300">
              We're a team of six B.Tech Computer Science undergraduates from the TocH Institute of Science and Technology. During our internship, we were all trying to navigate the incredibly fast-paced world of AI. It felt like we were constantly getting lost in a vast sea of new tools, never knowing which ones were worth our time.
            </p>
            <p className="leading-relaxed text-gray-300">
              We built this platform to be the lighthouse we wished we had—a central, trusted hub where anyone can easily find and understand the best AI tools out there. Our mission is simple: to help you cut through the noise and navigate the future of technology with confidence.
            </p>
          </div>
        </div>
        
        {/* Why Choose Us Section */}
        <div className="text-center mb-16 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-3xl font-semibold mb-8 text-white">Why Join Our Community?</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            
            {/* Value Proposition 1 */}
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-700/60 backdrop-blur-xl border border-gray-600/30 p-8 rounded-lg shadow-lg transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl">
              <Users size={40} className="text-blue-400 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2 text-white">Community Driven</h3>
              <p className="text-gray-300">
                Our platform thrives on user reviews and contributions, ensuring you always get honest and up-to-date information.
              </p>
            </div>
            
            {/* Value Proposition 2 */}
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-700/60 backdrop-blur-xl border border-gray-600/30 p-8 rounded-lg shadow-lg transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl">
              <Award size={40} className="text-green-400 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2 text-white">Curated Content</h3>
              <p className="text-gray-300">
                We carefully vet and categorize every tool to make your discovery process seamless and efficient.
              </p>
            </div>
            
            {/* Value Proposition 3 */}
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-700/60 backdrop-blur-xl border border-gray-600/30 p-8 rounded-lg shadow-lg transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl">
              <Star size={40} className="text-yellow-400 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2 text-white">Stay Updated</h3>
              <p className="text-gray-300">
                Never miss out on the latest trends and breakthroughs in the world of artificial intelligence.
              </p>
            </div>

          </div>
        </div>

        {/* Trust indicators */}
        <div className="text-center animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-800/60 to-gray-700/60 backdrop-blur-xl border border-gray-600/30 rounded-full text-gray-300 text-sm font-medium mb-8">
            <Sparkles size={16} className="animate-spin" style={{ animationDuration: '4s' }} />
            <span>Built by passionate developers, for innovators</span>
            <div className="w-2 h-2 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full animate-pulse" />
          </div>
          
          <div className="flex items-center justify-center gap-8 opacity-60">
            {['B.Tech Students', 'AI Enthusiasts', 'Tech Innovators', 'Community Builders'].map((type, index) => (
              <div key={index} className="px-4 py-2 bg-gray-800/50 rounded-lg text-gray-400 text-xs font-medium">
                {type}
              </div>
            ))}
          </div>
        </div>

      </div>

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

export default AboutPage;