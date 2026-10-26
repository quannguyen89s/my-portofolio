import React from 'react';
import { cn } from '../../utils/cn';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: 'default' | 'electric' | 'ocean' | 'outline' | 'success' | 'surface';
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
    default: 'bg-slate-100 text-slate-700 border border-slate-200/80',
    electric: 'bg-sky-50 text-sky-700 border border-sky-200 font-medium',
    ocean: 'bg-sky-50 text-sky-700 border border-sky-200 font-medium',
    outline: 'bg-transparent text-slate-600 border border-slate-200 hover:border-slate-400',
    success: 'bg-emerald-50 text-emerald-700 border border-emerald-200 font-medium',
    surface: 'bg-white text-slate-700 border border-slate-200 shadow-xs',
  };

  const sizes = {
    sm: 'text-xs px-2.5 py-0.5 rounded-full',
    md: 'text-xs font-medium px-3 py-1 rounded-full',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 transition-colors tracking-wide',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {dot && (
        <span
          className={cn(
            'w-1.5 h-1.5 rounded-full',
            variant === 'electric' || variant === 'ocean'
              ? 'bg-sky-600'
              : variant === 'success'
              ? 'bg-emerald-500'
              : 'bg-slate-400'
          )}
        />
      )}
      {children}
    </span>
  );
};
