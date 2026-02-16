export default function About() {
  return (
    <section className="py-28 border-t border-gray-800">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-4xl font-bold text-white mb-6">
            About Me
          </h2>

          <div className="h-1 w-16 bg-blue-500 mb-8 rounded-full"></div>

          <p className="text-gray-300 leading-8 mb-6">
            I’m a Computer Science student specializing in 
            <span className="text-blue-400 font-medium"> Artificial Intelligence & Machine Learning</span>.
            I enjoy building structured systems and solving real-world problems
            through clean architecture and strong fundamentals.
          </p>

          <p className="text-gray-400 leading-8">
            My focus is on mastering core programming concepts, exploring
            AI-driven systems, and documenting my technical journey publicly
            to build consistency and clarity.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              title: "AI & ML",
              desc: "Exploring machine learning models and NLP systems."
            },
            {
              title: "Full Stack",
              desc: "Building structured and scalable web applications."
            },
            {
              title: "Problem Solving",
              desc: "Strong focus on DSA and algorithmic thinking."
            },
            {
              title: "Public Learning",
              desc: "Sharing structured knowledge via YouTube & Notes."
            }
          ].map((item) => (
            <div
              key={item.title}
              className="bg-[#151515] p-7 rounded-2xl border border-gray-800 hover:border-blue-500 transition shadow-lg hover:shadow-blue-900/20"
            >
              <h3 className="text-lg font-semibold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-6">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
