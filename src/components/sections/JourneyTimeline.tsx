import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { Container } from '../layout/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { Badge } from '../ui/Badge';
import { TIMELINE_ITEMS } from '../../data/portfolioData';
import { TimelineItem } from '../../types/portfolio';

export const JourneyTimeline: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'work' | 'education'>('all');

  const filteredItems = filter === 'all'
    ? TIMELINE_ITEMS
    : TIMELINE_ITEMS.filter((item) => item.type === filter);

  return (
    <section id="journey" className="py-20 sm:py-28 relative">
      <Container size="wide">
        <SectionHeader
          number="// 04"
          badge="TRAJECTORY"
          title="Career growth & technical milestones."
          subtitle="A chronological journey from algorithmic computer science fundamentals to architecting distributed enterprise platforms."
          action={
            <div className="flex gap-1.5 p-1 rounded-xl bg-[#0F1523] border border-white/[0.08]">
              <button
                onClick={() => setFilter('all')}
                className={`text-xs font-medium px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  filter === 'all'
                    ? 'bg-sky-500/20 text-sky-300 font-semibold border border-sky-500/30'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                All Milestones
              </button>
              <button
                onClick={() => setFilter('work')}
                className={`text-xs font-medium px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  filter === 'work'
                    ? 'bg-sky-500/20 text-sky-300 font-semibold border border-sky-500/30'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Work Experience
              </button>
              <button
                onClick={() => setFilter('education')}
                className={`text-xs font-medium px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  filter === 'education'
                    ? 'bg-sky-500/20 text-sky-300 font-semibold border border-sky-500/30'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Education
              </button>
            </div>
          }
        />

        {/* Timeline Stream */}
        <div className="relative border-l border-white/[0.08] ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="relative group"
            >
              {/* Timeline Node Point */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#080C14] border-2 border-sky-400 flex items-center justify-center group-hover:scale-125 transition-transform shadow-[0_0_10px_#38bdf8]">
                <div className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              </div>

              {/* Card Container */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#0E1424] border border-white/[0.08] hover:border-sky-500/30 transition-all duration-300 shadow-card-subtle space-y-4">
                {/* Meta Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-white/[0.06]">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 rounded-md bg-[#141C30] text-sky-400">
                      {item.type === 'work' ? (
                        <Briefcase className="w-4 h-4" />
                      ) : (
                        <GraduationCap className="w-4 h-4" />
                      )}
                    </span>
                    <span className="text-xs font-mono font-semibold text-sky-400">
                      {item.period}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Role & Company */}
                <div>
                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-sky-300 transition-colors">
                    {item.role}
                  </h3>
                  <p className="text-sm font-semibold text-slate-300 mt-0.5">
                    {item.company}
                  </p>
                </div>

                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 pt-1">
                  {item.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                {item.skills.length > 0 && (
                  <div className="pt-3 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-mono px-2 py-0.5 rounded bg-[#141C30] text-slate-400 border border-white/[0.04]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
