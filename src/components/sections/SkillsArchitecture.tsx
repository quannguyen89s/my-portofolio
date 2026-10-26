import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Layout, 
  Server, 
  Smartphone, 
  Database, 
  Wrench,
  ShieldCheck, 
  Gauge, 
  Network, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { Container } from '../layout/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { Badge } from '../ui/Badge';
import { SKILL_CATEGORIES } from '../../data/portfolioData';

// Category icon mapper
const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  languages: <Code2 className="w-4 h-4 text-sky-600" />,
  frontend: <Layout className="w-4 h-4 text-blue-600" />,
  backend: <Server className="w-4 h-4 text-indigo-600" />,
  mobile: <Smartphone className="w-4 h-4 text-cyan-600" />,
  database: <Database className="w-4 h-4 text-emerald-600" />,
  tools: <Wrench className="w-4 h-4 text-slate-700" />,
};

const CATEGORY_BADGES: Record<string, string> = {
  languages: 'Core',
  frontend: 'UI / UX',
  backend: 'API / Service',
  mobile: 'Cross-Platform',
  database: 'Storage',
  tools: 'Toolchain',
};

export const SkillsArchitecture: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const displayedCategories = selectedCategory === 'all'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter((c) => c.id === selectedCategory);

  return (
    <section id="skills" className="py-16 sm:py-24 relative border-b border-slate-200/80">
      <Container size="wide">
        <SectionHeader
          number="// 02"
          badge="KỸ NĂNG & CÔNG NGHỆ"
          title="Hệ sinh thái kỹ năng chuyên môn."
          subtitle="Tổ hợp 6 nhóm năng lực: từ ngôn ngữ lập trình cốt lõi, web/mobile đến kiến trúc backend và cơ sở dữ liệu."
          action={
            <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-slate-100 border border-slate-200/80">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`text-xs font-medium px-3 py-1.5 rounded-lg transition-all duration-150 cursor-pointer ${
                  selectedCategory === 'all'
                    ? 'bg-white text-sky-700 font-semibold shadow-xs border border-slate-200/60'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Tất cả (6 nhóm)
              </button>
              {SKILL_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`text-xs font-medium px-3 py-1.5 rounded-lg transition-all duration-150 cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-white text-sky-700 font-semibold shadow-xs border border-slate-200/60'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {cat.title.split('. ')[1]}
                </button>
              ))}
            </div>
          }
        />

        {/* 6 Category Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          <AnimatePresence mode="popLayout">
            {displayedCategories.map((category, idx) => {
              const icon = CATEGORY_ICONS[category.id] || <Sparkles className="w-4 h-4 text-sky-600" />;
              const tag = CATEGORY_BADGES[category.id] || 'Tech';

              return (
                <motion.div
                  key={category.id}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.25, delay: idx * 0.04 }}
                  className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-sky-300 transition-all duration-200 shadow-card-subtle hover:shadow-card-hover flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                      <div className="flex items-center gap-2.5">
                        <span className="p-2 rounded-xl bg-slate-50 border border-slate-200/80 group-hover:bg-sky-50 group-hover:border-sky-200 transition-colors">
                          {icon}
                        </span>
                        <div>
                          <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                            {category.title}
                          </h3>
                          <p className="text-xs text-slate-500 mt-0.5">
                            {category.subtitle}
                          </p>
                        </div>
                      </div>

                      <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 group-hover:bg-sky-50 group-hover:text-sky-700 transition-colors">
                        {tag}
                      </span>
                    </div>

                    {/* Skills Pill Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {category.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50/80 border border-slate-200/70 hover:border-sky-300 hover:bg-sky-50/50 transition-all duration-150"
                        >
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0" />
                            <span className="text-xs font-semibold text-slate-800">
                              {skill.name}
                            </span>
                          </div>
                          <Badge
                            variant={skill.level === 'Expert' ? 'ocean' : 'default'}
                            size="sm"
                          >
                            {skill.level}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
                    <span>{category.skills.length} công nghệ</span>
                    <span className="text-sky-600 font-medium group-hover:underline">Production Ready</span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* 4 Pillars - Quality & Standards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-1.5 hover:border-slate-300 transition-colors">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <h5 className="text-xs font-bold text-slate-900">Clean Code & Strict Types</h5>
            </div>
            <p className="text-[11px] text-slate-500 leading-normal">
              TypeScript strict mode, phân tách tầng rõ ràng, dễ bảo trì và mở rộng.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-1.5 hover:border-slate-300 transition-colors">
            <div className="flex items-center gap-2">
              <Gauge className="w-4 h-4 text-sky-600" />
              <h5 className="text-xs font-bold text-slate-900">Tối ưu tốc độ & Motion</h5>
            </div>
            <p className="text-[11px] text-slate-500 leading-normal">
              Tải trang dưới 0.5s, tương tác cảm giác vật lý 60fps chuẩn shadcn & Emil Design.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-1.5 hover:border-slate-300 transition-colors">
            <div className="flex items-center gap-2">
              <Network className="w-4 h-4 text-blue-600" />
              <h5 className="text-xs font-bold text-slate-900">API chuẩn & Bảo mật JWT</h5>
            </div>
            <p className="text-[11px] text-slate-500 leading-normal">
              Thiết kế RESTful chuẩn hóa, kiểm thử qua Postman và xác thực an toàn.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-1.5 hover:border-slate-300 transition-colors">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-600" />
              <h5 className="text-xs font-bold text-slate-900">Tiêu chuẩn WCAG 2.2 AA</h5>
            </div>
            <p className="text-[11px] text-slate-500 leading-normal">
              Tương phản cao, hỗ trợ điều hướng bàn phím đầy đủ theo Vercel Guidelines.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
