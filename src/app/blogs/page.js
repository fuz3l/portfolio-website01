'use client';

import Footer from '../../components/Footer';
import { useEffect, useState } from 'react';
import { databases, appwriteConfig } from '@/lib/appwrite';
import { Query } from 'appwrite';

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

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
      console.error('Failed to fetch blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen flex flex-col justify-between transition-colors duration-200">
      {/* Top link */}
      <div className="w-full text-center pt-6 text-xs text-gray-500 dark:text-gray-400">
        <a href="/" className="underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          ← Back to Home
        </a>
      </div>

      {/* Center content */}
      <main className="flex-1 flex flex-col items-center justify-start px-6 pt-12">
        <div className="max-w-4xl w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Blogs</h1>
          
          <div className="space-y-8">
            {loading ? (
              <p className="text-center text-gray-500">Loading blogs...</p>
            ) : blogs.length === 0 ? (
              <p className="text-center text-gray-500">No blogs published yet.</p>
            ) : (
              blogs.map((blog) => (
                <article key={blog.$id} className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold mb-3">
                    <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      {blog.title}
                    </a>
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed whitespace-pre-wrap">
                    {blog.content.length > 200 ? `${blog.content.substring(0, 200)}...` : blog.content}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">Read</span>
                    <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">Read More →</a>
                  </div>
                </article>
              ))
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}