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
    const baseClasses =
      'inline-flex items-center justify-center font-medium transition-all duration-200 select-none rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

    const variants = {
      primary:
        'bg-sky-600 hover:bg-sky-700 text-white font-semibold shadow-[0_4px_14px_0_rgba(2,132,199,0.28)] hover:shadow-[0_6px_20px_0_rgba(2,132,199,0.38)] border border-sky-600',
      ocean:
        'bg-sky-50 hover:bg-sky-100 text-sky-700 border border-sky-200 hover:border-sky-300',
      electric:
        'bg-sky-50 hover:bg-sky-100 text-sky-700 border border-sky-200 hover:border-sky-300',
      secondary:
        'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 hover:border-slate-300 shadow-xs',
      outline:
        'bg-transparent hover:bg-slate-100 text-slate-700 border border-slate-300',
      ghost:
        'bg-transparent hover:bg-slate-100 text-slate-600 hover:text-slate-900',
    };

    const sizes = {
      sm: 'text-xs px-3.5 py-1.5 gap-1.5',
      md: 'text-sm px-4 py-2 gap-2',
      lg: 'text-base px-6 py-3 gap-2.5',
    };

    const classes = cn(baseClasses, variants[variant], sizes[size], className);

    if (asAnchor && href) {
      return (
        <a
          href={href}
          target={target}
          rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
          className={classes}
        >
          {iconLeft && <span className="inline-flex shrink-0">{iconLeft}</span>}
          <span>{children}</span>
          {iconRight && <span className="inline-flex shrink-0">{iconRight}</span>}
        </a>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={classes}
        {...props}
      >
        {iconLeft && <span className="inline-flex shrink-0">{iconLeft}</span>}
        <span>{children}</span>
        {iconRight && <span className="inline-flex shrink-0">{iconRight}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';
