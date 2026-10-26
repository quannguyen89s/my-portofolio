import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, 
  BookOpen, 
  GitBranch, 
  FolderGit2, 
  Layers, 
  Terminal, 
  Cpu, 
  Star 
} from 'lucide-react';
import { GithubIcon } from '../icons/BrandIcons';
import { Container } from '../layout/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { ProjectModal } from './ProjectModal';
import { PROJECTS } from '../../data/portfolioData';
import { Project } from '../../types/portfolio';

const FILTER_TABS = [
  'Tất cả Repos',
  'Hesta Smart Home',
  'Web Apps',
  'Backend & API',
  'Mobile',
];

export const ProjectShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('Tất cả Repos');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filteredProjects = activeTab === 'Tất cả Repos'
    ? PROJECTS
    : activeTab === 'Hesta Smart Home'
    ? PROJECTS.filter((p) => p.title.includes('Hesta'))
    : PROJECTS.filter((p) => p.category === activeTab);

  return (
    <section id="projects" className="py-16 sm:py-24 relative border-b border-slate-200/80">
      <Container size="wide">
        <SectionHeader
          number="// 01"
          badge="GITHUB REPOSITORIES & DỰ ÁN"
          title="Các dự án & kho lưu trữ mã nguồn."
          subtitle="Các repository thực tế trên GitHub được tách bạch rõ ràng, bao gồm hệ sinh thái Hesta Smart Home và các dự án Web/Mobile."
          action={
            <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-slate-100 border border-slate-200/80">
              {FILTER_TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-xs font-medium px-3.5 py-1.5 rounded-lg transition-all duration-150 cursor-pointer ${
                    activeTab === tab
                      ? 'bg-white text-sky-700 font-semibold shadow-xs border border-slate-200/60'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          }
        />

        {/* Separated Repositories Stack (Viết tách nhau xuống) */}
        <div className="space-y-6 sm:space-y-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const isHesta = project.title.includes('Hesta');

              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.25, delay: idx * 0.03 }}
                  className={`rounded-2xl bg-white border transition-all duration-200 shadow-card-subtle hover:shadow-card-hover p-6 sm:p-7 relative overflow-hidden group ${
                    isHesta
                      ? 'border-sky-200 hover:border-sky-400 ring-1 ring-sky-100'
                      : 'border-slate-200/90 hover:border-sky-300'
                  }`}
                >
                  {/* Subtle accent line on top */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 ${
                      isHesta
                        ? 'bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-500'
                        : 'bg-slate-200 group-hover:bg-sky-500 transition-colors'
                    }`}
                  />

                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    {/* Main Information Column */}
                    <div className="space-y-3.5 flex-1">
                      {/* Top Repo Identifier & Tags */}
                      <div className="flex flex-wrap items-center gap-2">
                        {project.repoName && (
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 hover:bg-sky-50 hover:text-sky-700 text-slate-700 font-mono text-xs font-semibold border border-slate-200/80 transition-colors"
                          >
                            <GitBranch className="w-3.5 h-3.5 text-sky-600" />
                            <span>{project.repoName}</span>
                            <ExternalLink className="w-3 h-3 text-slate-400" />
                          </a>
                        )}

                        <Badge variant={isHesta ? 'ocean' : 'default'} size="sm">
                          {project.category}
                        </Badge>

                        {project.featured && (
                          <span className="inline-flex items-center gap-1 text-[11px] font-mono font-medium px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            Trọng tâm
                          </span>
                        )}

                        <span className="text-xs font-mono text-slate-400 ml-auto">
                          {project.year}
                        </span>
                      </div>

                      {/* Project Title & Tagline */}
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-xs sm:text-sm font-medium text-sky-700 mt-0.5">
                          {project.tagline}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
                        {project.description}
                      </p>

                      {/* Technology Chips */}
                      <div className="flex flex-wrap items-center gap-1.5 pt-1">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-50 text-slate-700 border border-slate-200/80 hover:border-sky-300 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Metrics & Actions Column */}
                    <div className="lg:w-72 shrink-0 flex flex-col justify-between space-y-4 pt-4 lg:pt-0 lg:pl-6 lg:border-l border-slate-100">
                      {/* Live Metrics Box */}
                      <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/80 space-y-2">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-semibold">
                          Chỉ số kỹ thuật
                        </span>
                        <div className="space-y-1.5">
                          {project.metrics.map((metric, mIdx) => (
                            <div
                              key={mIdx}
                              className="flex items-center justify-between text-xs"
                            >
                              <span className="text-slate-500">{metric.label}:</span>
                              <span className="font-mono font-semibold text-slate-800">
                                {metric.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Direct Buttons */}
                      <div className="flex flex-col sm:flex-row lg:flex-col gap-2">
                        {project.links.github && (
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-all shadow-xs active:scale-[0.98]"
                          >
                            <GithubIcon className="w-4 h-4 text-white" />
                            <span>Mở GitHub Repository</span>
                            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                          </a>
                        )}

                        <Button
                          onClick={() => setActiveModalProject(project)}
                          variant="secondary"
                          size="sm"
                          iconLeft={<BookOpen className="w-3.5 h-3.5 text-sky-700" />}
                          className="w-full text-xs"
                        >
                          Chi tiết kiến trúc
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>
      </Container>

      {/* Case Study Modal */}
      <ProjectModal
        project={activeModalProject}
        isOpen={!!activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
