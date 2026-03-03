import React from 'react';
import Sidebar from '../components/Sidebar';
import { Card } from '../components/ui';

interface PlaceholderPageProps {
    title: string;
    description: string;
}

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ title, description }) => {
    return (
        <div className="flex min-h-screen bg-gray-50 dark:bg-[#0A0A0A] font-sans">
            <Sidebar />
            <main className="flex-1 lg:ml-64 p-4 md:p-8 flex items-center justify-center">
                <Card className="max-w-2xl p-12 text-center border-none shadow-xl bg-white dark:bg-[#111111]">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">{title}</h1>
                    <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-lg">
                        {description}
                    </p>
                    <div className="mt-10 p-4 border border-primary/20 bg-primary/5 rounded-xl text-primary text-sm font-medium">
                        This module is currently under development as part of the enterprise security suite.
                    </div>
                </Card>
            </main>
        </div>
    );
};

export default PlaceholderPage;
