"use client";
import { FaLocationDot, FaGraduationCap  } from "react-icons/fa6";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useRef } from "react"
import Skills from "./components/Skills";

const  skills = [
  {
    name: "Machine Learning"
  },
  {
    name: "Internet of Things"
  },
  {
    name: "DBMS"
  },
  {
    name: "RDBMS"
  },
  {
    name: "C/C++"
  },
  {
    name: "Web Development"
  },
  {
    name: "Data Structures"
  }
]

export default function Home() {
  const skillsRef = useRef(null)
 

  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-6">
      {/* Heading */}
      <h1 className="text-4xl font-semibold text-center mb-4">Hello, I am Fuzail</h1>

      {/* Paragraph */}
      <p className="text-xl text-center max-w-2xl text-gray-300 leading-relaxed">
       A Machine Learning Enthusiast     </p>

      {/* CTA Button */}
      <Link
        href="/projects"
        className="mt-6 bg-white rounded-md text-black px-6 py-3 font-bold inline-flex items-center shadow-md hover:bg-gray-200 transition duration-300"
      >
        View My Projects
        <ArrowRight className="ml-2" />
      </Link>
    </div>

    <div>
      <div className="mt-3 p-2">
        <Skills />
<h1 className="font-semibold text-white text-left text-2xl">Eductation</h1>
<div className="rounded-md bg-white border-white mt-3 border-2 p-3">
  <div className="flex justify-center items-start flex-col">
    <div className="flex">
    <FaGraduationCap className="text-xl text-black"/>
    <h3 className="font-semibold text-left ml-[3px] text-black text-xl">Silver Oak University</h3>
    </div>
    <div className="flex">
    <FaLocationDot className="text-sm text-black" /><span className="text-sm ml-[5px] font-semibold text-black">Ahmedabad</span>  <p className="text-sm  ml-[3px] font-normal text-black">| July-2022 - Present</p>
    </div>
    <div className="mt-3">
     <p className="text-sm text-black mb-2 font-semibold">Studied subjects like</p>
     <div ref={skillsRef} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-center">
  {skills.map((skill, index) => (
    <div 
      key={index} 
      className="bg-black text-white text-sm font-semibold px-4 py-2 text-center rounded-full shadow-md hover:bg-stone-900 transition"
    >
      {skill.name}
    </div>
  ))}
</div>

        </div>

  </div>
</div>
      </div>
    </div>
    </>
  );
}
