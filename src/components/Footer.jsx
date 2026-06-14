import React from 'react';
import { GraduationCap, Heart, Mail, Phone, MapPin } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Footer() {
  const triggerNewsletterConfetti = (e) => {
    e.preventDefault();
    confetti({
      particleCount: 50,
      spread: 60,
      colors: ['#4F9CF9', '#FFD93D', '#FF7F50']
    });
  };

  return (
    <footer className="relative bg-slate-900 text-white pt-24 pb-12 overflow-hidden">
      
      {/* Playful Wave Divider at the top of the footer */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none transform translate-y-[-99%]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] text-slate-900 fill-current">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,8.75,57.05,18.3,88.43,26.88,166.7,48.33,248.8,69.87,321.39,56.44Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-slate-800">
          
          {/* Brand Info (Col 4) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2 select-none">
              <div className="p-2.5 bg-primary rounded-2xl text-white shadow-md">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="font-extrabold text-xl tracking-tight text-white flex items-center gap-1">
                  Bright<span className="text-primary">Future</span>
                </span>
                <p className="text-[10px] uppercase font-bold tracking-widest text-accent -mt-1">
                  Kindergarten
                </p>
              </div>
            </div>

            <p className="text-slate-400 font-semibold text-sm leading-relaxed max-w-sm">
              Creating a secure, colorful world where young minds can build their dreams, explore natural sciences, and develop social bonds through creative play.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              <a href="#" className="p-3 bg-slate-800 hover:bg-primary text-slate-300 hover:text-white rounded-xl transition-all duration-200" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/></svg>
              </a>
              <a href="#" className="p-3 bg-slate-800 hover:bg-primary text-slate-300 hover:text-white rounded-xl transition-all duration-200" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="#" className="p-3 bg-slate-800 hover:bg-primary text-slate-300 hover:text-white rounded-xl transition-all duration-200" aria-label="Twitter">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>

          </div>

          {/* Quick Links (Col 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-extrabold uppercase tracking-widest text-secondary">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-slate-400 font-bold text-sm">
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#programs" className="hover:text-primary transition-colors">Programs</a></li>
              <li><a href="#teachers" className="hover:text-primary transition-colors">Our Teachers</a></li>
              <li><a href="#activities" className="hover:text-primary transition-colors">Daily Routines</a></li>
              <li><a href="#admissions" className="hover:text-primary transition-colors">Admissions</a></li>
            </ul>
          </div>

          {/* Contact details (Col 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-extrabold uppercase tracking-widest text-secondary">
              Admissions Office
            </h4>
            <ul className="space-y-4 text-slate-450 font-semibold text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-slate-400">123 Learning Lane, Adventure City, AC 45678</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="text-slate-400">+1 (555) 456-7890</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="text-slate-400">admissions@brightfuture.edu</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Input (Col 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-extrabold uppercase tracking-widest text-secondary">
              Parent Newsletter
            </h4>
            <p className="text-slate-450 font-semibold text-xs leading-relaxed">
              Get monthly updates on activities, schedules, and tips for early learning.
            </p>
            
            <form onSubmit={triggerNewsletterConfetti} className="space-y-2.5 pt-2">
              <input
                type="email"
                required
                className="w-full px-4.5 py-3 rounded-xl bg-slate-800 border border-slate-700/60 font-semibold text-white text-xs focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all placeholder:text-slate-505"
                placeholder="Enter parent email"
              />
              <button
                type="submit"
                className="w-full py-3 bg-primary hover:bg-primary-hover text-white font-extrabold text-xs rounded-xl shadow-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom copyright details */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-10 text-xs font-bold text-slate-500 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Bright Future Kindergarten. All Rights Reserved.</p>
          <p className="flex items-center gap-1 justify-center">
            Designed with <Heart className="w-4 h-4 text-accent fill-accent animate-pulse" /> for kids and parents.
          </p>
        </div>
      </div>
    </footer>
  );
}
