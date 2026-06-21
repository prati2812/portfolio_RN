import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Smartphone } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Stats', id: 'achievements' },
  { label: 'Contact', id: 'contact' },
];

export const LiquidGlassNavbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Section scroll spy
  useEffect(() => {
    const observers = NAV_ITEMS.map((item) => {
      const el = document.getElementById(item.id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(item.id);
          }
        },
        {
          rootMargin: '-40% 0px -40% 0px', // Trigger when section occupies the center of viewport
          threshold: 0,
        }
      );

      observer.observe(el);
      return { el, observer };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.el);
      });
    };
  }, []);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 py-4 pointer-events-none">
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
        className={`w-full max-w-5xl pointer-events-auto rounded-2xl transition-all duration-500 ease-out flex items-center justify-between px-6 ${
          isScrolled
            ? 'py-3 liquid-glass-nav backdrop-blur-2xl'
            : 'py-5 bg-transparent border-transparent shadow-none'
        }`}
      >
        {/* Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2 font-display font-bold text-xl tracking-tight text-white focus:outline-none cursor-pointer group"
        >
          <div className="relative w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden border border-white/10 glass-panel">
            <Smartphone className="w-4 h-4 text-accent-cyan group-hover:scale-110 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue/20 to-accent-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <span className="bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
            Pratik<span className="text-accent-cyan font-medium">.dev</span>
          </span>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-1 font-display font-medium text-sm">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-2 rounded-full relative transition-colors duration-300 cursor-pointer ${
                    isActive ? 'text-white' : 'text-secondary-text hover:text-white/80'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavBackground"
                      className="absolute inset-0 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-inner"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>

        {/* Action Button */}
        <div className="hidden md:block">
          <button
            onClick={() => handleNavClick('contact')}
            className="px-5 py-2 font-display font-medium text-sm rounded-xl text-white bg-gradient-to-r from-accent-blue to-accent-cyan hover:opacity-90 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-300 cursor-pointer"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl border border-white/10 glass-panel text-white cursor-pointer hover:bg-white/5 transition-colors focus:outline-none"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </motion.nav>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="absolute top-20 left-4 right-4 liquid-glass-nav rounded-2xl p-6 flex flex-col gap-4 border border-white/10 shadow-2xl pointer-events-auto md:hidden"
          >
            <ul className="flex flex-col gap-2 font-display font-medium text-base">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className={`w-full text-left px-4 py-2.5 rounded-xl transition-all duration-300 ${
                        isActive
                          ? 'bg-gradient-to-r from-accent-blue/10 to-accent-cyan/10 text-white border-l-2 border-accent-cyan'
                          : 'text-secondary-text hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                );
              })}
            </ul>
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full py-3 font-display font-medium rounded-xl text-white bg-gradient-to-r from-accent-blue to-accent-cyan text-center shadow-lg"
            >
              Hire Me
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
