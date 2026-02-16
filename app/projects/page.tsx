import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    {
      title: "DSA Chatbot",
      desc: "NLP-based chatbot answering DSA queries using structured JSON and typo correction.",
      tech: ["Python", "NLTK", "FuzzyWuzzy"],
      github: "https://github.com/sarfrazcodes/dsa_chat_bot",
    },
    {
      title: "Weather Analyzer",
      desc: "Data visualization system using Pandas and Matplotlib to analyze weather trends.",
      tech: ["Python", "Pandas", "Matplotlib"],
      github: "https://github.com/sarfrazcodes/Weather-Analyser",
    },
    {
      title: "Python Quiz App",
      desc: "Interactive quiz application with scoring logic and structured data handling.",
      tech: ["Python"],
      github: "https://github.com/sarfrazcodes/python_quiz",
    },
    {
      title: "Expense Tracker (Flask)",
      desc: "Web-based expense tracker built using Flask. Users input income and expenses, and the system determines remaining balance or overspending.",
      tech: ["Python", "Flask", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/sarfrazcodes/expense_tracker_flask",
    },
    {
      title: "X & O Game (Tic-Tac-Toe)",
      desc: "Lightweight browser-based Tic-Tac-Toe game built with pure HTML, CSS, and JavaScript. Demonstrates DOM manipulation, win detection, and responsive layout.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/sarfrazcodes/X-O-Game",
    },
  ];

  return (
    <section className="py-28">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-white mb-6">
          Projects
        </h1>

        <div className="h-1 w-16 bg-blue-500 mb-16 rounded-full"></div>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project) => (
            <div
              key={project.title}
              className="
                bg-[#151515]
                p-12
                rounded-3xl
                border border-gray-800
                transition-all duration-300
                transform
                hover:scale-[1.03]
                hover:border-blue-500
                hover:shadow-2xl
                hover:shadow-blue-900/30
                flex flex-col justify-between
              "
            >
              <div>
                <h2 className="text-3xl font-semibold text-white mb-5">
                  {project.title}
                </h2>

                <p className="text-gray-400 leading-8 mb-8">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                        px-4 py-2
                        bg-[#1f1f1f]
                        text-gray-300
                        rounded-xl
                        text-sm
                        border border-gray-700
                        transition
                        hover:border-blue-500
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href={project.github}
                target="_blank"
                className="text-blue-400 hover:text-blue-500 font-medium"
              >
                View on GitHub →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
