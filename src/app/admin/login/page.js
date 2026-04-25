"use client";

import { useState } from 'react';
import { useAuth } from '@/lib/useAuth';

export default function AdminLogin() {
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setIsLoading(true);

        try {
            await login(email, password);
        } catch (err) {
            setError(err.message || 'Failed to login');
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] text-white">
            <div className="w-full max-w-md p-8 rounded-2xl bg-[#111] border border-stone-800 shadow-2xl">
                <h1 className="text-3xl font-serif mb-2 text-center text-stone-100" style={{ fontFamily: 'var(--font-inria-serif), serif' }}>Admin Access</h1>
                <p className="text-stone-500 text-center mb-8 text-sm">Sign in to manage your portfolio</p>

                {error && (
                    <div className="mb-6 p-4 bg-red-900/30 border border-red-500/50 rounded-lg text-red-200 text-sm">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div>
                        <label className="block text-sm font-medium text-stone-400 mb-1.5" htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 rounded-lg bg-black border border-stone-800 focus:border-stone-500 focus:ring-1 focus:ring-stone-500 outline-none transition-colors text-white"
                            required
                        />
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-stone-400 mb-1.5" htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 rounded-lg bg-black border border-stone-800 focus:border-stone-500 focus:ring-1 focus:ring-stone-500 outline-none transition-colors text-white"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="mt-4 w-full py-3 px-4 bg-white text-black font-medium rounded-lg hover:bg-stone-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isLoading ? 'Signing in...' : 'Sign In'}
                    </button>
                </form>
            </div>
        </div>
    );
}
