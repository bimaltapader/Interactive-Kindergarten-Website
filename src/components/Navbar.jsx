import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, GraduationCap, Phone } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const triggerLogoConfetti = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.1, x: 0.15 },
      colors: ['#4F9CF9', '#FFD93D', '#FF7F50']
    });
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Teachers', href: '#teachers' },
    { name: 'Activities', href: '#activities' },
    { name: 'Virtual Tour', href: '#tour' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Admissions', href: '#admissions' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-panel py-3 shadow-md'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            onClick={triggerLogoConfetti}
            className="flex items-center gap-2 cursor-pointer group select-none"
          >
            <div className="p-2.5 bg-primary rounded-2xl text-white shadow-md group-hover:rotate-12 transition-transform duration-300">
              <GraduationCap className="w-7 h-7" />
            </div>
            <div>
              <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-slate-800 flex items-center gap-1">
                Bright<span className="text-primary">Future</span>
                <Sparkles className="w-5 h-5 text-secondary animate-pulse fill-secondary" />
              </span>
              <p className="text-[10px] uppercase font-bold tracking-widest text-accent -mt-1">
                Kindergarten
              </p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-semibold text-slate-600 hover:text-primary transition-colors text-sm hover:scale-105 transform duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <a
              href="#contact"
              onClick={() => {
                confetti({
                  particleCount: 80,
                  spread: 80,
                  origin: { y: 0.8 }
                });
              }}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-accent hover:bg-accent-hover text-white font-bold rounded-full shadow-lg shadow-accent/20 hover:shadow-accent/40 hover:-translate-y-0.5 transition-all duration-200"
            >
              <Phone className="w-4 h-4" />
              Enroll Today
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-slate-600 hover:bg-slate-100 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="lg:hidden mx-4 my-2 p-4 glass-panel rounded-3xl shadow-xl absolute left-0 right-0 top-18 z-40 border animate-in fade-in slide-in-from-top-5 duration-200">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-bold text-slate-700 hover:text-primary text-base py-2 px-3 rounded-xl hover:bg-slate-50 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <hr className="border-slate-100" />
            <a
              href="#contact"
              onClick={() => {
                setIsOpen(false);
                confetti({
                  particleCount: 80,
                  spread: 80,
                  origin: { y: 0.8 }
                });
              }}
              className="w-full text-center px-6 py-3 bg-accent hover:bg-accent-hover text-white font-bold rounded-2xl shadow-lg shadow-accent/20 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Enroll Today
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
