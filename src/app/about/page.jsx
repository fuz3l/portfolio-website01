'use client'

import Image from "next/image"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { FaSquareXTwitter } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const imageRef = useRef(null)
  const textRef = useRef(null)
  const tapeRef = useRef(null)

  useEffect(() => {
    // Image animation
    gsap.from(imageRef.current, {
      x: -100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 80%",
      },
    })

    // Text animation
    gsap.from(textRef.current, {
      x: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
      },
    })

    // Optional: Tape animation (wobble)
    gsap.fromTo(
      tapeRef.current,
      { rotate: -7 },
      {
        rotate: 5,
        duration: 2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      }
    )
  }, [])

  return (
    <div className="max-w-6xl mt-28 px-4 mx-auto">
      <h1 className="text-4xl font-bold mb-12 text-center animate-fadeIn text-white">About Me</h1>

      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Left Side - Image with Tape */}
        <div ref={imageRef} className="relative w-full md:w-1/2 flex justify-center">
          <div className="relative w-[90%] sm:w-[70%] md:w-full h-[300px] md:h-[400px]">
            <Image
              src="/myImg.jpg"
              alt="Fuzail"
              fill
             
              className="object-contain rounded-lg shadow-2xl"
            />
            <Image
              ref={tapeRef}
              src="/tap.webp"
              alt="Tape"
              width={80}
              height={40}
              className="absolute top-[-20px] left-1/2 -translate-x-1/2 w-16 md:w-20"
            />
          </div>
        </div>

        {/* Right Side - Text and Links */}
        <div
          ref={textRef}
          className="md:w-1/2 space-y-6 text-justify text-white"
        >
          <p>
            Hello! I'm <strong>Fuzail</strong>, deeply passionate about Artificial Intelligence and Machine Learning, exploring how data-driven models can solve real-world problems. Currently, I’m diving into machine learning algorithms, data preprocessing, and model optimization to build intelligent and efficient solutions.
          </p>
          <p>
            My journey into AI/ML began in the final year of my Bachelor's in Computer Applications. Since then, I've worked on projects focused on predictive analytics and computer vision, continuously exploring and improving my skills in machine learning.
          </p>
          <p>
            When I'm not coding or training models, I love reading about AI/ML trends, exploring biographies of business leaders, diving into history, and sharing my insights on <a className="text-blue-600" href="https://x.com/fuzail_mansurii">Twitter</a>. I'm a strong believer in the power of AI to shape the future and I’m always open to learning and engaging with new ideas.
          </p>

          {/* Social Links */}
          <div className="flex space-x-6 pt-2">
            <a href="https://linkedin.com/in/fuzailmansuri" target="_blank">
              <FaLinkedin className="text-4xl hover:text-blue-500 transition duration-300" />
            </a>
            <a href="https://github.com/fuz3l" target="_blank">
              <FaGithub className="text-4xl transition duration-300 hover:text-gray-400" />
            </a>
            <a href="https://x.com/fuzail_mansurii" target="_blank">
              <FaSquareXTwitter className="text-4xl transition duration-300 hover:text-gray-400" />
            </a>
          </div>

          {/* Mobile Profile Picture */}
          <div className="md:hidden">
            <Image
              src="/Fuzail Mansuri.png"
              alt="Profile picture"
              width={120}
              height={120}
              className="rounded-full mt-4 mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
