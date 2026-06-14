import React from 'react';
import Navbar from './components/Navbar';
import HeroCanvas from './components/Hero3D/HeroCanvas';
import HeroContent from './components/HeroContent';
import About from './sections/About';
import Programs from './sections/Programs';
import Teachers from './sections/Teachers';
import DailyActivities from './sections/DailyActivities';
import VirtualTour from './sections/VirtualTour';
import PhotoGallery from './sections/PhotoGallery';
import Testimonials from './sections/Testimonials';
import Admissions from './sections/Admissions';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import FloatingClouds from './components/UI/FloatingClouds';

function App() {
  return (
    <div className="relative min-h-screen font-sans bg-brand-bg text-dark-text select-none">
      {/* Global Scroll Progress or Navbar */}
      <Navbar />

      {/* Hero Section - Full Screen 3D Sky World */}
      <header className="relative w-full h-screen overflow-hidden bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/hero_sky_background.png')" }}>
        {/* Animated fluffy clouds in R3F canvas + HTML sky gradient makes this scene extremely deep and layered */}
        <HeroCanvas />
        
        {/* Foreground Content */}
        <HeroContent />

        {/* Playful wave divider at bottom of Hero */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[45px] text-[#F8FBFF] fill-current">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,42.4V0Z" />
          </svg>
        </div>
      </header>

      {/* 2D Content Sections with background drifting clouds */}
      <main className="relative z-10 bg-repeat bg-center" style={{ backgroundImage: "url('/body_background.png')" }}>
        {/* Floating clouds drifting in the background of other sections */}
        <FloatingClouds />

        <About />
        <Programs />
        <Teachers />
        <DailyActivities />
        <VirtualTour />
        <PhotoGallery />
        <Testimonials />
        <Admissions />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
