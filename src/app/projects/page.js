'use client';

import Footer from '../../components/Footer';
import { useEffect, useState } from 'react';
import { databases, appwriteConfig } from '@/lib/appwrite';
import { Query } from 'appwrite';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

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
      console.error('Failed to fetch projects:', error);
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
        <div className="max-w-6xl w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Projects</h1>
          
          {loading ? (
             <p className="text-center text-gray-500">Loading projects...</p>
          ) : projects.length === 0 ? (
             <p className="text-center text-gray-500">No projects to display.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {projects.map((project) => (
                <div key={project.$id} className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed whitespace-pre-wrap">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.skills && project.skills.split(',').map((skill, idx) => (
                        <span key={idx} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">
                          {skill.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-4 mt-auto">
                    {project.github_link && (
                      <a href={project.github_link} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-white transition-colors text-sm hover:underline">
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}