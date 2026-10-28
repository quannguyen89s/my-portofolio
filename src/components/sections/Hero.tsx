import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowDown, 
  Mail, 
  Copy, 
  Check, 
  Layers, 
  Server, 
  Cpu,
  ExternalLink,
  Sparkles,
  MapPin,
  Code2
} from 'lucide-react';
import { GithubIcon } from '../icons/BrandIcons';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import { PERSONAL_INFO } from '../../data/portfolioData';

const TECH_USED = [
  'React.js, TypeScript & Tailwind CSS',
  'Node.js, Express & REST API',
  'Java & Spring Boot 3',
  'MongoDB, MySQL & PostgreSQL',
  'Full-Stack Web Development',
];

const TICKER_ITEMS = [
  { text: 'FULL-STACK DEVELOPER', icon: '✦', accent: 'sky' },
  { text: 'REACT 19', icon: '⚡', accent: 'sky' },
  { text: 'TYPESCRIPT', icon: '✦', accent: 'sky' },
  { text: 'NODE.JS & EXPRESS', icon: '⚡', accent: 'indigo' },
  { text: 'SPRING BOOT 3', icon: '✦', accent: 'indigo' },
  { text: 'MONGODB', icon: '⚡', accent: 'emerald' },
  { text: 'HOMESTAY BOOKING PLATFORM', icon: '✦', accent: 'amber' },
  { text: 'SMARTCARE CLINIC SYSTEM', icon: '⚡', accent: 'emerald' },
  { text: 'HESTA SMART HOME', icon: '✦', accent: 'sky' },
  { text: 'FPT UNIVERSITY DA NANG', icon: '⚡', accent: 'amber' },
];

