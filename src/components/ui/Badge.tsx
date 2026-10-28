import React from 'react';
import { cn } from '../../utils/cn';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: 'default' | 'electric' | 'ocean' | 'outline' | 'success' | 'surface' | 'neutral';
  size?: 'sm' | 'md';
  dot?: boolean;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  dot = false,
  className,
  ...props
}) => {
  const variants = {
    default: 'bg-slate-100 text-slate-700 border border-slate-200 dark:bg-white/[0.05] dark:text-slate-300 dark:border-white/[0.08]',
    electric: 'bg-indigo-50 text-indigo-700 border border-indigo-200 dark:bg-indigo-500/10 dark:text-indigo-300 dark:border-indigo-500/25',
    ocean: 'bg-sky-50 text-sky-700 border border-sky-200 dark:bg-sky-500/10 dark:text-sky-300 dark:border-sky-500/25',
    outline: 'bg-transparent text-slate-700 border border-slate-300 dark:text-slate-300 dark:border-white/[0.15] dark:hover:border-white/[0.25]',
    success: 'bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-300 dark:border-emerald-500/25',
    surface: 'bg-white text-slate-800 border border-slate-200 shadow-2xs dark:bg-white/[0.04] dark:text-slate-200 dark:border-white/[0.08]',
    neutral: 'bg-slate-50 text-slate-600 border border-slate-200 dark:bg-white/[0.03] dark:text-slate-400 dark:border-white/[0.06]',
  };

  const sizes = {
    sm: 'text-[11px] px-2.5 py-0.5 rounded-full font-mono tabular-nums',
    md: 'text-xs px-3 py-1 rounded-full font-mono tabular-nums',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 transition-colors whitespace-nowrap select-none font-medium',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {dot && (
        <span
          className={cn(
            'w-1.5 h-1.5 rounded-full shrink-0',
            variant === 'electric'
              ? 'bg-indigo-400'
              : variant === 'ocean'
              ? 'bg-sky-400'
              : variant === 'success'
              ? 'bg-emerald-400'
              : 'bg-slate-500'
          )}
        />
      )}
      <span>{children}</span>
    </span>
  );
};
