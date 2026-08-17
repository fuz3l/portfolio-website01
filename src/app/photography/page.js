'use client';

import BackToHome from '@/components/BackToHome';
import Loader from '@/components/Loader';
import { useEffect, useState } from 'react';
import { databases, appwriteConfig, getOptimizedImageUrl } from '@/lib/appwrite';
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
        return (
            <div className="min-h-screen bg-[#0E0E0E]/40 text-white flex flex-col justify-between">
                <BackToHome />
                <Loader />
                <div></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white/40 dark:bg-gray-900/40 text-black dark:text-white flex flex-col justify-between transition-colors duration-200">
            <BackToHome />
            <main className="flex-1 max-w-6xl w-full mx-auto py-12 px-6 md:px-12">
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 tracking-tight">
                    Photography
                </h1>

                {photos.length === 0 ? (
                    <p className="text-center text-gray-500 italic text-base">
                        No photos available.
                    </p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        {photos.map((item, index) => {
                            const formattedDate = item.date
                                ? new Date(item.date).toLocaleDateString('en-GB', {
                                      day: '2-digit',
                                      month: '2-digit',
                                      year: '2-digit',
                                  })
                                : '';

                            const optimizedUrl = getOptimizedImageUrl(item.photo, { width: 1000, quality: 80, output: 'webp' });

                            return (
                                <div 
                                    key={item.$id} 
                                    className="bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/10 p-4 pb-6 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
                                >
                                    <div className="w-full dark:bg-zinc-950 overflow-hidden mb-4 flex items-center justify-center p-1 min-h-[220px] bg-gray-100 dark:bg-zinc-800/50 rounded">
                                        <img 
                                            src={optimizedUrl}
                                            alt={item.title_or_location || 'Photo'}
                                            loading={index < 2 ? "eager" : "lazy"}
                                            decoding="async"
                                            onError={(e) => {
                                                if (e.target.src !== item.photo) {
                                                    e.target.src = item.photo;
                                                }
                                            }}
                                            className="w-full h-auto object-contain block max-h-[70vh] group-hover:scale-[1.015] transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-1 px-1 pt-1">
                                        <h2 className="text-lg md:text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                                            {item.title_or_location}
                                        </h2>
                                        {formattedDate && (
                                            <p className="text-xs md:text-sm font-semibold text-zinc-500 dark:text-zinc-400 tracking-wider font-mono">
                                                {formattedDate}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </main>
        </div>
    );
}
