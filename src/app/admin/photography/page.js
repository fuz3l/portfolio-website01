"use client";

import { useEffect, useState } from 'react';
import { databases, storage, appwriteConfig } from '@/lib/appwrite';
import { ID, Query } from 'appwrite';

export default function AdminPhotography() {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [title, setTitle] = useState('');
    const [photoFile, setPhotoFile] = useState(null);
    const [date, setDate] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        fetchPhotos();
    }, []);

    const fetchPhotos = async () => {
        try {
            if (!appwriteConfig.databaseId || !appwriteConfig.collections.photography) return;
            const response = await databases.listDocuments(
                appwriteConfig.databaseId,
                appwriteConfig.collections.photography,
                [Query.orderDesc('date')]
            );
            setPhotos(response.documents);
        } catch (error) {
            console.error('Failed to fetch:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!photoFile) {
            alert('Please select a photo to upload');
            return;
        }

        setIsSubmitting(true);
        try {
            if (!appwriteConfig.buckets.images) {
                throw new Error("Bucket ID is missing");
            }

            // 1. Upload File
            const uploadedFile = await storage.createFile(
                appwriteConfig.buckets.images,
                ID.unique(),
                photoFile
            );

            // 2. Get file view URL
            const fileUrl = storage.getFileView(
                appwriteConfig.buckets.images,
                uploadedFile.$id
            );

            // 3. Save to database
            await databases.createDocument(
                appwriteConfig.databaseId,
                appwriteConfig.collections.photography,
                ID.unique(),
                {
                    title_or_location: title,
                    photo: fileUrl,
                    date: new Date(date).toISOString(),
                }
            );
            
            setTitle('');
            setPhotoFile(null);
            setDate('');
            
            // Reset the file input element visually
            document.getElementById('photo-upload').value = '';

            await fetchPhotos();
        } catch (error) {
            console.error('Failed to add photo:', error);
            alert('Failed to upload photo. Ensure Storage permissions and Bucket ID are set up.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleDelete = async (id) => {
        if (!confirm('Are you sure you want to delete this?')) return;
        try {
            await databases.deleteDocument(
                appwriteConfig.databaseId,
                appwriteConfig.collections.photography,
                id
            );
            await fetchPhotos();
        } catch (error) {
            console.error('Failed to delete:', error);
        }
    };

    return (
        <div>
            <h1 className="text-3xl font-bold mb-8">Manage Photography</h1>

            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 mb-8">
                <h2 className="text-xl font-medium mb-4">Add New Entry</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Title or Location"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="p-3 rounded bg-gray-900 border border-gray-700 text-white"
                        required
                    />
                    <input
                        id="photo-upload"
                        type="file"
                        accept="image/*"
                        onChange={(e) => setPhotoFile(e.target.files[0])}
                        className="p-3 rounded bg-gray-900 border border-gray-700 text-white file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-gray-800 file:text-white hover:file:bg-gray-700"
                        required
                    />
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
                        {isSubmitting ? 'Adding...' : 'Add Photo'}
                    </button>
                </form>
            </div>

            <div>
                <h2 className="text-xl font-medium mb-4">Entries</h2>
                {loading ? <p>Loading...</p> : (
                    <div className="space-y-4">
                        {photos.map(p => (
                            <div key={p.$id} className="flex justify-between items-center p-4 bg-gray-800 rounded border border-gray-700">
                                <div>
                                    <h3 className="font-medium text-lg">{p.title_or_location}</h3>
                                    <p className="text-gray-400 text-sm">{new Date(p.date).toLocaleDateString()}</p>
                                </div>
                                <button onClick={() => handleDelete(p.$id)} className="text-red-400 hover:text-red-300">
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
