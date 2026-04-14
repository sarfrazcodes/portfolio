"use client";

import { motion } from "framer-motion";
import { FaPython, FaJava, FaReact, FaGithub, FaNodeJs, FaChartLine } from "react-icons/fa";
import { 
  SiCplusplus, SiJavascript, 
  SiNextdotjs, SiFlask, SiTailwindcss, SiFastapi,
  SiNumpy, SiPandas, 
  SiGit, SiPostgresql, SiSupabase, SiJsonwebtokens, SiC
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      description: "Core languages I use to build robust applications.",
      skills: [
        { name: "C", icon: SiC, color: "group-hover:text-[#A8B9CC]" },
        { name: "C++", icon: SiCplusplus, color: "group-hover:text-[#00599C]" },
        { name: "Python", icon: FaPython, color: "group-hover:text-[#3776AB]" },
        { name: "Java", icon: FaJava, color: "group-hover:text-[#007396]" },
        { name: "JS", icon: SiJavascript, color: "group-hover:text-[#F7DF1E]" },
      ],
    },
    {
      title: "Web Development",
      description: "Modern frameworks for high-performance web experiences.",
      skills: [
        { name: "React", icon: FaReact, color: "group-hover:text-[#61DAFB]" },
        { name: "Next.js", icon: SiNextdotjs, color: "group-hover:text-white" },
        { name: "Tailwind", icon: SiTailwindcss, color: "group-hover:text-[#06B6D4]" },
        { name: "Flask", icon: SiFlask, color: "group-hover:text-white" },
        { name: "FastAPI", icon: SiFastapi, color: "group-hover:text-[#009688]" },
      ],
    },
    {
      title: "Databases & Auth",
      description: "Secure data storage and user authentication systems.",
      skills: [
        { name: "PostgreSQL", icon: SiPostgresql, color: "group-hover:text-[#336791]" },
        { name: "Supabase", icon: SiSupabase, color: "group-hover:text-[#3ECF8E]" },
        { name: "JWT", icon: SiJsonwebtokens, color: "group-hover:text-[#FB015B]" },
        { name: "Node.js", icon: FaNodeJs, color: "group-hover:text-[#339933]" },
        { name: "GitHub", icon: FaGithub, color: "group-hover:text-white" },
      ],
    },
    {
      title: "Data Science & Tools",
      description: "Data analysis libraries and development workflow tools.",
      skills: [
        { name: "NumPy", icon: SiNumpy, color: "group-hover:text-[#4dabcf]" },
        { name: "Pandas", icon: SiPandas, color: "group-hover:text-[#150458]" },
        { name: "Matplotlib", icon: FaChartLine, color: "group-hover:text-[#11557c]" },
        { name: "Git", icon: SiGit, color: "group-hover:text-[#F05032]" },
        { name: "VS Code", icon: VscVscode, color: "group-hover:text-[#007ACC]" },
      ],
    },
  ];

  return (
    <section className="py-12 md:py-16 relative overflow-hidden bg-black text-white">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[128px] opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[128px] opacity-50 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
            Technical Arsenal
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto md:mx-0 mb-4"></div>
          <p className="text-gray-400 max-w-2xl text-sm md:text-base mx-auto md:mx-0">
            Here are the tools, languages, and frameworks I use to bring ideas to life. I focus on modern, scalable technologies to build exceptional products.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-[#0a0a0a] border border-gray-800/60 p-6 rounded-2xl hover:bg-[#111] hover:border-gray-700 transition-all duration-500 hover:shadow-xl hover:shadow-blue-900/10"
            >
              <h3 className="text-xl font-bold mb-2 text-white">
                {category.title}
              </h3>
              <p className="text-xs text-gray-400 mb-5 leading-relaxed">
                {category.description}
              </p>

              <div className="grid grid-cols-3 xl:grid-cols-5 gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center justify-center gap-2 py-3 px-2 rounded-xl bg-[#141414] border border-gray-800/40 group-hover:bg-[#1a1a1a] transition-all duration-300 hover:-translate-y-1 hover:border-gray-600/50"
                  >
                    <skill.icon className={`text-2xl text-gray-500 transition-colors duration-300 ${skill.color}`} />
                    <span className="text-[10px] font-semibold text-gray-400 text-center tracking-wide group-hover:text-gray-300 transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
