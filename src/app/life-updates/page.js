"use client";

import { useEffect, useState } from 'react';
import { databases, appwriteConfig } from '@/lib/appwrite';
import { Query } from 'appwrite';

export default function LifeUpdatesPage() {
    const [updates, setUpdates] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchUpdates();
    }, []);

    const fetchUpdates = async () => {
        try {
            if (!appwriteConfig.databaseId || !appwriteConfig.collections.lifeUpdates) {
                console.warn("Appwrite environment variables are not set up.");
                setLoading(false);
                return;
            }

            const response = await databases.listDocuments(
                appwriteConfig.databaseId,
                appwriteConfig.collections.lifeUpdates,
                [Query.orderDesc('post_date')]
            );
            setUpdates(response.documents);
        } catch (error) {
            console.error('Failed to fetch life updates:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <div className="min-h-screen bg-[#0E0E0E] text-white flex items-center justify-center font-serif text-xl" style={{ fontFamily: 'var(--font-inria-serif), serif' }}>Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-[#0E0E0E] text-white">
            <main className="max-w-6xl mx-auto py-24 px-6 md:px-12">
                <h1 className="text-5xl md:text-7xl font-serif mb-16 tracking-wide" style={{ fontFamily: 'var(--font-inria-serif), serif' }}>
                    Life Updates
                </h1>

                <div className="space-y-32">
                    {updates.length === 0 ? (
                        <p className="text-stone-500 font-serif italic text-lg" style={{ fontFamily: 'var(--font-inria-serif), serif' }}>
                            No entries available. Add some from the admin panel.
                        </p>
                    ) : (
                        updates.map((item) => (
                            <div key={item.$id} className="group relative">
                                {item.photo && (
                                    <div className="w-full relative overflow-hidden bg-[#1A1A1A] mb-6">
                                        <img 
                                            src={item.photo}
                                            alt="Update"
                                            className="w-full h-auto object-cover max-h-[80vh] transition-transform duration-1000 group-hover:scale-[1.02]"
                                        />
                                    </div>
                                )}
                                <div className="mt-4 max-w-4xl">
                                    <p className="text-xl md:text-2xl font-serif text-white tracking-wide mb-4 leading-relaxed whitespace-pre-wrap" style={{ fontFamily: 'var(--font-inria-serif), serif' }}>
                                        {item.description}
                                    </p>
                                    <p className="text-stone-400 text-lg md:text-xl font-light font-mono">
                                        {new Date(item.post_date).toLocaleDateString('en-GB')}
                                    </p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </main>
        </div>
    );
}
