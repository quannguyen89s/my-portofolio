import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, BookOpen } from 'lucide-react';
import { GithubIcon } from '../icons/BrandIcons';
import { Container } from '../layout/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { ProjectModal } from './ProjectModal';
import { PROJECTS } from '../../data/portfolioData';
import { Project, ProjectCategory } from '../../types/portfolio';

const CATEGORIES: ProjectCategory[] = ['All', 'Full-Stack Apps', 'Distributed Systems'];

export const ProjectShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-16 sm:py-24 relative">
      <Container size="wide">
        <SectionHeader
          number="// 02"
          badge="DỰ ÁN TIÊU BIỂU"
          title="Sản phẩm & mã nguồn thực tế."
          subtitle="Các dự án web application và dịch vụ backend được tối ưu theo quy chuẩn sản xuất."
          action={
            <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-slate-100 border border-slate-200">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs font-medium px-3.5 py-1.5 rounded-lg transition-all duration-150 cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-white text-sky-700 font-semibold shadow-xs border border-slate-200/60'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                  }`}
                >
                  {cat === 'All' ? 'Tất cả' : cat}
                </button>
              ))}
            </div>
          }
        />

        {/* Project Cards Grid */}
        <div className="space-y-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl bg-white border border-slate-200 hover:border-sky-300 transition-all duration-200 overflow-hidden shadow-card-subtle hover:shadow-card-hover group"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                    {/* Media Mockup */}
                    <div
                      className={`lg:col-span-7 relative min-h-[260px] sm:min-h-[320px] bg-slate-100 flex flex-col justify-between p-6 sm:p-7 overflow-hidden border-b lg:border-b-0 ${
                        isEven ? 'lg:order-2 lg:border-l border-slate-200' : 'lg:order-1 lg:border-r border-slate-200'
                      }`}
                    >
                      <div className="absolute inset-0 z-0">
                        <img
                          src={project.coverImage}
                          alt={project.title}
                          className="w-full h-full object-cover object-center opacity-85 group-hover:scale-102 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent" />
                      </div>

                      {/* Mockup Title bar */}
                      <div className="relative z-10 flex items-center justify-between">
                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/60 backdrop-blur-xs text-white text-[11px] font-mono">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          <span>{project.id}.app</span>
                        </div>
                        <span className="text-xs font-mono font-medium px-2 py-0.5 rounded-full bg-white/90 text-slate-800 shadow-xs">
                          {project.year}
                        </span>
                      </div>

                      {/* Live Metrics Overlay Card */}
                      <div className="relative z-10 pt-10">
                        <div className="grid grid-cols-3 gap-2.5 p-3.5 rounded-xl bg-white/95 border border-slate-200/80 shadow-md backdrop-blur-md">
                          {project.metrics.map((metric, mIdx) => (
                            <div key={mIdx}>
                              <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                                {metric.label}
                              </p>
                              <p className="text-base font-mono font-bold text-sky-700 mt-0.5">
                                {metric.value}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Editorial Content Column */}
                    <div
                      className={`lg:col-span-5 p-6 sm:p-7 flex flex-col justify-between space-y-5 ${
                        isEven ? 'lg:order-1' : 'lg:order-2'
                      }`}
                    >
                      <div className="space-y-3">
                        <div className="flex flex-wrap items-center gap-2">
                          <Badge variant="ocean" size="sm">
                            {project.category}
                          </Badge>
                          {project.featured && (
                            <Badge variant="success" size="sm">
                              Nổi bật
                            </Badge>
                          )}
                        </div>

                        <div>
                          <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-700 transition-colors tracking-tight">
                            {project.title}
                          </h3>
                          <p className="text-xs font-mono text-sky-700 mt-0.5 font-medium">
                            {project.tagline}
                          </p>
                        </div>

                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {project.description}
                        </p>

                        {/* Tech Tags */}
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2.5">
                        <Button
                          onClick={() => setActiveModalProject(project)}
                          variant="ocean"
                          size="sm"
                          iconLeft={<BookOpen className="w-3.5 h-3.5" />}
                        >
                          Chi tiết kiến trúc
                        </Button>

                        <div className="flex items-center gap-2">
                          {project.links.github && (
                            <a
                              href={project.links.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Xem mã nguồn ${project.title} trên GitHub`}
                              className="p-2 rounded-xl bg-slate-50 border border-slate-200 hover:border-sky-300 hover:text-sky-700 text-slate-700 transition-colors shadow-xs"
                            >
                              <GithubIcon className="w-4 h-4" />
                            </a>
                          )}
                          {project.links.live && (
                            <a
                              href={project.links.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Mở ${project.title} bản chạy trực tiếp`}
                              className="p-2 rounded-xl bg-slate-50 border border-slate-200 hover:border-sky-300 hover:text-sky-700 text-slate-700 transition-colors shadow-xs"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </Container>

      {/* Case Study Modal Component */}
      <ProjectModal
        project={activeModalProject}
        isOpen={!!activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
