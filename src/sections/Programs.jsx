import React from 'react';
import { motion } from 'framer-motion';
import { Baby, Palette, Blocks, BookOpen, Clock, Heart } from 'lucide-react';

export default function Programs() {
  const programs = [
    {
      title: 'Infant Care',
      age: '6 Weeks - 12 Months',
      description: 'A nurturing, warm environment focusing on sensory development, motor skills, and responsive caregiving.',
      icon: <Baby className="w-8 h-8 text-primary" />,
      color: 'from-blue-400 to-blue-500',
      bgLight: 'bg-blue-50/70',
      borderCol: 'hover:border-blue-300',
      focus: ['Sensory Exploration', 'Basic Motor Skills', 'Social Bonding', 'Music & Sounds']
    },
    {
      title: 'Toddler Playgroup',
      age: '1 - 2.5 Years',
      description: 'Fostering language development, early socialization, and fine motor skills through creative play and blocks.',
      icon: <Blocks className="w-8 h-8 text-amber-500" />,
      color: 'from-amber-400 to-amber-500',
      bgLight: 'bg-amber-50/70',
      borderCol: 'hover:border-amber-300',
      focus: ['Language Building', 'Potty Training Help', 'Active Playtimes', 'Social Integration']
    },
    {
      title: 'Preschool Explorer',
      age: '2.5 - 4 Years',
      description: 'Hands-on curriculum emphasizing letters, numbers, creative arts, and scientific curiosity.',
      icon: <Palette className="w-8 h-8 text-accent" />,
      color: 'from-orange-400 to-orange-500',
      bgLight: 'bg-orange-50/70',
      borderCol: 'hover:border-orange-300',
      focus: ['Art & Color Mixing', 'Early Math Concepts', 'Nature Excursions', 'Independent Choice']
    },
    {
      title: 'Kindergarten Prep',
      age: '4 - 6 Years',
      description: 'Comprehensive academic readiness program covering phonics, math reasoning, writing, and structured collaboration.',
      icon: <BookOpen className="w-8 h-8 text-emerald-500" />,
      color: 'from-emerald-400 to-emerald-500',
      bgLight: 'bg-emerald-50/70',
      borderCol: 'hover:border-emerald-300',
      focus: ['Advanced Phonics', 'Mathematical Logic', 'Social Cooperation', 'Science Experiments']
    }
  ];

  return (
    <section id="programs" className="py-20 sm:py-28 bg-white/40 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="font-extrabold text-sm text-accent uppercase tracking-wider bg-accent/10 px-4 py-1.5 rounded-full">
            Our Classes
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-800 mt-4 leading-tight">
            Learning Programs Built Around Child Development
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium mt-4">
            Each classroom is specifically tailored to its age group, ensuring kids get the right blend of care, interactive learning, and fun.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {programs.map((prog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className={`p-8 sm:p-10 rounded-[32px] border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white ${prog.borderCol} flex flex-col justify-between`}
            >
              <div>
                {/* Header elements */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-4 rounded-2xl ${prog.bgLight}`}>
                    {prog.icon}
                  </div>
                  <span className={`inline-flex items-center gap-1 text-xs font-extrabold text-white px-4.5 py-1.5 rounded-full bg-gradient-to-r ${prog.color}`}>
                    <Clock className="w-3.5 h-3.5" />
                    {prog.age}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-black text-slate-800 mb-3">{prog.title}</h3>
                <p className="text-slate-600 font-medium leading-relaxed mb-6 text-sm sm:text-base">
                  {prog.description}
                </p>
              </div>

              {/* Focus List */}
              <div className="border-t border-slate-100 pt-6 mt-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-4">
                  Core Development Focus
                </span>
                <div className="grid grid-cols-2 gap-3">
                  {prog.focus.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="font-bold text-slate-700 text-xs sm:text-sm">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
