import Image from "next/image"

export default function About() {
  return (
    <div className="max-w-4xl mt-28 mx-auto">
      <h1 className="text-4xl font-bold mb-8 animate-fadeIn">About Me</h1>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <Image
          src="/placeholder.svg?height=300&width=300"
          alt="Profile picture"
          width={300}
          height={300}
          className="grayscale"
        />
        <div className="space-y-4 stagger-animate">
          <p>
            Hello! I'm an AI/ML engineer passionate about pushing the boundaries of what's possible with artificial
            intelligence and machine learning. With a strong background in data science and computer vision, I
            specialize in developing cutting-edge AI solutions for real-world problems.
          </p>
          <p>
            My journey in the world of AI/ML began during my graduate studies in Computer Science. Since then, I've
            worked on various projects ranging from natural language processing to predictive analytics and computer
            vision applications.
          </p>
          <p>
            When I'm not coding or training models, you can find me exploring the latest research papers, contributing
            to open-source projects, or mentoring aspiring data scientists. I believe in the power of AI to transform
            industries and improve lives, and I'm always excited to take on new challenges in this ever-evolving field.
          </p>
        </div>
      </div>
    </div>
  )
}


