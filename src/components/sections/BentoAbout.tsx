import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Clock, 
  MapPin, 
  Cpu, 
  Zap, 
  GitBranch, 
  Layers, 
  ExternalLink 
} from 'lucide-react';
import { Container } from '../layout/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { Badge } from '../ui/Badge';
import { PERSONAL_INFO, BENTO_METRICS } from '../../data/portfolioData';

export const BentoAbout: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Bangkok',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setCurrentTime(new Intl.DateTimeFormat('en-GB', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-16 sm:py-24 relative">
      <Container size="wide">
        <SectionHeader
          number="// 01"
          badge="GIỚI THIỆU"
          title="Tập trung vào chất lượng và tốc độ."
          subtitle="Kết hợp tư duy lập trình vững vàng với trải nghiệm giao diện người dùng tinh gọn, hiện đại."
        />

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-4">
          {/* Bento Card 1: Core Philosophy (Col 8) */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="md:col-span-2 lg:col-span-8 p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 hover:border-sky-300 transition-all duration-200 relative overflow-hidden group shadow-card-subtle flex flex-col justify-between"
          >
            <div className="space-y-3 relative z-10">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-lg bg-sky-50 text-sky-700 border border-sky-200">
                  <Cpu className="w-4 h-4" />
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-sky-700 font-semibold">
                  Triết lý phát triển
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                "Đơn giản, hiệu quả và tối ưu trải nghiệm."
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed max-w-xl">
                Không tạo code phức tạp không cần thiết. Tôi ưu tiên xây dựng các thành phần độc lập, dễ bảo trì, tải nhanh và tương tác mượt mà trên mọi thiết bị.
              </p>

              {/* 3 mini cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <p className="text-xs font-semibold text-slate-800">Clean Architecture</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">Tách biệt logic và giao diện.</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <p className="text-xs font-semibold text-slate-800">Hiệu năng cao</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">Tối ưu render và assets.</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <p className="text-xs font-semibold text-slate-800">Mobile First</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">Trải nghiệm chạm mượt mà.</p>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="font-mono">Chuẩn TypeScript Strict</span>
              <span className="text-sky-700 font-mono font-medium">3+ Năm Thực Chiến</span>
            </div>
          </motion.div>

          {/* Bento Card 2: Live Location & Timezone (Col 4) */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.05 }}
            className="md:col-span-1 lg:col-span-4 p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 hover:border-sky-300 transition-all duration-200 shadow-card-subtle flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="p-1.5 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <Clock className="w-4 h-4" />
                </span>
                <Badge variant="success" dot size="sm">
                  Đang hoạt động
                </Badge>
              </div>

              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-slate-500">
                  Giờ địa phương (UTC+07)
                </p>
                <div className="text-3xl font-mono font-bold text-slate-900 tracking-wider mt-0.5">
                  {currentTime || '16:00:00'}
                </div>
                <p className="text-xs font-mono text-sky-700 mt-0.5">
                  Giờ Việt Nam (Hà Nội / HCM)
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 space-y-1.5">
                <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
                <p className="text-xs text-slate-500 leading-normal">
                  Làm việc linh hoạt Onsite / Hybrid / Remote toàn cầu.
                </p>
              </div>
            </div>

            <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500 font-mono">Trạng thái</span>
              <span className="text-emerald-700 font-mono font-medium">Sẵn sàng nhận dự án</span>
            </div>
          </motion.div>

          {/* Bento Card 3: Metrics (Col 4) */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className="md:col-span-1 lg:col-span-4 p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 hover:border-sky-300 transition-all duration-200 shadow-card-subtle flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-lg bg-sky-50 text-sky-700 border border-sky-200">
                  <Zap className="w-4 h-4" />
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-sky-700 font-semibold">
                  Chỉ số năng lực
                </span>
              </div>

              <div className="space-y-3">
                {BENTO_METRICS.slice(0, 3).map((metric, idx) => (
                  <div key={idx} className="pb-2.5 border-b border-slate-100 last:border-0 last:pb-0">
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs text-slate-600">{metric.label}</span>
                      <span className="text-base font-mono font-bold text-sky-700">{metric.value}</span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5">{metric.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 text-xs text-slate-500 font-mono">
              Đo lường bằng chỉ số thực tế
            </div>
          </motion.div>

          {/* Bento Card 4: Daily Stack Matrix (Col 5) */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.15 }}
            className="md:col-span-2 lg:col-span-5 p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 hover:border-sky-300 transition-all duration-200 shadow-card-subtle flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-lg bg-blue-50 text-blue-700 border border-blue-200">
                  <Layers className="w-4 h-4" />
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-blue-700 font-semibold">
                  Công nghệ cốt lõi
                </span>
              </div>

              <p className="text-xs text-slate-600">
                Bộ công cụ sử dụng hàng ngày trong phát triển phần mềm:
              </p>

              <div className="flex flex-wrap gap-1.5 pt-0.5">
                {[
                  'TypeScript',
                  'React',
                  'Tailwind CSS',
                  'Node.js',
                  'Java',
                  'REST API',
                  'SQL',
                  'Git',
                  'Vite',
                  'Responsive',
                ].map((tool) => (
                  <span
                    key={tool}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-50 text-slate-700 border border-slate-200 hover:border-sky-300 hover:text-sky-700 transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono">
              <span>Đầy đủ kiểu dữ liệu</span>
              <span className="text-sky-700 font-medium">Type-Safe</span>
            </div>
          </motion.div>

          {/* Bento Card 5: GitHub (Col 3) */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.2 }}
            className="md:col-span-1 lg:col-span-3 p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 hover:border-sky-300 transition-all duration-200 shadow-card-subtle flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <GitBranch className="w-4 h-4" />
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-700 font-semibold">
                  GitHub
                </span>
              </div>

              <div>
                <p className="text-lg font-bold text-slate-900">@{PERSONAL_INFO.handle}</p>
                <p className="text-xs text-slate-600 mt-0.5">
                  Mã nguồn mở và các dự án cá nhân được quản lý qua GitHub.
                </p>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700">
                <p className="text-slate-500 text-[10px]">// Repositories</p>
                <p className="text-sky-700 font-medium truncate">Worksy, landingPage, my-portofolio</p>
              </div>
            </div>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-sky-700 hover:text-sky-800 font-semibold pt-2"
            >
              <span>Xem GitHub Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
