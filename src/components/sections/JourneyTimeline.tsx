import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, MapPin, CheckCircle2 } from 'lucide-react';
import { Container } from '../layout/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { TIMELINE_ITEMS } from '../../data/portfolioData';

export const JourneyTimeline: React.FC = () => {
  return (
    <section id="journey" className="py-20 sm:py-28 relative border-b border-slate-200/80 dark:border-white/[0.08] scroll-mt-16">
      <Container size="default">
        <SectionHeader
          badge="EXPERIENCE & EDUCATION (CV)"
          title="Practical Experience & Academic Journey."
          subtitle="A timeline of engineering projects, production software deployments, and formal education at FPT University Da Nang."
        />

        {/* Timeline Stream */}
        <div className="relative border-l border-slate-200 dark:border-white/[0.12] ml-3 sm:ml-6 pl-6 sm:pl-8 space-y-8">
          {TIMELINE_ITEMS.map((item, idx) => {
            const isWork = item.type === 'work';

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: idx * 0.05 }}
                className="relative group"
              >
                {/* Timeline Node Point */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-white dark:bg-[#090D16] border-2 border-sky-600 dark:border-sky-400 flex items-center justify-center group-hover:scale-125 transition-transform shadow-[0_0_8px_rgba(2,132,199,0.3)] dark:shadow-[0_0_10px_rgba(56,189,248,0.5)]">
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-600 dark:bg-sky-400" />
                </div>

                {/* Card Container */}
                <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 hover:border-sky-300 dark:bg-[#0F1626]/70 dark:border-white/[0.08] dark:hover:border-sky-500/30 transition-[border-color,box-shadow] duration-200 shadow-card-subtle space-y-4">
                  {/* Meta Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-white/[0.06]">
                    <div className="flex items-center gap-2">
                      <span className={`p-1.5 rounded-lg ${
                        isWork 
                          ? 'bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300' 
                          : 'bg-sky-50 text-sky-700 dark:bg-sky-500/10 dark:text-sky-300'
                      }`}>
                        {isWork ? <Briefcase className="w-4 h-4" /> : <GraduationCap className="w-4 h-4" />}
                      </span>
                      <span className="text-xs font-mono font-bold text-sky-700 dark:text-sky-300 tabular-nums">
                        {item.period}
                      </span>
                      <span className={`text-[11px] font-mono px-2 py-0.5 rounded-full border ${
                        isWork
                          ? 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-500/10 dark:text-amber-300 dark:border-amber-500/25'
                          : 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-300 dark:border-emerald-500/25'
                      }`}>
                        {isWork ? 'Practical Experience' : 'Formal Education'}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 shrink-0" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  {/* Role & Company */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-300 transition-colors tracking-tight text-balance">
                      {item.role}
                    </h3>
                    <p className="text-sm font-semibold text-sky-700 dark:text-sky-400/90 mt-0.5">
                      {item.company}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl text-pretty">
                    {item.description}
                  </p>

                  {/* Highlights List */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 pt-1">
                    {item.highlights.map((highlight, hIdx) => (
                      <div
                        key={hIdx}
                        className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300 p-3 rounded-xl bg-slate-50/80 border border-slate-200/80 dark:bg-white/[0.02] dark:border-white/[0.06]"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
                        <span className="text-pretty">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Pills */}
                  {item.skills.length > 0 && (
                    <div className="pt-3 border-t border-slate-100 dark:border-white/[0.06] flex flex-wrap gap-1.5">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200 dark:bg-white/[0.03] dark:text-slate-400 dark:border-white/[0.06]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
