import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Compass, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function HeroContent() {
  const triggerConfetti = (e) => {
    // Spark confetti at the button location
    const rect = e.target.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { x, y },
      colors: ['#4F9CF9', '#FFD93D', '#FF7F50', '#4FD1C5']
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center select-none pointer-events-none">
      {/* Left Column Content - Interactive pointer-events-auto */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full lg:w-5/12 glass-panel p-8 sm:p-10 rounded-[36px] shadow-2xl border pointer-events-auto mt-20 lg:mt-0"
      >
        {/* Playful Tag */}
        <motion.div 
          variants={itemVariants}
          className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-primary/10 text-primary rounded-full font-bold text-xs uppercase tracking-widest mb-6"
        >
          <Sparkles className="w-4 h-4 text-secondary fill-secondary animate-spin" style={{ animationDuration: '6s' }} />
          Welcome to Bright Future
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl font-black text-slate-800 tracking-tight leading-[1.15] mb-6"
        >
          Where Little Minds Begin Their{' '}
          <span className="relative inline-block text-primary">
            Big Adventure
            <span className="absolute bottom-1 left-0 w-full h-2 bg-secondary -z-10 rounded-full" />
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed mb-8"
        >
          A Safe, Creative and Joyful Learning Environment for Every Child. Discover our customized curriculum designed to inspire curiosity and shape tomorrow's leaders.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#contact"
            onClick={triggerConfetti}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-primary hover:bg-primary-hover text-white font-extrabold text-base rounded-2xl shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            <Calendar className="w-5 h-5" />
            Schedule a Visit
          </a>
          
          <a
            href="#admissions"
            onClick={triggerConfetti}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-secondary hover:bg-secondary-hover text-slate-800 font-extrabold text-base rounded-2xl shadow-lg shadow-secondary/20 hover:shadow-secondary/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            <Compass className="w-5 h-5 text-accent" />
            Apply Now
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
