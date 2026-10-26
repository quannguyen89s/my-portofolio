import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Gauge, 
  Network, 
  CheckCircle2 
} from 'lucide-react';
import { Container } from '../layout/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { Badge } from '../ui/Badge';
import { SKILL_CATEGORIES } from '../../data/portfolioData';

export const SkillsArchitecture: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('frontend');

  const selectedCategory = SKILL_CATEGORIES.find((c) => c.id === activeCategory) || SKILL_CATEGORIES[0];

  return (
    <section id="skills" className="py-16 sm:py-24 relative">
      <Container size="wide">
        <SectionHeader
          number="// 03"
          badge="NĂNG LỰC KỸ THUẬT"
          title="Kỹ năng & công nghệ chuyên môn."
          subtitle="Các nền tảng ngôn ngữ và kiến trúc phần mềm được áp dụng thường xuyên."
        />

        {/* Category Switcher Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
          {SKILL_CATEGORIES.map((cat) => {
            const isSelected = cat.id === activeCategory;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`p-4 rounded-xl border text-left transition-all duration-150 cursor-pointer ${
                  isSelected
                    ? 'bg-sky-50/60 border-sky-400 shadow-xs'
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-700">
                    Lĩnh vực
                  </span>
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-sky-600" />
                  )}
                </div>
                <h3 className="text-sm font-bold text-slate-900">
                  {cat.title}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                  {cat.subtitle}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Category Skill Matrix */}
        <motion.div
          key={selectedCategory.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-card-subtle"
        >
          <div className="mb-5 flex items-center justify-between pb-4 border-b border-slate-100">
            <div>
              <h4 className="text-base font-bold text-slate-900">
                {selectedCategory.title}
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                {selectedCategory.subtitle}
              </p>
            </div>
            <span className="text-xs font-mono text-sky-700 font-medium">
              {selectedCategory.skills.length} Công nghệ
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {selectedCategory.skills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-sky-300 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-600" />
                  <span className="text-xs sm:text-sm font-medium text-slate-800">
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
        </motion.div>

        {/* 4 Pillars - Short & Crisp */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <h5 className="text-xs font-bold text-slate-900">Clean Code</h5>
            <p className="text-[11px] text-slate-500 leading-normal">
              Mã nguồn rõ ràng, có cấu trúc chặt chẽ và dễ mở rộng.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-1.5">
            <Gauge className="w-4 h-4 text-sky-600" />
            <h5 className="text-xs font-bold text-slate-900">Tối ưu tốc độ</h5>
            <p className="text-[11px] text-slate-500 leading-normal">
              Tải trang nhanh dưới 1 giây, tối ưu bundle size và asset.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-1.5">
            <Network className="w-4 h-4 text-blue-600" />
            <h5 className="text-xs font-bold text-slate-900">API chuẩn mực</h5>
            <p className="text-[11px] text-slate-500 leading-normal">
              Thiết kế RESTful API logic chặt chẽ và an toàn dữ liệu.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-1.5">
            <CheckCircle2 className="w-4 h-4 text-amber-600" />
            <h5 className="text-xs font-bold text-slate-900">Chuẩn WCAG 2.2</h5>
            <p className="text-[11px] text-slate-500 leading-normal">
              Độ tương phản cao, hỗ trợ đầy đủ bàn phím điều hướng.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
