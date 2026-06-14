import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation, Compass, Sparkles, MapPin, Eye, BookOpen, Wind } from 'lucide-react';

export default function VirtualTour() {
  const [activeRoom, setActiveRoom] = useState('classroom');
  const [activeHotspot, setActiveHotspot] = useState(null);

  const rooms = {
    classroom: {
      title: 'Sunlit Learning Classroom',
      tag: 'A clean, breathable space for daily lessons',
      illustration: (
        <svg viewBox="0 0 800 450" className="w-full h-full bg-[#F0F7FF]">
          {/* Walls */}
          <path d="M 0 0 L 150 100 L 150 350 L 0 450 Z" fill="#E0EFFE" />
          <path d="M 800 0 L 650 100 L 650 350 L 800 450 Z" fill="#E0EFFE" />
          <rect x="150" y="100" width="500" height="250" fill="#F0F7FF" />
          
          {/* Floor */}
          <polygon points="0,450 150,350 650,350 800,450" fill="#E2E8F0" />
          
          {/* Window */}
          <rect x="250" y="120" width="300" height="120" rx="8" fill="#BAE6FD" stroke="#93C5FD" strokeWidth="4" />
          <line x1="400" y1="120" x2="400" y2="240" stroke="#93C5FD" strokeWidth="4" />
          <line x1="250" y1="180" x2="550" y2="180" stroke="#93C5FD" strokeWidth="4" />
          
          {/* Sun rays */}
          <path d="M 300 120 L 220 380 L 290 380 L 370 120 Z" fill="#FFF" opacity="0.2" />
          <path d="M 450 120 L 380 380 L 450 380 L 520 120 Z" fill="#FFF" opacity="0.2" />
          
          {/* Bookshelf */}
          <rect x="180" y="220" width="50" height="130" fill="#FF8A65" rx="4" />
          <rect x="180" y="245" width="50" height="6" fill="#D84315" />
          <rect x="180" y="285" width="50" height="6" fill="#D84315" />
          {/* Books */}
          <rect x="185" y="225" width="10" height="20" fill="#4F9CF9" />
          <rect x="198" y="228" width="8" height="17" fill="#FFD93D" />
          <rect x="210" y="223" width="12" height="22" fill="#E11D48" />

          {/* Kids Round Table and Chairs */}
          <ellipse cx="400" cy="360" rx="100" ry="30" fill="#FFD93D" stroke="#F59E0B" strokeWidth="3" />
          {/* Small chairs */}
          <rect x="330" y="325" width="30" height="30" rx="4" fill="#4F9CF9" />
          <rect x="440" y="325" width="30" height="30" rx="4" fill="#FF7F50" />
          
          {/* Toy Blocks on Floor */}
          <rect x="520" y="370" width="30" height="30" fill="#10B981" rx="4" />
          <polygon points="565,370 580,395 550,395" fill="#EF4444" />
          
          {/* ABC banner on Wall */}
          <rect x="200" y="40" width="400" height="40" rx="6" fill="#FFFFFF" stroke="#4F9CF9" strokeWidth="2" />
          <text x="400" y="66" fill="#1E293B" fontSize="20" fontWeight="bold" textAnchor="middle" letterSpacing="6">A B C D E F G</text>
        </svg>
      ),
      hotspots: [
        {
          id: 'bookshelf',
          top: '52%',
          left: '26%',
          title: 'Premium Book Nook',
          icon: <BookOpen className="w-4 h-4" />,
          details: 'Over 500+ curated early-childhood books, puzzles, and reading logs promoting vocabulary.'
        },
        {
          id: 'table',
          top: '76%',
          left: '52%',
          title: 'Ergonomic Round Tables',
          icon: <Sparkles className="w-4 h-4" />,
          details: 'Round antibacterial furniture designed to facilitate eye-contact, cooperation, and group play.'
        },
        {
          id: 'purifier',
          top: '25%',
          left: '60%',
          title: 'HEPA Air Purifiers',
          icon: <Wind className="w-4 h-4" />,
          details: 'Smart commercial-grade air purifiers filter out 99.97% of microbes, keeping classrooms safe.'
        }
      ]
    },
    art: {
      title: 'Creative Art & Clay Studio',
      tag: 'Unleashing creative imaginations daily',
      illustration: (
        <svg viewBox="0 0 800 450" className="w-full h-full bg-[#FFFBF0]">
          {/* Floor & walls */}
          <polygon points="0,450 120,350 680,350 800,450" fill="#EDF2F7" />
          <rect x="120" y="100" width="560" height="250" fill="#FFFBF0" />
          <path d="M 0 0 L 120 100 L 120 350 L 0 450 Z" fill="#FFE2A8" opacity="0.3" />
          <path d="M 800 0 L 680 100 L 680 350 L 800 450 Z" fill="#FFE2A8" opacity="0.3" />

          {/* Art Easels */}
          {/* Easel Left */}
          <polygon points="250,330 220,180 280,180" fill="#B45309" />
          <line x1="220" y1="180" x2="210" y2="360" stroke="#78350F" strokeWidth="4" />
          <line x1="280" y1="180" x2="290" y2="360" stroke="#78350F" strokeWidth="4" />
          <line x1="250" y1="180" x2="250" y2="370" stroke="#78350F" strokeWidth="3" />
          <rect x="200" y="200" width="100" height="90" fill="#FFFFFF" stroke="#D97706" strokeWidth="3" />
          {/* Splatters on canvas */}
          <circle cx="230" cy="240" r="10" fill="#4F9CF9" />
          <circle cx="260" cy="250" r="15" fill="#EF4444" />
          <circle cx="270" cy="225" r="8" fill="#FFD93D" />

          {/* Easel Right */}
          <polygon points="550,330 520,180 580,180" fill="#B45309" />
          <line x1="520" y1="180" x2="510" y2="360" stroke="#78350F" strokeWidth="4" />
          <line x1="580" y1="180" x2="590" y2="360" stroke="#78350F" strokeWidth="4" />
          <line x1="550" y1="180" x2="550" y2="370" stroke="#78350F" strokeWidth="3" />
          <rect x="500" y="200" width="100" height="90" fill="#FFFFFF" stroke="#D97706" strokeWidth="3" />
          {/* Splatters on canvas 2 */}
          <circle cx="530" cy="230" r="12" fill="#10B981" />
          <circle cx="560" cy="240" r="8" fill="#FF7F50" />

          {/* Hanging Child Art Line on Wall */}
          <line x1="150" y1="80" x2="650" y2="80" stroke="#94A3B8" strokeWidth="2" strokeDasharray="5,5" />
          {/* Drawings */}
          <rect x="220" y="90" width="50" height="40" fill="#FEF08A" stroke="#94A3B8" />
          <text x="245" y="115" fill="#F97316" fontSize="8" textAnchor="middle">Sun</text>
          
          <rect x="360" y="90" width="50" height="40" fill="#BAE6FD" stroke="#94A3B8" />
          <text x="385" y="115" fill="#0284C7" fontSize="8" textAnchor="middle">Cloud</text>
          
          <rect x="500" y="90" width="50" height="40" fill="#BBF7D0" stroke="#94A3B8" />
          <text x="525" y="115" fill="#15803D" fontSize="8" textAnchor="middle">Tree</text>

          {/* Paint buckets on the floor */}
          <cylinder cx="330" cy="380" r="14" fill="#EF4444" height="20" />
          <circle cx="330" cy="375" rx="14" ry="4" fill="#FFC7C7" />
          <cylinder cx="370" cy="390" r="14" fill="#4F9CF9" height="20" />
          <circle cx="370" cy="385" rx="14" ry="4" fill="#C7E2FF" />
        </svg>
      ),
      hotspots: [
        {
          id: 'easel',
          top: '55%',
          left: '32%',
          title: 'Professional Wood Easels',
          icon: <Sparkles className="w-4 h-4" />,
          details: 'Adjustable, sturdy wood easels sizing to kid heights, allowing mess-free painting.'
        },
        {
          id: 'drawings',
          top: '25%',
          left: '48%',
          title: 'Exhibition Wall Clamps',
          icon: <Eye className="w-4 h-4" />,
          details: 'Exhibiting student artwork builds esteem, confidence, and celebrates individuality.'
        }
      ]
    },
    playground: {
      title: 'Green Outdoor Playground',
      tag: 'Safe, active space for physical play',
      illustration: (
        <svg viewBox="0 0 800 450" className="w-full h-full bg-[#EFFDF5]">
          {/* Blue Sky */}
          <rect x="0" y="0" width="800" height="180" fill="#BAE6FD" />
          
          {/* Green Grass hills */}
          <ellipse cx="200" cy="320" rx="400" ry="160" fill="#4ADE80" />
          <ellipse cx="600" cy="350" rx="500" ry="180" fill="#22C55E" />
          <rect x="0" y="300" width="800" height="150" fill="#22C55E" />

          {/* Animated clouds */}
          <circle cx="150" cy="70" r="25" fill="#FFF" />
          <circle cx="180" cy="65" r="30" fill="#FFF" />
          <circle cx="210" cy="70" r="20" fill="#FFF" />

          {/* Playground Slide */}
          <path d="M 520,380 L 460,220" stroke="#FF7F50" strokeWidth="16" strokeLinecap="round" />
          <rect x="510" y="200" width="60" height="20" fill="#FFD93D" />
          <line x1="560" y1="200" x2="570" y2="380" stroke="#94A3B8" strokeWidth="6" />
          <line x1="530" y1="200" x2="520" y2="380" stroke="#94A3B8" strokeWidth="6" />
          {/* Slide ladder rungs */}
          <line x1="530" y1="260" x2="565" y2="260" stroke="#CBD5E1" strokeWidth="3" />
          <line x1="525" y1="300" x2="563" y2="300" stroke="#CBD5E1" strokeWidth="3" />
          
          {/* Swing set */}
          <line x1="150" y1="350" x2="180" y2="180" stroke="#4F9CF9" strokeWidth="6" />
          <line x1="230" y1="350" x2="200" y2="180" stroke="#4F9CF9" strokeWidth="6" />
          <line x1="180" y1="180" x2="300" y2="180" stroke="#4F9CF9" strokeWidth="6" />
          <line x1="300" y1="180" x2="280" y2="350" stroke="#4F9CF9" strokeWidth="6" />
          <line x1="300" y1="180" x2="330" y2="350" stroke="#4F9CF9" strokeWidth="6" />
          {/* Ropes & Seat */}
          <line x1="220" y1="180" x2="220" y2="280" stroke="#64748B" strokeWidth="3" />
          <line x1="260" y1="180" x2="260" y2="280" stroke="#64748B" strokeWidth="3" />
          <rect x="210" y="280" width="60" height="8" fill="#FF7F50" rx="2" />
        </svg>
      ),
      hotspots: [
        {
          id: 'slide',
          top: '55%',
          left: '60%',
          title: 'Safe Double Slider',
          icon: <Sparkles className="w-4 h-4" />,
          details: 'Impact-absorbing composite slides with flat safety landing decks to prevent slips.'
        },
        {
          id: 'grass',
          top: '80%',
          left: '35%',
          title: 'Hypoallergenic Real Grass',
          icon: <MapPin className="w-4 h-4" />,
          details: 'Naturally cultivated weed-free turf with heavy under-bed safety shock mats.'
        }
      ]
    }
  };

  const room = rooms[activeRoom];

  return (
    <section id="tour" className="py-20 sm:py-28 bg-[#F8FBFF]/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-extrabold text-sm text-primary uppercase tracking-wider bg-primary/10 px-4 py-1.5 rounded-full">
            Virtual Tour
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-800 mt-4 leading-tight">
            Take a Peek Inside Our Campus
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium mt-4">
            Click rooms below and tap the interactive hotspots to inspect our safety protocols and classroom resources.
          </p>
        </div>

        {/* Room Navigation Tabs */}
        <div className="flex justify-center gap-3 sm:gap-4 flex-wrap mb-10">
          {Object.keys(rooms).map((key) => (
            <button
              key={key}
              onClick={() => {
                setActiveRoom(key);
                setActiveHotspot(null);
              }}
              className={`px-5 py-3 rounded-2xl font-bold text-sm transition-all duration-300 flex items-center gap-2 ${
                activeRoom === key
                  ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-105'
                  : 'bg-white text-slate-600 border border-slate-100 hover:border-slate-200 hover:text-slate-800'
              }`}
            >
              <Compass className="w-4 h-4" />
              {rooms[key].title.split(' ')[0]} Room {/* Shorthand */}
            </button>
          ))}
        </div>

        {/* Interactive Tour Display Screen */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Visual Display (Col 8) */}
          <div className="lg:col-span-8 bg-white rounded-[36px] overflow-hidden border border-slate-100 shadow-2xl relative select-none">
            
            {/* Overlay titles */}
            <div className="absolute top-6 left-6 z-20 bg-slate-900/70 backdrop-blur-md px-5 py-2.5 rounded-2xl text-white">
              <span className="text-[10px] uppercase font-bold tracking-widest text-primary flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '8s' }} />
                Interactive 360 View
              </span>
              <h3 className="text-base font-extrabold">{room.title}</h3>
            </div>

            {/* Room illustration container */}
            <div className="w-full aspect-[16/9] flex items-center justify-center relative">
              {room.illustration}

              {/* Hotspots */}
              {room.hotspots.map((hotspot) => (
                <div
                  key={hotspot.id}
                  className="absolute"
                  style={{ top: hotspot.top, left: hotspot.left }}
                >
                  <button
                    onClick={() => setActiveHotspot(hotspot)}
                    className={`relative w-8 h-8 rounded-full flex items-center justify-center text-white font-bold transition-all duration-300 ${
                      activeHotspot?.id === hotspot.id
                        ? 'bg-accent scale-110 shadow-lg'
                        : 'bg-primary hover:bg-primary-hover shadow-md hover:scale-105'
                    }`}
                  >
                    {/* Pulsing glow around hotspots */}
                    <span className="absolute inset-0 w-full h-full rounded-full bg-primary/40 animate-ping pointer-events-none" />
                    <Sparkles className="w-4 h-4 fill-white" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Hotspot details sidebar (Col 4) */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {activeHotspot ? (
                <motion.div
                  key={activeHotspot.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="bg-white border border-slate-100 rounded-[32px] p-8 shadow-xl flex flex-col gap-5 h-full justify-between"
                >
                  <div className="space-y-4">
                    <div className="inline-flex p-3 bg-accent/10 rounded-xl text-accent">
                      {activeHotspot.icon}
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-black tracking-widest text-accent block">
                        Hotspot Inspection
                      </span>
                      <h4 className="text-xl font-black text-slate-800">
                        {activeHotspot.title}
                      </h4>
                    </div>
                    <p className="text-slate-600 font-medium leading-relaxed text-sm sm:text-base">
                      {activeHotspot.details}
                    </p>
                  </div>

                  <button
                    onClick={() => setActiveHotspot(null)}
                    className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-2xl transition-colors text-sm"
                  >
                    Close Inspection
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="idle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-primary/5 border border-primary/10 rounded-[32px] p-8 shadow-inner flex flex-col items-center justify-center text-center gap-4 h-full"
                >
                  <Navigation className="w-10 h-10 text-primary animate-bounce" />
                  <div>
                    <h4 className="text-lg font-black text-slate-800 mb-2">
                      Start Exploring
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-500 font-medium max-w-xs leading-relaxed">
                      Tap any pulsing <strong className="text-primary">orange/blue sparkle</strong> hotspots on the screen viewer to inspect that zone.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
