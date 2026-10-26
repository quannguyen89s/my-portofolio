import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowDown, 
  Mail, 
  MapPin, 
  GraduationCap, 
  Copy, 
  Check, 
  FolderGit2, 
  Layers, 
  Sparkles,
  ExternalLink,
  Code2,
  Calendar,
  ShieldCheck
} from 'lucide-react';
import { GithubIcon } from '../icons/BrandIcons';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 border-b border-slate-200/80 bg-white/40 overflow-hidden">
      {/* Background subtle radial gradient glow */}
      <div
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[750px] h-[360px] bg-gradient-to-tr from-sky-200/35 via-blue-100/30 to-transparent rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <Container size="default" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Personal Narrative & Actions (Col 7) */}
          <div className="lg:col-span-7 space-y-5">
            {/* Live Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/80 text-xs font-mono font-medium shadow-2xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Sẵn sàng nhận dự án & thực tập</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-1">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-base sm:text-lg font-semibold text-sky-700">
                Software Developer • Web, Mobile & Backend
              </p>
            </div>

            {/* Lead Narrative */}
            <p className="text-base text-slate-600 leading-relaxed max-w-2xl">
              Sinh viên Kỹ thuật Phần mềm tại{' '}
              <strong className="text-slate-900 font-semibold">FPT University Đà Nẵng</strong> (Gen 2004). Chuyên sâu phát triển ứng dụng Web, Mobile và kiến trúc Backend với React, TypeScript, Java (Spring Boot) và Node.js. Hiện đang tham gia phát triển hệ sinh thái{' '}
              <a
                href="https://github.com/diethon/frontend_hesta"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-700 font-semibold underline decoration-sky-300 underline-offset-4 hover:text-sky-800"
              >
                Hesta Smart Home
              </a>{' '}
              (Web Dashboard, Backend Services & Mobile App) cùng nhiều dự án mã nguồn mở trên GitHub.
            </p>

            {/* Metadata Chips Bar */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-slate-700">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100/90 border border-slate-200/90 font-medium">
                <MapPin className="w-3.5 h-3.5 text-sky-600" />
                <span>{PERSONAL_INFO.location}</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100/90 border border-slate-200/90 font-medium">
                <GraduationCap className="w-3.5 h-3.5 text-sky-600" />
                <span>FPT University Đà Nẵng</span>
              </div>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100/90 hover:bg-sky-50 hover:text-sky-700 border border-slate-200/90 transition-colors font-mono cursor-pointer"
                title="Nhấn để sao chép email"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-semibold">Đã sao chép!</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-3.5 h-3.5 text-slate-500" />
                    <span>{PERSONAL_INFO.email}</span>
                    <Copy className="w-3 h-3 text-slate-400 ml-0.5" />
                  </>
                )}
              </button>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100/90 hover:bg-sky-50 hover:text-sky-700 border border-slate-200/90 transition-colors font-mono font-medium"
              >
                <GithubIcon className="w-3.5 h-3.5 text-slate-700" />
                <span>@{PERSONAL_INFO.handle}</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button
                asAnchor
                href="#projects"
                size="md"
                variant="primary"
                iconRight={<ArrowDown className="w-4 h-4" />}
              >
                Khám phá Dự án & Repos
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

              <Button
                asAnchor
                href={`mailto:${PERSONAL_INFO.email}`}
                size="md"
                variant="outline"
                iconLeft={<Mail className="w-4 h-4 text-slate-600" />}
              >
                Gửi email
              </Button>
            </div>
          </div>

          {/* Right Column: Spec Card (Col 5) - Balances the wide viewport */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-white border border-slate-200 shadow-md p-6 sm:p-7 space-y-5 hover:border-sky-300 transition-all duration-300">
              {/* Profile Bar */}
              <div className="flex items-center gap-4 pb-4 border-b border-slate-100">
                <div className="relative shrink-0">
                  <img
                    src={PERSONAL_INFO.avatar}
                    alt={PERSONAL_INFO.name}
                    className="w-14 h-14 rounded-2xl object-cover border-2 border-white shadow-sm ring-1 ring-slate-200"
                  />
                  <span className="absolute -bottom-1 -right-1 flex h-3.5 w-3.5">
                    <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white" />
                  </span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    {PERSONAL_INFO.name}
                  </h3>
                  <p className="text-xs font-mono text-slate-500">
                    @{PERSONAL_INFO.handle} • {PERSONAL_INFO.location}
                  </p>
                </div>
              </div>

              {/* Quick Spec List */}
              <div className="space-y-2.5 text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-slate-500 flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-sky-600" />
                    Học vấn
                  </span>
                  <span className="font-semibold text-slate-800 font-mono">
                    FPT University Đà Nẵng
                  </span>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-slate-500 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-sky-600" />
                    Thế hệ
                  </span>
                  <span className="font-semibold text-slate-800 font-mono">
                    Gen 2004
                  </span>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-slate-500 flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5 text-sky-600" />
                    Công nghệ chính
                  </span>
                  <span className="font-semibold text-sky-700 font-mono">
                    React • TypeScript • Java
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-500 flex items-center gap-1.5">
                    <FolderGit2 className="w-3.5 h-3.5 text-sky-600" />
                    Dự án tiêu biểu
                  </span>
                  <span className="font-semibold text-slate-800 font-mono">
                    Hesta Smart Home IoT
                  </span>
                </div>
              </div>

              {/* 3 Micro Features */}
              <div className="pt-2 grid grid-cols-1 gap-2">
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between text-xs">
                  <span className="font-medium text-slate-700 flex items-center gap-2">
                    <FolderGit2 className="w-4 h-4 text-sky-600 shrink-0" />
                    Hesta Smart Home
                  </span>
                  <span className="text-[11px] font-mono text-sky-700 font-semibold bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
                    Frontend & Backend
                  </span>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between text-xs">
                  <span className="font-medium text-slate-700 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-blue-600 shrink-0" />
                    Full-Stack & Mobile
                  </span>
                  <span className="text-[11px] font-mono text-blue-700 font-semibold bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                    React, Node & RN
                  </span>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between text-xs">
                  <span className="font-medium text-slate-700 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    Code Clean & Type-Safe
                  </span>
                  <span className="text-[11px] font-mono text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Production Ready
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
