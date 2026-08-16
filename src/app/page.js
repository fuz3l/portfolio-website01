'use client';

import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="bg-white/40 dark:bg-gray-900/40 text-black dark:text-white min-h-screen flex flex-col justify-between transition-colors duration-200">
      {/* Top link / banner */}
      <div className="quote-banner">
        “Having <span className='font-bold'>taste</span> in the AI era is a huge flex.”
      </div>

      {/* Center navigation */}
      <main className="flex-1 flex flex-col items-center justify-center">
        <nav className="flex flex-col gap-6 text-3xl md:text-4xl font-bold text-center select-none">
          <a href="/about" className="hover-gradient-text">
            About Me
          </a>
          <a href="/projects" className="hover-gradient-text">
            Projects
          </a>
          <a href="/blogs" className="hover-gradient-text">
            Blogs
          </a>
          <a href="/photography" className="hover-gradient-text">
            Photography
          </a>
          <a href="/life-updates" className="hover-gradient-text">
            Life Updates
          </a>
          <a href="/socials" className="hover-gradient-text">
            Socials
          </a>
         
          <a href="/resume" className="hover-gradient-text">
            Resume
          </a>
        </nav>
      </main>

      <Footer />
    </div>
  );
} 