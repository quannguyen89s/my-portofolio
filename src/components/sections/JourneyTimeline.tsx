import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, CheckCircle2 } from 'lucide-react';
import { Container } from '../layout/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { TIMELINE_ITEMS } from '../../data/portfolioData';

export const JourneyTimeline: React.FC = () => {
  return (
    <section id="journey" className="py-16 sm:py-24 relative border-b border-slate-200/80">
      <Container size="default">
        <SectionHeader
          number="// 03"
          badge="HỌC VẤN & ĐÀO TẠO"
          title="Nền tảng học thuật."
          subtitle="Quá trình đào tạo chính quy ngành Kỹ thuật Phần mềm tại FPT University Đà Nẵng."
        />

        {/* Timeline Stream */}
        <div className="relative border-l-2 border-slate-200 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-8">
          {TIMELINE_ITEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="relative group"
            >
              {/* Timeline Node Point */}
              <div className="absolute -left-[33px] sm:-left-[49px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-sky-600 flex items-center justify-center group-hover:scale-125 transition-transform shadow-xs">
                <div className="w-1.5 h-1.5 rounded-full bg-sky-600" />
              </div>

              {/* Card Container */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 hover:border-sky-300 transition-all duration-200 shadow-card-subtle space-y-4">
                {/* Meta Bar */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 rounded-lg bg-sky-50 text-sky-700">
                      <GraduationCap className="w-4 h-4" />
                    </span>
                    <span className="text-xs font-mono font-semibold text-sky-700">
                      {item.period}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-sky-600" />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Role & Company */}
                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                    {item.role}
                  </h3>
                  <p className="text-sm font-semibold text-sky-700 mt-0.5">
                    {item.company}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
                  {item.description}
                </p>

                {/* Highlights List */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 pt-2">
                  {item.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-700 p-2.5 rounded-xl bg-slate-50/80 border border-slate-200/60">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                {item.skills.length > 0 && (
                  <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200/80"
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
