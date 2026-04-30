import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, AlertCircle, Info } from 'lucide-react';

const toastTypes = {
  success: {
    icon: <CheckCircle className="w-5 h-5 text-green-400" />,
    border: 'border-green-500/20',
    bg: 'bg-green-500/10'
  },
  error: {
    icon: <AlertCircle className="w-5 h-5 text-red-400" />,
    border: 'border-red-500/20',
    bg: 'bg-red-500/10'
  },
  info: {
    icon: <Info className="w-5 h-5 text-blue-400" />,
    border: 'border-blue-500/20',
    bg: 'bg-blue-500/10'
  }
};

export default function Toast({ message, type = 'info', onClose, duration = 5000 }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  const style = toastTypes[type] || toastTypes.info;

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 100, opacity: 0 }}
      className={`flex items-center gap-3 p-4 rounded-xl border ${style.border} ${style.bg} backdrop-blur-md shadow-2xl pointer-events-auto min-w-[300px] max-w-md`}
    >
      <div className="flex-shrink-0">{style.icon}</div>
      <div className="flex-grow text-sm font-medium text-white/90">{message}</div>
      <button 
        onClick={onClose}
        className="flex-shrink-0 p-1 rounded-lg hover:bg-white/10 transition-colors"
        aria-label="Close"
      >
        <X className="w-4 h-4 text-white/50" />
      </button>
    </motion.div>
  );
}

export function ToastContainer({ toasts, removeToast }) {
  return (
    <div className="fixed bottom-6 right-6 z-[10000] flex flex-col gap-3 pointer-events-none md:bottom-auto md:top-24">
      <AnimatePresence>
        {toasts.map((toast) => (
          <Toast 
            key={toast.id} 
            {...toast} 
            onClose={() => removeToast(toast.id)} 
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
