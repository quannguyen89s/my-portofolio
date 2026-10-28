import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';

interface ToastProps {
  isOpen: boolean;
  message: string;
  type?: 'success' | 'info' | 'error';
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({
  isOpen,
  message,
  type = 'success',
  onClose,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 15, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-white dark:bg-[#0F1626] border border-slate-200 dark:border-white/[0.12] text-slate-900 dark:text-white px-4 py-3 rounded-xl shadow-xl dark:shadow-card-elevated"
          role="status"
          aria-live="polite"
        >
          {type === 'success' ? (
            <CheckCircle2 className="w-5 h-5 text-emerald-500 dark:text-emerald-400 shrink-0" />
          ) : (
            <AlertCircle className="w-5 h-5 text-sky-500 dark:text-sky-400 shrink-0" />
          )}
          <span className="text-sm font-medium pr-2 text-slate-800 dark:text-slate-100">{message}</span>
          <button
            onClick={onClose}
            aria-label="Close notification"
            className="text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors p-1 rounded focus:outline-none focus-visible:ring-1 focus-visible:ring-sky-400 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
