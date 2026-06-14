import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Smile, Apple, Music, Coffee, BookOpen, Heart, Clock } from 'lucide-react';

export default function DailyActivities() {
  const [activeGroup, setActiveGroup] = useState('toddlers');
  const [selectedActivity, setSelectedActivity] = useState(0);

  const routines = {
    toddlers: [
      {
        time: '08:30 AM - 09:00 AM',
        title: 'Morning Welcome & Circle Time',
        icon: <Sun className="w-5 h-5 text-primary" />,
        color: 'bg-blue-50 border-blue-200 text-primary',
        desc: 'Greeting instructors, warm-up exercises, soft sing-alongs, and weather chart updates to start the day.',
        tip: 'Helps toddlers develop social greetings and fine motor mimics.'
      },
      {
        time: '09:00 AM - 10:00 AM',
        title: 'Outdoor Exploration & Swing Play',
        icon: <Smile className="w-5 h-5 text-emerald-500" />,
        color: 'bg-emerald-50 border-emerald-200 text-emerald-600',
        desc: 'Free play in our secure grass playground, using the slides, swings, and sandbox under close watch.',
        tip: 'Builds gross motor muscles and cooperative sharing.'
      },
      {
        time: '10:00 AM - 10:30 AM',
        title: 'Healthy Snack & Hygiene Time',
        icon: <Apple className="w-5 h-5 text-accent" />,
        color: 'bg-orange-50 border-orange-200 text-accent',
        desc: 'Enjoying fresh organic fruits, oatmeal cookies, and learning independence through self-washing hands.',
        tip: 'Teaches table manners and hand-hygiene routines.'
      },
      {
        time: '10:30 AM - 11:45 AM',
        title: 'Sensory Craft & Cognitive Puzzles',
        icon: <Music className="w-5 h-5 text-amber-500" />,
        color: 'bg-amber-50 border-amber-200 text-amber-600',
        desc: 'Playing with slime, finger painting, matching shapes, and stacking giant colorful wooden blocks.',
        tip: 'Enhances cognitive recognition and tactile senses.'
      },
      {
        time: '11:45 AM - 01:00 PM',
        title: 'Lunch & Soft Nap Time',
        icon: <Coffee className="w-5 h-5 text-violet-500" />,
        color: 'bg-purple-50 border-purple-200 text-violet-600',
        desc: 'Warm balanced meal followed by cozy nap time in designated individual antibacterial sleeping cribs.',
        tip: 'Crucial for resting active minds and growth hormone release.'
      },
      {
        time: '01:00 PM - 02:00 PM',
        title: 'Storytelling & Puppet Theater',
        icon: <BookOpen className="w-5 h-5 text-pink-500" />,
        color: 'bg-pink-50 border-pink-200 text-pink-600',
        desc: 'Teachers read rich picture books and perform interactive puppet shows to boost early speech.',
        tip: 'Improves vocabulary, focus span, and imagination.'
      }
    ],
    preschoolers: [
      {
        time: '08:30 AM - 09:15 AM',
        title: 'Circle Time & Phonics Warmup',
        icon: <Sun className="w-5 h-5 text-primary" />,
        color: 'bg-blue-50 border-blue-200 text-primary',
        desc: 'Structured morning assembly, interactive calendar reading, alphabet sounds, and sharing circles.',
        tip: 'Develops public speaking confidence and auditory phonics.'
      },
      {
        time: '09:15 AM - 10:30 AM',
        title: 'STEAM Laboratory (Science/Math)',
        icon: <BookOpen className="w-5 h-5 text-violet-500" />,
        color: 'bg-purple-50 border-purple-200 text-violet-600',
        desc: 'Fun child-safe science experiments, basic addition with counting beads, and introductory coding block games.',
        tip: 'Triggers analytical reasoning and logical sequences.'
      },
      {
        time: '10:30 AM - 11:00 AM',
        title: 'Nutritious Snack & Chats',
        icon: <Apple className="w-5 h-5 text-accent" />,
        color: 'bg-orange-50 border-orange-200 text-accent',
        desc: 'Healthy, diet-compliant snacks. Social circle discussions regarding kindness, animals, or universe themes.',
        tip: 'Promotes peer communication and empathy exercises.'
      },
      {
        time: '11:00 AM - 12:15 PM',
        title: 'Creative Art & Music Orchestras',
        icon: <Music className="w-5 h-5 text-amber-500" />,
        color: 'bg-amber-50 border-amber-200 text-amber-600',
        desc: 'Clay sculpting, watercolor paintings, playing bells/xylophones, and rehearsals for school concerts.',
        tip: 'Explores emotional output and structural rhythms.'
      },
      {
        time: '12:15 PM - 01:30 PM',
        title: 'Catered Lunch & Quiet Reading Corner',
        icon: <Coffee className="w-5 h-5 text-emerald-500" />,
        color: 'bg-emerald-50 border-emerald-200 text-emerald-600',
        desc: 'Balanced hot lunch. Followed by a quiet, tech-free reading hour in our cozy pillow library cabins.',
        tip: 'Fosters reading hobbies and self-guided calm periods.'
      },
      {
        time: '01:30 PM - 02:30 PM',
        title: 'Cooperative Play & Physical Games',
        icon: <Smile className="w-5 h-5 text-pink-500" />,
        color: 'bg-pink-50 border-pink-200 text-pink-600',
        desc: 'Organized sports (mini soccer, obstacle courses) and building blocks competitions inside the playroom.',
        tip: 'Teaches leadership, teamwork, and muscle coordination.'
      }
    ]
  };

  const activeRoutine = routines[activeGroup];

  return (
    <section id="activities" className="py-20 sm:py-28 bg-white/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="font-extrabold text-sm text-primary uppercase tracking-wider bg-primary/10 px-4 py-1.5 rounded-full">
            Daily Flow
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-800 mt-4 leading-tight">
            A Typical Day Full of Fun and Growth
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium mt-4">
            Explore how we organize our time to keep children engaged, relaxed, and learning throughout the day.
          </p>
        </div>

        {/* Toggle buttons */}
        <div className="flex justify-center mb-12 sm:mb-16">
          <div className="bg-slate-100 p-1.5 rounded-2xl inline-flex gap-2 border border-slate-200">
            <button
              onClick={() => {
                setActiveGroup('toddlers');
                setSelectedActivity(0);
              }}
              className={`px-6 sm:px-8 py-3 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 ${
                activeGroup === 'toddlers'
                  ? 'bg-primary text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-800'
              }`}
            >
              Toddlers Flow
            </button>
            <button
              onClick={() => {
                setActiveGroup('preschoolers');
                setSelectedActivity(0);
              }}
              className={`px-6 sm:px-8 py-3 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 ${
                activeGroup === 'preschoolers'
                  ? 'bg-primary text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-800'
              }`}
            >
              Preschool Flow
            </button>
          </div>
        </div>

        {/* Timeline Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Interactive Timeline List */}
          <div className="lg:col-span-7 space-y-4">
            {activeRoutine.map((item, idx) => (
              <motion.div
                key={idx}
                onClick={() => setSelectedActivity(idx)}
                whileHover={{ scale: 1.01 }}
                className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center gap-4 ${
                  selectedActivity === idx
                    ? 'bg-primary/5 border-primary shadow-md'
                    : 'bg-white border-slate-100 shadow-sm hover:border-slate-200'
                }`}
              >
                {/* Icon Circle */}
                <div className={`p-3 rounded-xl border ${item.color} shrink-0`}>
                  {item.icon}
                </div>
                {/* Details */}
                <div className="flex-grow">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <h3 className="font-extrabold text-sm sm:text-base text-slate-800">
                      {item.title}
                    </h3>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-extrabold text-slate-400 uppercase tracking-widest">
                    <Clock className="w-3.5 h-3.5" />
                    {item.time}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Activity Details Spotlight */}
          <div className="lg:col-span-5 h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeGroup}-${selectedActivity}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-slate-50 border border-slate-100 rounded-[32px] p-8 shadow-inner sticky top-28 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-4 bg-white rounded-2xl border border-slate-200 text-primary">
                      {activeRoutine[selectedActivity].icon}
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-black tracking-widest text-primary">
                        Activity Details
                      </span>
                      <h4 className="text-lg sm:text-xl font-black text-slate-800">
                        {activeRoutine[selectedActivity].title}
                      </h4>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed mb-6">
                    {activeRoutine[selectedActivity].desc}
                  </p>
                </div>

                {/* Educational Value Tip Box */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200 flex items-start gap-3 shadow-sm">
                  <Heart className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] font-black uppercase text-accent tracking-wider block mb-0.5">
                      Why We Do It
                    </span>
                    <p className="text-xs sm:text-sm text-slate-600 font-bold leading-relaxed">
                      {activeRoutine[selectedActivity].tip}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
