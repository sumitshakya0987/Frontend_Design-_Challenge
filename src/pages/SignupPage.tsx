import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Button, Card, cn } from '../components/ui';
import { Check, Apple, Chrome, Facebook, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToasts } from '../context/ToastContext';
import { useState } from 'react';

const SignupPage: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
    const navigate = useNavigate();
    const { showToast } = useToasts();
    const [showPassword, setShowPassword] = useState(false);

    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault();
        showToast('Account created successfully!', 'success');
        setTimeout(() => navigate('/dashboard'), 800);
    };

    const handleSocialLogin = (platform: string) => {
        showToast(`Redirecting to ${platform}...`, 'info');
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-background-light dark:bg-background-dark overflow-hidden font-sans transition-colors duration-300">
            {/* Left Side - Marketing & Features */}
            <div className="w-full md:w-1/2 relative flex items-center justify-center p-8 md:p-16 overflow-hidden">
                {/* Animated Background Gradients */}
                <div className="absolute inset-0 bg-black">
                    <div className="absolute top-1/4 -left-1/4 w-full h-full bg-primary/20 blur-[120px] rounded-full animate-pulse" />
                    <div className="absolute bottom-1/4 -right-1/4 w-full h-full bg-orange-500/10 blur-[120px] rounded-full animate-pulse delay-700" />
                </div>

                <div className="relative z-10 max-w-md w-full text-white">
                    <div className="flex items-center gap-2 mb-12">
                        <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-white" />
                        </div>
                        <span className="text-xl font-bold tracking-tight">Frontend Challenge</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
                        Expert level <span className="text-white">Cybersecurity</span><br />
                        in <span className="text-primary">hours</span> not weeks.
                    </h1>

                    <div className="space-y-6">
                        <p className="text-gray-400 font-medium text-lg">What's included</p>
                        <ul className="space-y-6">
                            {[
                                "Effortlessly spider and map targets to uncover hidden security flaws",
                                "Deliver high-quality, validated findings in hours, not weeks.",
                                "Generate professional, enterprise-grade security reports automatically."
                            ].map((text, i) => (
                                <li key={i} className="flex gap-4">
                                    <div className="mt-1 w-5 h-5 rounded bg-primary/20 flex items-center justify-center shrink-0">
                                        <Check className="w-3.5 h-3.5 text-primary" strokeWidth={3} />
                                    </div>
                                    <p className="text-gray-300 text-sm leading-relaxed">{text}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-16 flex items-center gap-2">
                        <div className="flex text-primary">
                            <span className="text-primary text-xl">★</span>
                            <span className="ml-1 text-sm font-semibold text-white">Trustpilot</span>
                        </div>
                    </div>
                    <p className="mt-2 text-gray-400 text-sm font-medium">
                        Rated <span className="text-white">4.5/5.0</span> (100k+ reviews)
                    </p>
                </div>
            </div>

            {/* Right Side - Signup Form */}
            <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-12 bg-gray-50 dark:bg-[#0A0A0A]">
                <Card className="w-full max-w-115 p-8 md:p-10 bg-white dark:bg-[#1A1A1A] border-none shadow-2xl rounded-2xl">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Sign up</h2>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">
                            Already have an account? <span onClick={() => showToast('Login screen coming soon!', 'info')} className="text-primary font-semibold cursor-pointer border-b border-primary/30">Log in</span>
                        </p>
                    </div>

                    <form onSubmit={handleSignup} className="space-y-5">
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="First name*"
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black text-gray-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm transition-all"
                                required
                            />
                            <input
                                type="text"
                                placeholder="Last name*"
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black text-gray-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm transition-all"
                                required
                            />
                        </div>

                        <input
                            type="email"
                            placeholder="Email address*"
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black text-gray-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm transition-all"
                            required
                        />

                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password (8+ characters)*"
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black text-gray-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm transition-all"
                                required
                            />
                            <button
                                type="button"
                                className="absolute right-4 top-3.5"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                <Eye className={cn("w-4 h-4 transition-colors", showPassword ? "text-primary" : "text-gray-400")} />
                            </button>
                        </div>

                        <div className="flex items-start gap-3 py-2">
                            <input type="checkbox" id="terms" className="mt-1 w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary" required />
                            <label htmlFor="terms" className="text-xs text-gray-500 dark:text-gray-400 leading-normal">
                                I agree to Aps's <span onClick={() => showToast('Terms & Conditions opened', 'info')} className="text-gray-900 dark:text-white font-medium underline cursor-pointer">Terms & Conditions</span> and acknowledge the <span onClick={() => showToast('Privacy Policy opened', 'info')} className="text-gray-900 dark:text-white font-medium underline cursor-pointer">Privacy Policy</span>
                            </label>
                        </div>

                        <Button type="submit" className="w-full py-3.5 text-sm font-semibold tracking-wide" size="lg">
                            Create account
                        </Button>
                    </form>

                    <div className="mt-10 flex gap-4">
                        <button onClick={() => handleSocialLogin('Apple')} className="flex-1 flex items-center justify-center p-3 rounded-xl border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-white/5 transition-all">
                            <Apple className="w-5 h-5 text-gray-900 dark:text-white" />
                        </button>
                        <button onClick={() => handleSocialLogin('Google')} className="flex-1 flex items-center justify-center p-3 rounded-xl border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-white/5 transition-all">
                            <Chrome className="w-5 h-5 text-gray-900 dark:text-white" />
                        </button>
                        <button onClick={() => handleSocialLogin('Facebook')} className="flex-1 flex items-center justify-center p-3 rounded-xl border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-white/5 transition-all">
                            <Facebook className="w-5 h-5 text-blue-600" />
                        </button>
                    </div>
                </Card>
            </div>

            <button
                onClick={toggleTheme}
                className="fixed bottom-6 right-6 p-3 rounded-full bg-white dark:bg-gray-800 shadow-xl border border-gray-200 dark:border-gray-700 z-50 transition-transform active:scale-95"
            >
                {theme === 'dark' ? '🌞' : '🌙'}
            </button>
        </div>
    );
};

export default SignupPage;
