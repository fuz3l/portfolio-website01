"use client"

import { motion } from "framer-motion"
import { Code2, Palette, Zap, Heart, Award, Coffee } from "lucide-react"

const skills = [
  { name: "Machine Learning", icon: Code2, level: 50, color: "from-blue-500 to-cyan-500" },
  { name: "Artificial Intelligence", icon: Palette, level: 60, color: "from-purple-500 to-pink-500" },
  { name: "Frontend Development", icon: Zap, level: 95, color: "from-green-500 to-emerald-500" },
  { name: "SQL", icon: Heart, level: 65, color: "from-red-500 to-orange-500" },
]

const achievements = [
  { icon: Award, title: "40+ Projects", description: "Successfully completed projects" },
  { icon: Coffee, title: "300+ Cups", description: "Of coffee consumed while coding" },
  { icon: Heart, title: "100% Passion", description: "Dedicated to creating amazing experiences" },
]

export default function About() {
  return (
    <div className="min-h-screen px-4 pt-24 md:pt-20 pb-8">
      <div className="max-w-6xl md:mt-20 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">About Me</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm a passionate developer who loves creating beautiful, functional, and user-friendly digital experiences.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="backdrop-blur-xl bg-white/20 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-3xl p-8 shadow-2xl"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">My Story</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                Hello! I'm Fuzail, deeply passionate about Artificial Intelligence and Machine Learning, exploring how data-driven models can solve real-world problems. Currently, I’m diving into machine learning algorithms, data preprocessing, and model optimization to build intelligent and efficient solutions.
              </p>
              <p>
               My journey into AI/ML began in the final year of my Bachelor's in Computer Applications. Since then, I've worked on projects focused on predictive analytics and computer vision, continuously exploring and improving my skills in machine learning.
              </p>
              <p>
               When I'm not coding or training models, I love reading about AI/ML trends, exploring biographies of business leaders, diving into history, and sharing my insights on Twitter. I'm a strong believer in the power of AI to shape the future and I’m always open to learning and engaging with new ideas.

        </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Skills & Expertise</h2>
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <div
                  key={skill.name}
                  className="backdrop-blur-xl bg-white/20 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-2xl p-6 shadow-xl"
                >
                  <div className="flex items-center mb-3">
                    <div className={`p-2 rounded-xl bg-gradient-to-r ${skill.color} text-white mr-3`}>
                      <Icon size={20} />
                    </div>
                    <span className="font-semibold text-gray-800 dark:text-white">{skill.name}</span>
                    <span className="ml-auto text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                    />
                  </div>
                </div>
              )
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <motion.div
                key={achievement.title}
                whileHover={{ scale: 1.05, y: -5 }}
                className="backdrop-blur-xl bg-white/20 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-2xl p-6 text-center shadow-xl"
              >
                <div className="inline-flex p-3 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white mb-4">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{achievement.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{achievement.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}
