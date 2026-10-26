import React from 'react';
import { ArrowUp, Mail, Code2, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '../icons/BrandIcons';
import { Container } from './Container';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#06090F] pt-16 pb-12 text-slate-400">
      <Container size="wide">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/[0.06]">
          {/* Brand & Mission */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8]" />
              <span className="font-bold text-slate-100 text-base">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-xs font-mono text-slate-500">
                / {PERSONAL_INFO.role}
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Designed with strict adherence to 8-point spatial rhythm, semantic token systems, and WCAG 2.2 AA accessibility standards.
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>All Systems Operational (99.99% SLA)</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300">
              Navigation
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-sky-300 transition-colors">
                  01. About & Philosophy
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-sky-300 transition-colors">
                  02. Selected Work
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-sky-300 transition-colors">
                  03. System Architecture
                </a>
              </li>
              <li>
                <a href="#journey" className="hover:text-sky-300 transition-colors">
                  04. Journey & Milestones
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-sky-300 transition-colors">
                  05. Get in Touch
                </a>
              </li>
            </ul>
          </div>

          {/* Socials & Colophon */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300">
              Connect & Source
            </p>
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="w-9 h-9 rounded-lg bg-[#111827] border border-white/[0.08] hover:border-sky-500/40 text-slate-300 hover:text-white flex items-center justify-center transition-all"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="w-9 h-9 rounded-lg bg-[#111827] border border-white/[0.08] hover:border-sky-500/40 text-slate-300 hover:text-white flex items-center justify-center transition-all"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter profile"
                className="w-9 h-9 rounded-lg bg-[#111827] border border-white/[0.08] hover:border-sky-500/40 text-slate-300 hover:text-white flex items-center justify-center transition-all"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                aria-label="Send direct email"
                className="w-9 h-9 rounded-lg bg-[#111827] border border-white/[0.08] hover:border-sky-500/40 text-slate-300 hover:text-white flex items-center justify-center transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <p className="text-[11px] text-slate-500 font-mono pt-2">
              Stack: React 19 • TypeScript • Tailwind CSS • Framer Motion
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <span>© {new Date().getFullYear()} Alex Rivera. Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-sky-400 fill-sky-400 inline" />
            <span>and clean code principles.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-slate-400 hover:text-sky-300 font-mono text-xs transition-colors p-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            aria-label="Scroll back to top of page"
          >
            <span>Back to Top</span>
            <div className="w-6 h-6 rounded bg-[#131B2E] border border-white/[0.1] flex items-center justify-center">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>
      </Container>
    </footer>
  );
};
