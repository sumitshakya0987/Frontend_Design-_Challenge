import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import {
    Download,
    Square,
    Search,
    Clock,
    Globe,
    ShieldCheck,
    FileText,
    CheckCircle2,
    ChevronDown,
    X,
    Play
} from 'lucide-react';
import { Card, Badge, Button, cn } from '../components/ui';
import { useToasts } from '../context/ToastContext';

const ScanDetailPage: React.FC = () => {
    const { showToast } = useToasts();
    const [activeTab, setActiveTab] = useState<'activity' | 'verification'>('activity');

    const steps = [
        { name: 'Spidering', status: 'completed' },
        { name: 'Mapping', status: 'completed' },
        { name: 'Testing', status: 'active' },
        { name: 'Validating', status: 'pending' },
        { name: 'Reporting', status: 'pending' },
    ];

    const logs = [
        { time: '[09:00:00]', content: "I'll begin a systematic penetration test on <span class='text-primary'>helpdesk.democorp.com</span>. Let me start with reconnaissance and enumeration." },
        { time: '[09:01:00]', content: "Good! target is online. Now let me perform port scanning to identify running services." },
        { time: '[09:02:00]', content: "Excellent reconnaissance results:<br/>  | - helpdesk.democorp.com: Apache httpd 2.4.65 on port 80 (web server)<br/>Let me probe the web server on target first to understand its structure." },
        { time: '[09:03:00]', content: "Great! I found a login page for a Help Desk Platform. I can see a useful comment: <span class='text-primary'>\"TODO: Delete the testing account (test:test)\"</span>. Let me test this credential. The login redirects to <span class='bg-gray-800 px-1 rounded'>/password/test</span>. Let me follow that path and explore it." },
        { time: '[09:04:00]', content: "The POST method is not allowed on /password/test. Let me check what the JavaScript does - it posts to <span class='text-primary'>'#'</span> which means the current page. Let me try a different approach." },
        { time: '[09:05:00]', content: "It redirects back to /password/test. Let me check if there's an /api endpoint or look for other paths. Let me also try exploring with the <span class='text-primary'>test:test</span> password directly on other endpoints." },
        { time: '[09:06:00]', content: "Great! I can access the dashboard using the <span class='text-primary'>'X-UserId: 10032'</span> header. The dashboard shows \"Welcome, John Doe\". This suggests an <span class='text-severity-critical font-bold'>**IDOR vulnerability**</span> - I can access any user's dashboard by just changing the X-UserId header. Let me explore more of the application..." },
    ];

    const findings = [
        { severity: 'critical', time: '10:45:23', title: 'SQL Injection in Authentication Endpoint', path: '/api/users/profile', desc: 'Time-based blind SQL injection confirmed on user-controlled input during authentication flow. Exploitation allows database-level access.' },
        { severity: 'high', time: '10:45:23', title: 'Unauthorized Access to User Metadata', path: '/api/auth/login', desc: 'Authenticated low-privilege user was able to access metadata of other users. Access control checks were missing.' },
        { severity: 'medium', time: '10:45:23', title: 'Broken Authentication Rate Limiting', path: '/api/search', desc: 'No effective rate limiting detected on login attempts. Automated brute-force attempts possible.' },
    ];

    return (
        <div className="flex min-h-screen bg-gray-50 dark:bg-[#0A0A0A] font-sans">
            <Sidebar />

            <main className="flex-1 lg:ml-64 p-4 md:p-8 overflow-x-hidden transition-all duration-300">
                {/* Header toolbar */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <span>Scan</span>
                        <span>/</span>
                        <div className="w-5 h-5 rounded-md bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                            <div className="w-2.5 h-2.5 border-2 border-gray-400 dark:border-gray-500 rounded-[1px]" />
                        </div>
                        <span>/ Private Assets /</span>
                        <span className="text-primary font-medium">New Scan</span>
                    </div>

                    <div className="flex items-center gap-3 w-full md:w-auto">
                        <Button
                            variant="outline"
                            size="sm"
                            className="gap-2 bg-white dark:bg-[#1A1A1A]"
                            onClick={() => showToast('Preparing enterprise PDF report...', 'info')}
                        >
                            <Download className="w-4 h-4" /> Export Report
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            className="gap-2 text-red-500 border-red-200 dark:border-red-900/30 hover:bg-red-50 dark:hover:bg-red-900/10 bg-white dark:bg-[#1A1A1A]"
                            onClick={() => showToast('Stopping all sub-agents and closing connections...', 'error')}
                        >
                            <Square className="w-3 h-3 fill-current" /> Stop Scan
                        </Button>
                    </div>
                </div>

                {/* Progress & Header */}
                <Card className="mb-6 bg-white dark:bg-[#111111] p-8 border-none shadow-sm relative overflow-hidden">
                    {/* Decorative background element */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl rounded-full -mr-32 -mt-32" />

                    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 relative z-10">
                        {/* Circular Progress */}
                        <div className="relative w-36 h-36 flex items-center justify-center">
                            <svg
                                viewBox="0 0 144 144"
                                className="w-full h-full -rotate-90 overflow-visible drop-shadow-[0_0_12px_rgba(12,200,168,0.2)]"
                            >
                                <defs>
                                    <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#0CC8A8" />
                                        <stop offset="100%" stopColor="#08A88B" />
                                    </linearGradient>
                                </defs>
                                <circle
                                    cx="72" cy="72" r="58"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="10"
                                    className="text-gray-100 dark:text-[#1A1A1A]"
                                />
                                <circle
                                    cx="72" cy="72" r="58"
                                    fill="none"
                                    stroke="url(#progressGradient)"
                                    strokeWidth="10"
                                    strokeDasharray="364.4"
                                    strokeDashoffset="364.4" 
                                    strokeLinecap="round"
                                    className="transition-all duration-1000 ease-out"
                                />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <span className="text-3xl font-bold tracking-tighter text-gray-900 dark:text-white">0%</span>
                                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-0.5">In Progress</span>
                            </div>
                        </div>

                        {/* Vertical Divider */}
                        <div className="hidden lg:block w-px h-24 bg-gray-100 dark:bg-gray-800" />

                        {/* Stepper */}
                        <div className="flex-1 w-full">
                            <div className="flex justify-between relative mb-12">
                                {/* Connector Line */}
                                <div className="absolute top-5 left-0 right-0 h-0.5 bg-gray-100 dark:bg-gray-800 z-0" />

                                {steps.map((step, i) => (
                                    <div key={step.name} className="flex flex-col items-center gap-3 relative z-10">
                                        <div className={cn(
                                            "w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all shadow-[0_0_15px_rgba(12,200,168,0.2)]",
                                            step.status === 'completed' ? "bg-primary border-primary text-white" :
                                                step.status === 'active' ? "bg-white dark:bg-[#111111] border-primary text-primary" :
                                                    "bg-white dark:bg-[#111111] border-gray-200 dark:border-gray-800 text-gray-300"
                                        )}>
                                            {i === 0 && <Search className="w-5 h-5" />}
                                            {i === 1 && <Globe className="w-5 h-5" />}
                                            {i === 2 && <ShieldCheck className="w-5 h-5" />}
                                            {i === 3 && <CheckCircle2 className="w-5 h-5" />}
                                            {i === 4 && <FileText className="w-5 h-5" />}
                                        </div>
                                        <span className={cn(
                                            "text-xs font-bold",
                                            step.status === 'active' || step.status === 'completed' ? "text-gray-900 dark:text-white" : "text-gray-400"
                                        )}>{step.name}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Metadata Row */}
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 pt-4 border-t border-gray-100 dark:border-gray-800">
                                <div>
                                    <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">Scan Type</p>
                                    <p className="text-sm font-bold text-gray-900 dark:text-white">Grey Box</p>
                                </div>
                                <div>
                                    <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">Targets</p>
                                    <p className="text-sm font-bold text-gray-900 dark:text-white">google.com</p>
                                </div>
                                <div>
                                    <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">Started At</p>
                                    <p className="text-sm font-bold text-gray-900 dark:text-white">Nov 22, 09:00AM</p>
                                </div>
                                <div>
                                    <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">Credentials</p>
                                    <p className="text-sm font-bold text-gray-900 dark:text-white">2 Active</p>
                                </div>
                                <div>
                                    <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">Files</p>
                                    <p className="text-sm font-bold text-gray-900 dark:text-white">Control.pdf</p>
                                </div>
                                <div>
                                    <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">Checklists</p>
                                    <p className="text-sm font-bold text-primary">40/350</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>

                {/* Lower Panels */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Console Card */}
                    <Card className="lg:col-span-2 border-none bg-white dark:bg-[#111111] flex flex-col min-h-125 shadow-sm">
                        <div className="p-4 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                <span className="text-sm font-bold text-gray-900 dark:text-white">Live Scan Console</span>
                                <Badge variant="neutral" className="bg-gray-100 dark:bg-gray-800 text-[10px] lowercase flex items-center gap-1">
                                    <Clock className="w-3 h-3" /> Running...
                                </Badge>
                            </div>
                            <div className="flex items-center gap-2">
                                <ChevronDown className="w-4 h-4 text-gray-400" />
                                <X className="w-4 h-4 text-gray-400" />
                            </div>
                        </div>

                        <div className="flex border-b border-gray-100 dark:border-gray-800">
                            <button
                                onClick={() => setActiveTab('activity')}
                                className={cn(
                                    "px-8 py-3 text-xs font-bold transition-all border-b-2",
                                    activeTab === 'activity' ? "border-primary text-primary" : "border-transparent text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                                )}
                            >
                                Activity Log
                            </button>
                            <button
                                onClick={() => setActiveTab('verification')}
                                className={cn(
                                    "px-8 py-3 text-xs font-bold transition-all border-b-2",
                                    activeTab === 'verification' ? "border-primary text-primary" : "border-transparent text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                                )}
                            >
                                Verification Loops
                            </button>
                        </div>

                        <div className="flex-1 p-6 font-mono text-sm leading-relaxed overflow-y-auto terminal-scrollbar bg-white dark:bg-[#111111]">
                            {activeTab === 'activity' ? (
                                <div className="space-y-4">
                                    {logs.map((log, i) => (
                                        <div key={i} className="flex gap-4">
                                            <span className="text-gray-300 dark:text-gray-600 shrink-0">{log.time}</span>
                                            <p className="text-gray-600 dark:text-gray-400" dangerouslySetInnerHTML={{ __html: log.content }} />
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="flex items-center justify-center h-full text-gray-400 flex-col gap-4">
                                    <Play className="w-12 h-12 text-primary/20" />
                                    <p className="text-sm font-medium">Scanning for verification loops...</p>
                                </div>
                            )}
                        </div>
                    </Card>

                    {/* Finding Log */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-between px-2">
                            <span className="text-sm font-bold text-gray-900 dark:text-white">Finding Log</span>
                        </div>

                        {findings.map((f, i) => (
                            <Card key={i} className="p-5 border border-gray-100 dark:border-gray-800 bg-white dark:bg-[#111111] hover:border-primary/30 transition-all shadow-none">
                                <div className="flex items-center justify-between mb-3">
                                    <Badge variant={f.severity as any} className="rounded-md">{f.severity}</Badge>
                                    <span className="text-[10px] font-mono text-gray-400">{f.time}</span>
                                </div>
                                <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-1">{f.title}</h4>
                                <p className="text-xs text-primary font-medium mb-3">{f.path}</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
                                    {f.desc}
                                </p>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Footer Status Bar */}
                <div className="mt-8 pt-4 border-t border-gray-100 dark:border-gray-800 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                            <span className="text-[10px] font-bold text-gray-400 uppercase">Sub-Agents: <span className="text-gray-900 dark:text-white">0</span></span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                            <span className="text-[10px] font-bold text-gray-400 uppercase">Parallel Executions: <span className="text-gray-900 dark:text-white">2</span></span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                            <span className="text-[10px] font-bold text-gray-400 uppercase">Operations: <span className="text-gray-900 dark:text-white">1</span></span>
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <span className="text-[10px] font-bold uppercase text-gray-400">Critical: <span className="text-severity-critical">0</span></span>
                        <span className="text-[10px] font-bold uppercase text-gray-400">High: <span className="text-severity-high">0</span></span>
                        <span className="text-[10px] font-bold uppercase text-gray-400">Medium: <span className="text-severity-medium">0</span></span>
                        <span className="text-[10px] font-bold uppercase text-gray-400">Low: <span className="text-severity-low">0</span></span>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ScanDetailPage;
