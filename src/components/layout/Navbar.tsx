import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '../icons/BrandIcons';
import { Container } from './Container';
import { Button } from '../ui/Button';
import { ThemeToggle } from '../ui/ThemeToggle';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills & Tech', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPos = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-[background-color,border-color,padding,box-shadow] duration-200 ${
        isScrolled
          ? 'glass-surface border-b border-slate-200/80 dark:border-white/[0.08] py-3 shadow-sm dark:shadow-lg'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <Container size="default">
        <div className="flex items-center justify-between">
          {/* Brand Identity */}
          <a
            href="#"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-xl p-1 active:scale-[0.98] transition-transform"
            aria-label="Nguyen Anh Quan Portfolio"
          >
            <div className="relative">
              <img
                src={PERSONAL_INFO.avatar}
                alt={PERSONAL_INFO.name}
                className="w-9 h-9 rounded-xl object-cover border border-slate-200 dark:border-white/[0.12] group-hover:border-sky-500 dark:group-hover:border-sky-400 transition-colors shadow-2xs"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white dark:border-[#090D16] shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-tight text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 leading-none">
                Software Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/90 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] rounded-full p-1 shadow-2xs backdrop-blur-md">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`text-xs font-semibold px-4 py-1.5 rounded-full transition-[color,background-color,border-color,box-shadow] duration-150 select-none ${
                    isActive
                      ? 'text-sky-700 bg-white border border-slate-200/90 shadow-2xs dark:text-sky-300 dark:bg-sky-500/15 dark:border-sky-500/30 font-bold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 dark:text-slate-400 dark:hover:text-white dark:hover:bg-white/[0.06]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Theme Toggle + GitHub + Contact CTA */}
          <div className="hidden sm:flex items-center gap-2">
            {/* Theme Toggle Button (Light/White Mode <-> Dark Mode) */}
            <ThemeToggle />

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile quannguyen89s"
              className="p-2 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border border-slate-200 dark:bg-white/[0.04] dark:hover:bg-white/[0.08] dark:text-slate-300 dark:hover:text-white dark:border-white/[0.08] active:scale-[0.96] transition-[transform,background-color,color] duration-150 shadow-2xs"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <Button
              asAnchor
              href="#contact"
              size="sm"
              variant="primary"
              className="justify-center text-center"
              iconRight={<ArrowUpRight className="w-3.5 h-3.5" />}
            >
              Contact
            </Button>
          </div>

          {/* Mobile Right Controls: Theme Toggle & Menu Toggle */}
          <div className="flex sm:hidden items-center gap-1.5">
            <ThemeToggle />

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 dark:bg-white/[0.05] dark:border-white/[0.1] dark:text-slate-300 dark:hover:bg-white/[0.1] active:scale-[0.96] transition-[transform,background-color] duration-150 cursor-pointer shadow-2xs"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="md:hidden glass-dropdown border-b border-slate-200 dark:border-white/[0.08] px-5 py-4 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col gap-1.5">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3.5 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-white dark:hover:bg-white/[0.06] transition-colors active:scale-[0.98]"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-3 mt-1 border-t border-slate-200 dark:border-white/[0.08] flex items-center justify-between gap-3">
                <ThemeToggle showLabel />
                
                <div className="flex items-center gap-2">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-mono font-medium text-slate-700 dark:text-slate-300 p-2"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <Button
                    asAnchor
                    href="#contact"
                    size="sm"
                    variant="primary"
                    className="justify-center text-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
