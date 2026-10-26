import React from 'react';
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
  ExternalLink
} from 'lucide-react';
import { GithubIcon } from '../icons/BrandIcons';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const Hero: React.FC = () => {
  const [copied, setCopied] = React.useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 border-b border-slate-200/80 bg-white/50 backdrop-blur-xs">
      {/* Subtle ocean glow effect in background */}
      <div
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[320px] bg-gradient-to-tr from-sky-200/30 via-blue-100/40 to-transparent rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <Container size="wide" className="relative z-10">
        <div className="max-w-4xl space-y-6">
          {/* Top Profile Header */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="relative">
              <img
                src={PERSONAL_INFO.avatar}
                alt={PERSONAL_INFO.name}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border-2 border-white shadow-md ring-1 ring-slate-200"
              />
              <span className="absolute -bottom-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white" />
              </span>
            </div>

            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="ocean" size="sm" dot>
                  {PERSONAL_INFO.statusText}
                </Badge>
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-sm sm:text-base font-medium text-sky-700">
                Software Developer • Web, Mobile & Backend
              </p>
            </div>
          </div>

          {/* Lead Narrative */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
            Sinh viên chuyên ngành Kỹ thuật Phần mềm tại{' '}
            <strong className="text-slate-900 font-semibold">FPT University Đà Nẵng</strong>. Đam mê xây dựng các sản phẩm thực tế kết hợp giữa giao diện người dùng mượt mà, tốc độ phản hồi cao và kiến trúc backend an toàn. Hiện đang phát triển hệ sinh thái{' '}
            <span className="text-sky-700 font-semibold underline decoration-sky-300 underline-offset-4">
              Hesta Smart Home
            </span>{' '}
            (Web & Backend) cùng nhiều dự án mã nguồn mở trên GitHub.
          </p>

          {/* Metadata Chips Bar - Clean & Concise */}
          <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-slate-700">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100/80 border border-slate-200/80 font-medium">
              <MapPin className="w-3.5 h-3.5 text-sky-600" />
              <span>{PERSONAL_INFO.location}</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100/80 border border-slate-200/80 font-medium">
              <GraduationCap className="w-3.5 h-3.5 text-sky-600" />
              <span>{PERSONAL_INFO.university}</span>
            </div>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100/80 hover:bg-sky-50 hover:text-sky-700 border border-slate-200/80 transition-colors font-mono cursor-pointer"
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
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100/80 hover:bg-sky-50 hover:text-sky-700 border border-slate-200/80 transition-colors font-mono font-medium"
            >
              <GithubIcon className="w-3.5 h-3.5 text-slate-700" />
              <span>@{PERSONAL_INFO.handle}</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            <Button
              asAnchor
              href="#projects"
              size="md"
              variant="primary"
              iconRight={<ArrowDown className="w-4 h-4" />}
            >
              Xem danh sách Repository & Dự án
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
              Gửi email trực tiếp
            </Button>
          </div>

          {/* Highlights Card */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-200/60">
            <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-900">
                <FolderGit2 className="w-4 h-4 text-sky-600" />
                <span>Hesta Smart Home</span>
              </div>
              <p className="text-xs text-slate-500 mt-1 leading-normal">
                Frontend React/TS & Backend Spring Boot IoT.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-900">
                <Layers className="w-4 h-4 text-blue-600" />
                <span>Full-Stack & Mobile</span>
              </div>
              <p className="text-xs text-slate-500 mt-1 leading-normal">
                React, TypeScript, Java, Node.js, React Native.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-900">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span>Code Clean & Type-Safe</span>
              </div>
              <p className="text-xs text-slate-500 mt-1 leading-normal">
                Kiến trúc phân tầng rõ ràng, tối ưu trải nghiệm.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