const getIconColor = (accent: string) => {
  switch (accent) {
    case 'indigo':
      return 'text-indigo-600 dark:text-indigo-400';
    case 'emerald':
      return 'text-emerald-600 dark:text-emerald-400';
    case 'amber':
      return 'text-amber-500 dark:text-amber-400';
    case 'sky':
    default:
      return 'text-sky-600 dark:text-sky-400';
  }
};

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);

  // Typewriter effect state
  const [techIndex, setTechIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTech = TECH_USED[techIndex];
    const typingSpeed = isDeleting ? 35 : 75;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(currentTech.substring(0, currentText.length + 1));
        if (currentText.length + 1 === currentTech.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setCurrentText(currentTech.substring(0, currentText.length - 1));
        if (currentText.length === 0) {
          setIsDeleting(false);
          setTechIndex((prev) => (prev + 1) % TECH_USED.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, techIndex]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const greetingText = "Hello, I'm";
  const nameText = PERSONAL_INFO.name; // 'Nguyễn Anh Quân'

  return (
    <section id="about" className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 border-b border-slate-200/80 dark:border-white/[0.08] overflow-hidden scroll-mt-20">
      <Container size="default">
        <div className="max-w-3xl space-y-7">
          {/* Live Status Pill & Academic Affiliation */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-300 dark:border-emerald-500/20 text-xs font-mono font-medium shadow-2xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Available for projects & opportunities</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200/80 text-slate-700 dark:bg-white/[0.04] dark:border-white/[0.08] dark:text-slate-300 text-xs font-mono shadow-2xs">
              <MapPin className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 shrink-0" />
              <span>Da Nang, Vietnam • FPT University</span>
            </div>
          </div>

          {/* Main Headline */}
          <div className="space-y-4">
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.18]"
              aria-label={`Hello, I'm ${PERSONAL_INFO.name}.`}
            >
              {/* Greeting with letter wave animation */}
              <span className="block text-slate-600 dark:text-slate-300 text-lg sm:text-2xl font-semibold mb-2 sm:mb-3" aria-hidden="true">
                {greetingText.split(' ').map((word, wordIdx) => {
                  const prevLength = greetingText.split(' ').slice(0, wordIdx).join(' ').length + (wordIdx > 0 ? 1 : 0);
                  return (
                    <span key={`gw-${wordIdx}`} className="inline-block whitespace-nowrap mr-2 sm:mr-2.5">
                      {word.split('').map((char, charIdx) => (
                        <span
                          key={`gc-${charIdx}`}
                          className="animate-letter-wave-bw"
                          style={{
                            animationDelay: `${(prevLength + charIdx) * 0.08}s`,
                          }}
                        >
                          {char}
                        </span>
                      ))}
                    </span>
                  );
                })}
              </span>

              {/* Name with wave animation */}
              <span className="inline-flex flex-wrap items-center gap-x-3.5 sm:gap-x-4 pt-0.5" aria-hidden="true">
                {nameText.split(' ').map((word, wordIdx, arr) => {
                  const prevLength = nameText.split(' ').slice(0, wordIdx).join(' ').length + (wordIdx > 0 ? 1 : 0);
                  const isLastWord = wordIdx === arr.length - 1;

                  return (
                    <span key={`word-${wordIdx}`} className="inline-block whitespace-nowrap">
                      {word.split('').map((char, charIdx) => {
                        const globalIdx = greetingText.length + prevLength + charIdx;
                        return (
                          <span
                            key={`char-${charIdx}`}
                            className="animate-letter-wave-bw"
                            style={{
                              animationDelay: `${globalIdx * 0.09}s`,
                            }}
                          >
                            {char}
                          </span>
                        );
                      })}
                      {isLastWord && (
                        <span
                          className="animate-letter-wave-bw ml-0.5"
                          style={{
                            animationDelay: `${(greetingText.length + prevLength + word.length) * 0.09}s`,
                          }}
                        >
                          .
                        </span>
                      )}
                    </span>
                  );
                })}
              </span>
            </h1>

            {/* Typewriter Tech Used Title */}
            <div className="flex items-center gap-2.5 pt-1.5 flex-wrap">
              <span className="text-xs sm:text-sm font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
                Tech Used:
              </span>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-sky-50 text-sky-900 border border-sky-200/90 dark:bg-sky-500/10 dark:text-sky-200 dark:border-sky-500/25 font-bold text-sm sm:text-base font-mono shadow-2xs tracking-tight">
                <span className="text-sky-600 dark:text-sky-400 select-none">❯</span>
                <span>{currentText}</span>
                <span className="inline-block w-2 h-4 sm:h-5 bg-sky-600 dark:bg-sky-400 animate-cursor-blink ml-0.5 rounded-xs" />
              </span>
            </div>
          </div>

          {/* Infinite Marquee Ticker */}
          <div className="relative overflow-hidden py-2.5 rounded-xl border border-slate-200/90 dark:border-white/[0.08] bg-slate-50/70 dark:bg-white/[0.02]">
            <div className="absolute left-0 inset-y-0 w-12 bg-gradient-to-r from-[#F8FAFC] dark:from-[#090D16] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 inset-y-0 w-12 bg-gradient-to-l from-[#F8FAFC] dark:from-[#090D16] to-transparent z-10 pointer-events-none" />

            <div className="animate-marquee gap-2.5 whitespace-nowrap">
              {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold tracking-tight select-none bg-white border border-slate-200/90 text-slate-700 hover:border-sky-400/60 hover:text-sky-700 dark:bg-white/[0.04] dark:border-white/[0.08] dark:text-slate-200 dark:hover:border-sky-500/40 dark:hover:text-white transition-[border-color,color] shadow-2xs"
                >
                  <span className={getIconColor(item.accent)}>{item.icon}</span>
                  <span>{item.text}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Narrative About Me */}
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed text-pretty">
            I am a final-year Software Engineering student with knowledge of both Front-end and Back-end development. I have experience working with React.js, TypeScript, JavaScript, Node.js, and databases through academic and personal projects. I am eager to strengthen my technical skills, gain practical experience, and contribute to real-world software development projects.
          </p>

          {/* Quick Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
            <div className="p-4 rounded-xl bg-white dark:bg-white/[0.03] border border-slate-200/90 dark:border-white/[0.08] space-y-1 hover:border-slate-300 dark:hover:border-white/[0.15] transition-colors shadow-2xs">
              <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400 text-xs font-semibold">
                <Layers className="w-4 h-4" />
                <span>Modern Frontend</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                React 19, TypeScript, Tailwind CSS & interactive 60 FPS interfaces.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-white/[0.03] border border-slate-200/90 dark:border-white/[0.08] space-y-1 hover:border-slate-300 dark:hover:border-white/[0.15] transition-colors shadow-2xs">
              <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-xs font-semibold">
                <Server className="w-4 h-4" />
                <span>Scalable Backend</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Node.js, Express, Java Spring Boot 3, MongoDB & secure REST APIs.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-white/[0.03] border border-slate-200/90 dark:border-white/[0.08] space-y-1 hover:border-slate-300 dark:hover:border-white/[0.15] transition-colors shadow-2xs">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
                <Cpu className="w-4 h-4" />
                <span>Real-time & Systems</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Conflict prevention, 24h circular SVG clock, WebSockets & IoT.
              </p>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            <Button
              asAnchor
              href="#projects"
              size="md"
              variant="primary"
              className="justify-center text-center"
              iconRight={<ArrowDown className="w-4 h-4" />}
            >
              Featured Projects
            </Button>

            <Button
              asAnchor
              href="#skills"
              size="md"
              variant="secondary"
              className="justify-center text-center"
              iconRight={<Code2 className="w-4 h-4" />}
            >
              Skills & Tech
            </Button>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center justify-center text-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border border-slate-200 dark:bg-white/[0.05] dark:hover:bg-white/[0.08] dark:text-slate-200 dark:border-white/[0.1] active:scale-[0.96] transition-[transform,background-color,color] duration-150 text-xs sm:text-sm font-semibold cursor-pointer shadow-2xs"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span className="text-emerald-700 dark:text-emerald-300">Copied!</span>
                </>
              ) : (
                <>
                  <Mail className="w-4 h-4 text-slate-500 dark:text-slate-400 shrink-0" />
                  <span>{PERSONAL_INFO.email}</span>
                  <Copy className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 ml-0.5 shrink-0" />
                </>
              )}
            </button>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-center gap-2 px-3.5 py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border border-slate-200 dark:bg-white/[0.03] dark:hover:bg-white/[0.07] dark:text-slate-300 dark:hover:text-white dark:border-white/[0.08] active:scale-[0.96] transition-[transform,background-color,color] duration-150 text-xs sm:text-sm font-medium shadow-2xs"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4 shrink-0" />
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3 text-slate-400 dark:text-slate-500 shrink-0" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};
