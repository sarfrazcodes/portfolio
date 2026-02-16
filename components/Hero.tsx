import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between min-h-[90vh] gap-16 py-24 relative">
      
      {/* Left Side */}
      <div className="flex-1">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Sarfraz
          </span>
        </h1>

        <p className="mt-6 text-lg text-gray-400 max-w-xl leading-relaxed">
          B.Tech CSE (AI & ML) student building intelligent systems,
          exploring Artificial Intelligence, and sharing my learning
          journey publicly through projects and YouTube.
        </p>

        <div className="mt-10 flex gap-5">
          <a
            href="https://github.com/sarfrazcodes"
            target="_blank"
            className="px-7 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-xl font-medium shadow-lg shadow-blue-900/30"
          >
            View GitHub
          </a>

          <a
            href="/projects"
            className="px-7 py-3 border border-gray-700 hover:border-blue-500 transition rounded-xl font-medium"
          >
            See Projects
          </a>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="flex-1 flex justify-center">
        <div className="relative w-92 h-92 rounded-full overflow-hidden border-4 border-blue-500 shadow-2xl shadow-blue-900/40">
          <Image
            src="/Profile.jpeg"
            alt="Sarfraz"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Subtle Background Glow */}
      <div className="absolute top-40 right-0 w-72 h-72 bg-blue-600 opacity-20 blur-3xl rounded-full -z-10"></div>
    </section>
  );
}
