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
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 flex flex-col relative selection:bg-sky-500/20 selection:text-sky-900 bg-grid-pattern">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
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
