import Image from "next/image"

export default function About() {
  return (
    <div className="max-w-4xl mt-28 mx-auto">
      <h1 className="text-4xl font-bold mb-8 animate-fadeIn">About Me</h1>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* <Image
          src="/placeholder.svg?height=300&width=300"
          alt="Profile picture"
          width={300}
          height={300}
          className="grayscale"
        /> */}
        <div className="space-y-4 stagger-animate">
          <p>
            Hello! I'm Fuzail, deeply passionate about Artificial Intelligence and Machine Learning, exploring how data-driven models can solve real-world problems. Currently, I’m diving into machine learning algorithms, data preprocessing, and model optimization to build intelligent and efficient solutions.
          </p>
          <p>
          My journey into AI/ML began in my final year of my Bachelor's in Computer Applications. Since then, I've worked on projects focused on predictive analytics and computer vision, continuously exploring and improving my skills in machine learning.
          </p>
          <p>
          When I'm not coding or training models, I spend my time reading articles about AI/ML and technology, exploring biographies of successful business leaders, learning about history and historical figures, and sharing my thoughts on Twitter. I believe in the power of AI to transform industries and shape the future, and I'm always eager to learn and engage with new ideas in this ever-evolving field.
          </p>
        </div>
      </div>
    </div>
  )
}


