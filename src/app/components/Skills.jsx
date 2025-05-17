"use client";
import { motion } from "framer-motion";
import { 
  CodeBracketIcon,
  CommandLineIcon,
  ServerIcon,
  CpuChipIcon,
  GlobeAltIcon,
  CloudIcon,
  BeakerIcon,
  CubeIcon,
  CircleStackIcon,
  BoltIcon,
  CommandLineIcon as TerminalIcon,
  WrenchScrewdriverIcon
} from "@heroicons/react/24/outline";

const skills = [
  {
    category: "Languages",
    items: [
      { 
        name: "Python", 
        icon: CodeBracketIcon,
        description: "Advanced Python programming with focus on ML/AI",
        color: "from-blue-500 to-blue-600"
      },
      { 
        name: "Java", 
        icon: CommandLineIcon,
        description: "Object-oriented programming and enterprise applications",
        color: "from-orange-500 to-orange-600"
      },
      { 
        name: "JavaScript", 
        icon: GlobeAltIcon,
        description: "Modern web development and interactive applications",
        color: "from-yellow-500 to-yellow-600"
      },
      { 
        name: "PHP", 
        icon: ServerIcon,
        description: "Backend development and web applications",
        color: "from-purple-500 to-purple-600"
      },
      { 
        name: "C/C++", 
        icon: BoltIcon,
        description: "System programming and performance-critical applications",
        color: "from-red-500 to-red-600"
      }
    ]
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { 
        name: "NumPy", 
        icon: CircleStackIcon,
        description: "Scientific computing and numerical operations",
        color: "from-green-500 to-green-600"
      },
      { 
        name: "Pandas", 
        icon: CubeIcon,
        description: "Data manipulation and analysis",
        color: "from-blue-500 to-blue-600"
      },
      { 
        name: "Scikit-learn", 
        icon: BeakerIcon,
        description: "Machine learning algorithms and tools",
        color: "from-orange-500 to-orange-600"
      },
      { 
        name: "TensorFlow", 
        icon: CpuChipIcon,
        description: "Deep learning and neural networks",
        color: "from-yellow-500 to-yellow-600"
      },
      { 
        name: "Next.js", 
        icon: TerminalIcon,
        description: "React framework for production",
        color: "from-gray-500 to-gray-600"
      },
      { 
        name: "Express", 
        icon: ServerIcon,
        description: "Node.js web application framework",
        color: "from-green-500 to-green-600"
      }
    ]
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

export default function Skills() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Technologies
        </h2>
      </motion.div>

      <div className="glass-effect rounded-2xl p-8">
        {skills.map((category, categoryIndex) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
            className="mb-12 last:mb-0"
          >
            <h3 className="text-xl font-semibold mb-6 text-primary flex items-center gap-2">
              <WrenchScrewdriverIcon className="w-6 h-6" />
              {category.category}
            </h3>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {category.items.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  className="group relative"
                >
                  <div className={`p-6 rounded-xl bg-gradient-to-br ${skill.color} text-white hover-lift transition-all duration-300 h-full`}>
                    <div className="flex flex-col h-full">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-white/10 rounded-lg">
                          <skill.icon className="w-6 h-6" />
                        </div>
                        <h4 className="text-lg font-semibold">{skill.name}</h4>
                      </div>
                      <p className="text-sm text-white/80">{skill.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}