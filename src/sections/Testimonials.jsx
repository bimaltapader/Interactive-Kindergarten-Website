import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const reviews = [
    {
      quote: 'Bright Future has been an absolute blessing for our family. Our daughter Sofia talks about Miss Clara and her music workshops all day! The curriculum makes learning feel like a fun game, and her vocabulary has skyrocketed.',
      author: 'Maria & Robert K.',
      relation: 'Parents of Sofia (Age 3.5)',
      rating: 5,
      avatarColor: 'bg-primary/20 text-primary'
    },
    {
      quote: 'As first-time parents, we were extremely anxious about preschool. The security gates, HEPA filters, and daily photo updates in the parent portal immediately put us at ease. Mr. David is incredibly patient and caring.',
      author: 'Dr. James Lin',
      relation: 'Father of Ethan (Age 2.5)',
      rating: 5,
      avatarColor: 'bg-secondary/35 text-slate-800'
    },
    {
      quote: 'The STEAM laboratories and gardening classes are outstanding! My son loves planting tomatoes and exploring volcanic science. We feel extremely confident that he is fully prepared for his transition to primary school next year.',
      author: 'Sarah Jenkins',
      relation: 'Mother of Liam (Age 5)',
      rating: 5,
      avatarColor: 'bg-accent/20 text-accent'
    }
  ];

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-[#F8FBFF]/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-extrabold text-sm text-primary uppercase tracking-wider bg-primary/10 px-4 py-1.5 rounded-full">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-800 mt-4 leading-tight">
            What Parents Say About Us
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium mt-4">
            Hear from families who have experienced the warmth, safety, and curriculum of our kindergarten.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto relative px-4">
          <div className="absolute top-0 left-0 text-slate-200 -z-10 translate-y-[-20px] translate-x-[-10px]">
            <Quote className="w-24 h-24 stroke-[1] opacity-50" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white border border-slate-100 p-8 sm:p-12 rounded-[36px] shadow-xl relative"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6 justify-center sm:justify-start">
                {[...Array(reviews[index].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-secondary fill-secondary" />
                ))}
              </div>

              {/* Quote Text */}
              <p className="text-lg sm:text-xl text-slate-700 font-medium leading-relaxed italic mb-8 text-center sm:text-left">
                "{reviews[index].quote}"
              </p>

              {/* Author Metadata */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-4 text-center sm:text-left">
                  {/* Initials Circle */}
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center font-black text-lg ${reviews[index].avatarColor}`}>
                    {reviews[index].author.split(' ')[0][0]}
                    {reviews[index].author.split(' ').slice(-1)[0][0]}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-850 text-base sm:text-lg">
                      {reviews[index].author}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 font-bold">
                      {reviews[index].relation}
                    </p>
                  </div>
                </div>

                {/* Slider Controls */}
                <div className="flex gap-2">
                  <button
                    onClick={handlePrev}
                    className="p-3.5 bg-slate-50 hover:bg-slate-100 text-slate-600 rounded-full border border-slate-100 hover:border-slate-200 transition-all active:scale-95"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-3.5 bg-slate-50 hover:bg-slate-100 text-slate-600 rounded-full border border-slate-100 hover:border-slate-200 transition-all active:scale-95"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
