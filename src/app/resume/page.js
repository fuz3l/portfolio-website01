'use client';

import Footer from '../../components/Footer';

export default function Resume() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Resume</h1>
          
          <div className="space-y-8">
            {/* Contact Information */}
            <section className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Email</p>
                  <p className="font-semibold">fuzelxr@gmail.com</p>
                </div>
               
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Location</p>
                  <p className="font-semibold">Ahmedabad, India</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Website</p>
                  <p className="font-semibold">www.fuzailmansuri.com</p>
                </div>
              </div>
            </section>

            {/* Summary */}
            <section className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Professional Summary</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
               Software developer and AI/ML enthusiast, Passionate about building modern web/app and AI/ML solutions that solve real-world problems. Problem solver and quick learner. Resilient and adaptable.
              </p>
            </section>

            {/* Experience
            <section className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold">Senior Full-Stack Developer</h3>
                      <p className="text-blue-600 dark:text-blue-400">TechCorp Inc.</p>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">2022 - Present</span>
                  </div>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                    <li>Led development of a microservices-based e-commerce platform serving 100K+ users</li>
                    <li>Mentored junior developers and conducted code reviews to maintain code quality</li>
                    <li>Implemented CI/CD pipelines reducing deployment time by 60%</li>
                    <li>Optimized database queries improving application performance by 40%</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold">Frontend Developer</h3>
                      <p className="text-blue-600 dark:text-blue-400">StartupXYZ</p>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">2020 - 2022</span>
                  </div>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                    <li>Built responsive web applications using React, Next.js, and TypeScript</li>
                    <li>Collaborated with UX/UI designers to implement pixel-perfect designs</li>
                    <li>Integrated third-party APIs and payment gateways</li>
                    <li>Reduced bundle size by 30% through code splitting and optimization</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold">Junior Developer</h3>
                      <p className="text-blue-600 dark:text-blue-400">WebSolutions</p>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">2019 - 2020</span>
                  </div>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                    <li>Developed and maintained client websites using HTML, CSS, and JavaScript</li>
                    <li>Worked with WordPress and custom PHP applications</li>
                    <li>Provided technical support and bug fixes for existing projects</li>
                  </ul>
                </div>
              </div>
            </section> */}

            {/* Education */}
            <section className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Education</h2>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold">Master of Science in IT/CS</h3>
                      <p className="text-blue-600 dark:text-blue-400">GLS University, Ahmedabad</p>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">2025 - Present</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Focused on AI/ML, Web/App development, DSA, System design and problem solving.
                  </p>
                </div>

                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold">Bachelor of Computer Applications</h3>
                      <p className="text-blue-600 dark:text-blue-400">Silver Oak University, Ahmedabad</p>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">2022 - 2025</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                   Learned Assembly, C, C++, Java, Python, SQL, HTML, CSS, JavaScript.</p>
                </div>
              </div>
            </section>

            {/* Skills */}
            <section className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Technical Skills</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Frontend</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">React</span>
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">Next.js</span>
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">TypeScript</span>
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">Vue.js</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Backend</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">Node.js</span>
                    <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">Express</span>
                    <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">Python</span>
                    <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">Django</span>
                    <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">PostgreSQL</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Tools & DevOps</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">Git</span>
                    <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">Docker</span>
                    <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">AWS</span>
                    <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">Vercel</span>
                    <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">Jenkins</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Other</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm">REST APIs</span>
                    <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm">GraphQL</span>
                    <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm">Testing</span>
                    <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm">Agile</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Download Button */}
            <div className="text-center">
              <button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8 py-3 rounded-lg transition-colors">
                Download PDF Resume
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 