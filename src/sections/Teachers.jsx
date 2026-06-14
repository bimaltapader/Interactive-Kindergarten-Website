import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Award, Star } from 'lucide-react';

export default function Teachers() {
  const teachers = [
    {
      name: 'Miss Clara Vance',
      role: 'Preschool Lead Instructor',
      education: 'M.A. in Early Childhood Education',
      funFact: 'Can name over 100 dinosaur species!',
      rating: 5,
      color: 'bg-primary/10 text-primary',
      avatar: (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="46" fill="#F0F9FF" stroke="#E0F2FE" strokeWidth="2" />
          {/* Hair */}
          <path d="M25 45 C25 20, 75 20, 75 45 C75 50, 70 55, 68 60 C65 65, 35 65, 32 60 C30 55, 25 50, 25 45 Z" fill="#F59E0B" />
          {/* Face */}
          <circle cx="50" cy="52" r="22" fill="#FED7AA" />
          {/* Hair Front */}
          <path d="M26 42 C35 30, 50 35, 50 42 C50 35, 65 30, 74 42" fill="none" stroke="#F59E0B" strokeWidth="6" strokeLinecap="round" />
          {/* Eyes */}
          <circle cx="43" cy="50" r="2.5" fill="#1E293B" />
          <circle cx="57" cy="50" r="2.5" fill="#1E293B" />
          {/* Smile */}
          <path d="M45 58 Q50 63, 55 58" fill="none" stroke="#E11D48" strokeWidth="2.5" strokeLinecap="round" />
          {/* Cheeks */}
          <circle cx="40" cy="54" r="2" fill="#FCA5A5" opacity="0.6" />
          <circle cx="60" cy="54" r="2" fill="#FCA5A5" opacity="0.6" />
          {/* Glasses */}
          <circle cx="43" cy="50" r="6" fill="none" stroke="#475569" strokeWidth="1.5" />
          <circle cx="57" cy="50" r="6" fill="none" stroke="#475569" strokeWidth="1.5" />
          <line x1="49" y1="50" x2="51" y2="50" stroke="#475569" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      name: 'Mr. David Miller',
      role: 'Kindergarten Specialist',
      education: 'B.Ed. in Child Development',
      funFact: 'Plays 5 instruments and leads our sing-alongs!',
      rating: 5,
      color: 'bg-secondary/20 text-slate-800',
      avatar: (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="46" fill="#FEFEE2" stroke="#FEF08A" strokeWidth="2" />
          {/* Hair */}
          <path d="M30 35 Q50 15, 70 35 Q75 40, 70 45 C65 48, 35 48, 30 45 Z" fill="#78350F" />
          {/* Face */}
          <circle cx="50" cy="52" r="22" fill="#FFEDD5" />
          {/* Eyes */}
          <circle cx="42" cy="51" r="2.5" fill="#1E293B" />
          <circle cx="58" cy="51" r="2.5" fill="#1E293B" />
          {/* Smile */}
          <path d="M44 59 Q50 64, 56 59" fill="none" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />
          {/* Cheeks */}
          <circle cx="39" cy="55" r="1.5" fill="#FCA5A5" opacity="0.5" />
          <circle cx="61" cy="55" r="1.5" fill="#FCA5A5" opacity="0.5" />
          {/* Cute Cap */}
          <path d="M30 36 C30 25, 70 25, 70 36 Z" fill="#3B82F6" />
          <path d="M25 36 L75 36" stroke="#2563EB" strokeWidth="4" strokeLinecap="round" />
        </svg>
      )
    },
    {
      name: 'Miss Sarah Jenkins',
      role: 'Creative Arts & Crafts Coach',
      education: 'B.F.A. in Visual Arts & Education',
      funFact: 'Can sculpt animal figures with her eyes closed!',
      rating: 5,
      color: 'bg-accent/10 text-accent',
      avatar: (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="46" fill="#FFF5F5" stroke="#FEE2E2" strokeWidth="2" />
          {/* Hair */}
          <path d="M22 55 C20 30, 80 30, 78 55 C82 70, 72 75, 70 80 Q50 82, 30 80 C28 75, 18 70, 22 55 Z" fill="#B91C1C" />
          {/* Face */}
          <circle cx="50" cy="50" r="22" fill="#FEE082" />
          {/* Hair bangs */}
          <path d="M28 40 Q50 32, 72 40" fill="none" stroke="#B91C1C" strokeWidth="6" strokeLinecap="round" />
          {/* Eyes */}
          <circle cx="43" cy="48" r="2.5" fill="#1E293B" />
          <circle cx="57" cy="48" r="2.5" fill="#1E293B" />
          {/* Smile */}
          <path d="M44 56 Q50 62, 56 56" fill="none" stroke="#BE123C" strokeWidth="2.5" strokeLinecap="round" />
          {/* Flower in hair */}
          <circle cx="72" cy="38" r="4" fill="#FACC15" />
          <circle cx="72" cy="38" r="1.5" fill="#FFF" />
        </svg>
      )
    },
    {
      name: 'Miss Emily Stone',
      role: 'Infant Care & Sensory Coach',
      education: 'Certified Pediatric Care Specialist',
      funFact: 'Has a secret recipe for the ultimate bubble solution!',
      rating: 5,
      color: 'bg-emerald-50 text-emerald-600',
      avatar: (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="46" fill="#F0FDF4" stroke="#DCFCE7" strokeWidth="2" />
          {/* Hair */}
          <path d="M26 40 C26 15, 74 15, 74 40 C74 55, 68 55, 68 70 C60 70, 40 70, 32 70 C32 55, 26 55, 26 40 Z" fill="#475569" />
          {/* Face */}
          <circle cx="50" cy="48" r="21" fill="#FFD8A8" />
          {/* Eyes */}
          <circle cx="42" cy="46" r="2.5" fill="#1E293B" />
          <circle cx="58" cy="46" r="2.5" fill="#1E293B" />
          {/* Smile */}
          <path d="M45 54 Q50 59, 55 54" fill="none" stroke="#E11D48" strokeWidth="2.5" strokeLinecap="round" />
          {/* Ribbon */}
          <rect x="36" y="22" width="28" height="4" rx="2" fill="#E11D48" />
        </svg>
      )
    }
  ];

  return (
    <section id="teachers" className="py-20 sm:py-28 bg-[#F8FBFF]/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="font-extrabold text-sm text-primary uppercase tracking-wider bg-primary/10 px-4 py-1.5 rounded-full">
            Our Mentors
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-800 mt-4 leading-tight">
            Meet Our Passionate Educators
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium mt-4">
            Our certified, first-aid trained instructors love teaching and bring unique skills to make learning fun every day.
          </p>
        </div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachers.map((teacher, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1, type: 'spring', stiffness: 80 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-[32px] overflow-hidden border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-300 p-6 flex flex-col items-center text-center"
            >
              {/* Avatar Frame */}
              <div className="w-32 h-32 mb-6 rounded-full overflow-hidden border-4 border-slate-50 shadow-inner group">
                <div className="w-full h-full transform transition-transform duration-300 group-hover:scale-110">
                  {teacher.avatar}
                </div>
              </div>

              {/* Info */}
              <h3 className="text-lg font-black text-slate-800 mb-1">{teacher.name}</h3>
              <span className={`inline-block text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider mb-4 ${teacher.color}`}>
                {teacher.role}
              </span>
              
              <p className="text-xs text-slate-500 font-bold flex items-center justify-center gap-1 mb-4">
                <Award className="w-4 h-4 text-primary" />
                {teacher.education}
              </p>

              {/* Rating stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(teacher.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-secondary fill-secondary" />
                ))}
              </div>

              {/* Fun Fact */}
              <div className="w-full bg-slate-50 p-4 rounded-2xl border border-slate-100/50 mt-auto">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                  Fun Fact
                </span>
                <p className="text-xs text-slate-600 font-semibold italic">
                  "{teacher.funFact}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
