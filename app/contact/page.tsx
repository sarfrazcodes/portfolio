import Link from "next/link";

export default function ContactPage() {
  return (
    <section className="pt-16 pb-28">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-5xl font-bold text-white mb-6">
          Contact Me
        </h1>

        <div className="h-1 w-20 bg-blue-500 rounded-full mb-16"></div>

        <div className="
          bg-[#151515]
          p-12
          rounded-3xl
          border border-gray-800
          shadow-xl
          hover:shadow-blue-900/30
          transition-all duration-300
        ">

          <h2 className="text-2xl font-semibold text-white mb-6">
            Let’s Connect
          </h2>

          <p className="text-gray-400 leading-8 mb-8">
            Whether it's collaboration, opportunities, or just a tech discussion,
            feel free to reach out. I usually respond within 24 hours.
          </p>

          <div className="space-y-6">

            <div>
              <p className="text-gray-500 text-sm mb-2">Email</p>
              <a
                href="mailto:your_email_here@gmail.com"
                className="text-lg text-blue-400 hover:text-blue-500 transition"
              >
                mohdsarfrazsaifi205@gmail.com
              </a>
            </div>

            <div>
              <p className="text-gray-500 text-sm mb-2">GitHub</p>
              <Link
                href="https://github.com/sarfrazcodes"
                target="_blank"
                className="text-lg text-blue-400 hover:text-blue-500 transition"
              >
                github.com/sarfrazcodes
              </Link>
            </div>

            <div>
              <p className="text-gray-500 text-sm mb-2">LinkedIn</p>
              <Link
                href="https://www.linkedin.com/in/sarfrazcodes/"
                target="_blank"
                className="text-lg text-blue-400 hover:text-blue-500 transition"
              >
                LinkedIn Profile
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
