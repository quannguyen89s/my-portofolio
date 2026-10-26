import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { BentoAbout } from './components/sections/BentoAbout';
import { ProjectShowcase } from './components/sections/ProjectShowcase';
import { SkillsArchitecture } from './components/sections/SkillsArchitecture';
import { JourneyTimeline } from './components/sections/JourneyTimeline';
import { Contact } from './components/sections/Contact';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#080C14] text-slate-100 flex flex-col relative selection:bg-sky-500/20 selection:text-sky-300 bg-grid-pattern">
      {/* Dynamic Navigation */}
      <Navbar />

      {/* Main Content Flow */}
      <main className="flex-1">
        <Hero />
        <BentoAbout />
        <ProjectShowcase />
        <SkillsArchitecture />
        <JourneyTimeline />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
