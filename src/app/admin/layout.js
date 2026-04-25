"use client";

import { AuthProvider, useAuth } from '@/lib/useAuth';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';
import Link from 'next/link';

function AdminContent({ children }) {
    const { user, loading, logout } = useAuth();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        if (!loading && !user && pathname !== '/admin/login') {
            router.push('/admin/login');
        } else if (!loading && user && pathname === '/admin/login') {
            router.push('/admin');
        }
    }, [user, loading, pathname, router]);

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center bg-black text-white">Loading...</div>;
    }

    if (!user && pathname !== '/admin/login') {
        return null;
    }

    if (pathname === '/admin/login') {
        return <>{children}</>;
    }

    return (
        <div className="min-h-screen flex bg-gray-900 text-white font-sans">
            {/* Sidebar Navigation */}
            <nav className="w-64 border-r border-gray-800 p-6 flex flex-col gap-4">
                <h2 className="text-xl font-bold mb-8 text-gray-200">Admin Panel</h2>
                <Link href="/admin" className="p-3 rounded-lg hover:bg-gray-800 transition-colors">Dashboard</Link>
                <Link href="/admin/life-updates" className="p-3 rounded-lg hover:bg-gray-800 transition-colors">Life Updates</Link>
                <Link href="/admin/blogs" className="p-3 rounded-lg hover:bg-gray-800 transition-colors">Blogs</Link>
                <Link href="/admin/projects" className="p-3 rounded-lg hover:bg-gray-800 transition-colors">Projects</Link>
                <Link href="/admin/photography" className="p-3 rounded-lg hover:bg-gray-800 transition-colors">Photography</Link>

                <div className="flex-grow flex items-end">
                    <button 
                        onClick={logout}
                        className="w-full text-left p-3 rounded-lg text-red-400 hover:bg-gray-800 transition-colors"
                    >
                        Sign Out
                    </button>
                </div>
            </nav>

            {/* Main Content */}
            <main className="flex-1 p-8 overflow-y-auto">
                <div className="max-w-5xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}

export default function AdminLayout({ children }) {
    return (
        <AuthProvider>
            <AdminContent>
                {children}
            </AdminContent>
        </AuthProvider>
    );
}
