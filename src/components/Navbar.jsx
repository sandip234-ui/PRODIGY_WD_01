import { useEffect, useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Load Font Awesome
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    document.head.appendChild(link);

    return () => {
      // Cleanup if needed
      const existingLink = document.querySelector('link[href*="font-awesome"]');
      if (existingLink) {
        document.head.removeChild(existingLink);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (window.scrollY > 50) {
        header.classList.add('scrolled-tw');
      } else {
        header.classList.remove('scrolled-tw');
      }

      // Highlight active nav
      const sections = document.querySelectorAll('section, footer#contact');
      const navLinks = document.querySelectorAll('nav a[href^="#"]');
      let current = '';
      const scrollPosition = window.scrollY + 200;

      sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.clientHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          current = section.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === `#${current}`) {
          link.classList.add('active-tw');
        } else {
          link.classList.remove('active-tw');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const closeMenu = (e) => {
      if (
        !e.target.closest('#mobile-menu') &&
        !e.target.closest('#mobile-menu-button')
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('click', closeMenu);
    return () => document.removeEventListener('click', closeMenu);
  }, []);

  const navItems = [
    { name: "About", icon: "fas fa-user" },
    { name: "Latest", icon: "fas fa-newspaper" },
    { name: "Products", icon: "fas fa-box" },
    { name: "Pricing", icon: "fas fa-tags" },
    { name: "Blog", icon: "fas fa-blog" },
    { name: "Contact", icon: "fas fa-envelope" }
  ];

  return (
    <>
      {/* Background overlay for glassmorphism effect */}
      <div className="fixed top-0 left-0 right-0 z-40 h-16 sm:h-18 lg:h-20 bg-gradient-to-r from-slate-900/80 via-gray-900/60 to-slate-900/80 backdrop-blur-xl border-b border-white/10"></div>
      
      <header className="fixed top-0 left-0 right-0 z-50 h-16 sm:h-18 lg:h-20 w-full transition-all duration-500 ease-out">
        {/* Animated background with glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/30 via-purple-900/20 to-cyan-900/30 backdrop-blur-2xl border-b border-white/20 shadow-2xl shadow-purple-500/10"></div>
        
        {/* Subtle animated gradient line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent animate-pulse"></div>
        
        <div className="relative mx-auto max-w-screen-2xl px-3 sm:px-6 lg:px-8 h-full">
          <div className="flex h-full items-center justify-between">
            {/* Logo Section - Responsive sizing */}
            <div className="flex-shrink-0">
              <a href="#" className="group block transition-all duration-300 hover:scale-105">
                <div className="relative">
                  <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <img 
                    src="/images/logo.png" 
                    alt="Logo" 
                    className="relative h-8 sm:h-9 lg:h-10 w-auto rounded-full ring-2 ring-white/20 group-hover:ring-cyan-400/50 transition-all duration-300 shadow-lg shadow-black/50" 
                  />
                </div>
              </a>
            </div>

            {/* Desktop Navigation - Hidden on mobile and tablet */}
            <nav className="hidden lg:block" aria-label="Global">
              <ul className="flex items-center gap-4 xl:gap-6 text-sm">
                {navItems.map((item, index) => (
                  <li key={item.name} className="font-semibold group relative">
                    <a
                      href={`#${item.name.toLowerCase()}`}
                      className="relative px-3 xl:px-4 py-2 text-gray-300 hover:text-white transition-all duration-300 group-[.active-tw]:text-cyan-400 flex items-center gap-2"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {/* Icon */}
                      <i className={`${item.icon} text-xs opacity-80 group-hover:opacity-100 transition-opacity duration-300`}></i>
                      
                      {/* Text with glow effect */}
                      <span className="relative z-10 font-medium tracking-wide text-xs xl:text-sm">
                        {item.name}
                      </span>
                      
                      {/* Hover background */}
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100"></div>
                      
                      {/* Active/Hover underline with gradient */}
                      <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-500 group-hover:w-full group-[.active-tw]:w-full shadow-sm shadow-cyan-400/50"></span>
                      
                      {/* Subtle glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/10 to-purple-400/0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 blur-sm"></div>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Action Buttons and Mobile Menu */}
            <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
              {/* Desktop Action Buttons - Hidden on mobile */}
              <div className="hidden sm:flex gap-2 lg:gap-4">
                {/* Login Button */}
                <a href="#" className="group relative overflow-hidden rounded-lg lg:rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-3 sm:px-4 lg:px-6 py-2 lg:py-3 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105 active:scale-95 flex items-center gap-2">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <i className="fas fa-sign-in-alt text-xs relative z-10"></i>
                  <span className="relative z-10 tracking-wide">Login</span>
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] skew-x-12 transition-transform duration-700"></div>
                </a>
                
                {/* Register Button - Hidden on small mobile */}
                <a href="#" className="group relative hidden md:flex overflow-hidden rounded-lg lg:rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-3 sm:px-4 lg:px-6 py-2 lg:py-3 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/40 hover:scale-105 active:scale-95 items-center gap-2">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <i className="fas fa-user-plus text-xs relative z-10"></i>
                  <span className="relative z-10 tracking-wide">Register</span>
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] skew-x-12 transition-transform duration-700"></div>
                </a>
              </div>

              {/* Mobile Menu Button - Visible on mobile and tablet */}
              <button
                id="mobile-menu-button"
                onClick={() => setMenuOpen(!menuOpen)}
                className="group flex lg:hidden relative rounded-lg bg-white/10 p-2 sm:p-3 text-gray-300 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:bg-white/20 hover:text-white hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/25"
              >
                <div className="relative w-4 h-4 sm:w-5 sm:h-5">
                  {menuOpen ? (
                    <i className="fas fa-times text-sm transition-all duration-300 group-hover:rotate-90"></i>
                  ) : (
                    <i className="fas fa-bars text-sm transition-all duration-300 group-hover:scale-110"></i>
                  )}
                </div>
              </button>
            </div>
          </div>

          {/* Enhanced Mobile Menu - Responsive for mobile and tablet */}
          {menuOpen && (
            <div 
              id="mobile-menu" 
              className="lg:hidden absolute top-full left-0 right-0 mt-2 mx-3 sm:mx-4 rounded-xl sm:rounded-2xl bg-gray-900/95 backdrop-blur-2xl border border-white/20 shadow-2xl shadow-black/50 overflow-hidden"
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-cyan-900/20"></div>
              
              <nav className="relative flex flex-col p-3 sm:p-4">
                {/* Navigation Items */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 mb-4">
                  {navItems.map((item, index) => (
                    <a
                      key={item.name}
                      href={`#${item.name.toLowerCase()}`}
                      onClick={(e) => {
                        e.preventDefault();
                        const target = document.querySelector(`#${item.name.toLowerCase()}`);
                        if (target) {
                          const offset = document.querySelector('header').offsetHeight;
                          const top = target.offsetTop - offset;
                          window.scrollTo({ top, behavior: 'smooth' });
                          setMenuOpen(false);
                        }
                      }}
                      className="group relative flex flex-col items-center justify-center p-3 sm:p-4 text-gray-300 hover:text-white transition-all duration-300 rounded-lg hover:bg-white/10 border border-transparent hover:border-white/20"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <i className={`${item.icon} text-lg sm:text-xl mb-1 sm:mb-2 opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110`}></i>
                      <span className="relative z-10 font-medium tracking-wide text-xs sm:text-sm text-center">{item.name}</span>
                      <div className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 group-hover:w-full"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/5 to-purple-400/0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    </a>
                  ))}
                </div>
                
                {/* Mobile Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 px-2 pt-3 border-t border-white/20">
                  <a href="#" className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 px-4 py-3 text-sm font-semibold text-white text-center shadow-lg shadow-blue-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105 flex items-center justify-center gap-2">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    <i className="fas fa-sign-in-alt text-xs relative z-10"></i>
                    <span className="relative z-10">Login</span>
                  </a>
                  <a href="#" className="group relative overflow-hidden rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-sm font-semibold text-gray-300 text-center backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:text-white hover:border-cyan-400/50 flex items-center justify-center gap-2">
                    <i className="fas fa-user-plus text-xs relative z-10"></i>
                    <span className="relative z-10">Register</span>
                  </a>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}