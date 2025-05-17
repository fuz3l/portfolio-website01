"use client";
import { motion } from "framer-motion";
import { 
  AcademicCapIcon, 
  BookOpenIcon, 
  MapPinIcon,
  ArrowDownIcon,
  DocumentArrowDownIcon,
  FolderIcon
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Skills from "./components/Skills";

const skills = [
  { name: "Machine Learning", icon: "🤖" },
  { name: "Internet of Things", icon: "🌐" },
  { name: "DBMS", icon: "🗄️" },
  { name: "RDBMS", icon: "📊" },
  { name: "C/C++", icon: "⚡" },
  { name: "Web Dev.", icon: "🌍" },
  { name: "Data Structures", icon: "📚" }
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-20" />
        <div className="container mx-auto px-6 py-20 text-center relative z-10">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hello, I am Fuzail
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            AI/ML Enthusiast passionate about creating intelligent solutions
          </motion.p>

          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              href="https://drive.google.com/file/d/1_BHPdbgGhW1KY2Hv-hbNe6WndfChGbZQ/view?usp=drive_link"
              className="group flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-200 hover-lift"
            >
              <DocumentArrowDownIcon className="w-5 h-5" />
              <span>Resume</span>
            </Link>
            
            <Link
              href="/projects"
              className="group flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-all duration-200 hover-lift"
            >
              <FolderIcon className="w-5 h-5" />
              <span>Projects</span>
            </Link>
          </motion.div>

          <motion.div 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center gap-2 text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <span>Scroll down</span>
            <ArrowDownIcon className="w-5 h-5 animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Skills />
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-effect rounded-2xl p-8"
          >
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Education
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <AcademicCapIcon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Silver Oak University</h3>
                  <p className="text-muted-foreground">Bachelor Of Computer Applications</p>
                  <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                    <MapPinIcon className="w-4 h-4" />
                    <span>Ahmedabad</span>
                    <span>•</span>
                    <span>July 2022 - Present</span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Key Subjects</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center gap-2 p-3 bg-secondary/50 rounded-lg hover:bg-secondary/70 transition-colors duration-200"
                    >
                      <span className="text-xl">{skill.icon}</span>
                      <span className="text-sm font-medium">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
