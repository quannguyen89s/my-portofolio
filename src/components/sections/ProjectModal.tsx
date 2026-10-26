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
      title={`Architectural Case Study — ${project.title}`}
      maxWidth="4xl"
    >
      <div className="space-y-8">
        {/* Header Summary */}
        <div className="space-y-3 pb-6 border-b border-white/[0.08]">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="electric">{project.category}</Badge>
            <Badge variant="surface">{project.year}</Badge>
            {project.featured && <Badge variant="success">Production Flagship</Badge>}
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight">
            {project.title}
          </h2>
          <p className="text-base text-sky-300 font-medium leading-relaxed">
            {project.tagline}
          </p>

          <p className="text-sm text-slate-400 leading-relaxed pt-1">
            {caseStudy.overview}
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {project.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-[#141C30] border border-white/[0.06] text-center sm:text-left"
            >
              <p className="text-xs font-mono uppercase tracking-wider text-slate-400">
                {metric.label}
              </p>
              <p className="text-2xl font-mono font-bold text-sky-400 mt-1">
                {metric.value}
              </p>
            </div>
          ))}
        </div>

        {/* The Challenge & The Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Challenge */}
          <div className="p-5 rounded-xl bg-rose-500/[0.03] border border-rose-500/20 space-y-2">
            <div className="flex items-center gap-2 text-rose-400 text-sm font-semibold">
              <AlertTriangle className="w-4 h-4" />
              <span>The Problem & Bottleneck</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {caseStudy.challenge}
            </p>
          </div>

          {/* Solution */}
          <div className="p-5 rounded-xl bg-emerald-500/[0.03] border border-emerald-500/20 space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold">
              <CheckCircle2 className="w-4 h-4" />
              <span>Engineered Solution</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {caseStudy.solution}
            </p>
          </div>
        </div>

        {/* Architectural Highlights */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm font-bold text-slate-200">
            <Cpu className="w-4 h-4 text-sky-400" />
            <span>Key Architectural Highlights</span>
          </div>
          <div className="space-y-2">
            {caseStudy.architectureHighlights.map((highlight, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3 rounded-lg bg-[#141C30]/60 border border-white/[0.04] text-xs sm:text-sm text-slate-300"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 shrink-0" />
                <span className="leading-relaxed">{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Measurable Outcomes */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm font-bold text-slate-200">
            <Activity className="w-4 h-4 text-emerald-400" />
            <span>Quantifiable Business & Performance Outcomes</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {caseStudy.keyOutcomes.map((outcome, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-[#141C30] border border-white/[0.06] flex items-start gap-2.5"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-300 leading-relaxed">
                  {outcome}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Breakdown */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm font-bold text-slate-200">
            <Layers className="w-4 h-4 text-indigo-400" />
            <span>Tech Stack Breakdown</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {caseStudy.techStackBreakdown.map((group, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-[#141C30] border border-white/[0.06] space-y-2"
              >
                <p className="text-xs font-semibold text-sky-300">
                  {group.title}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {group.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#0A0F1B] text-slate-300 border border-white/[0.05]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Actions Footer */}
        <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {project.links.live && (
              <Button
                asAnchor
                href={project.links.live}
                target="_blank"
                variant="primary"
                size="md"
                iconRight={<ExternalLink className="w-4 h-4" />}
              >
                Launch Live Application
              </Button>
            )}
            {project.links.github && (
              <Button
                asAnchor
                href={project.links.github}
                target="_blank"
                variant="secondary"
                size="md"
                iconLeft={<GithubIcon className="w-4 h-4" />}
              >
                Inspect Source Code
              </Button>
            )}
          </div>

          <Button onClick={onClose} variant="ghost" size="md">
            Close Case Study
          </Button>
        </div>
      </div>
    </Modal>
  );
};
