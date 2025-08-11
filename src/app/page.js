'use client';

import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen flex flex-col justify-between transition-colors duration-200">
      {/* Top link */}
      <div className="w-full text-center pt-6 text-xs text-gray-500 dark:text-gray-400">
        Don&apos;t want to waste time in this animated bullshit?{' '}
        <a href="#" className="underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          Click here.
        </a>
      </div>

      {/* Center navigation */}
      <main className="flex-1 flex flex-col items-center justify-center">
        <nav className="flex flex-col gap-6 text-3xl md:text-4xl font-bold text-center select-none">
          <a href="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-150">
            About Me
          </a>
          <a href="/projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-150">
            Projects
          </a>
          <a href="/blogs" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-150">
            Blogs
          </a>
          <a href="/socials" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-150">
            Socials
          </a>
         
          <a href="/resume" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-150">
            Resume
          </a>
        </nav>
      </main>

      <Footer />
    </div>
  );
} 