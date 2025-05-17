"use client";
import { motion } from "framer-motion";
import { 
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
  StarIcon,
  EyeIcon,
  RocketLaunchIcon,
  CommandLineIcon,
  CpuChipIcon,
  BeakerIcon,
  GlobeAltIcon,
  ServerIcon,
  CircleStackIcon,
  BoltIcon
} from "@heroicons/react/24/outline";
import Link from "next/link";

const projects = [
  {
    title: "AI Image Generator",
    description: "A web application that generates images using AI models. Built with Next.js and OpenAI's DALL-E API.",
    tags: ["Next.js", "OpenAI", "Tailwind CSS"],
    github: "https://github.com/yourusername/ai-image-generator",
    demo: "https://ai-image-generator.vercel.app",
    stars: 45,
    views: 1200,
    icon: CpuChipIcon,
    gradient: "from-blue-500 to-purple-600"
  },
  {
    title: "Portfolio Website",
    description: "A modern portfolio website built with Next.js and Tailwind CSS. Features smooth animations and responsive design.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/yourusername/portfolio",
    demo: "https://your-portfolio.vercel.app",
    stars: 32,
    views: 800,
    icon: GlobeAltIcon,
    gradient: "from-green-500 to-blue-600"
  },
  {
    title: "Task Management App",
    description: "A full-stack task management application with real-time updates and user authentication.",
    tags: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/yourusername/task-manager",
    demo: "https://task-manager.vercel.app",
    stars: 28,
    views: 950,
    icon: CommandLineIcon,
    gradient: "from-orange-500 to-red-600"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function Projects() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3"
      >
        <RocketLaunchIcon className="w-8 h-8 text-primary" />
        <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Featured Projects
        </h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            variants={itemVariants}
            className="group relative"
          >
            <div className="glass-effect rounded-xl p-6 h-full flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${project.gradient} text-white`}>
                      <project.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-200">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                </div>
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-primary/10 rounded-lg transition-colors duration-200"
                >
                  <CodeBracketIcon className="w-5 h-5" />
                </Link>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <StarIcon className="w-4 h-4" />
                    <span className="text-sm">{project.stars}</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <EyeIcon className="w-4 h-4" />
                    <span className="text-sm">{project.views}</span>
                  </div>
                </div>
                <Link
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors duration-200"
                >
                  <span className="text-sm font-medium">Live Demo</span>
                  <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
} 