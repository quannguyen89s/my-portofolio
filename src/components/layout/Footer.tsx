import React from 'react';
import { ArrowUp, Mail, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../icons/BrandIcons';
import { Container } from './Container';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 bg-white pt-12 pb-10 text-slate-600">
      <Container size="wide">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-200">
          {/* Brand */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-600 shadow-[0_0_8px_rgba(2,132,199,0.5)]" />
              <span className="font-bold text-slate-900 text-base">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-xs font-mono text-slate-500">
                / {PERSONAL_INFO.role}
              </span>
            </div>
            <p className="text-xs text-slate-500 max-w-sm leading-relaxed">
              Thiết kế giao diện hiện đại, tối ưu hiệu năng và trải nghiệm người dùng với chuẩn mực 8-point grid.
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Sẵn sàng hợp tác dự án mới</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-3 space-y-2">
            <p className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-800">
              Điều hướng
            </p>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="#about" className="hover:text-sky-600 transition-colors">
                  01. Giới thiệu
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-sky-600 transition-colors">
                  02. Dự án nổi bật
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-sky-600 transition-colors">
                  03. Kỹ năng công nghệ
                </a>
              </li>
              <li>
                <a href="#journey" className="hover:text-sky-600 transition-colors">
                  04. Hành trình
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-sky-600 transition-colors">
                  05. Liên hệ
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-800">
              Kết nối
            </p>
            <div className="flex items-center gap-2.5">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile quannguyen89s"
                className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200 hover:border-sky-400 hover:text-sky-600 text-slate-700 flex items-center justify-center transition-all shadow-xs"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200 hover:border-sky-400 hover:text-sky-600 text-slate-700 flex items-center justify-center transition-all shadow-xs"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                aria-label="Gửi email"
                className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200 hover:border-sky-400 hover:text-sky-600 text-slate-700 flex items-center justify-center transition-all shadow-xs"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <p className="text-[11px] text-slate-500 font-mono">
              React 19 • TypeScript • Tailwind CSS • Ocean Blue
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <span>© {new Date().getFullYear()} Quân Nguyễn (@quannguyen89s).</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-slate-600 hover:text-sky-600 font-mono text-xs transition-colors p-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 cursor-pointer"
            aria-label="Cuộn lên đầu trang"
          >
            <span>Lên đầu trang</span>
            <div className="w-6 h-6 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>
      </Container>
    </footer>
  );
};
