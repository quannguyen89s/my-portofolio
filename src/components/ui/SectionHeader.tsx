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
        'mb-10 md:mb-12',
        alignment === 'center' ? 'text-center mx-auto max-w-2xl' : 'flex flex-col md:flex-row md:items-end md:justify-between gap-4',
        className
      )}
    >
      <div className={alignment === 'center' ? '' : 'max-w-xl'}>
        <div className={cn('flex items-center gap-2 mb-2.5', alignment === 'center' && 'justify-center')}>
          {number && (
            <span className="font-mono text-xs text-sky-600 font-semibold tracking-wider">
              {number}
            </span>
          )}
          {badge && (
            <span className="inline-flex items-center text-xs font-mono font-medium px-2.5 py-0.5 rounded-full bg-sky-50 text-sky-700 border border-sky-200">
              {badge}
            </span>
          )}
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-normal">
            {subtitle}
          </p>
        )}
      </div>

      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
};
