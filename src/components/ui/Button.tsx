import React from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'electric' | 'ocean';
  size?: 'sm' | 'md' | 'lg';
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  asAnchor?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = 'primary',
      size = 'md',
      iconLeft,
      iconRight,
      asAnchor = false,
      href,
      target,
      rel,
      disabled,
      ...props
    },
    ref
  ) => {
    const paddingClasses = {
      sm: 'px-3 py-1.5',
      md: 'px-4 py-2',
      lg: 'px-5 py-2.5',
    };

    const sizeTextClasses = {
      sm: 'text-xs gap-1.5 rounded-lg',
      md: 'text-xs sm:text-sm gap-2 rounded-xl',
      lg: 'text-sm sm:text-base gap-2.5 rounded-xl',
    };

    const baseClasses =
      'inline-flex items-center justify-center text-center font-semibold select-none transition-[transform,background-color,border-color,box-shadow,color] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#090D16] active:scale-[0.96] disabled:opacity-40 disabled:pointer-events-none disabled:active:scale-100 cursor-pointer';

    const variants = {
      primary:
        'bg-sky-600 hover:bg-sky-500 text-white dark:bg-sky-400 dark:hover:bg-sky-300 dark:text-slate-950 font-bold shadow-md hover:shadow-lg dark:shadow-[0_0_20px_rgba(56,189,248,0.3)] dark:hover:shadow-[0_0_28px_rgba(56,189,248,0.45)] border border-sky-500 dark:border-sky-300',
      secondary:
        'bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 dark:bg-white/[0.06] dark:hover:bg-white/[0.1] dark:text-slate-200 dark:border-white/[0.1] dark:hover:border-white/[0.2] shadow-2xs',
      outline:
        'bg-transparent hover:bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-300 dark:hover:bg-white/[0.06] dark:text-slate-300 dark:hover:text-white dark:border-white/[0.15] dark:hover:border-white/[0.3]',
      ghost:
        'bg-transparent hover:bg-slate-100 text-slate-600 hover:text-slate-900 dark:hover:bg-white/[0.06] dark:text-slate-400 dark:hover:text-slate-100',
      ocean:
        'bg-sky-50 hover:bg-sky-100 text-sky-700 border border-sky-200 dark:bg-sky-500/10 dark:hover:bg-sky-500/20 dark:text-sky-300 dark:border-sky-500/30 dark:hover:border-sky-500/50 shadow-2xs',
      electric:
        'bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 dark:bg-indigo-500/10 dark:hover:bg-indigo-500/20 dark:text-indigo-300 dark:border-indigo-500/30 dark:hover:border-indigo-500/50 shadow-2xs',
    };

    const classes = cn(
      baseClasses,
      sizeTextClasses[size],
      paddingClasses[size],
      variants[variant],
      className
    );

    if (asAnchor && href) {
      return (
        <a
          href={href}
          target={target}
          rel={rel}
          className={classes}
        >
          {iconLeft && <span className="shrink-0 inline-flex items-center justify-center">{iconLeft}</span>}
          <span className="text-center">{children}</span>
          {iconRight && <span className="shrink-0 inline-flex items-center justify-center">{iconRight}</span>}
        </a>
      );
    }

    return (
      <button
        ref={ref}
        type="button"
        disabled={disabled}
        className={classes}
        {...props}
      >
        {iconLeft && <span className="shrink-0 inline-flex items-center justify-center">{iconLeft}</span>}
        <span className="text-center">{children}</span>
        {iconRight && <span className="shrink-0 inline-flex items-center justify-center">{iconRight}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';
