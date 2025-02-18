"use client"

import Link from "next/link"
import { useRef } from "react"
import Idea from "../components/Idea"

const projects = [
  {
    title: "AI-Powered Image Recognition",
    description: "Developed a deep learning model for real-time image recognition using TensorFlow and Keras.",
    link: "#",
  },
  {
    title: "Natural Language Processing Chatbot",
    description: "Created an intelligent chatbot using NLP techniques and the GPT-3 API for human-like conversations.",
    link: "#",
  },
  {
    title: "House Price Predictions",
    description: "A machine learning model that estimates house prices based on factors like location, size, and features using regression techniques to aid real estate decisions.",
    link: "#",
  },
]

export default function Projects() {
  const projectsRef = useRef(null)

  return (
    <div>
      <h1 className="text-4xl mt-28 font-bold mb-8 animate-fadeIn">My Projects</h1>
      <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="border rounded-md  border-white/10 p-6 animate-border-pulse">
            <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <Link href={project.link} className="text-white underline elegant-hover">
              Learn more
            </Link>
          </div>
          
        ))}
      </div>
      <Idea />
    </div>
  )
}

