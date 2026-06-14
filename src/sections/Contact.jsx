import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', program: 'toddler', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      tempErrors.email = 'Please enter your email.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) tempErrors.message = 'Please write a message.';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Trigger confetti explosion at center of window
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', program: 'toddler', message: '' });
      setTimeout(() => setSubmitted(false), 5000); // clear success modal after 5s
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#F8FBFF]/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-extrabold text-sm text-primary uppercase tracking-wider bg-primary/10 px-4 py-1.5 rounded-full">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-800 mt-4 leading-tight">
            Schedule a Visit or Send an Inquiry
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium mt-4">
            Have questions about fees, schedules, or curriculum? Write to us and we'll reply within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Details Sidebar Left (Col 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="bg-white border border-slate-100 p-8 sm:p-10 rounded-[32px] shadow-lg space-y-8">
              <h3 className="text-2xl font-black text-slate-800 mb-6">
                Bright Future Campus
              </h3>

              <div className="flex items-start gap-4">
                <div className="p-3.5 bg-primary/10 rounded-2xl text-primary shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-700 text-sm uppercase tracking-wide">
                    Our Location
                  </h4>
                  <p className="font-bold text-slate-600 text-base mt-1">
                    123 Learning Lane, Adventure City, AC 45678
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3.5 bg-secondary/25 rounded-2xl text-slate-800 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-700 text-sm uppercase tracking-wide">
                    Phone Contacts
                  </h4>
                  <p className="font-bold text-slate-600 text-base mt-1">
                    +1 (555) 456-7890<br />
                    +1 (555) 456-7891 (Admissions)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3.5 bg-accent/10 rounded-2xl text-accent shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-700 text-sm uppercase tracking-wide">
                    Email Support
                  </h4>
                  <p className="font-bold text-slate-600 text-base mt-1">
                    admissions@brightfuture.edu<br />
                    hello@brightfuture.edu
                  </p>
                </div>
              </div>
            </div>

            {/* Stylized Mock Map Canvas */}
            <div className="bg-white border border-slate-100 rounded-[32px] overflow-hidden shadow-lg aspect-[16/10] relative flex items-center justify-center bg-[#E5E9F0]">
              {/* Cute vector map blueprint */}
              <svg viewBox="0 0 400 250" className="absolute inset-0 w-full h-full opacity-60">
                <rect x="0" y="0" width="400" height="250" fill="#EBF4FF" />
                {/* Streets */}
                <line x1="80" y1="0" x2="80" y2="250" stroke="#FFF" strokeWidth="16" />
                <line x1="0" y1="120" x2="400" y2="120" stroke="#FFF" strokeWidth="20" />
                <line x1="280" y1="0" x2="280" y2="250" stroke="#FFF" strokeWidth="14" />
                {/* River */}
                <path d="M 0,220 Q 150,200 250,230 T 400,210" fill="none" stroke="#BAE6FD" strokeWidth="32" />
                {/* Campus icon */}
                <circle cx="280" cy="120" r="14" fill="#FF7F50" />
                <circle cx="280" cy="120" r="6" fill="#FFF" />
              </svg>
              
              <div className="z-10 bg-slate-900/80 backdrop-blur-md px-5 py-3 rounded-2xl text-white flex items-center gap-2.5 shadow-xl border border-white/10">
                <MapPin className="w-5 h-5 text-accent animate-bounce fill-accent" />
                <div>
                  <span className="text-[9px] uppercase font-bold text-accent tracking-widest block">
                    Modern School Campus
                  </span>
                  <span className="text-xs font-black">
                    Bright Future Kindergarten
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Area Right (Col 7) */}
          <div className="lg:col-span-7 bg-white border border-slate-100 p-8 sm:p-12 rounded-[36px] shadow-xl relative flex flex-col justify-between">
            <h3 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-2">
              <MessageSquare className="w-6 h-6 text-primary" />
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-extrabold text-slate-500 uppercase tracking-widest mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-5 py-3.5 rounded-2xl border bg-slate-50/50 font-semibold text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all ${
                      errors.name ? 'border-red-400 focus:ring-red-100' : 'border-slate-200 focus:border-primary'
                    }`}
                    placeholder="Parent's full name"
                  />
                  {errors.name && <p className="text-red-500 font-bold text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-slate-500 uppercase tracking-widest mb-2">
                    Email Address *
                  </label>
                  <input
                    type="text"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-5 py-3.5 rounded-2xl border bg-slate-50/50 font-semibold text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all ${
                      errors.email ? 'border-red-400 focus:ring-red-100' : 'border-slate-200 focus:border-primary'
                    }`}
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-red-500 font-bold text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-extrabold text-slate-500 uppercase tracking-widest mb-2">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-2xl border border-slate-200 bg-slate-50/50 font-semibold text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-slate-500 uppercase tracking-widest mb-2">
                    Interested Program
                  </label>
                  <select
                    value={formData.program}
                    onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-2xl border border-slate-200 bg-slate-50/50 font-semibold text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all"
                  >
                    <option value="infant">Infant Care (6w - 12m)</option>
                    <option value="toddler">Toddler Playgroup (1y - 2.5y)</option>
                    <option value="preschool">Preschool Explorer (2.5y - 4y)</option>
                    <option value="kindergarten">Kindergarten Prep (4y - 6y)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-extrabold text-slate-500 uppercase tracking-widest mb-2">
                  Message / Question *
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows="4"
                  className={`w-full px-5 py-3.5 rounded-2xl border bg-slate-50/50 font-semibold text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all ${
                    errors.message ? 'border-red-400 focus:ring-red-100' : 'border-slate-200 focus:border-primary'
                  }`}
                  placeholder="Tell us about your child and desired enrollment start date..."
                />
                {errors.message && <p className="text-red-500 font-bold text-xs mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-primary hover:bg-primary-hover text-white font-extrabold text-sm rounded-2xl shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all flex items-center justify-center gap-2 active:scale-99"
              >
                <Send className="w-4 h-4" />
                Submit Inquiry
              </button>
            </form>

            {/* Success Modal overlay */}
            <AnimatePresence>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-[36px] flex flex-col items-center justify-center p-8 text-center z-10"
                >
                  <motion.div
                    initial={{ scale: 0.5, rotate: -10 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', damping: 10 }}
                  >
                    <CheckCircle className="w-16 h-16 text-emerald-500 mb-6 fill-emerald-50" />
                  </motion.div>
                  <h4 className="text-2xl font-black text-slate-800 mb-2">
                    Inquiry Received!
                  </h4>
                  <p className="text-sm sm:text-base text-slate-500 font-semibold max-w-sm leading-relaxed mb-6">
                    Thank you! We've sent a confirmation to your email. Our admissions coordinator will reach out shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl"
                  >
                    Dismiss
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
