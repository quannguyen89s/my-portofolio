import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  ArrowUpRight, 
  Activity, 
  CheckCircle2,
  GitBranch,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { GithubIcon } from '../icons/BrandIcons';
import { Container } from '../layout/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { ProjectModal } from './ProjectModal';
import { PROJECTS } from '../../data/portfolioData';
import { Project } from '../../types/portfolio';

export const ProjectShowcase: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 sm:py-28 relative border-b border-slate-200/80 dark:border-white/[0.08] scroll-mt-16">
      <Container size="default">
        <SectionHeader
          badge="FEATURED PROJECTS"
          title="Production-Ready Full-Stack Projects."
          subtitle="Built end-to-end: relational & NoSQL schemas, robust backend APIs, and modern responsive user interfaces."
        />

        {/* Separated Featured Projects Stack */}
        <div className="space-y-8 sm:space-y-10">
          {PROJECTS.map((project, idx) => {
            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.08 }}
                className="rounded-2xl bg-white border border-slate-200/90 hover:border-sky-400/60 dark:bg-[#0F1626]/80 dark:border-white/[0.1] dark:hover:border-sky-500/40 transition-[border-color,box-shadow] duration-200 shadow-card-subtle p-6 sm:p-9 relative overflow-hidden group"
              >
                {/* Subtle Ambient Glow */}
                <div className="absolute top-0 right-0 -mr-24 -mt-24 w-80 h-80 bg-sky-500/[0.03] dark:bg-sky-500/[0.05] rounded-full blur-3xl pointer-events-none group-hover:bg-sky-500/[0.07] transition-colors" />
                <div className="absolute inset-0 bg-gradient-to-r from-sky-500/[0.015] via-transparent to-transparent pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start relative z-10">
                  {/* Left Column: Project Narrative & Architecture (Col 7) */}
                  <div className="lg:col-span-7 space-y-5">
                    {/* Category & Status Badges */}
                    <div className="flex flex-wrap items-center gap-2.5">
                      {project.repoName && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-sky-700 font-mono text-xs font-semibold border border-slate-200 dark:bg-white/[0.05] dark:hover:bg-white/[0.1] dark:text-sky-300 dark:border-white/[0.1] transition-colors"
                        >
                          <GitBranch className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                          <span>{project.repoName}</span>
                        </a>
                      )}

                      {project.links.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:hover:bg-emerald-500/20 dark:text-emerald-300 font-mono text-xs font-semibold border border-emerald-200 dark:border-emerald-500/25 transition-colors"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          <span>{project.links.live.replace(/^https?:\/\//, '')}</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}

                      <Badge variant="ocean" size="sm">
                        {project.category}
                      </Badge>

                      {project.featured && (
                        <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-300 dark:border-emerald-500/25">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                          {idx === 0
                            ? 'Booking Engine'
                            : idx === 1
                            ? 'Clinic & EMR'
                            : 'IoT Dashboard'}
                        </span>
                      )}

                      <span className="text-xs font-mono text-slate-500 dark:text-slate-400 ml-auto tabular-nums">
                        Year: {project.year}
                      </span>
                    </div>

                    {/* Title & Tagline */}
                    <div className="space-y-1.5">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight text-balance group-hover:text-sky-600 dark:group-hover:text-sky-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-sky-700 dark:text-sky-400 leading-snug">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-pretty">
                      {project.description}
                    </p>

                    {/* Key Architectural Highlights */}
                    {project.caseStudy?.architectureHighlights && (
                      <div className="space-y-2 pt-1">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold block">
                          Key Architecture & Solution Highlights
                        </span>
                        <ul className="space-y-1.5">
                          {project.caseStudy.architectureHighlights.slice(0, 3).map((highlight, hIdx) => (
                            <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                              <span className="text-pretty">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Technology Stack Chips */}
                    <div className="space-y-2 pt-2">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold block">
                        Core Technologies
                      </span>
                      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] sm:text-xs font-mono px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200 hover:border-sky-300 dark:bg-white/[0.04] dark:text-slate-200 dark:border-white/[0.08] dark:hover:border-sky-500/30 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Key Technical Specs & Action Card (Col 5) */}
                  <div className="lg:col-span-5 flex flex-col justify-between space-y-6 lg:pl-8 lg:border-l border-slate-200/80 dark:border-white/[0.08]">
                    {/* Technical Specifications Panel */}
                    <div className="p-5 rounded-xl bg-slate-50/80 border border-slate-200/80 dark:bg-white/[0.02] dark:border-white/[0.08] space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-slate-200/60 dark:border-white/[0.06]">
                        <span className="text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 font-bold flex items-center gap-2">
                          <Activity className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                          Technical Specifications
                        </span>
                        <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">Verified</span>
                      </div>

                      <div className="space-y-3">
                        {project.metrics.map((metric, mIdx) => (
                          <div
                            key={mIdx}
                            className="flex items-center justify-between text-xs sm:text-sm"
                          >
                            <span className="text-slate-500 dark:text-slate-400">{metric.label}</span>
                            <span className="font-mono font-semibold text-slate-900 bg-white border border-slate-200 dark:text-slate-100 dark:bg-white/[0.04] dark:border-white/[0.06] px-2.5 py-0.5 rounded tabular-nums">
                              {metric.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Interactive Actions */}
                    <div className="space-y-2.5">
                      {project.links.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center text-center gap-2 w-full px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs sm:text-sm font-semibold active:scale-[0.96] transition-[transform,background-color] duration-150 shadow-xs cursor-pointer"
                        >
                          <ExternalLink className="w-4 h-4 shrink-0" />
                          <span className="text-center">Visit Live Website</span>
                          <ArrowUpRight className="w-4 h-4 ml-0.5 opacity-80 shrink-0" />
                        </a>
                      )}

                      <Button
                        onClick={() => setActiveModalProject(project)}
                        variant={project.links.live ? "outline" : "primary"}
                        size="md"
                        iconLeft={<BookOpen className="w-4 h-4" />}
                        className="w-full text-xs sm:text-sm font-semibold justify-center text-center"
                      >
                        View Architecture & Case Study
                      </Button>

                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center text-center gap-2 w-full px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white dark:bg-white/[0.04] dark:hover:bg-white/[0.08] dark:text-slate-200 dark:hover:text-white text-xs sm:text-sm font-semibold border border-transparent dark:border-white/[0.08] active:scale-[0.96] transition-[transform,background-color,color] duration-150 shadow-xs"
                        >
                          <GithubIcon className="w-4 h-4 shrink-0" />
                          <span className="text-center">View Source on GitHub</span>
                          <ArrowUpRight className="w-4 h-4 text-slate-400 shrink-0" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
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
