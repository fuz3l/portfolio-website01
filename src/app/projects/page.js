'use client';

import Footer from '../../components/Footer';
import BackToHome from '../../components/BackToHome';
import Loader from '../../components/Loader';
import { useEffect, useState } from 'react';
import { databases, appwriteConfig } from '@/lib/appwrite';
import { Query } from 'appwrite';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedCards, setExpandedCards] = useState({});

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

  const toggleExpand = (id) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Helper for generating vibrant, consistent colors for skill badges based on skill string
  const getSkillColorClass = (skill) => {
    const colorPairs = [
      'bg-indigo-100 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800/50',
      'bg-purple-100 dark:bg-purple-950/70 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800/50',
      'bg-pink-100 dark:bg-pink-950/70 text-pink-700 dark:text-pink-300 border-pink-200 dark:border-pink-800/50',
      'bg-rose-100 dark:bg-rose-950/70 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800/50',
      'bg-amber-100 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-800/50',
      'bg-emerald-100 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/50',
      'bg-teal-100 dark:bg-teal-950/70 text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-800/50',
      'bg-cyan-100 dark:bg-cyan-950/70 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800/50',
      'bg-blue-100 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800/50',
      'bg-violet-100 dark:bg-violet-950/70 text-violet-700 dark:text-violet-300 border-violet-200 dark:border-violet-800/50',
    ];

    let hash = 0;
    const str = skill.toLowerCase().trim();
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const index = Math.abs(hash) % colorPairs.length;
    return colorPairs[index];
  };

  const MAX_CHAR_LIMIT = 120;

  return (
    <div className="bg-white/40 dark:bg-gray-900/40 text-black dark:text-white min-h-screen flex flex-col justify-between transition-colors duration-200">
      {/* Top link */}
      <BackToHome />

      {/* Center content */}
      <main className="flex-1 flex flex-col items-center justify-start px-6 pt-12">
        <div className="max-w-6xl w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Projects</h1>
          
          {loading ? (
            <Loader />
          ) : projects.length === 0 ? (
             <p className="text-center text-gray-500">No projects to display.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 items-stretch">
              {projects.map((project) => {
                const isExpanded = expandedCards[project.$id];
                const rawDesc = project.description || '';
                const isLongDesc = rawDesc.length > MAX_CHAR_LIMIT;
                const displayedDesc = isExpanded || !isLongDesc
                  ? rawDesc
                  : `${rawDesc.slice(0, MAX_CHAR_LIMIT).trim()}...`;

                return (
                  <div 
                    key={project.$id} 
                    className="bg-gray-100/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg p-6 hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full border border-black/5 dark:border-white/5"
                  >
                    <div className="flex flex-col flex-1">
                      <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                      
                      <div className="flex-1 mb-4">
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed whitespace-pre-wrap transition-all">
                          {displayedDesc}
                        </p>
                        {isLongDesc && (
                          <button
                            onClick={() => toggleExpand(project.$id)}
                            className="mt-2 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline focus:outline-none flex items-center gap-1"
                          >
                            {isExpanded ? 'Show less ↑' : 'Read more ↓'}
                          </button>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-1.5 mb-4 mt-auto">
                        {project.skills && project.skills.split(',').map((skill, idx) => {
                          const cleanedSkill = skill.trim();
                          if (!cleanedSkill) return null;
                          return (
                            <span 
                              key={idx} 
                              className={`px-2.5 py-0.5 rounded-full text-xs font-medium border shadow-xs transition-transform hover:scale-105 ${getSkillColorClass(cleanedSkill)}`}
                            >
                              {cleanedSkill}
                            </span>
                          );
                        })}
                      </div>
                    </div>

                    <div className="flex gap-4 pt-2 border-t border-gray-200/50 dark:border-gray-700/50 mt-auto">
                      {project.github_link && (
                        <a 
                          href={project.github_link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-medium hover:underline flex items-center gap-1"
                        >
                          GitHub ↗
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}