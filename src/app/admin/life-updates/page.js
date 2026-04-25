"use client";

import { useEffect, useState } from 'react';
import { databases, storage, appwriteConfig } from '@/lib/appwrite';
import { ID, Query } from 'appwrite';

export default function AdminLifeUpdates() {
    const [updates, setUpdates] = useState([]);
    const [loading, setLoading] = useState(true);
    const [description, setDescription] = useState('');
    const [photoFile, setPhotoFile] = useState(null);
    const [date, setDate] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        fetchUpdates();
    }, []);

    const fetchUpdates = async () => {
        try {
            if (!appwriteConfig.databaseId || !appwriteConfig.collections.lifeUpdates) return;
            const response = await databases.listDocuments(
                appwriteConfig.databaseId,
                appwriteConfig.collections.lifeUpdates,
                [Query.orderDesc('post_date')]
            );
            setUpdates(response.documents);
        } catch (error) {
            console.error('Failed to fetch:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            let fileUrl = '';
            
            // Upload file only if user selected one
            if (photoFile) {
                if (!appwriteConfig.buckets.images) {
                    throw new Error("Bucket ID is missing");
                }
                const uploadedFile = await storage.createFile(
                    appwriteConfig.buckets.images,
                    ID.unique(),
                    photoFile
                );
                fileUrl = storage.getFileView(
                    appwriteConfig.buckets.images,
                    uploadedFile.$id
                );
            }

            await databases.createDocument(
                appwriteConfig.databaseId,
                appwriteConfig.collections.lifeUpdates,
                ID.unique(),
                {
                    description,
                    photo: fileUrl, // Save URL (empty string if no photo was uploaded)
                    post_date: new Date(date).toISOString(),
                }
            );
            
            setDescription('');
            setPhotoFile(null);
            setDate('');
            
            // Reset the file input visually
            const fileInput = document.getElementById('photo-upload-life');
            if(fileInput) fileInput.value = '';

            await fetchUpdates();
        } catch (error) {
            console.error('Failed to add update:', error);
            alert('Failed to add life update. Ensure Storage permissions and Bucket ID are set up.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleDelete = async (id) => {
        if (!confirm('Are you sure you want to delete this?')) return;
        try {
            await databases.deleteDocument(
                appwriteConfig.databaseId,
                appwriteConfig.collections.lifeUpdates,
                id
            );
            await fetchUpdates();
        } catch (error) {
            console.error('Failed to delete:', error);
        }
    };

    return (
        <div>
            <h1 className="text-3xl font-bold mb-8">Manage Life Updates</h1>

            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 mb-8">
                <h2 className="text-xl font-medium mb-4">Add New Update</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <textarea
                        placeholder="Description (What happened?)"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="p-3 rounded bg-gray-900 border border-gray-700 text-white min-h-[100px]"
                        required
                    />
                    <div className="flex flex-col gap-1">
                        <label className="text-sm text-gray-400">Photo (Optional)</label>
                        <input
                            id="photo-upload-life"
                            type="file"
                            accept="image/*"
                            onChange={(e) => setPhotoFile(e.target.files[0])}
                            className="p-3 rounded bg-gray-900 border border-gray-700 text-white file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-gray-800 file:text-white hover:file:bg-gray-700"
                        />
                    </div>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="p-3 rounded bg-gray-900 border border-gray-700 text-white"
                        required
                    />
                    <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="py-3 px-4 bg-white text-black font-medium rounded hover:bg-gray-200 disabled:opacity-50"
                    >
                        {isSubmitting ? 'Adding...' : 'Add Update'}
                    </button>
                </form>
            </div>

            <div>
                <h2 className="text-xl font-medium mb-4">Entries</h2>
                {loading ? <p>Loading...</p> : (
                    <div className="space-y-4">
                        {updates.map(u => (
                            <div key={u.$id} className="flex justify-between items-center p-4 bg-gray-800 rounded border border-gray-700">
                                <div className="max-w-[70%]">
                                    <p className="font-medium truncate">{u.description}</p>
                                    <p className="text-gray-400 text-sm">{new Date(u.post_date).toLocaleDateString()}</p>
                                </div>
                                <button onClick={() => handleDelete(u.$id)} className="text-red-400 hover:text-red-300 ml-4 shrink-0">
                                    Delete
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
