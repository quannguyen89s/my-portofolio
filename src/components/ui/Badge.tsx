import React from 'react';
import { cn } from '../../utils/cn';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: 'default' | 'electric' | 'outline' | 'success' | 'surface';
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
    default: 'bg-white/[0.06] text-slate-300 border border-white/[0.08]',
    electric: 'bg-sky-500/10 text-sky-400 border border-sky-500/25 shadow-glow-sm',
    outline: 'bg-transparent text-slate-400 border border-slate-700/60 hover:border-slate-500',
    success: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/25',
    surface: 'bg-[#151D30] text-slate-300 border border-white/[0.08]',
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
            variant === 'electric'
              ? 'bg-sky-400 shadow-[0_0_8px_#38bdf8]'
              : variant === 'success'
              ? 'bg-emerald-400 shadow-[0_0_8px_#34d399]'
              : 'bg-slate-400'
          )}
        />
      )}
      {children}
    </span>
  );
};
