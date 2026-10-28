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
        'mb-10 sm:mb-12',
        alignment === 'center'
          ? 'text-center mx-auto max-w-2xl'
          : 'flex flex-col md:flex-row md:items-end md:justify-between gap-5',
        className
      )}
    >
      <div className={alignment === 'center' ? '' : 'max-w-xl'}>
        <div
          className={cn(
            'flex items-center gap-2 mb-3',
            alignment === 'center' && 'justify-center'
          )}
        >
          {badge && (
            <span className="inline-flex items-center text-[11px] font-mono font-semibold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-sky-50 text-sky-700 border border-sky-200 dark:bg-sky-500/10 dark:text-sky-300 dark:border-sky-500/20 shadow-2xs">
              {badge}
            </span>
          )}
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.18] text-balance">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2.5 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed text-pretty">
            {subtitle}
          </p>
        )}
      </div>

      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
};
