import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { SkillsArchitecture } from './components/sections/SkillsArchitecture';
import { ProjectShowcase } from './components/sections/ProjectShowcase';
import { Contact } from './components/sections/Contact';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#F8FAFC] text-slate-900 dark:bg-[#090D16] dark:text-slate-100 flex flex-col relative selection:bg-sky-500/20 selection:text-sky-900 dark:selection:bg-sky-500/30 dark:selection:text-sky-200 bg-grid-pattern transition-colors duration-300">
        {/* Subtle ambient lighting spotlights */}
        <div
          className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-sky-400/15 via-blue-500/10 to-transparent dark:from-sky-500/10 dark:via-blue-600/5 dark:to-transparent rounded-full blur-[140px] pointer-events-none -z-10"
          aria-hidden="true"
        />
        <div
          className="fixed bottom-0 right-1/4 w-[600px] h-[350px] bg-indigo-400/10 dark:bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none -z-10"
          aria-hidden="true"
        />

        {/* Navigation */}
        <Navbar />

        {/* 4 Essential Content Sections: About -> Skills & Tech -> Featured Projects -> Contact */}
        <main className="flex-1">
          <Hero />
          <SkillsArchitecture />
          <ProjectShowcase />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
