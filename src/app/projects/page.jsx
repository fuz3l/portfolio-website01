"use client"
import {  FaGithub } from "react-icons/fa";
import Link from "next/link"
import { useRef } from "react"
import Idea from "../components/Idea"

const projects = [
  {
    title: "🚀 AI Resume Screening & Candidate Ranking System",
    description: "AI-powered resume screening and candidate ranking system using Streamlit.AI-powered resume screening and candidate ranking system using Streamlit and NLP.",
    link: "https://huggingface.co/spaces/fuzelx/AI-Powered-Resume-Screening-Candidate-Ranking-System",
    github:"https://github.com/fuz3l/AI-Powered-Resume-Screening-Candidate-Ranking-System"
  },
  {
    title: "K-Means-Clustering-Algorithm",
    description: "K-Means-Clustering-Algorithm For Mall Customers Data",
    link: "https://github.com/fuz3l/K-Means-Clustering-Algorithm",
    github:"https://github.com/fuz3l/K-Means-Clustering-Algorithm"
  },
  {
    title: "Stock Price Predictor",
    description: "A Stock Price Predictor uses Machine Learning to forecast future stock prices based on historical data and market trends.",
    link: "#",
    github:"#"
  },
  {
    title: "House Price Predictions",
    description: "A machine learning model that estimates house prices based on factors like location, size, and features using regression techniques to aid real estate decisions.",
    link: "https://github.com/fuz3l/House-Price-Prediction",
    github:"https://github.com/fuz3l/House-Price-Prediction"
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
            <div className=" flex space-x-3">

<Link className="flex hover:bg-gray-400 bg-white py-1 px-2 rounded-sm text-black font-semibold " href={project.github}><FaGithub className="text-2xl hover:text-gray-400"/><span className="ml-1">Source Code</span></Link>
            

            <Link href={project.link} className="text-black no-underline py-1 px-2 rounded-sm bg-white font-semibold  hover:bg-gray-400">
            🔥 Live Preview
            </Link>
            </div>
          </div>
          
        ))}
      </div>
      <Idea />
    </div>
  )
}

