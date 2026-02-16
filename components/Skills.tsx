export default function Skills() {
  const skillCategories = [
    {
      title: "Programming",
      skills: ["Python", "Java", "C++", "JavaScript"],
    },
    {
      title: "Web Development",
      skills: ["React", "Next.js", "Flask", "Tailwind CSS"],
    },
    {
      title: "AI & Data",
      skills: ["NumPy", "Pandas", "NLTK", "Machine Learning Basics"],
    },
    {
      title: "Tools",
      skills: ["Git", "VS Code", "Jupyter", "SQL"],
    },
  ];

  return (
    <section className="py-28 border-t border-gray-800">
      <h2 className="text-3xl md:text-4xl font-bold mb-14">
        Skills
        <div className="h-1 w-16 bg-blue-500 mb-16 rounded-full"></div>
      </h2>
      

      <div className="grid md:grid-cols-2 gap-10">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="
            bg-[#151515]
            p-8
            rounded-2xl
            border border-gray-800
            transition-all duration-300
            transform
            hover:scale-[1.04]
            hover:border-blue-500
            hover:shadow-2xl
            hover:shadow-blue-900/30
"
          >
            <h3 className="text-xl font-semibold mb-6 text-blue-400">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-[#1f1f1f] rounded-lg text-sm text-gray-300 border border-gray-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
