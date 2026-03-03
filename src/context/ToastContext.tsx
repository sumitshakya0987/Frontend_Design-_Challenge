import React, { createContext, useContext, useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';
import { cn } from '../components/ui';

type ToastType = 'success' | 'error' | 'info';

interface Toast {
    id: string;
    message: string;
    type: ToastType;
}

interface ToastContextType {
    showToast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const showToast = useCallback((message: string, type: ToastType = 'success') => {
        const id = Math.random().toString(36).substring(2, 9);
        setToasts((prev) => [...prev, { id, message, type }]);
        setTimeout(() => {
            setToasts((prev) => prev.filter((t) => t.id !== id));
        }, 3000);
    }, []);

    const removeToast = (id: string) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    };

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            <div className="fixed top-6 left-1/2 -translate-x-1/2 z-100 flex flex-col gap-3 pointer-events-none w-full max-w-md items-center">
                <AnimatePresence>
                    {toasts.map((toast) => (
                        <motion.div
                            key={toast.id}
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                            className={cn(
                                "pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.2)] border min-w-85 backdrop-blur-md transition-all",
                                toast.type === 'success' && "bg-white/95 dark:bg-[#0F0F0F]/95 border-primary/30 text-primary",
                                toast.type === 'error' && "bg-white/95 dark:bg-[#0F0F0F]/95 border-red-500/30 text-red-500",
                                toast.type === 'info' && "bg-white/95 dark:bg-[#0F0F0F]/95 border-blue-500/30 text-blue-500"
                            )}
                        >
                            {toast.type === 'success' && <CheckCircle2 className="w-5 h-5 shrink-0" />}
                            {toast.type === 'error' && <AlertCircle className="w-5 h-5 shrink-0" />}
                            {toast.type === 'info' && <Info className="w-5 h-5 shrink-0" />}

                            <p className="flex-1 text-sm font-medium dark:text-white/90">{toast.message}</p>

                            <button
                                onClick={() => removeToast(toast.id)}
                                className="p-1 hover:bg-gray-100 dark:hover:bg-white/10 rounded-md transition-colors"
                            >
                                <X className="w-4 h-4 opacity-50" />
                            </button>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </ToastContext.Provider>
    );
};

export const useToasts = () => {
    const context = useContext(ToastContext);
    if (!context) throw new Error('useToasts must be used within ToastProvider');
    return context;
};
