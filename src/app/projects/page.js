'use client';

import Footer from '../../components/Footer';

export default function Projects() {
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
        <div className="max-w-6xl w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Projects</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project 1 */}
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">E-Commerce Platform</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                A full-stack e-commerce platform built with Next.js, featuring user authentication, 
                product management, and payment integration.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">Next.js</span>
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">MongoDB</span>
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs">Stripe</span>
              </div>
              <div className="flex gap-2">
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">Live Demo</a>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:underline text-sm">GitHub</a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">Task Management App</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                A collaborative task management application with real-time updates, drag-and-drop functionality, 
                and team collaboration features.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">React</span>
                <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded text-xs">Firebase</span>
                <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded text-xs">Socket.io</span>
              </div>
              <div className="flex gap-2">
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">Live Demo</a>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:underline text-sm">GitHub</a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">Weather Dashboard</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                A beautiful weather dashboard with location-based forecasts, interactive maps, 
                and detailed weather analytics.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">Vue.js</span>
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">OpenWeather API</span>
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs">Chart.js</span>
              </div>
              <div className="flex gap-2">
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">Live Demo</a>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:underline text-sm">GitHub</a>
              </div>
            </div>

            {/* Project 4 */}
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">Blog Platform</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                A modern blog platform with markdown support, SEO optimization, and a clean, 
                responsive design for content creators.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">Next.js</span>
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">PostgreSQL</span>
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs">Prisma</span>
              </div>
              <div className="flex gap-2">
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">Live Demo</a>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:underline text-sm">GitHub</a>
              </div>
            </div>

            {/* Project 5 */}
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">AI Chat Assistant</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                An intelligent chat assistant powered by OpenAI's GPT model, featuring conversation history, 
                file uploads, and custom prompts.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">React</span>
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">OpenAI API</span>
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs">Node.js</span>
              </div>
              <div className="flex gap-2">
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">Live Demo</a>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:underline text-sm">GitHub</a>
              </div>
            </div>

            {/* Project 6 */}
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">Portfolio Website</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                A modern, responsive portfolio website built with Next.js and Tailwind CSS, 
                featuring dark mode, animations, and interactive components.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">Next.js</span>
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">Tailwind CSS</span>
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs">Framer Motion</span>
              </div>
              <div className="flex gap-2">
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">Live Demo</a>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:underline text-sm">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 