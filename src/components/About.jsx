import { useEffect, useRef, useState } from 'react';

export default function About() {
  const typedRef = useRef(null);
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const strings = ["Premium Products", "Quality Items", "Best Deals", "Amazing Offers"];

  // Enhanced typing animation
  useEffect(() => {
    let timeout;
    const currentString = strings[currentStringIndex];
    
    if (isTyping) {
      if (currentText.length < currentString.length) {
        timeout = setTimeout(() => {
          setCurrentText(currentString.slice(0, currentText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => setIsTyping(false), 2000);
      }
    } else {
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, 50);
      } else {
        setCurrentStringIndex((prev) => (prev + 1) % strings.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, isTyping, currentStringIndex]);

  // Mouse tracking for parallax effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / rect.width,
          y: (e.clientY - rect.top - rect.height / 2) / rect.height
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  // Intersection Observer for entrance animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const FloatingOrb = ({ className, delay = 0 }) => (
    <div 
      className={`absolute w-32 h-32 rounded-full opacity-30 animate-pulse ${className}`}
      style={{
        transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
        animationDelay: `${delay}ms`,
        background: 'linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4)'
      }}
    />
  );

  return (
    <section
      id="about"
      ref={containerRef}
      className="min-h-screen w-full pt-20 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #1a1a2e 75%, #0f0f23 100%)',
        backgroundSize: '400% 400%',
        animation: 'gradientShift 15s ease infinite'
      }}
    >
      
      
      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-30 shadow-lg shadow-blue-400/50"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`
          }}
        />
      ))}

      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 h-full relative z-10">
        <div className="grid sm:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)]">
          {/* Left content */}
          <div 
            className={`p-8 md:p-12 lg:px-16 lg:py-24 relative transform transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
            }`}
          >
            {/* Dark glassmorphism background */}
            <div className="absolute inset-0 bg-gray-900/40 backdrop-blur-xl rounded-3xl border border-gray-700/50 shadow-2xl" />
            
            <div className="relative z-10">
              <span className="inline-block px-6 py-3 rounded-full bg-gray-800/60 backdrop-blur-md text-blue-300 text-sm font-medium mb-6 border border-blue-500/30 shadow-lg shadow-blue-500/20">
                ✨ Welcome to Our Store
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
                Your One-Stop Shop for{' '}
                <span className="relative">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                    {currentText}
                  </span>
                  <span className="animate-pulse text-blue-400">|</span>
                  {/* Enhanced glowing text effect for dark theme */}
                  <div className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 blur-sm opacity-60">
                    {currentText}
                  </div>
                  <div className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 blur-md opacity-30">
                    {currentText}
                  </div>
                </span>
              </h2>

              <p className="text-gray-300 text-lg leading-relaxed mb-8 drop-shadow-md">
                Discover a world of quality products at unbeatable prices. From trendy fashion to cutting-edge electronics, we curate the best selection for our customers.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { icon: '🚚', title: 'Fast Delivery', desc: 'Free shipping over $50' },
                  { icon: '🛡️', title: 'Secure Payment', desc: '100% secure checkout' }
                ].map((feature, index) => (
                  <div 
                    key={feature.title}
                    className={`flex items-center space-x-3 transform transition-all duration-700 ${
                      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}
                    style={{ transitionDelay: `${300 + index * 100}ms` }}
                  >
                    <div className="w-12 h-12 bg-gray-800/60 backdrop-blur-md rounded-xl flex items-center justify-center border border-blue-500/30 shadow-lg shadow-blue-500/20 hover:scale-110 hover:shadow-blue-400/40 transition-all duration-300">
                      <span className="text-2xl filter drop-shadow-lg">{feature.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white drop-shadow-md">{feature.title}</h3>
                      <p className="text-sm text-gray-400">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-xl hover:from-blue-500 hover:via-purple-500 hover:to-cyan-500 focus:ring-4 focus:ring-blue-500/50 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-blue-500/25 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10 flex items-center">
                    Explore Our Products
                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                </button>
                <button
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-gray-300 bg-gray-800/60 backdrop-blur-md rounded-xl hover:bg-gray-700/60 hover:text-white focus:ring-4 focus:ring-gray-500/50 transition-all duration-300 transform hover:scale-105 border border-gray-600/50 shadow-lg shadow-gray-900/20"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div 
            className={`relative transform transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            {/* 3D floating effect container */}
            <div 
              className="relative group"
              style={{
                transform: `perspective(1000px) rotateX(${mousePosition.y * 5}deg) rotateY(${mousePosition.x * 5}deg)`,
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Dark glassmorphism backdrop */}
              <div className="absolute inset-0 bg-gray-900/40 backdrop-blur-xl rounded-3xl border border-gray-700/50 shadow-2xl" />
              
              <div className="relative p-6">
                <img
                  alt="E-commerce shopping experience"
                  src="https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/3944737/144529_671584.jpeg"
                  className="object-cover w-full h-96 rounded-2xl shadow-2xl shadow-blue-500/20 transform group-hover:scale-105 transition-all duration-500 border border-gray-700/50"
                  style={{ transform: 'translateZ(20px)' }}
                />
                
                {/* Enhanced floating card for dark theme */}
                <div 
                  className="absolute -bottom-6 -right-6 bg-gray-800/70 backdrop-blur-xl p-6 rounded-2xl shadow-2xl shadow-blue-500/20 border border-gray-600/50 transform hover:scale-110 transition-all duration-300"
                  style={{ transform: 'translateZ(40px)' }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="flex -space-x-2">
                      {['women/1', 'men/1', 'women/2'].map((person, i) => (
                        <img
                          key={person}
                          src={`https://randomuser.me/api/portraits/${person}.jpg`}
                          alt="User"
                          className="w-10 h-10 rounded-full border-2 border-blue-400 shadow-lg shadow-blue-400/30 hover:scale-110 transition-transform duration-300"
                          style={{ animationDelay: `${i * 100}ms` }}
                        />
                      ))}
                    </div>
                    <div className="text-sm">
                      <p className="font-semibold text-white drop-shadow-md">1.2k+ Happy Customers</p>
                      <p className="text-blue-300">⭐⭐⭐⭐⭐ Trusted by many</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
      `}</style>
    </section>
  );
}