import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Server, 
  Database, 
  Layers, 
  ShieldCheck, 
  Gauge, 
  Network, 
  Cpu, 
  Terminal, 
  CheckCircle2, 
  Boxes 
} from 'lucide-react';
import { Container } from '../layout/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { Badge } from '../ui/Badge';
import { SKILL_CATEGORIES } from '../../data/portfolioData';

export const SkillsArchitecture: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('frontend');

  const selectedCategory = SKILL_CATEGORIES.find((c) => c.id === activeCategory) || SKILL_CATEGORIES[0];

  return (
    <section id="skills" className="py-20 sm:py-28 relative">
      <Container size="wide">
        <SectionHeader
          number="// 03"
          badge="SYSTEM COMPETENCIES"
          title="Battle-tested stack & architecture."
          subtitle="A comprehensive overview of foundational programming paradigms, system design patterns, and modern cloud ecosystems I operate with daily."
        />

        {/* Category Switcher Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {SKILL_CATEGORIES.map((cat) => {
            const isSelected = cat.id === activeCategory;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`p-5 rounded-2xl border text-left transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#141C30] border-sky-500/50 shadow-glow-sm'
                    : 'bg-[#0E1424] border-white/[0.08] hover:border-white/[0.16] hover:bg-[#12192B]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-400">
                    Domain
                  </span>
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8]" />
                  )}
                </div>
                <h3 className="text-base font-bold text-slate-100">
                  {cat.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1 line-clamp-1">
                  {cat.subtitle}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Category Skill Matrix */}
        <motion.div
          key={selectedCategory.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="p-6 sm:p-8 rounded-2xl bg-[#0E1424] border border-white/[0.08] shadow-card-subtle"
        >
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-6 border-b border-white/[0.08]">
            <div>
              <h4 className="text-lg font-bold text-slate-100">
                {selectedCategory.title}
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                {selectedCategory.subtitle}
              </p>
            </div>
            <span className="text-xs font-mono text-sky-400">
              {selectedCategory.skills.length} Core Capabilities
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {selectedCategory.skills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center justify-between p-3.5 rounded-xl bg-[#141C30] border border-white/[0.05] hover:border-sky-500/30 transition-all duration-200 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-sky-400 group-hover:scale-125 transition-transform" />
                  <span className="text-xs sm:text-sm font-medium text-slate-200 group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </div>
                <Badge
                  variant={skill.level === 'Expert' ? 'electric' : 'default'}
                  size="sm"
                >
                  {skill.level}
                </Badge>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Architectural Pillars / Engineering Rigor */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-[#0E1424] border border-white/[0.08] space-y-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <h5 className="text-sm font-bold text-slate-100">Clean Architecture</h5>
            <p className="text-xs text-slate-400 leading-relaxed">
              Decoupled domain business logic from frameworks and external persistence layers.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#0E1424] border border-white/[0.08] space-y-2">
            <Gauge className="w-5 h-5 text-sky-400" />
            <h5 className="text-sm font-bold text-slate-100">Sub-second Latency</h5>
            <p className="text-xs text-slate-400 leading-relaxed">
              Zero-allocation memory pools, optimized SQL indexes, and edge CDN cache invalidation.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#0E1424] border border-white/[0.08] space-y-2">
            <Network className="w-5 h-5 text-indigo-400" />
            <h5 className="text-sm font-bold text-slate-100">Distributed Consensus</h5>
            <p className="text-xs text-slate-400 leading-relaxed">
              Raft replication, idempotent message delivery, and partition-tolerant state synchronization.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#0E1424] border border-white/[0.08] space-y-2">
            <CheckCircle2 className="w-5 h-5 text-amber-400" />
            <h5 className="text-sm font-bold text-slate-100">WCAG 2.2 AA Verified</h5>
            <p className="text-xs text-slate-400 leading-relaxed">
              Contrast compliance, visible keyboard focus indicators, and semantic screen-reader markup.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
