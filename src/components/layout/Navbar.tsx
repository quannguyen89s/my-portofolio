import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Mail } from 'lucide-react';
import { GithubIcon } from '../icons/BrandIcons';
import { Container } from './Container';
import { Button } from '../ui/Button';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Dự án & Repos', href: '#projects' },
  { label: 'Kỹ năng', href: '#skills' },
  { label: 'Học vấn', href: '#journey' },
  { label: 'Liên hệ', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('projects');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPos = window.scrollY + 200;

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
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 py-3 shadow-xs'
          : 'bg-transparent py-4'
      }`}
    >
      <Container size="wide">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 rounded-lg p-1"
            aria-label="Quân Nguyễn Portfolio"
          >
            <img
              src={PERSONAL_INFO.avatar}
              alt={PERSONAL_INFO.name}
              className="w-8 h-8 rounded-lg object-cover border border-slate-200 group-hover:border-sky-500 transition-colors shadow-xs"
            />
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-tight text-slate-900 group-hover:text-sky-600 transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[11px] font-mono text-slate-500 leading-none">
                @{PERSONAL_INFO.handle} • Đà Nẵng
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-white/80 border border-slate-200/90 rounded-full px-3 py-1.5 shadow-xs backdrop-blur-md">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`text-xs font-medium px-3.5 py-1.5 rounded-full transition-all duration-150 relative ${
                    isActive
                      ? 'text-sky-700 bg-sky-50 font-semibold border border-sky-200'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action: GitHub link & Contact CTA */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile quannguyen89s"
              className="p-2 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-sky-600 border border-slate-200/90 transition-colors shadow-2xs"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <Button
              asAnchor
              href="#contact"
              size="sm"
              variant="primary"
              iconRight={<ArrowUpRight className="w-3.5 h-3.5" />}
            >
              Liên hệ
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
            aria-label={mobileMenuOpen ? 'Đóng menu' : 'Mở menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </Container>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-200 px-6 py-4 shadow-lg overflow-hidden"
          >
            <div className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:text-sky-600 hover:bg-sky-50/60 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-mono text-slate-700 hover:text-sky-600"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>@{PERSONAL_INFO.handle}</span>
                </a>
                <Button
                  asAnchor
                  href="#contact"
                  size="sm"
                  variant="primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Liên hệ
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
