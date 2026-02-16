import ProjectCard from "./ProjectCard";
import Link from "next/link";

export default function FeaturedProjects() {
  return (
    <section className="py-28 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        
        <div className="flex justify-between items-center mb-14">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <div className="h-1 w-20 bg-blue-500 rounded-full"></div>
          </div>

          <Link
            href="/projects"
            className="text-blue-400 hover:text-blue-500 text-sm font-medium transition"
          >
            View All →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <ProjectCard
            title="DSA Chatbot"
            description="An intelligent chatbot built using Python, NLTK, and FuzzyWuzzy to answer DSA-related queries with NLP preprocessing."
            tech={["Python", "NLTK", "FuzzyWuzzy", "JSON"]}
            github="https://github.com/sarfrazcodes/dsa_chat_bot"
          />

          <ProjectCard
            title="Weather Analyzer"
            description="A data analysis tool using Pandas and Matplotlib to visualize temperature and pollution trends from CSV datasets."
            tech={["Python", "Pandas", "Matplotlib"]}
            github="https://github.com/sarfrazcodes/Weather-Analyser"
          />

          <ProjectCard
            title="Python Quiz App"
            description="Interactive quiz application with scoring logic and structured data handling to evaluate user performance."
            tech={["Python"]}
            github="https://github.com/sarfrazcodes/python_quiz"
          />
        </div>

      </div>
    </section>
  );
}
