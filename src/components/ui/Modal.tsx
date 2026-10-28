import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  maxWidth?: 'md' | 'lg' | 'xl' | '2xl' | '4xl';
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  maxWidth = '4xl',
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const maxWClasses = {
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '4xl': 'max-w-4xl',
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto overscroll-contain"
          role="dialog"
          aria-modal="true"
          aria-labelledby={title ? 'modal-title' : undefined}
        >
          {/* Backdrop with soft dark blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 dark:bg-black/75 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 6 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className={`relative w-full ${maxWClasses[maxWidth]} bg-white dark:bg-[#0F1626] border border-slate-200 dark:border-white/[0.12] rounded-2xl shadow-card-elevated overflow-hidden my-auto z-10 max-h-[92vh] flex flex-col`}
          >
            {/* Header bar */}
            <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-slate-200/90 dark:border-white/[0.08] bg-slate-50/80 dark:bg-white/[0.02]">
              {title ? (
                <h3
                  id="modal-title"
                  className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2.5 tracking-tight"
                >
                  <span className="w-2 h-2 rounded-full bg-sky-500 dark:bg-sky-400 shrink-0 shadow-[0_0_8px_rgba(56,189,248,0.6)]" />
                  <span className="line-clamp-1">{title}</span>
                </h3>
              ) : (
                <div />
              )}
              <button
                onClick={onClose}
                aria-label="Close dialog"
                className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white p-1.5 rounded-lg hover:bg-slate-200/60 dark:hover:bg-white/[0.08] active:scale-[0.96] transition-[transform,background-color,color] duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 cursor-pointer shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content area with internal scroll and overscroll-contain */}
            <div className="p-5 sm:p-7 overflow-y-auto overscroll-contain space-y-6 text-slate-700 dark:text-slate-300">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
