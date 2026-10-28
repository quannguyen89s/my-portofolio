import React from 'react';
import { ArrowUp, Mail, MapPin } from 'lucide-react';
import { GithubIcon } from '../icons/BrandIcons';
import { Container } from './Container';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200/80 dark:border-white/[0.08] bg-slate-100/70 dark:bg-[#090D16] pt-14 pb-12 text-slate-600 dark:text-slate-400 transition-colors duration-200">
      <Container size="default">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-200/80 dark:border-white/[0.08]">
          {/* Brand */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-500 dark:bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.7)]" />
              <span className="font-bold text-slate-900 dark:text-white text-base">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-xs font-mono text-slate-500">
                / {PERSONAL_INFO.role}
              </span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed text-pretty">
              Final-year Software Engineering student at FPT University Da Nang, building modern web and backend applications with a focus on clean architecture and smooth user experiences.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-600 dark:text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 shrink-0" />
              <span>{PERSONAL_INFO.location}</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-3 space-y-2">
            <p className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200">
              Navigation
            </p>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="#about" className="text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-300 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-300 transition-colors">
                  Skills & Tech
                </a>
              </li>
              <li>
                <a href="#projects" className="text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-300 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-300 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200">
              Connect
            </p>
            <div className="flex items-center gap-2.5">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile quannguyen89s"
                className="w-9 h-9 rounded-xl bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] hover:border-sky-500/50 hover:text-sky-600 dark:hover:text-white text-slate-700 dark:text-slate-300 flex items-center justify-center active:scale-[0.96] transition-[transform,border-color,color] duration-150 shadow-2xs"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                aria-label="Send email"
                className="w-9 h-9 rounded-xl bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] hover:border-sky-500/50 hover:text-sky-600 dark:hover:text-white text-slate-700 dark:text-slate-300 flex items-center justify-center active:scale-[0.96] transition-[transform,border-color,color] duration-150 shadow-2xs"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <p className="text-xs font-mono text-slate-600 dark:text-slate-400">
              Email: <span className="text-slate-900 dark:text-slate-200 font-medium select-all">{PERSONAL_INFO.email}</span>
            </p>
          </div>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="font-mono tabular-nums text-slate-500 dark:text-slate-400">
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with React, TypeScript & Tailwind CSS.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center justify-center gap-1.5 font-mono text-xs text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-300 active:scale-[0.96] transition-[transform,color] duration-150 cursor-pointer text-center"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </Container>
    </footer>
  );
};
