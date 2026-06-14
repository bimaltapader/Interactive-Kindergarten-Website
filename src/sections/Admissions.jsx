import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, FileText, Users, Gift, ChevronDown } from 'lucide-react';

export default function Admissions() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: '1. Book a Campus Tour',
      icon: <Calendar className="w-6 h-6 text-primary" />,
      color: 'border-blue-200 bg-blue-50/50 text-primary',
      desc: 'Schedule a visit online or call us to explore our 3D-integrated classrooms, outdoor playgrounds, and meet active instructors.',
      details: [
        'Available Monday - Friday, 9:00 AM & 2:00 PM',
        'Includes a private 1-on-1 Q&A with our school director',
        'Tour lasts approximately 45 minutes'
      ]
    },
    {
      title: '2. Submit Application',
      icon: <FileText className="w-6 h-6 text-amber-500" />,
      color: 'border-yellow-200 bg-yellow-50/50 text-amber-600',
      desc: 'Fill out our simplified enrollment application form and submit relevant immunization records and certificates.',
      details: [
        'Application fee is waived for virtual signups this month',
        'Upload files securely via the parent portal',
        'Required: Child birth certificate and vaccination cards'
      ]
    },
    {
      title: '3. Student Meet-and-Greet',
      icon: <Users className="w-6 h-6 text-accent" />,
      color: 'border-orange-200 bg-orange-50/50 text-accent',
      desc: 'A gentle, play-based assessment session where educators observe your child’s social interaction and sensory adaptation.',
      details: [
        'No formal academic testing is done—it is entirely play-based!',
        'Helps us pair your child with the perfect classroom group',
        'Parents are welcome to sit in during the session'
      ]
    },
    {
      title: '4. Secure Enrollment',
      icon: <Gift className="w-6 h-6 text-emerald-500" />,
      color: 'border-emerald-200 bg-emerald-50/50 text-emerald-600',
      desc: 'Confirm your program tier, secure placement with a refundable deposit, and receive your welcome package + school calendar.',
      details: [
        'Custom payment plans are available for tuition fees',
        'Includes school kit: backpack, safety tag, art apron',
        'Final step: Welcome and orientation day'
      ]
    }
  ];

  return (
    <section id="admissions" className="py-20 sm:py-28 bg-white/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="font-extrabold text-sm text-accent uppercase tracking-wider bg-accent/10 px-4 py-1.5 rounded-full">
            Enrollment
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-800 mt-4 leading-tight">
            How to Join Bright Future
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium mt-4">
            Our admissions process is transparent and designed to welcome your child with open arms. Follow these simple steps.
          </p>
        </div>

        {/* Stepper Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Timeline steps left (Col 7) */}
          <div className="lg:col-span-7 space-y-4">
            {steps.map((step, index) => {
              const isSelected = activeStep === index;
              return (
                <div
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`border rounded-3xl p-6 transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-slate-50 border-primary shadow-md'
                      : 'bg-white border-slate-100 shadow-sm hover:border-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      {/* Step Icon */}
                      <div className={`p-3.5 rounded-2xl border ${step.color} shrink-0`}>
                        {step.icon}
                      </div>
                      <h3 className="text-base sm:text-lg font-black text-slate-850">
                        {step.title}
                      </h3>
                    </div>
                    
                    {/* Expand icon */}
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                        isSelected ? 'rotate-180 text-primary' : ''
                      }`}
                    />
                  </div>

                  {/* Accordion Expansion */}
                  <AnimatePresence initial={false}>
                    {isSelected && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed mt-4 border-t border-slate-100/70 pt-4">
                          {step.desc}
                        </p>
                        
                        {/* Bullets inside */}
                        <div className="mt-4 space-y-2.5">
                          {step.details.map((bullet, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm font-bold text-slate-700">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                              <p>{bullet}</p>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Graphical summary right (Col 5) */}
          <div className="lg:col-span-5 bg-gradient-to-tr from-primary/10 to-secondary/15 border border-slate-200/50 p-8 sm:p-10 rounded-[36px] shadow-inner text-center sticky top-28">
            <h3 className="text-2xl font-black text-slate-800 mb-4">
              Enrollment Checklist
            </h3>
            <p className="text-slate-600 font-semibold text-sm leading-relaxed mb-8 max-w-sm mx-auto">
              Please have these documents prepared before submitting your enrollment form to expedite application reviews.
            </p>

            <ul className="space-y-4 max-w-xs mx-auto text-left">
              {[
                'Child Birth Certificate or Passport',
                'Up-to-date Immunization Chart',
                'Completed Health Appraisal Form',
                'Proof of Family Residency',
                'Emergency Contact Details'
              ].map((doc, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                  <div className="w-6 h-6 rounded-full bg-white shadow-sm flex items-center justify-center text-primary font-bold text-xs border border-primary/20">
                    ✓
                  </div>
                  {doc}
                </li>
              ))}
            </ul>

            <div className="mt-10 pt-8 border-t border-slate-200/50">
              <a
                href="#contact"
                className="inline-flex justify-center w-full py-4 bg-primary hover:bg-primary-hover text-white font-extrabold rounded-2xl shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all text-sm"
              >
                Inquire Admission Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
