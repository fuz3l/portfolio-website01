'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { databases, appwriteConfig } from '@/lib/appwrite';
import Footer from '@/components/Footer';
import Loader from '@/components/Loader';

export default function BlogDetail() {
  const params = useParams();
  const id = params?.id;

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      fetchBlogDetails();
    }
  }, [id]);

  const fetchBlogDetails = async () => {
    try {
      if (!appwriteConfig.databaseId || !appwriteConfig.collections.blogs) {
        setError('Appwrite environment variables are not configured.');
        setLoading(false);
        return;
      }

      const response = await databases.getDocument(
        appwriteConfig.databaseId,
        appwriteConfig.collections.blogs,
        id
      );
      setBlog(response);
      
      // Update page title dynamically
      if (response.title) {
        document.title = `${response.title} | Fuzail Mansuri`;
      }
    } catch (err) {
      console.error('Failed to fetch blog details:', err);
      setError('Failed to fetch the blog post. It may have been deleted or does not exist.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white/40 dark:bg-gray-900/40 text-black dark:text-white min-h-screen flex flex-col justify-between transition-colors duration-200">
      {/* Top navigation link */}
      <div className="w-full text-center pt-6 text-xs text-gray-500 dark:text-gray-400">
        <a 
          id="back-to-blogs-link" 
          href="/blogs" 
          className="underline hover-gradient-text"
        >
          ← Back to Blogs
        </a>
      </div>

      {/* Center content */}
      <main className="flex-1 flex flex-col items-center justify-start px-6 pt-12">
        <div className="max-w-3xl w-full">
          {loading ? (
            <Loader />
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-500 dark:text-red-400 font-medium mb-4">{error}</p>
              <a 
                href="/blogs" 
                className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded transition-colors"
              >
                Back to Blogs
              </a>
            </div>
          ) : blog ? (
            <article className="prose max-w-none bg-white text-gray-900 shadow-md p-8 md:p-12 mb-12">
              <header className="mb-8 pb-4 border-b border-gray-200">
                <span className="text-sm text-gray-500 block mb-2">
                  {new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
                <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-2 text-gray-900">
                  {blog.title}
                </h1>
              </header>

              <div className="text-gray-800 text-base md:text-lg leading-relaxed whitespace-pre-wrap font-sans">
                {blog.content}
              </div>
            </article>
          ) : null}
        </div>
      </main>

      <Footer />
    </div>
  );
}
