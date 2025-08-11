'use client';

import Footer from '../../components/Footer';

export default function Blogs() {
  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen flex flex-col justify-between transition-colors duration-200">
      {/* Top link */}
      <div className="w-full text-center pt-6 text-xs text-gray-500 dark:text-gray-400">
        <a href="/" className="underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          ← Back to Home
        </a>
      </div>

      {/* Center content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6">
        <div className="max-w-4xl w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Blogs</h1>
          
          <div className="space-y-8">
            {/* Blog Post 1 */}
            <article className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">React</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">March 15, 2024</span>
              </div>
              <h2 className="text-2xl font-bold mb-3">
                <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Building Modern React Applications with Hooks
                </a>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Explore the power of React Hooks and how they've revolutionized the way we build functional components. 
                Learn about useState, useEffect, and custom hooks to create more maintainable and efficient applications.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-400">5 min read</span>
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">Read More →</a>
              </div>
            </article>

            {/* Blog Post 2 */}
            <article className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">Next.js</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">March 10, 2024</span>
              </div>
              <h2 className="text-2xl font-bold mb-3">
                <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Next.js 15: What's New and How to Migrate
                </a>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Discover the latest features in Next.js 15, including improved performance, new routing capabilities, 
                and enhanced developer experience. Learn how to upgrade your existing projects safely.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-400">8 min read</span>
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">Read More →</a>
              </div>
            </article>

            {/* Blog Post 3 */}
            <article className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs">CSS</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">March 5, 2024</span>
              </div>
              <h2 className="text-2xl font-bold mb-3">
                <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Mastering Tailwind CSS: Advanced Techniques
                </a>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Take your Tailwind CSS skills to the next level with advanced techniques, custom configurations, 
                and best practices for building scalable design systems.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-400">6 min read</span>
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">Read More →</a>
              </div>
            </article>

            {/* Blog Post 4 */}
            <article className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded text-xs">JavaScript</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">February 28, 2024</span>
              </div>
              <h2 className="text-2xl font-bold mb-3">
                <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Modern JavaScript: ES2024 Features You Should Know
                </a>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Stay up-to-date with the latest JavaScript features and syntax improvements. 
                Learn about new array methods, improved error handling, and performance optimizations.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-400">7 min read</span>
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">Read More →</a>
              </div>
            </article>

            {/* Blog Post 5 */}
            <article className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded text-xs">Performance</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">February 20, 2024</span>
              </div>
              <h2 className="text-2xl font-bold mb-3">
                <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Optimizing Web Performance: A Complete Guide
                </a>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Learn essential techniques for improving your website's performance, from image optimization 
                to code splitting and caching strategies that will boost your Core Web Vitals scores.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-400">10 min read</span>
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">Read More →</a>
              </div>
            </article>
          </div>

          {/* Load More Button */}
          <div className="text-center mt-8">
            <button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors">
              Load More Posts
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 