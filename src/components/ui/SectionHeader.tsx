import React from 'react';
import { cn } from '../../utils/cn';

interface SectionHeaderProps {
  number?: string;
  badge?: string;
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
  className?: string;
  action?: React.ReactNode;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  number,
  badge,
  title,
  subtitle,
  alignment = 'left',
  className,
  action,
}) => {
  return (
    <div
      className={cn(
        'mb-12 md:mb-16',
        alignment === 'center' ? 'text-center mx-auto max-w-2xl' : 'flex flex-col md:flex-row md:items-end md:justify-between gap-6',
        className
      )}
    >
      <div className={alignment === 'center' ? '' : 'max-w-2xl'}>
        <div className={cn('flex items-center gap-2 mb-3', alignment === 'center' && 'justify-center')}>
          {number && (
            <span className="font-mono text-xs text-sky-400 font-semibold tracking-wider">
              {number}
            </span>
          )}
          {badge && (
            <span className="inline-flex items-center text-xs font-mono font-medium px-2.5 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20">
              {badge}
            </span>
          )}
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-100">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
};
