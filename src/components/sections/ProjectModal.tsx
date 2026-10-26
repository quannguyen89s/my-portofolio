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
      title={`Chi tiết dự án — ${project.title}`}
      maxWidth="4xl"
    >
      <div className="space-y-6">
        {/* Header Summary */}
        <div className="space-y-2.5 pb-5 border-b border-slate-200">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="ocean">{project.category}</Badge>
            <Badge variant="surface">{project.year}</Badge>
            {project.featured && <Badge variant="success">Dự án chính</Badge>}
          </div>

          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            {project.title}
          </h2>
          <p className="text-sm text-sky-700 font-medium">
            {project.tagline}
          </p>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-0.5">
            {caseStudy.overview}
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {project.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-center sm:text-left"
            >
              <p className="text-[11px] font-mono uppercase tracking-wider text-slate-500">
                {metric.label}
              </p>
              <p className="text-xl font-mono font-bold text-sky-700 mt-0.5">
                {metric.value}
              </p>
            </div>
          ))}
        </div>

        {/* The Challenge & The Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Challenge */}
          <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 space-y-1.5">
            <div className="flex items-center gap-1.5 text-rose-800 text-xs font-semibold">
              <AlertTriangle className="w-4 h-4 text-rose-600" />
              <span>Thách thức kỹ thuật</span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              {caseStudy.challenge}
            </p>
          </div>

          {/* Solution */}
          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 space-y-1.5">
            <div className="flex items-center gap-1.5 text-emerald-800 text-xs font-semibold">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Giải pháp triển khai</span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              {caseStudy.solution}
            </p>
          </div>
        </div>

        {/* Architectural Highlights */}
        <div className="space-y-2.5">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-wider">
            <Cpu className="w-4 h-4 text-sky-600" />
            <span>Điểm sáng kiến trúc</span>
          </div>
          <div className="space-y-1.5">
            {caseStudy.architectureHighlights.map((highlight, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs text-slate-700"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-sky-600 shrink-0" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Measurable Outcomes */}
        <div className="space-y-2.5">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-wider">
            <Activity className="w-4 h-4 text-emerald-600" />
            <span>Kết quả đạt được</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {caseStudy.keyOutcomes.map((outcome, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs text-slate-700">
                  {outcome}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Actions Footer */}
        <div className="pt-5 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            {project.links.github && (
              <Button
                asAnchor
                href={project.links.github}
                target="_blank"
                variant="primary"
                size="md"
                iconLeft={<GithubIcon className="w-4 h-4" />}
              >
                Mã nguồn GitHub
              </Button>
            )}
            {project.links.live && (
              <Button
                asAnchor
                href={project.links.live}
                target="_blank"
                variant="secondary"
                size="md"
                iconRight={<ExternalLink className="w-4 h-4" />}
              >
                Xem trực tiếp
              </Button>
            )}
          </div>

          <Button onClick={onClose} variant="ghost" size="md">
            Đóng
          </Button>
        </div>
      </div>
    </Modal>
  );
};
