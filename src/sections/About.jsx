import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, Sparkles, Heart, Trophy, Award } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Happy Graduates', value: 480, suffix: '+' },
    { label: 'Certified Teachers', value: 24, suffix: '' },
    { label: 'Play Areas & Labs', value: 12, suffix: '+' },
    { label: 'Safety Rating', value: 100, suffix: '%' }
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#F8FBFF]/50 relative overflow-hidden">
      {/* Decorative background vectors */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-xl" />
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-accent/5 rounded-full blur-2xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="font-extrabold text-sm text-primary uppercase tracking-wider bg-primary/10 px-4 py-1.5 rounded-full">
            Who We Are
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-800 mt-4 leading-tight">
            Nurturing Curiosity & Inspiring Lifelong Learners
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium mt-4">
            Bright Future Kindergarten provides a stimulating environment where children grow, discover, and learn through research-backed play and creative curricula.
          </p>
        </div>

        {/* Content Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side: Playful Core Value Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ValueCard
              icon={<Heart className="w-8 h-8 text-accent" />}
              title="Caring Atmosphere"
              description="A warm, loving environment where every child feels secure, valued, and loved."
              color="bg-accent/10"
            />
            <ValueCard
              icon={<Sparkles className="w-8 h-8 text-secondary" />}
              title="Creative Play"
              description="Encouraging children to express their imaginations through arts, music, and roleplay."
              color="bg-secondary/10"
            />
            <ValueCard
              icon={<Shield className="w-8 h-8 text-primary" />}
              title="Top-Tier Safety"
              description="Biometric security, CCTV surveillance, and first-aid trained caretakers on-duty."
              color="bg-primary/10"
            />
            <ValueCard
              icon={<Trophy className="w-8 h-8 text-emerald-500" />}
              title="Award-winning System"
              description="Recognized nationally for excellence in early-childhood developmental education."
              color="bg-emerald-50"
            />
          </div>

          {/* Right Side: Philosophy & Image Showcase */}
          <div className="space-y-6">
            <div className="bg-white p-8 sm:p-10 rounded-[32px] shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-extrabold text-slate-800 mb-4 flex items-center gap-2">
                <Award className="w-6 h-6 text-primary" />
                Our Educational Philosophy
              </h3>
              <p className="text-slate-600 leading-relaxed font-medium mb-6">
                We believe that early childhood is a golden window of opportunity. By blending structured thematic inquiry with free-choice creative playgrounds, we support physical, social, emotional, and cognitive milestones.
              </p>
              <ul className="space-y-3">
                {[
                  'Hands-on interactive learning laboratories',
                  'Social-emotional regulation workshops for kids',
                  'Bilingual language skill foundations (English & Spanish)',
                  'Eco-friendly gardening and nature projects'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 font-semibold text-slate-700 text-sm">
                    <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Generated Classroom Visual Card */}
            <div className="relative rounded-[32px] overflow-hidden shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-300 aspect-[16/10] bg-slate-100 group">
              <img 
                src="/classroom_view.png" 
                alt="Bright Future Classroom View" 
                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent flex items-end p-6">
                <p className="text-white font-extrabold text-sm sm:text-base">
                  Interactive Learning & Play Zones
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Counter Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-20 pt-16 border-t border-slate-100">
          {stats.map((stat, index) => (
            <StatCounter
              key={index}
              label={stat.label}
              value={stat.value}
              suffix={stat.suffix}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Value Card helper
function ValueCard({ icon, title, description, color }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white p-6 rounded-[28px] shadow-lg border border-slate-100 flex flex-col items-start hover:shadow-xl transition-all duration-300"
    >
      <div className={`p-4 rounded-2xl ${color} mb-5`}>
        {icon}
      </div>
      <h4 className="text-lg font-bold text-slate-800 mb-2">{title}</h4>
      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium">{description}</p>
    </motion.div>
  );
}

// Stat Counter helper
function StatCounter({ label, value, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 1500; // milliseconds
      const incrementTime = Math.max(Math.floor(duration / end), 15);
      
      const timer = setInterval(() => {
        start += Math.ceil(end / (duration / incrementTime));
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ type: 'spring', stiffness: 80 }}
        className="text-4xl sm:text-5xl font-black text-primary flex items-center justify-center"
      >
        {count}
        <span className="text-accent ml-0.5">{suffix}</span>
      </motion.div>
      <p className="text-sm font-extrabold text-slate-600 mt-2 uppercase tracking-wide">
        {label}
      </p>
    </div>
  );
}
