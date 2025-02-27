"use client"
import {  FaGithub } from "react-icons/fa";
import Link from "next/link"
import { useRef } from "react"
import Idea from "../components/Idea"

const projects = [
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

<Link href={project.github}><FaGithub className="text-2xl hover:text-gray-400"/></Link>
            

            <Link href={project.github} className="text-white underline elegant-hover">
              Learn more
            </Link>
            </div>
          </div>
          
        ))}
      </div>
      <Idea />
    </div>
  )
}

