import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Image, Layers, Sparkles } from 'lucide-react';

export default function PhotoGallery() {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'Show All' },
    { id: 'art', name: 'Art & Crafts' },
    { id: 'play', name: 'Playtime' },
    { id: 'nature', name: 'Nature & Garden' },
    { id: 'academics', name: 'Learning & STEAM' }
  ];

  const items = [
    {
      id: 1,
      title: 'Xylophone Music Group',
      category: 'art',
      illustration: (
        <svg viewBox="0 0 400 300" className="w-full h-full bg-orange-100">
          <circle cx="200" cy="150" r="80" fill="#FFF" opacity="0.5" />
          {/* Xylophone bars */}
          <rect x="100" y="100" width="30" height="100" rx="3" fill="#EF4444" />
          <rect x="135" y="105" width="30" height="90" rx="3" fill="#F97316" />
          <rect x="170" y="110" width="30" height="80" rx="3" fill="#FACC15" />
          <rect x="205" y="115" width="30" height="70" rx="3" fill="#10B981" />
          <rect x="240" y="120" width="30" height="60" rx="3" fill="#3B82F6" />
          <rect x="275" y="125" width="30" height="50" rx="3" fill="#8B5CF6" />
          {/* Mallets */}
          <line x1="150" y1="230" x2="180" y2="150" stroke="#78350F" strokeWidth="4" />
          <circle cx="180" cy="150" r="10" fill="#F43F5E" />
          <line x1="250" y1="230" x2="220" y2="160" stroke="#78350F" strokeWidth="4" />
          <circle cx="220" cy="160" r="10" fill="#F43F5E" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Wooden Toy Castle Play',
      category: 'play',
      illustration: (
        <svg viewBox="0 0 400 300" className="w-full h-full bg-blue-100">
          <circle cx="200" cy="150" r="85" fill="#FFF" opacity="0.6" />
          {/* Castle Blocks */}
          <rect x="120" y="160" width="50" height="60" fill="#4F9CF9" rx="2" />
          <rect x="230" y="160" width="50" height="60" fill="#4F9CF9" rx="2" />
          <rect x="170" y="190" width="60" height="30" fill="#FF7F50" rx="2" />
          {/* Roofs */}
          <polygon points="120,160 145,120 170,160" fill="#FFD93D" />
          <polygon points="230,160 255,120 280,160" fill="#FFD93D" />
          <rect x="185" y="140" width="30" height="50" fill="#34D399" />
          <polygon points="185,140 200,110 215,140" fill="#EF4444" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Our Sunflower Garden',
      category: 'nature',
      illustration: (
        <svg viewBox="0 0 400 300" className="w-full h-full bg-emerald-50">
          <circle cx="200" cy="150" r="90" fill="#FFF" opacity="0.6" />
          {/* Sunflowers */}
          {/* Flower 1 */}
          <line x1="160" y1="260" x2="160" y2="150" stroke="#047857" strokeWidth="6" />
          <path d="M160,200 C140,200 140,190 160,210" fill="#047857" />
          <circle cx="160" cy="150" r="28" fill="#F59E0B" />
          <circle cx="160" cy="150" r="14" fill="#78350F" />
          {/* Flower 2 */}
          <line x1="240" y1="260" x2="240" y2="130" stroke="#047857" strokeWidth="6" />
          <path d="M240,180 C260,180 260,170 240,190" fill="#047857" />
          <circle cx="240" cy="130" r="32" fill="#F59E0B" />
          <circle cx="240" cy="130" r="16" fill="#78350F" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'Volcanic Science Experiment',
      category: 'academics',
      illustration: (
        <svg viewBox="0 0 400 300" className="w-full h-full bg-purple-100">
          <circle cx="200" cy="150" r="90" fill="#FFF" opacity="0.5" />
          {/* Volcano */}
          <polygon points="120,240 280,240 230,140 170,140" fill="#5F5E6B" />
          {/* Red Lava eruption */}
          <path d="M 190,140 Q 200,90 180,70 Q 200,80 205,140" fill="#EF4444" />
          <path d="M 210,140 Q 200,80 220,60 Q 210,95 205,140" fill="#FF7F50" />
          <ellipse cx="200" cy="140" rx="30" ry="10" fill="#F97316" />
          {/* Bubbles */}
          <circle cx="170" cy="90" r="8" fill="#FF8A65" />
          <circle cx="230" cy="80" r="6" fill="#FF8A65" />
          <circle cx="205" cy="50" r="10" fill="#EF4444" />
        </svg>
      )
    },
    {
      id: 5,
      title: 'Teddy Bear Storytime',
      category: 'play',
      illustration: (
        <svg viewBox="0 0 400 300" className="w-full h-full bg-pink-100">
          <circle cx="200" cy="150" r="85" fill="#FFF" opacity="0.6" />
          {/* Teddy Bear face */}
          <circle cx="200" cy="155" r="45" fill="#A16207" />
          <circle cx="160" cy="120" r="14" fill="#A16207" />
          <circle cx="160" cy="120" r="7" fill="#F87171" />
          <circle cx="240" cy="120" r="14" fill="#A16207" />
          <circle cx="240" cy="120" r="7" fill="#F87171" />
          {/* Snout */}
          <ellipse cx="200" cy="170" rx="16" ry="12" fill="#FEF08A" />
          <polygon points="192,165 208,165 200,173" fill="#1E293B" />
          {/* Eyes */}
          <circle cx="185" cy="145" r="4" fill="#1E293B" />
          <circle cx="215" cy="145" r="4" fill="#1E293B" />
          {/* Bowtie */}
          <polygon points="175,210 200,200 175,190" fill="#EF4444" />
          <polygon points="225,210 200,200 225,190" fill="#EF4444" />
          <circle cx="200" cy="200" r="5" fill="#FFF" />
        </svg>
      )
    },
    {
      id: 6,
      title: 'Water Painting & Color Mix',
      category: 'art',
      illustration: (
        <svg viewBox="0 0 400 300" className="w-full h-full bg-cyan-100">
          <circle cx="200" cy="150" r="90" fill="#FFF" opacity="0.6" />
          {/* Color palette */}
          <path d="M 120 180 C 120 100, 280 100, 280 180 C 280 230, 240 240, 200 240 C 170 240, 120 220, 120 180 Z" fill="#E2E8F0" />
          <circle cx="180" cy="215" r="14" fill="#D9F99D" /> {/* Thumb hole */}
          {/* Color circles */}
          <circle cx="150" cy="150" r="15" fill="#EF4444" />
          <circle cx="190" cy="140" r="15" fill="#4F9CF9" />
          <circle cx="230" cy="150" r="15" fill="#FFD93D" />
          <circle cx="250" cy="190" r="15" fill="#10B981" />
          {/* Paint brush */}
          <line x1="260" y1="250" x2="190" y2="160" stroke="#78350F" strokeWidth="6" strokeLinecap="round" />
          <polygon points="190,160 175,145 185,155" fill="#1E293B" />
        </svg>
      )
    }
  ];

  const filteredItems = activeFilter === 'all'
    ? items
    : items.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-white/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-extrabold text-sm text-accent uppercase tracking-wider bg-accent/10 px-4 py-1.5 rounded-full">
            Gallery Highlights
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-800 mt-4 leading-tight">
            Capturing Happy Moments
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium mt-4">
            Browse through daily snapshots illustrating child life at Bright Future, from paint classes to outdoor play.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex justify-center gap-2.5 sm:gap-3 flex-wrap mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-5 py-2.5 rounded-2xl font-bold text-xs sm:text-sm transition-all duration-200 flex items-center gap-1.5 ${
                activeFilter === cat.id
                  ? 'bg-accent text-white shadow-md'
                  : 'bg-slate-50 text-slate-500 border border-slate-100 hover:border-slate-200 hover:text-slate-800'
              }`}
            >
              <Layers className="w-4 h-4" />
              {cat.name}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-[28px] overflow-hidden border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
              >
                {/* Visual Area */}
                <div className="aspect-[4/3] w-full overflow-hidden relative group">
                  {item.illustration}
                  {/* Subtle camera logo cover */}
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="p-4 bg-white/90 rounded-2xl text-primary shadow-lg scale-90 group-hover:scale-100 transition-transform duration-300">
                      <Camera className="w-6 h-6 stroke-[2.5]" />
                    </div>
                  </div>
                </div>

                {/* Footer description */}
                <div className="p-6 border-t border-slate-50 flex items-center justify-between">
                  <h3 className="font-extrabold text-slate-800 text-sm sm:text-base">
                    {item.title}
                  </h3>
                  <span className="text-[10px] font-black uppercase bg-slate-100 text-slate-500 px-3 py-1 rounded-full tracking-wider shrink-0 ml-3">
                    {item.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
