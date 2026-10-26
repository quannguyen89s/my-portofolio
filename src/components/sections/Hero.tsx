import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Sparkles, Download, Layers, ShieldCheck } from 'lucide-react';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      {/* Background radial glow accents */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-10 right-10 w-[300px] h-[300px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <Container size="wide" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Hero Copy (Col 7) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Live Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#131B2E] border border-sky-500/25 shadow-glow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-xs font-mono text-slate-300 font-medium">
                {PERSONAL_INFO.statusText}
              </span>
            </div>

            {/* Editorial Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-300 to-blue-500">resilient systems</span> and intuitive web experiences.
            </h1>

            {/* Lead Narrative */}
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
              Hi, I’m <span className="text-slate-100 font-medium">{PERSONAL_INFO.name}</span>. Senior Full-Stack Engineer and System Architect specializing in high-throughput distributed backends, modern reactive UI engineering, and sub-second web performance.
            </p>

            {/* Action CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                asAnchor
                href="#projects"
                size="lg"
                variant="primary"
                iconRight={<ArrowRight className="w-4 h-4" />}
              >
                Explore Selected Work
              </Button>

              <Button
                asAnchor
                href="#contact"
                size="lg"
                variant="secondary"
                iconLeft={<Terminal className="w-4 h-4 text-sky-400" />}
              >
                Initiate Contact
              </Button>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-8 border-t border-white/[0.08] grid grid-cols-3 gap-6 max-w-lg">
              <div>
                <p className="text-2xl sm:text-3xl font-bold font-mono text-slate-100 tracking-tight">
                  {PERSONAL_INFO.yearsOfExperience}
                </p>
                <p className="text-xs text-slate-400 font-mono mt-0.5">
                  Years of Exp.
                </p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold font-mono text-sky-400 tracking-tight">
                  {PERSONAL_INFO.uptimeRecord}
                </p>
                <p className="text-xs text-slate-400 font-mono mt-0.5">
                  Production SLA
                </p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold font-mono text-slate-100 tracking-tight">
                  {PERSONAL_INFO.completedProjects}
                </p>
                <p className="text-xs text-slate-400 font-mono mt-0.5">
                  Shipped Systems
                </p>
              </div>
            </div>
          </motion.div>

          {/* Interactive Architectural Terminal Preview (Col 5) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl bg-[#0E1424] border border-white/[0.1] shadow-2xl overflow-hidden group hover:border-sky-500/40 transition-all duration-300">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0A0F1B] border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400">
                    node: telemetry-monitor.ts
                  </span>
                </div>
                <span className="text-[11px] font-mono text-sky-400/80 bg-sky-500/10 px-2 py-0.5 rounded">
                  cluster-prod-1
                </span>
              </div>

              {/* Code / Architecture Telemetry Screen */}
              <div className="p-5 font-mono text-xs leading-relaxed space-y-3 bg-[#090D18]">
                <div className="text-slate-500 flex items-center justify-between">
                  <span>// Real-time System Health Telemetry</span>
                  <span className="text-emerald-400">STATUS: HEALTHY</span>
                </div>

                <div className="space-y-1.5 text-slate-300">
                  <p>
                    <span className="text-sky-400">const</span>{' '}
                    <span className="text-indigo-300">clusterConfig</span> = {'{'}
                  </p>
                  <p className="pl-4 text-slate-400">
                    region: <span className="text-emerald-300">'ap-southeast-1'</span>,
                  </p>
                  <p className="pl-4 text-slate-400">
                    consensus: <span className="text-amber-300">'Raft-Distributed'</span>,
                  </p>
                  <p className="pl-4 text-slate-400">
                    maxP99Latency: <span className="text-sky-300">'4.2ms'</span>,
                  </p>
                  <p className="pl-4 text-slate-400">
                    zeroDowntimeDeploy: <span className="text-emerald-300">true</span>,
                  </p>
                  <p>{'};'}</p>
                </div>

                {/* Telemetry live bars */}
                <div className="pt-3 border-t border-white/[0.08] space-y-2">
                  <div>
                    <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                      <span>Event Pipeline Throughput</span>
                      <span className="text-sky-400 font-semibold">140,280 ops/sec</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-sky-500 to-blue-500 rounded-full w-[88%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                      <span>Heap Memory Utilization</span>
                      <span className="text-emerald-400 font-semibold">32.4% (Stable)</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full w-[32%]" />
                    </div>
                  </div>
                </div>

                {/* Micro verification badge */}
                <div className="pt-2 flex items-center gap-2 text-[11px] text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-sky-400" />
                  <span>Continuous CI/CD: 100% Passing Tests</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
