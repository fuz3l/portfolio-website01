"use client";

import { useAuth } from '@/lib/useAuth';

export default function AdminDashboard() {
    const { user } = useAuth();

    return (
        <div>
            <h1 className="text-4xl font-serif mb-2 text-white">Dashboard</h1>
            <p className="text-gray-400 mb-8">Welcome back, {user?.email || 'Admin'}. Quick stats and overview here.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { title: 'Life Updates', href: '/admin/life-updates', count: 'Manage' },
                    { title: 'Blogs', href: '/admin/blogs', count: 'Manage' },
                    { title: 'Projects', href: '/admin/projects', count: 'Manage' },
                    { title: 'Photography', href: '/admin/photography', count: 'Manage' },
                ].map((item, idx) => (
                    <a key={idx} href={item.href} className="block p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-gray-500 transition-colors">
                        <h3 className="text-xl font-medium text-white mb-2">{item.title}</h3>
                        <p className="text-gray-400 text-sm">{item.count}</p>
                    </a>
                ))}
            </div>
        </div>
    );
}
