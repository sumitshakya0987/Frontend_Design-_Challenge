import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'outline';
    size?: 'sm' | 'md' | 'lg' | 'icon';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
        const variants = {
            primary: 'bg-primary text-white hover:bg-primary-dark shadow-sm',
            secondary: 'bg-white/10 text-white hover:bg-white/20 dark:bg-white/5 dark:hover:bg-white/10',
            ghost: 'bg-transparent hover:bg-black/5 dark:hover:bg-white/5',
            danger: 'bg-severity-critical text-white hover:bg-red-600',
            outline: 'border border-gray-300 dark:border-gray-700 bg-transparent hover:bg-black/5 dark:hover:bg-white/5',
        };

        const sizes = {
            sm: 'px-3 py-1.5 text-xs',
            md: 'px-4 py-2 text-sm',
            lg: 'px-6 py-3 text-base',
            icon: 'p-2',
        };

        return (
            <button
                ref={ref}
                className={cn(
                    'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:pointer-events-none',
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            />
        );
    }
);

interface BadgeProps {
    children: React.ReactNode;
    variant?: 'critical' | 'high' | 'medium' | 'low' | 'neutral';
    className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'neutral', className }) => {
    const variants = {
        critical: 'bg-severity-critical/20 text-severity-critical border-severity-critical/30',
        high: 'bg-severity-high/20 text-severity-high border-severity-high/30',
        medium: 'bg-severity-medium/20 text-severity-medium border-severity-medium/30',
        low: 'bg-severity-low/20 text-severity-low border-severity-low/30',
        neutral: 'bg-gray-500/10 text-gray-500 border-gray-500/20',
    };

    return (
        <div className={cn('px-2 py-0.5 rounded text-[10px] font-bold uppercase border tracking-wider', variants[variant], className)}>
            {children}
        </div>
    );
};

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className }) => {
    return (
        <div className={cn('bg-background-card-light dark:bg-background-card-dark border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-sm', className)}>
            {children}
        </div>
    );
};
