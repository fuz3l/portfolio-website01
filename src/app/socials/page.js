'use client';

import Footer from '../../components/Footer';

export default function Socials() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Socials</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* GitHub */}
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gray-900 dark:bg-white rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white dark:text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold">GitHub</h3>
                  <p className="text-gray-600 dark:text-gray-400">@fuz3l</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Check out my open-source projects, contributions, and code repositories. 
                I love collaborating on interesting projects and sharing knowledge with the community.
              </p>
              <a href="https://github.com/fuz3l" className="inline-block bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
                Follow on GitHub
              </a>
            </div>

            {/* LinkedIn */}
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold">LinkedIn</h3>
                  <p className="text-gray-600 dark:text-gray-400">Fuzail Mansuri</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Connect with me professionally on LinkedIn. I share insights about web development, 
                career growth, and industry trends.
              </p>
              <a href="https://www.linkedin.com/in/fuzailmansuri/" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Connect on LinkedIn
              </a>
            </div>

            {/* Twitter */}
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-400 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Twitter</h3>
                  <p className="text-gray-600 dark:text-gray-400">@amaan_dev</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Follow me on Twitter for daily tech updates, coding tips, and thoughts on the latest 
                web development trends and technologies.
              </p>
              <a href="https://x.com/fuzail_mansurii" className="inline-block bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors">
                Follow on Twitter
              </a>
            </div>

     

            

            {/*  Mail */}
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Mail</h3>
                  <p className="text-gray-600 dark:text-gray-400">fuzelxr@gmail.com</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Get in touch with me via email for collaborations, project discussions, 
                or just to say hello. I'm always open to new opportunities and connections.
              </p>
              <a href="mailto:fuzail@icloud.com" className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                Send Email
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 