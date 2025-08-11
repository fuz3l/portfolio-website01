'use client';

import Footer from '../../components/Footer';
import Image from 'next/image';

export default function About() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">About Me</h1>
          
          {/* Profile Image Section */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-48 h-48 md:w-64 md:h-72  ">
                <Image
                  src="/abt.jpeg"
                  alt="Fuzail"
                  width={400}
                  height={700}
                  className="w-full h-full"
                  priority
                />
              </div>
             
            </div>
          </div>
          
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
            Hello! I'm Fuzail, A software developer and AI/Ml enthusiast.
            </p>
            
            <p>
            My journey into tech began in 2021, when I was 17.       </p>
            
            <p>
 Until now, I have built several projects using latest tech. You can find me on X(Twitter), where I usually do shitposting.
 If you have any project ideas or anything else to discuss just mail me!(you can find it on socials page)
      </p>
            
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">Skills</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Frontend</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">React, Next.js, JavaScript, Tailwind CSS, Bootstrap</p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Backend</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Node.js, Express, Python, Firebase</p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Database</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">MySQL, PostgreSQL, Firebase Firestore</p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Tools</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Git, Github, Vercel, VSCode, Cursor
                  </p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Design</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Figma, Responsive Design</p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">AI & ML</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Scikit-learn, TensorFlow, Pandas, Numpy, Keras</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 