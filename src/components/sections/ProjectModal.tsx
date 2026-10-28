import React from 'react';
import { ExternalLink, CheckCircle2, AlertTriangle, Layers, Activity, Cpu } from 'lucide-react';
import { GithubIcon } from '../icons/BrandIcons';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Project } from '../../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  if (!project) return null;

  const { caseStudy } = project;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`Project Details — ${project.title}`}
      maxWidth="4xl"
    >
      <div className="space-y-6">
        {/* Header Summary */}
        <div className="space-y-2.5 pb-5 border-b border-slate-200/80 dark:border-white/[0.08]">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="ocean">{project.category}</Badge>
            <Badge variant="surface">{project.year}</Badge>
            {project.featured && <Badge variant="success">Key Project</Badge>}
          </div>

          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight text-balance">
            {project.title}
          </h2>
          <p className="text-sm text-sky-600 dark:text-sky-400 font-semibold">
            {project.tagline}
          </p>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-0.5 text-pretty">
            {caseStudy.overview}
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {project.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.08] text-center sm:text-left"
            >
              <p className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">
                {metric.label}
              </p>
              <p className="text-xl font-mono font-bold text-sky-600 dark:text-sky-400 mt-0.5 tabular-nums">
                {metric.value}
              </p>
            </div>
          ))}
        </div>

        {/* The Challenge & The Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Challenge */}
          <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/20 space-y-1.5">
            <div className="flex items-center gap-1.5 text-rose-700 dark:text-rose-300 text-xs font-bold">
              <AlertTriangle className="w-4 h-4 text-rose-500 dark:text-rose-400 shrink-0" />
              <span>Technical Challenge</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed text-pretty">
              {caseStudy.challenge}
            </p>
          </div>

          {/* Solution */}
          <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 space-y-1.5">
            <div className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-300 text-xs font-bold">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0" />
              <span>Implemented Solution</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed text-pretty">
              {caseStudy.solution}
            </p>
          </div>
        </div>

        {/* Architectural Highlights */}
        <div className="space-y-2.5">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
            <Cpu className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" />
            <span>Architectural Highlights</span>
          </div>
          <div className="space-y-1.5">
            {caseStudy.architectureHighlights.map((highlight, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50/80 dark:bg-white/[0.02] border border-slate-200/70 dark:border-white/[0.06] text-xs text-slate-700 dark:text-slate-300"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500 dark:bg-sky-400 shrink-0" />
                <span className="text-pretty">{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Measurable Outcomes */}
        <div className="space-y-2.5">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
            <Activity className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span>Measurable Outcomes</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {caseStudy.keyOutcomes.map((outcome, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-slate-50/80 dark:bg-white/[0.02] border border-slate-200/70 dark:border-white/[0.06] flex items-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span className="text-xs text-slate-700 dark:text-slate-300 text-pretty">
                  {outcome}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Actions Footer */}
        <div className="pt-5 pb-2 border-t border-slate-200/80 dark:border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            {project.links.github && (
              <Button
                asAnchor
                href={project.links.github}
                target="_blank"
                variant="primary"
                size="md"
                className="justify-center text-center"
                iconLeft={<GithubIcon className="w-4 h-4" />}
              >
                GitHub Repository
              </Button>
            )}
            {project.links.live && (
              <Button
                asAnchor
                href={project.links.live}
                target="_blank"
                variant="secondary"
                size="md"
                className="justify-center text-center"
                iconRight={<ExternalLink className="w-4 h-4" />}
              >
                Live Demo
              </Button>
            )}
          </div>

          <Button onClick={onClose} variant="secondary" size="md" className="justify-center text-center">
            Close
          </Button>
        </div>
      </div>
    </Modal>
  );
};
