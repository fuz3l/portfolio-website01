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
  CubeIcon
} from "@heroicons/react/24/outline";

const skills = [
  {
    category: "Languages",
    items: [
      { name: "Python", icon: "🐍", color: "from-blue-500 to-blue-600" },
      { name: "Java", icon: "☕", color: "from-orange-500 to-orange-600" },
      { name: "JavaScript", icon: "📜", color: "from-yellow-500 to-yellow-600" },
      { name: "PHP", icon: "🐘", color: "from-purple-500 to-purple-600" },
      { name: "Swift", icon: "🍎", color: "from-red-500 to-red-600" }
    ]
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "NumPy", icon: "🔢", color: "from-green-500 to-green-600" },
      { name: "Pandas", icon: "🐼", color: "from-blue-500 to-blue-600" },
      { name: "Scikit-learn", icon: "🤖", color: "from-orange-500 to-orange-600" },
      { name: "TensorFlow", icon: "🧠", color: "from-yellow-500 to-yellow-600" },
      { name: "Hugging Face", icon: "🤗", color: "from-purple-500 to-purple-600" },
      { name: "Next.js", icon: "⚡", color: "from-gray-500 to-gray-600" },
      { name: "Express", icon: "🚂", color: "from-green-500 to-green-600" },
      { name: "Node.js", icon: "🟢", color: "from-green-500 to-green-600" }
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
            className="mb-8 last:mb-0"
          >
            <h3 className="text-xl font-semibold mb-6 text-primary">
              {category.category}
            </h3>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
            >
              {category.items.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  className="group relative"
                >
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${skill.color} text-white hover-lift transition-all duration-300`}>
                    <div className="flex flex-col items-center text-center">
                      <span className="text-2xl mb-2">{skill.icon}</span>
                      <span className="text-sm font-medium">{skill.name}</span>
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