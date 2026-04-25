"use client";

import { useEffect, useState } from 'react';
import { databases, appwriteConfig } from '@/lib/appwrite';
import { ID, Query } from 'appwrite';

export default function AdminBlogs() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [date, setDate] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        try {
            if (!appwriteConfig.databaseId || !appwriteConfig.collections.blogs) return;
            const response = await databases.listDocuments(
                appwriteConfig.databaseId,
                appwriteConfig.collections.blogs,
                [Query.orderDesc('date')]
            );
            setBlogs(response.documents);
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
            await databases.createDocument(
                appwriteConfig.databaseId,
                appwriteConfig.collections.blogs,
                ID.unique(),
                {
                    title,
                    content,
                    date: new Date(date).toISOString(),
                }
            );
            setTitle('');
            setContent('');
            setDate('');
            await fetchBlogs();
        } catch (error) {
            console.error('Failed to add blog:', error);
            alert('Failed to add blog. Ensure Appwrite variables are set.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleDelete = async (id) => {
        if (!confirm('Are you sure you want to delete this?')) return;
        try {
            await databases.deleteDocument(
                appwriteConfig.databaseId,
                appwriteConfig.collections.blogs,
                id
            );
            await fetchBlogs();
        } catch (error) {
            console.error('Failed to delete:', error);
        }
    };

    return (
        <div>
            <h1 className="text-3xl font-bold mb-8">Manage Blogs</h1>

            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 mb-8">
                <h2 className="text-xl font-medium mb-4">Add New Blog</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Blog Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="p-3 rounded bg-gray-900 border border-gray-700 text-white"
                        required
                    />
                    <textarea
                        placeholder="Blog Content (Markdown supported typically)"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="p-3 rounded bg-gray-900 border border-gray-700 text-white min-h-[200px]"
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
                        {isSubmitting ? 'Adding...' : 'Add Blog'}
                    </button>
                </form>
            </div>

            <div>
                <h2 className="text-xl font-medium mb-4">Entries</h2>
                {loading ? <p>Loading...</p> : (
                    <div className="space-y-4">
                        {blogs.map(b => (
                            <div key={b.$id} className="flex justify-between items-center p-4 bg-gray-800 rounded border border-gray-700">
                                <div>
                                    <h3 className="font-medium text-lg">{b.title}</h3>
                                    <p className="text-gray-400 text-sm">{new Date(b.date).toLocaleDateString()}</p>
                                </div>
                                <button onClick={() => handleDelete(b.$id)} className="text-red-400 hover:text-red-300">
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
