import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, ShieldCheck } from 'lucide-react';
import { GithubIcon } from '../icons/BrandIcons';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
      {/* Background soft ocean glow accents */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-sky-200/40 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-10 right-10 w-[260px] h-[260px] bg-blue-100/50 rounded-full blur-[90px] pointer-events-none"
        aria-hidden="true"
      />

      <Container size="wide" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Main Hero Copy (Col 7) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-5"
          >
            {/* Live Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-mono text-slate-700 font-medium">
                {PERSONAL_INFO.statusText}
              </span>
            </div>

            {/* Editorial Heading - Concise & Punchy */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Xây dựng ứng dụng web <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-700">hiện đại, trực quan</span> và hiệu năng cao.
            </h1>

            {/* Lead Narrative - Short */}
            <p className="text-base text-slate-600 max-w-xl leading-relaxed">
              Tôi là <span className="text-slate-900 font-semibold">{PERSONAL_INFO.name}</span> (@{PERSONAL_INFO.handle}). Software Developer chuyên phát triển sản phẩm web với TypeScript, React, Java backend và trải nghiệm người dùng mượt mà.
            </p>

            {/* Action CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Button
                asAnchor
                href="#projects"
                size="md"
                variant="primary"
                iconRight={<ArrowRight className="w-4 h-4" />}
              >
                Khám phá dự án
              </Button>

              <Button
                asAnchor
                href={PERSONAL_INFO.github}
                target="_blank"
                size="md"
                variant="secondary"
                iconLeft={<GithubIcon className="w-4 h-4 text-slate-800" />}
              >
                GitHub @{PERSONAL_INFO.handle}
              </Button>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4 max-w-md">
              <div>
                <p className="text-2xl font-bold font-mono text-slate-900 tracking-tight">
                  {PERSONAL_INFO.yearsOfExperience}
                </p>
                <p className="text-xs text-slate-500 font-mono mt-0.5">
                  Kinh nghiệm
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold font-mono text-sky-600 tracking-tight">
                  {PERSONAL_INFO.uptimeRecord}
                </p>
                <p className="text-xs text-slate-500 font-mono mt-0.5">
                  Độ ổn định
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold font-mono text-slate-900 tracking-tight">
                  {PERSONAL_INFO.completedProjects}
                </p>
                <p className="text-xs text-slate-500 font-mono mt-0.5">
                  Dự án thực tế
                </p>
              </div>
            </div>
          </motion.div>

          {/* Interactive Code Terminal (Col 5) - Clean White / Slate */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <div className="rounded-2xl bg-white border border-slate-200 shadow-md overflow-hidden hover:border-sky-300 transition-all duration-300">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-50 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span className="ml-2 text-xs font-mono text-slate-600">
                    developer.config.ts
                  </span>
                </div>
                <span className="text-[11px] font-mono text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
                  active
                </span>
              </div>

              {/* Code Screen */}
              <div className="p-5 font-mono text-xs leading-relaxed space-y-3 bg-white text-slate-800">
                <div className="text-slate-400 flex items-center justify-between text-[11px]">
                  <span>// Hồ sơ lập trình viên</span>
                  <span className="text-emerald-600 font-medium">READY TO WORK</span>
                </div>

                <div className="space-y-1 text-slate-700">
                  <p>
                    <span className="text-sky-600">const</span>{' '}
                    <span className="text-blue-600 font-semibold">quanNguyen</span> = {'{'}
                  </p>
                  <p className="pl-4 text-slate-600">
                    handle: <span className="text-emerald-600">'quannguyen89s'</span>,
                  </p>
                  <p className="pl-4 text-slate-600">
                    role: <span className="text-sky-600">'Software Developer'</span>,
                  </p>
                  <p className="pl-4 text-slate-600">
                    stack: [<span className="text-amber-700">'React'</span>, <span className="text-amber-700">'TypeScript'</span>, <span className="text-amber-700">'Java'</span>],
                  </p>
                  <p className="pl-4 text-slate-600">
                    openToWork: <span className="text-emerald-600 font-semibold">true</span>,
                  </p>
                  <p>{'};'}</p>
                </div>

                {/* Progress metrics */}
                <div className="pt-3 border-t border-slate-100 space-y-2">
                  <div>
                    <div className="flex justify-between text-[11px] text-slate-600 mb-1">
                      <span>Frontend & UI Performance</span>
                      <span className="text-sky-600 font-semibold">98% Score</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-sky-500 to-blue-600 rounded-full w-[98%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[11px] text-slate-600 mb-1">
                      <span>Clean Architecture & Strict Types</span>
                      <span className="text-emerald-600 font-semibold">100% Validated</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full w-[100%]" />
                    </div>
                  </div>
                </div>

                {/* Verification badge */}
                <div className="pt-1 flex items-center gap-2 text-[11px] text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-sky-600" />
                  <span>Cam kết chất lượng mã nguồn & tài liệu đầy đủ</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
