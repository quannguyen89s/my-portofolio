import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Clock, 
  MapPin, 
  Cpu, 
  Zap, 
  Workflow, 
  GitBranch, 
  Sparkles, 
  Terminal, 
  Layers, 
  ExternalLink 
} from 'lucide-react';
import { Container } from '../layout/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { Badge } from '../ui/Badge';
import { PERSONAL_INFO, BENTO_METRICS } from '../../data/portfolioData';

export const BentoAbout: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Formatted in UTC+7 (Hanoi / Indochina Time)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Bangkok',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setCurrentTime(new Intl.DateTimeFormat('en-GB', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-20 sm:py-28 relative">
      <Container size="wide">
        <SectionHeader
          number="// 01"
          badge="PROFILE & PHILOSOPHY"
          title="Architecture-first mindset, human-first UX."
          subtitle="Combining rigorous computer science fundamentals with modern aesthetic precision to deliver software that scales gracefully under immense load."
        />

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-5">
          {/* Bento Card 1: Core Philosophy (Col 8) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="md:col-span-2 lg:col-span-8 p-6 sm:p-8 rounded-2xl bg-[#0E1424] border border-white/[0.08] hover:border-sky-500/30 transition-all duration-300 relative overflow-hidden group shadow-card-subtle flex flex-col justify-between"
          >
            {/* Subtle corner light */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-sky-500/10 transition-colors" />

            <div className="space-y-4 relative z-10">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20">
                  <Cpu className="w-5 h-5" />
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold">
                  Engineering Philosophy
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-100 tracking-tight">
                "Simplicity is prerequisite for reliability."
              </h3>

              <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl">
                I believe high-caliber engineering isn’t about adding unnecessary microservices or chasing trendy frameworks. It’s about deeply understanding the problem domain, choosing the right boundary layers, optimizing hot paths, and creating maintainable codebases that your team loves shipping to production.
              </p>

              {/* Core Principles checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-[#141C30] border border-white/[0.06]">
                  <p className="text-xs font-semibold text-slate-200">Zero-Allocation Paths</p>
                  <p className="text-[11px] text-slate-400 mt-1">Minimizing GC pauses and memory churn.</p>
                </div>
                <div className="p-3 rounded-xl bg-[#141C30] border border-white/[0.06]">
                  <p className="text-xs font-semibold text-slate-200">Fluid Accessibility</p>
                  <p className="text-[11px] text-slate-400 mt-1">WCAG 2.2 AA compliant keyboard & screen navigation.</p>
                </div>
                <div className="p-3 rounded-xl bg-[#141C30] border border-white/[0.06]">
                  <p className="text-xs font-semibold text-slate-200">Strict Observability</p>
                  <p className="text-[11px] text-slate-400 mt-1">OpenTelemetry spans across every single RPC.</p>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-400">
              <span className="font-mono text-slate-500">Spec: Clean Architecture & RFC Driven</span>
              <span className="text-sky-400 font-mono">6+ Years in Production</span>
            </div>
          </motion.div>

          {/* Bento Card 2: Live Location & Timezone (Col 4) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="md:col-span-1 lg:col-span-4 p-6 sm:p-7 rounded-2xl bg-[#0E1424] border border-white/[0.08] hover:border-sky-500/30 transition-all duration-300 relative overflow-hidden group shadow-card-subtle flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Clock className="w-5 h-5" />
                </span>
                <Badge variant="success" dot size="sm">
                  Available Now
                </Badge>
              </div>

              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-slate-500">
                  Current Local Time
                </p>
                <div className="text-3xl sm:text-4xl font-mono font-bold text-slate-100 tracking-wider mt-1">
                  {currentTime || '11:30:00'}
                </div>
                <p className="text-xs font-mono text-sky-400 mt-1">
                  Indochina Time (UTC+07:00)
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] space-y-2">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Seamless overlap with APAC, EMEA morning, and US West Coast remote teams.
                </p>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-white/[0.06] flex items-center justify-between text-xs">
              <span className="text-slate-500 font-mono">Remote Ready</span>
              <span className="text-emerald-400 font-mono">Async-First Culture</span>
            </div>
          </motion.div>

          {/* Bento Card 3: Metrics & Performance (Col 4) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="md:col-span-1 lg:col-span-4 p-6 sm:p-7 rounded-2xl bg-[#0E1424] border border-white/[0.08] hover:border-sky-500/30 transition-all duration-300 shadow-card-subtle flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20">
                  <Zap className="w-5 h-5" />
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold">
                  Track Record
                </span>
              </div>

              <div className="space-y-4">
                {BENTO_METRICS.slice(0, 3).map((metric, idx) => (
                  <div key={idx} className="pb-3 border-b border-white/[0.05] last:border-0 last:pb-0">
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs text-slate-400">{metric.label}</span>
                      <span className="text-lg font-mono font-bold text-sky-400">{metric.value}</span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5">{metric.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.06] text-xs text-slate-500 font-mono">
              Audited via Datadog & Prometheus
            </div>
          </motion.div>

          {/* Bento Card 4: Daily Stack Matrix (Col 5) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="md:col-span-2 lg:col-span-5 p-6 sm:p-7 rounded-2xl bg-[#0E1424] border border-white/[0.08] hover:border-sky-500/30 transition-all duration-300 shadow-card-subtle flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  <Layers className="w-5 h-5" />
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold">
                  Primary Tooling
                </span>
              </div>

              <p className="text-xs text-slate-400">
                Production-tested stack battle-hardened across enterprise distributed deployments:
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                {[
                  'TypeScript',
                  'React 19',
                  'Go (Golang)',
                  'Rust',
                  'Next.js',
                  'PostgreSQL',
                  'Redis',
                  'Kafka',
                  'Docker',
                  'Kubernetes',
                  'Tailwind CSS',
                  'GraphQL',
                  'gRPC',
                ].map((tool) => (
                  <span
                    key={tool}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#141C30] text-slate-300 border border-white/[0.06] hover:border-sky-400/40 hover:text-sky-300 transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-500 font-mono">
              <span>Strict Mode Always</span>
              <span className="text-indigo-400">Full Type Safety</span>
            </div>
          </motion.div>

          {/* Bento Card 5: Engineering Craft & Open Source (Col 3) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="md:col-span-1 lg:col-span-3 p-6 sm:p-7 rounded-2xl bg-[#0E1424] border border-white/[0.08] hover:border-sky-500/30 transition-all duration-300 shadow-card-subtle flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <GitBranch className="w-5 h-5" />
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                  Open Source
                </span>
              </div>

              <div>
                <p className="text-lg font-bold text-slate-100">1,800+ Commits</p>
                <p className="text-xs text-slate-400 mt-1">
                  Active contributor to developer tooling, Rust performance crates, and UI components.
                </p>
              </div>

              <div className="p-3 rounded-lg bg-[#141C30] border border-white/[0.05] text-xs font-mono text-slate-300">
                <p className="text-slate-500 text-[10px]">// Latest RFC</p>
                <p className="text-sky-300 font-medium">Distributed Raft failover improvements</p>
              </div>
            </div>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-sky-400 hover:text-sky-300 font-semibold pt-2"
            >
              <span>View GitHub Activity</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
