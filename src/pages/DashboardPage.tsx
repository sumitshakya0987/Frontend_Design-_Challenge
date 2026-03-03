import React from 'react';
import Sidebar from '../components/Sidebar';
import {
    Search,
    Filter,
    Columns,
    Plus,
    Download,
    Square,
    AlertCircle,
    ShieldAlert,
    AlertTriangle,
    Info,
    RefreshCcw,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';
import { Card, Badge, Button, cn } from '../components/ui';
import { useNavigate } from 'react-router-dom';
import { useToasts } from '../context/ToastContext';

const mockScans = [
    { id: 1, name: 'Web App Servers', type: 'Greybox', status: 'Completed', progress: 100, vulns: { c: 5, h: 12, m: 23, l: 18 }, lastScan: '4d ago' },
    { id: 2, name: 'Web App Servers', type: 'Greybox', status: 'Completed', progress: 100, vulns: { c: 5, h: 12, m: 23, l: 18 }, lastScan: '4d ago' },
    { id: 3, name: 'Web App Servers', type: 'Greybox', status: 'Completed', progress: 100, vulns: { c: 5, h: 12, m: 23, l: 18 }, lastScan: '4d ago' },
    { id: 4, name: 'Web App Servers', type: 'Greybox', status: 'Completed', progress: 100, vulns: { c: 5, h: 12, m: 23, l: 18 }, lastScan: '4d ago' },
    { id: 5, name: 'Web App Servers', type: 'Greybox', status: 'Completed', progress: 100, vulns: { c: 5, h: 12, m: 23, l: 18 }, lastScan: '4d ago' },
    { id: 6, name: 'Web App Servers', type: 'Greybox', status: 'Scheduled', progress: 100, vulns: { c: 5, h: 12, m: 0, l: 0 }, lastScan: '4d ago' },
    { id: 7, name: 'IoT Devices', type: 'Blackbox', status: 'Failed', progress: 10, vulns: { c: 2, h: 4, m: 8, l: 1 }, lastScan: '3d ago' },
    { id: 8, name: 'Temp Data', type: 'Blackbox', status: 'Failed', progress: 10, vulns: { c: 2, h: 4, m: 8, l: 1 }, lastScan: '3d ago' },
];

const DashboardPage: React.FC = () => {
    const navigate = useNavigate();
    const { showToast } = useToasts();

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
                            onClick={() => showToast('Exporting dashboard overview...', 'info')}
                        >
                            <Download className="w-4 h-4" /> Export Report
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            className="gap-2 text-red-500 border-red-200 dark:border-red-900/30 hover:bg-red-50 dark:hover:bg-red-900/10 bg-white dark:bg-[#1A1A1A]"
                            onClick={() => showToast('Stopping all active scans in current project...', 'error')}
                        >
                            <Square className="w-3 h-3 fill-current" /> Stop Scan
                        </Button>
                    </div>
                </div>

                {/* Project Context Bar */}
                <Card className="mb-6 border-none shadow-none bg-white dark:bg-[#111111] p-0 overflow-visible">
                    <div className="flex flex-wrap items-center gap-y-4 py-4 px-6 border-b border-gray-100 dark:border-gray-800">
                        <div className="flex items-center gap-2 pr-8 border-r border-gray-200 dark:border-gray-800">
                            <span className="text-xs text-gray-400">Org:</span>
                            <span className="text-xs font-bold text-gray-900 dark:text-white">Project X</span>
                        </div>
                        <div className="flex items-center gap-2 px-8 border-r border-gray-200 dark:border-gray-800">
                            <span className="text-xs text-gray-400">Owner:</span>
                            <span className="text-xs font-bold text-gray-900 dark:text-white">Nammagiri</span>
                        </div>
                        <div className="flex items-center gap-2 px-8 border-r border-gray-200 dark:border-gray-800">
                            <span className="text-xs text-gray-400">Total Scans:</span>
                            <span className="text-xs font-bold text-gray-900 dark:text-white">100</span>
                        </div>
                        <div className="flex items-center gap-2 px-8 border-r border-gray-200 dark:border-gray-800">
                            <span className="text-xs text-gray-400">Scheduled:</span>
                            <span className="text-xs font-bold text-gray-900 dark:text-white">1000</span>
                        </div>
                        <div className="flex items-center gap-2 px-8 border-r border-gray-200 dark:border-gray-800">
                            <span className="text-xs text-gray-400">Rescans:</span>
                            <span className="text-xs font-bold text-gray-900 dark:text-white">100</span>
                        </div>
                        <div className="flex items-center gap-2 px-8 border-r border-gray-200 dark:border-gray-800">
                            <span className="text-xs text-gray-400">Failed Scans:</span>
                            <span className="text-xs font-bold text-gray-900 dark:text-white">100</span>
                        </div>
                        <div className="flex items-center gap-2 ml-auto text-[10px] text-gray-400">
                            <RefreshCcw className="w-3 h-3 text-primary animate-spin-slow" /> 10 mins ago
                        </div>
                    </div>

                    {/* Stats Bar */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6">
                        {[
                            { label: 'Critical Severity', val: 86, change: '+ 2%', icon: ShieldAlert, color: 'text-severity-critical', bg: 'bg-red-500/10' },
                            { label: 'High Severity', val: 16, change: '+ 0.9%', icon: AlertCircle, color: 'text-severity-high', bg: 'bg-orange-500/10' },
                            { label: 'Medium Severity', val: 26, change: '+ 0.9%', icon: AlertTriangle, color: 'text-severity-medium', bg: 'bg-yellow-500/10' },
                            { label: 'Low Severity', val: 16, change: '+ 0.9%', icon: Info, color: 'text-severity-low', bg: 'bg-green-500/10' },
                        ].map((stat) => (
                            <div key={stat.label} className="flex items-start justify-between">
                                <div>
                                    <p className="text-xs text-gray-400 mb-2">{stat.label}</p>
                                    <div className="flex items-baseline gap-3">
                                        <span className="text-3xl font-bold text-gray-900 dark:text-white">{stat.val}</span>
                                        <span className={`text-[10px] font-bold ${stat.label.includes('Medium') ? 'text-green-500' : 'text-severity-critical'}`}>
                                            {stat.change} <span className="text-gray-400">increase than yesterday</span>
                                        </span>
                                    </div>
                                </div>
                                <div className={`p-2 rounded-lg ${stat.bg}`}>
                                    <stat.icon className={`w-5 h-5 ${stat.color}`} />
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>

                {/* Scan Table Section */}
                <Card className="border-none bg-white dark:bg-[#111111] shadow-sm">
                    <div className="p-4 border-b border-gray-100 dark:border-gray-800 flex flex-col md:flex-row gap-4 items-center justify-between">
                        <div className="relative w-full md:w-96">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search scans by name or type..."
                                className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-[#1A1A1A] border border-gray-200 dark:border-gray-800 rounded-xl text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                            />
                        </div>
                        <div className="flex items-center gap-3 w-full md:w-auto">
                            <Button
                                variant="outline"
                                size="sm"
                                className="gap-2 bg-white dark:bg-[#1A1A1A]"
                                onClick={() => showToast('Filter drawer opened', 'info')}
                            >
                                <Filter className="w-4 h-4" /> Filter
                            </Button>
                            <Button
                                variant="outline"
                                size="sm"
                                className="gap-2 bg-white dark:bg-[#1A1A1A]"
                                onClick={() => showToast('Column customization menu opened', 'info')}
                            >
                                <Columns className="w-4 h-4" /> Column
                            </Button>
                            <Button
                                size="sm"
                                className="gap-2"
                                onClick={() => showToast('Scan initialization wizard started', 'success')}
                            >
                                <Plus className="w-4 h-4" /> New scan
                            </Button>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest border-b border-gray-100 dark:border-gray-800">
                                    <th className="px-6 py-4 font-medium">Scan Name</th>
                                    <th className="px-6 py-4 font-medium">Type</th>
                                    <th className="px-6 py-4 font-medium">Status</th>
                                    <th className="px-6 py-4 font-medium">Progress</th>
                                    <th className="px-6 py-4 font-medium">Vulnerability</th>
                                    <th className="px-6 py-4 font-medium text-right">Last Scan</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50 dark:divide-gray-800/50">
                                {mockScans.map((scan) => (
                                    <tr
                                        key={scan.id}
                                        className="group hover:bg-gray-50 dark:hover:bg-white/5 transition-colors cursor-pointer"
                                        onClick={() => navigate(`/scan/${scan.id}`)}
                                    >
                                        <td className="px-6 py-5">
                                            <span className="text-sm font-bold text-gray-900 dark:text-white">{scan.name}</span>
                                        </td>
                                        <td className="px-6 py-5">
                                            <span className="text-sm text-gray-500 dark:text-gray-400">{scan.type}</span>
                                        </td>
                                        <td className="px-6 py-5">
                                            <Badge
                                                variant={scan.status === 'Completed' ? 'low' : scan.status === 'Failed' ? 'critical' : 'neutral'}
                                                className="normal-case font-medium py-1 px-3 rounded-full"
                                            >
                                                {scan.status}
                                            </Badge>
                                        </td>
                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-3 w-40">
                                                <div className="flex-1 h-1.5 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                                                    <div
                                                        className={cn("h-full rounded-full transition-all duration-1000", scan.status === 'Failed' ? 'bg-severity-critical' : 'bg-primary')}
                                                        style={{ width: `${scan.progress}%` }}
                                                    />
                                                </div>
                                                <span className="text-xs font-bold text-gray-900 dark:text-white">{scan.progress}%</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5">
                                            <div className="flex gap-1.5">
                                                <div className="w-5 h-5 flex items-center justify-center rounded-sm bg-severity-critical text-white text-[9px] font-bold">{scan.vulns.c}</div>
                                                <div className="w-5 h-5 flex items-center justify-center rounded-sm bg-severity-high text-white text-[9px] font-bold">{scan.vulns.h}</div>
                                                {scan.vulns.m > 0 && <div className="w-5 h-5 flex items-center justify-center rounded-sm bg-severity-medium text-white text-[9px] font-bold">{scan.vulns.m}</div>}
                                                {scan.vulns.l > 0 && <div className="w-5 h-5 flex items-center justify-center rounded-sm bg-severity-low text-white text-[9px] font-bold">{scan.vulns.l}</div>}
                                            </div>
                                        </td>
                                        <td className="px-6 py-5 text-right">
                                            <span className="text-sm text-gray-400">{scan.lastScan}</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="flex items-center justify-between p-4 border-t border-gray-100 dark:border-gray-800">
                        <span className="text-xs text-gray-400">Showing 15 of 100 Scans</span>
                        <div className="flex gap-2">
                            <button className="p-1 px-2 border border-gray-200 dark:border-gray-800 rounded-md text-gray-400 hover:text-primary transition-colors">
                                <ChevronLeft className="w-4 h-4" />
                            </button>
                            <button className="p-1 px-2 border border-gray-200 dark:border-gray-800 rounded-md text-gray-400 hover:text-primary transition-colors">
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </Card>
            </main>
        </div>
    );
};

export default DashboardPage;
