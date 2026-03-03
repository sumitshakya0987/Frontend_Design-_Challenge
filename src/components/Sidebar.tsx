import React from 'react';
import {
    LayoutDashboard,
    FolderKanban,
    Zap,
    Calendar,
    Bell,
    Settings,
    LifeBuoy,
    X,
    Sun,
    Moon,
    Menu,
    ChevronRight,
    LogOut
} from 'lucide-react';
import { cn } from './ui';
import { useLocation, useNavigate } from 'react-router-dom';
import { useToasts } from '../context/ToastContext';
import { useTheme } from '../context/ThemeContext';

const Sidebar: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = React.useState(true);
    const location = useLocation();
    const navigate = useNavigate();
    const { showToast } = useToasts();

    const menuItems = [
        { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
        { icon: FolderKanban, label: 'Projects', path: '/projects' },
        { icon: Zap, label: 'Scans', path: '/scans' },
        { icon: Calendar, label: 'Schedule', path: '/schedule' },
    ];

    const secondaryItems = [
        { icon: Bell, label: 'Notifications', path: '/notifications' },
        { icon: Settings, label: 'Settings', path: '/settings' },
        { icon: LifeBuoy, label: 'Support', path: '/support' },
    ];

    return (
        <>
            {/* Mobile Menu Toggle */}
            <button
                className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            <div className={cn(
                "fixed inset-y-0 left-0 z-40 w-64 bg-white dark:bg-[#0F0F0F] border-r border-gray-100 dark:border-gray-800 transition-transform duration-300 lg:translate-x-0",
                isOpen ? "translate-x-0" : "-translate-x-full"
            )}>
                <div className="flex flex-col h-full p-6">
                    {/* Logo */}
                    <div className="flex items-center gap-3 mb-10 pl-2">
                        <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-white" />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">Challenge</span>
                    </div>

                    {/* Primary Nav */}
                    <nav className="flex-1 space-y-2">
                        {menuItems.map((item) => (
                            <button
                                key={item.label}
                                onClick={() => navigate(item.path)}
                                className={cn(
                                    "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all group",
                                    location.pathname === item.path
                                        ? "bg-primary/10 text-primary"
                                        : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5"
                                )}
                            >
                                <item.icon className={cn("w-5 h-5", location.pathname === item.path ? "text-primary" : "text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white")} />
                                <span className="text-sm font-medium">{item.label}</span>
                            </button>
                        ))}

                        <div className="pt-8 pb-4">
                            <div className="px-3 text-[10px] font-bold text-gray-400 dark:text-gray-600 uppercase tracking-widest mb-4">Support</div>
                            <div className="space-y-2">
                                {secondaryItems.map((item) => (
                                    <button
                                        key={item.label}
                                        onClick={() => navigate(item.path)}
                                        className={cn(
                                            "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all group",
                                            location.pathname === item.path
                                                ? "bg-primary/10 text-primary"
                                                : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5"
                                        )}
                                    >
                                        <item.icon className="w-5 h-5 text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                                        <span className="text-sm font-medium">{item.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </nav>

                    {/* Theme Toggle & User Profile */}
                    <div className="mt-auto space-y-4 pt-6 border-t border-gray-100 dark:border-gray-800">
                        <button
                            onClick={toggleTheme}
                            className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-all group"
                        >
                            <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400 group-hover:text-primary transition-colors">
                                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                            </div>
                            <div className="flex-1 text-left">
                                <p className="text-xs font-bold text-gray-900 dark:text-white">{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</p>
                                <p className="text-[10px] text-gray-500 dark:text-gray-400">Switch theme</p>
                            </div>
                        </button>

                        <button
                            onClick={() => {
                                showToast('Signed out successfully', 'success');
                                navigate('/signup');
                            }}
                            className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-red-50 dark:hover:bg-red-900/10 text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-all group"
                        >
                            <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover:bg-red-100 dark:group-hover:bg-red-900/20 transition-colors">
                                <LogOut className="w-5 h-5" />
                            </div>
                            <div className="flex-1 text-left">
                                <p className="text-xs font-bold">Sign Out</p>
                                <p className="text-[10px] opacity-70">End your session</p>
                            </div>
                        </button>

                        <button className="w-full flex items-center gap-3 p-2 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-all group">
                            <div className="w-10 h-10 rounded-full bg-yellow-400 overflow-hidden border-2 border-white dark:border-gray-800 shadow-sm">
                                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" />
                            </div>
                            <div className="flex-1 text-left">
                                <p className="text-xs font-bold text-gray-900 dark:text-white">admin@edu.com</p>
                                <p className="text-[10px] text-gray-500 dark:text-gray-400">Security Lead</p>
                            </div>
                            <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
