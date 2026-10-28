import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ 
  className = '',
  showLabel = false 
}) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`group relative inline-flex items-center gap-2 p-2 rounded-xl transition-all duration-200 active:scale-95 cursor-pointer select-none ${
        isDark
          ? 'bg-white/[0.05] hover:bg-white/[0.1] text-amber-300 border border-white/[0.1] hover:border-amber-400/40 shadow-2xs'
          : 'bg-white hover:bg-slate-100 text-sky-700 border border-slate-200 hover:border-sky-300 shadow-2xs'
      } ${className}`}
      aria-label={isDark ? 'Switch to Light mode' : 'Switch to Dark mode'}
      title={isDark ? 'Switch to Light mode' : 'Switch to Dark mode'}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.div
              key="sun"
              initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: 90, scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="flex items-center justify-center"
            >
              <Sun className="w-4 h-4 text-amber-300 drop-shadow-[0_0_8px_rgba(252,211,77,0.6)]" />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              initial={{ rotate: 90, scale: 0.5, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: -90, scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="flex items-center justify-center"
            >
              <Moon className="w-4 h-4 text-slate-800" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {showLabel && (
        <span className="text-xs font-semibold font-mono tracking-tight">
          {isDark ? 'Dark Mode' : 'Light Mode'}
        </span>
      )}
    </button>
  );
};
