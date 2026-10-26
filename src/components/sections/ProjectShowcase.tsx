import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowUpRight, BookOpen, Sparkles, Terminal, Layers } from 'lucide-react';
import { GithubIcon } from '../icons/BrandIcons';
import { Container } from '../layout/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { ProjectModal } from './ProjectModal';
import { PROJECTS } from '../../data/portfolioData';
import { Project, ProjectCategory } from '../../types/portfolio';

const CATEGORIES: ProjectCategory[] = ['All', 'Distributed Systems', 'Full-Stack Apps', 'AI & Tools'];

export const ProjectShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 sm:py-28 relative">
      <Container size="wide">
        <SectionHeader
          number="// 02"
          badge="FEATURED WORK"
          title="Selected engineering case studies."
          subtitle="A curation of high-throughput distributed systems, real-time web engines, and developer infrastructure built with rigorous production requirements."
          action={
            <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-[#0F1523] border border-white/[0.08]">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs font-medium px-3.5 py-1.5 rounded-lg transition-all duration-200 cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-sky-500/20 text-sky-300 font-semibold border border-sky-500/30 shadow-glow-sm'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          }
        />

        {/* Project Cards Grid */}
        <div className="space-y-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                  className="rounded-2xl bg-[#0E1424] border border-white/[0.08] hover:border-sky-500/40 transition-all duration-300 overflow-hidden shadow-card-subtle group"
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-12 items-stretch`}>
                    {/* Visual Media / Preview Mockup (Col 7 on even, Col 7 on odd) */}
                    <div
                      className={`lg:col-span-7 relative min-h-[300px] sm:min-h-[380px] bg-[#0A0F1D] flex flex-col justify-between p-6 sm:p-8 overflow-hidden border-b lg:border-b-0 ${
                        isEven ? 'lg:order-2 lg:border-l border-white/[0.08]' : 'lg:order-1 lg:border-r border-white/[0.08]'
                      }`}
                    >
                      {/* Background Visual Image with Dark Mask */}
                      <div className="absolute inset-0 z-0">
                        <img
                          src={project.coverImage}
                          alt={project.title}
                          className="w-full h-full object-cover object-center opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1D] via-[#0A0F1D]/80 to-transparent" />
                      </div>

                      {/* Mockup Title bar */}
                      <div className="relative z-10 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                          <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                          <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                          <span className="ml-2 font-mono text-[11px] text-slate-400">
                            {project.id}.production.sys
                          </span>
                        </div>
                        <Badge variant="electric" size="sm">
                          {project.year}
                        </Badge>
                      </div>

                      {/* Live Metrics Overlay Card */}
                      <div className="relative z-10 pt-16">
                        <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-[#080C14]/90 border border-white/[0.08] backdrop-blur-md">
                          {project.metrics.map((metric, mIdx) => (
                            <div key={mIdx}>
                              <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                                {metric.label}
                              </p>
                              <p className="text-base sm:text-lg font-mono font-bold text-sky-400 mt-0.5">
                                {metric.value}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Editorial Content Column (Col 5) */}
                    <div
                      className={`lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6 ${
                        isEven ? 'lg:order-1' : 'lg:order-2'
                      }`}
                    >
                      <div className="space-y-4">
                        <div className="flex flex-wrap items-center gap-2">
                          <Badge variant="surface" size="sm">
                            {project.category}
                          </Badge>
                          {project.featured && (
                            <Badge variant="success" size="sm">
                              Featured
                            </Badge>
                          )}
                        </div>

                        <div>
                          <h3 className="text-2xl font-bold text-slate-100 group-hover:text-sky-300 transition-colors tracking-tight">
                            {project.title}
                          </h3>
                          <p className="text-xs font-mono text-sky-400/90 mt-1">
                            {project.tagline}
                          </p>
                        </div>

                        <p className="text-sm text-slate-400 leading-relaxed">
                          {project.description}
                        </p>

                        {/* Tech Tags */}
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs font-mono px-2 py-0.5 rounded bg-[#141C30] text-slate-300 border border-white/[0.06]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3">
                        <Button
                          onClick={() => setActiveModalProject(project)}
                          variant="electric"
                          size="sm"
                          iconLeft={<BookOpen className="w-3.5 h-3.5" />}
                        >
                          Deep-Dive Case Study
                        </Button>

                        <div className="flex items-center gap-2">
                          {project.links.github && (
                            <a
                              href={project.links.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Inspect ${project.title} on GitHub`}
                              className="p-2 rounded-lg bg-[#141C30] border border-white/[0.08] hover:border-sky-500/40 text-slate-400 hover:text-white transition-colors"
                            >
                              <GithubIcon className="w-4 h-4" />
                            </a>
                          )}
                          {project.links.live && (
                            <a
                              href={project.links.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Launch ${project.title} live demo`}
                              className="p-2 rounded-lg bg-[#141C30] border border-white/[0.08] hover:border-sky-500/40 text-slate-400 hover:text-sky-300 transition-colors"
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
