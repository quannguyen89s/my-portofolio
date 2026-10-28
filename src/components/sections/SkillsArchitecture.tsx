import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Layout, 
  Server, 
  Smartphone, 
  Database, 
  Wrench,
  ShieldCheck, 
  Gauge, 
  Network, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { Container } from '../layout/Container';
import { SectionHeader } from '../ui/SectionHeader';

interface CapabilityGroup {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  skills: string[];
}

const CAPABILITY_GROUPS: CapabilityGroup[] = [
  {
    id: 'languages',
    title: 'Core Programming Languages',
    description: 'Strong programming foundations and algorithmic thinking, applying strict type safety and Object-Oriented Programming (OOP).',
    icon: <Code2 className="w-5 h-5 text-amber-500 dark:text-amber-400" />,
    skills: ['TypeScript', 'JavaScript (ES6+)', 'Java (JDK 17/21)', 'SQL', 'HTML5 & Modern CSS'],
  },
  {
    id: 'frontend',
    title: 'Frontend Engineering & UI',
    description: 'Crafting responsive, high-performance web applications with 60 FPS interactions using React 19 and Tailwind CSS v4.',
    icon: <Layout className="w-5 h-5 text-sky-500 dark:text-sky-400" />,
    skills: ['React 19', 'Tailwind CSS v4', 'Vite', 'React Router v7', 'date-fns', 'Framer Motion'],
  },
  {
    id: 'backend',
    title: 'Backend & Real-time Services',
    description: 'Scalable layered server architecture, concurrency & conflict control mechanisms, and real-time STOMP WebSockets.',
    icon: <Server className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />,
    skills: ['Node.js & Express', 'Java Spring Boot 3', 'Spring Security (JWT/OAuth2)', 'WebSocket STOMP', 'RESTful API Architecture'],
  },
  {
    id: 'database-tools',
    title: 'Databases & Developer Tooling',
    description: 'Relational & NoSQL database management, automated API testing, secure cloud media storage, and payment integrations.',
    icon: <Database className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />,
    skills: ['MongoDB (Mongoose)', 'MySQL & PostgreSQL', 'Git & GitHub Workflows', 'Postman API Testing', 'Cloudinary & PayOS Gateway'],
  },
];

export const SkillsArchitecture: React.FC = () => {
  return (
    <section id="skills" className="py-20 sm:py-28 relative border-b border-slate-200/80 dark:border-white/[0.08] scroll-mt-16">
      <Container size="default">
        <SectionHeader
          badge="TECH STACK & SKILLS"
          title="Technologies & Development Tools."
          subtitle="A comprehensive overview of languages, frameworks, libraries, and databases I actively use."
        />

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {CAPABILITY_GROUPS.map((group, idx) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: idx * 0.05 }}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 hover:border-sky-400/50 dark:bg-[#0F1626]/70 dark:border-white/[0.08] dark:hover:border-sky-500/30 transition-[border-color,box-shadow] duration-200 shadow-card-subtle flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center gap-3 pb-3 border-b border-slate-100 dark:border-white/[0.06]">
                  <span className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 dark:bg-white/[0.04] dark:border-white/[0.08] group-hover:border-sky-500/30 transition-colors">
                    {group.icon}
                  </span>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-300 transition-colors tracking-tight">
                      {group.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed text-pretty">
                  {group.description}
                </p>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-sky-300 text-xs font-mono font-medium text-slate-700 dark:bg-white/[0.03] dark:border-white/[0.06] dark:hover:border-white/[0.15] dark:text-slate-200 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-600 dark:bg-sky-400/80" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3 Engineering Principles */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-2xs dark:bg-white/[0.02] dark:border-white/[0.06] space-y-1.5">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <h4 className="text-xs font-bold text-slate-900 dark:text-white tracking-tight">Clean Code & Strict Types</h4>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed text-pretty">
              TypeScript strict mode, modular architecture, and maintainable, scalable codebases.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-2xs dark:bg-white/[0.02] dark:border-white/[0.06] space-y-1.5">
            <div className="flex items-center gap-2">
              <Gauge className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" />
              <h4 className="text-xs font-bold text-slate-900 dark:text-white tracking-tight">Performance & Smooth Motion</h4>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed text-pretty">
              Sub-second initial loads, 60 FPS interactions, and adherence to modern Web Interface Guidelines.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-2xs dark:bg-white/[0.02] dark:border-white/[0.06] space-y-1.5">
            <div className="flex items-center gap-2">
              <Network className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
              <h4 className="text-xs font-bold text-slate-900 dark:text-white tracking-tight">Secure & Reliable APIs</h4>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed text-pretty">
              Standardized RESTful endpoints, secure JWT authentication, and rigorous Postman test suites.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
