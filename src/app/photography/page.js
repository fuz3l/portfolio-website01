"use client";

import { useEffect, useState } from 'react';
import { databases, appwriteConfig } from '@/lib/appwrite';
import { Query } from 'appwrite';

export default function PhotographyPage() {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchPhotos();
    }, []);

    const fetchPhotos = async () => {
        try {
            if (!appwriteConfig.databaseId || !appwriteConfig.collections.photography) {
                console.warn("Appwrite environment variables are not set up.");
                setLoading(false);
                return;
            }

            const response = await databases.listDocuments(
                appwriteConfig.databaseId,
                appwriteConfig.collections.photography,
                [Query.orderDesc('date')]
            );
            setPhotos(response.documents);
        } catch (error) {
            console.error('Failed to fetch photos:', error);
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
                    Photography
                </h1>

                <div className="space-y-32">
                    {photos.length === 0 ? (
                        <p className="text-stone-500 font-serif italic text-lg" style={{ fontFamily: 'var(--font-inria-serif), serif' }}>
                            No photos available.
                        </p>
                    ) : (
                        photos.map((item) => (
                            <div key={item.$id} className="group relative">
                                <div className="w-full relative overflow-hidden bg-[#1A1A1A] mb-6">
                                    <img 
                                        src={item.photo}
                                        alt={item.title_or_location}
                                        className="w-full h-auto object-cover max-h-[85vh] transition-transform duration-1000 group-hover:scale-[1.02]"
                                    />
                                </div>
                                <div className="mt-4">
                                    <h2 className="text-4xl md:text-5xl font-serif text-white tracking-wide mb-2" style={{ fontFamily: 'var(--font-inria-serif), serif' }}>
                                        {item.title_or_location}
                                    </h2>
                                    <p className="text-stone-400 text-lg md:text-xl font-light font-mono">
                                        {new Date(item.date).toLocaleDateString('en-GB')}
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
