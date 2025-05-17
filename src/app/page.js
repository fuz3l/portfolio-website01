"use client";
import { motion } from "framer-motion";
import { 
  AcademicCapIcon, 
  MapPinIcon,
  ArrowDownIcon,
  DocumentArrowDownIcon,
  FolderIcon,
  SparklesIcon,
  RocketLaunchIcon,
  LightBulbIcon,
  UserCircleIcon,
  CommandLineIcon,
  CpuChipIcon,
  BeakerIcon,
  GlobeAltIcon,
  ServerIcon,
  CircleStackIcon,
  BoltIcon
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const focusAreas = [
  {
    name: "Machine Learning",
    icon: CpuChipIcon,
    gradient: "from-blue-500 to-purple-600"
  },
  {
    name: "Data Structures",
    icon: CircleStackIcon,
    gradient: "from-green-500 to-blue-600"
  },
  {
    name: "Web Development",
    icon: GlobeAltIcon,
    gradient: "from-orange-500 to-red-600"
  },
  {
    name: "Database Systems",
    icon: ServerIcon,
    gradient: "from-yellow-500 to-orange-600"
  },
  {
    name: "Software Engineering",
    icon: CommandLineIcon,
    gradient: "from-purple-500 to-pink-600"
  },
  {
    name: "Computer Networks",
    icon: BoltIcon,
    gradient: "from-red-500 to-yellow-600"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background/40" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-50" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <UserCircleIcon className="w-12 h-12 text-primary" />
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Hello, I am Fuzail
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              AI/ML Enthusiast passionate about creating intelligent solutions
            </p>

            <div className="flex flex-wrap justify-center gap-4">
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
            </div>
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

      {/* About Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <UserCircleIcon className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                About Me
              </h2>
            </div>
            <p className="text-lg text-muted-foreground mb-8">
              I'm a passionate AI/ML enthusiast with a strong foundation in computer science and a drive to create innovative solutions. My expertise spans across machine learning, web development, and data analysis.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="glass-effect rounded-xl p-6">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg w-fit mb-4">
                  <SparklesIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Innovation</h3>
                <p className="text-sm text-muted-foreground">Creating cutting-edge solutions with modern technologies</p>
              </div>
              <div className="glass-effect rounded-xl p-6">
                <div className="p-3 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg w-fit mb-4">
                  <RocketLaunchIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Performance</h3>
                <p className="text-sm text-muted-foreground">Optimizing solutions for maximum efficiency</p>
              </div>
              <div className="glass-effect rounded-xl p-6">
                <div className="p-3 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg w-fit mb-4">
                  <LightBulbIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Problem Solving</h3>
                <p className="text-sm text-muted-foreground">Tackling complex challenges with creative solutions</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Skills />
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Projects />
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-8">
              <AcademicCapIcon className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Education
              </h2>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
                  <AcademicCapIcon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">Silver Oak University</h3>
                  <p className="text-muted-foreground">Bachelor Of Computer Applications</p>
                  <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                    <MapPinIcon className="w-4 h-4" />
                    <span>Ahmedabad</span>
                    <span>•</span>
                    <span>July 2022 - Present</span>
                  </div>
                  <div className="mt-4">
                    <h4 className="text-lg font-semibold mb-4">Key Focus Areas</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {focusAreas.map((area, index) => (
                        <motion.div
                          key={area.name}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="flex items-center gap-2 p-2 bg-secondary/50 rounded-lg"
                        >
                          <div className={`p-1 rounded-md bg-gradient-to-br ${area.gradient}`}>
                            <area.icon className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-sm font-medium">{area.name}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
