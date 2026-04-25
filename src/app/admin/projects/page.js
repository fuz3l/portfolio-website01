"use client";

import { useEffect, useState } from 'react';
import { databases, appwriteConfig } from '@/lib/appwrite';
import { ID, Query } from 'appwrite';

export default function AdminProjects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [skills, setSkills] = useState('');
    const [githubLink, setGithubLink] = useState('');
    const [date, setDate] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            if (!appwriteConfig.databaseId || !appwriteConfig.collections.projects) return;
            const response = await databases.listDocuments(
                appwriteConfig.databaseId,
                appwriteConfig.collections.projects,
                [Query.orderDesc('date')]
            );
            setProjects(response.documents);
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
                appwriteConfig.collections.projects,
                ID.unique(),
                {
                    title,
                    description,
                    skills,
                    github_link: githubLink,
                    date: new Date(date).toISOString(),
                }
            );
            setTitle('');
            setDescription('');
            setSkills('');
            setGithubLink('');
            setDate('');
            await fetchProjects();
        } catch (error) {
            console.error('Failed to add project:', error);
            alert('Failed to add project. Ensure Appwrite variables are set.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleDelete = async (id) => {
        if (!confirm('Are you sure you want to delete this?')) return;
        try {
            await databases.deleteDocument(
                appwriteConfig.databaseId,
                appwriteConfig.collections.projects,
                id
            );
            await fetchProjects();
        } catch (error) {
            console.error('Failed to delete:', error);
        }
    };

    return (
        <div>
            <h1 className="text-3xl font-bold mb-8">Manage Projects</h1>

            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 mb-8">
                <h2 className="text-xl font-medium mb-4">Add New Project</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Project Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="p-3 rounded bg-gray-900 border border-gray-700 text-white"
                        required
                    />
                    <textarea
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="p-3 rounded bg-gray-900 border border-gray-700 text-white min-h-[100px]"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Skills (comma separated, e.g. React, Next.js, Appwrite)"
                        value={skills}
                        onChange={(e) => setSkills(e.target.value)}
                        className="p-3 rounded bg-gray-900 border border-gray-700 text-white"
                    />
                    <input
                        type="url"
                        placeholder="GitHub Link (Optional)"
                        value={githubLink}
                        onChange={(e) => setGithubLink(e.target.value)}
                        className="p-3 rounded bg-gray-900 border border-gray-700 text-white"
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
                        {isSubmitting ? 'Adding...' : 'Add Project'}
                    </button>
                </form>
            </div>

            <div>
                <h2 className="text-xl font-medium mb-4">Entries</h2>
                {loading ? <p>Loading...</p> : (
                    <div className="space-y-4">
                        {projects.map(p => (
                            <div key={p.$id} className="flex justify-between items-center p-4 bg-gray-800 rounded border border-gray-700">
                                <div>
                                    <h3 className="font-medium text-lg">{p.title}</h3>
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
