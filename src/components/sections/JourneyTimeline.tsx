import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, MapPin, CheckCircle2 } from 'lucide-react';
import { Container } from '../layout/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { TIMELINE_ITEMS } from '../../data/portfolioData';

export const JourneyTimeline: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'work' | 'education'>('all');

  const filteredItems = filter === 'all'
    ? TIMELINE_ITEMS
    : TIMELINE_ITEMS.filter((item) => item.type === filter);

  return (
    <section id="journey" className="py-16 sm:py-24 relative">
      <Container size="wide">
        <SectionHeader
          number="// 04"
          badge="HÀNH TRÌNH"
          title="Kinh nghiệm & quá trình phát triển."
          subtitle="Các mốc thời gian học tập, rèn luyện kỹ thuật và thực hiện dự án."
          action={
            <div className="flex gap-1.5 p-1 rounded-xl bg-slate-100 border border-slate-200">
              <button
                onClick={() => setFilter('all')}
                className={`text-xs font-medium px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  filter === 'all'
                    ? 'bg-white text-sky-700 font-semibold shadow-xs border border-slate-200/60'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Tất cả
              </button>
              <button
                onClick={() => setFilter('work')}
                className={`text-xs font-medium px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  filter === 'work'
                    ? 'bg-white text-sky-700 font-semibold shadow-xs border border-slate-200/60'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Dự án & Công việc
              </button>
              <button
                onClick={() => setFilter('education')}
                className={`text-xs font-medium px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  filter === 'education'
                    ? 'bg-white text-sky-700 font-semibold shadow-xs border border-slate-200/60'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Học vấn & Nền tảng
              </button>
            </div>
          }
        />

        {/* Timeline Stream */}
        <div className="relative border-l-2 border-slate-200 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-8">
          {filteredItems.map((item, idx) => (
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
              <div className="p-5 sm:p-7 rounded-2xl bg-white border border-slate-200 hover:border-sky-300 transition-all duration-200 shadow-card-subtle space-y-3">
                {/* Meta Bar */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="p-1 rounded-md bg-sky-50 text-sky-700">
                      {item.type === 'work' ? (
                        <Briefcase className="w-3.5 h-3.5" />
                      ) : (
                        <GraduationCap className="w-3.5 h-3.5" />
                      )}
                    </span>
                    <span className="text-xs font-mono font-semibold text-sky-700">
                      {item.period}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Role & Company */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                    {item.role}
                  </h3>
                  <p className="text-xs font-semibold text-slate-700 mt-0.5">
                    {item.company}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-1.5 pt-1">
                  {item.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                {item.skills.length > 0 && (
                  <div className="pt-2.5 border-t border-slate-100 flex flex-wrap gap-1.5">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-mono px-2 py-0.5 rounded bg-slate-50 text-slate-600 border border-slate-200"
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
