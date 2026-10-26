import React from 'react';
import { ArrowUp, Mail, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../icons/BrandIcons';
import { Container } from './Container';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200/90 bg-white pt-12 pb-10 text-slate-600">
      <Container size="narrow">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-200/80">
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
              Sinh viên Kỹ thuật Phần mềm tại FPT University Đà Nẵng (Gen 2004). Thiết kế giao diện hiện đại, phát triển ứng dụng Web, Mobile & Backend chuẩn mực.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-600">
              <MapPin className="w-3.5 h-3.5 text-sky-600" />
              <span>{PERSONAL_INFO.location}</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-3 space-y-2">
            <p className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-800">
              Điều hướng
            </p>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="#projects" className="hover:text-sky-600 transition-colors">
                  01. Dự án & Repositories
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-sky-600 transition-colors">
                  02. Kỹ năng & Công nghệ
                </a>
              </li>
              <li>
                <a href="#journey" className="hover:text-sky-600 transition-colors">
                  03. Học vấn FPT University
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-sky-600 transition-colors">
                  04. Liên hệ hợp tác
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-800">
              Kênh kết nối
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
                href={`mailto:${PERSONAL_INFO.email}`}
                aria-label="Gửi email"
                className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200 hover:border-sky-400 hover:text-sky-600 text-slate-700 flex items-center justify-center transition-all shadow-xs"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <p className="text-xs font-mono text-slate-500">
              Email: <span className="text-slate-800 font-medium">{PERSONAL_INFO.email}</span>
            </p>
          </div>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="font-mono">
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name} ({PERSONAL_INFO.handle}). Thiết kế chuẩn shadcn/ui.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 font-mono text-xs text-slate-600 hover:text-sky-600 transition-colors cursor-pointer"
            aria-label="Lên đầu trang"
          >
            <span>Lên đầu trang</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </Container>
    </footer>
  );
};
