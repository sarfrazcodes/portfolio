import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  github: string;
};

export default function ProjectCard({
  title,
  description,
  tech,
  github,
}: ProjectCardProps) {
  return (
<div
  className="
    bg-[#151515]
    p-10
    rounded-3xl
    border border-gray-800
    transition-all duration-300
    transform
    hover:scale-[1.04]
    hover:border-blue-500
    hover:shadow-2xl
    hover:shadow-blue-900/40
    flex flex-col justify-between
  "
>
      
      <div>
        <h3 className="text-2xl font-semibold text-white mb-4">
          {title}
        </h3>

        <p className="text-gray-400 leading-7 mb-6">
          {description}
        </p>

        <div className="flex flex-wrap gap-3 mb-8">
          {tech.map((item) => (
            <span
              key={item}
              className="px-4 py-2 bg-[#1f1f1f] text-gray-300 rounded-xl text-sm border border-gray-700 hover:border-blue-500 transition"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <Link
        href={github}
        target="_blank"
        className="text-blue-400 hover:text-blue-500 font-medium"
      >
        View on GitHub →
      </Link>
    </div>
  );
}
