"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

export default function YouTubePage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const videos = [
    "wlPuEN0IdcY",
    "4DT5IHn63m0",
    "46X59Zw41JA",
    "TTnlgbn9JJ8",
    "MDZtgSVE51g",
    "gaGgP5WbdQI",
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -600 : 600,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!scrollRef.current || isHovered) return;

      const container = scrollRef.current;

      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth
      ) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: 600, behavior: "smooth" });
      }
    }, 3500);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section className="pt-16 pb-28">
      <div className="max-w-6xl mx-auto">

        {/* HERO SPLIT SECTION */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">

          {/* Image Side */}
          <Link
            href="https://www.youtube.com/@sarfrazcodes"
            target="_blank"
            className="flex justify-center"
          >
            <div className="
              w-72 h-72 relative rounded-full overflow-hidden
              border-4 border-red-500
              shadow-2xl shadow-red-900/40
              transition-all duration-500
              hover:scale-105
              hover:shadow-red-500/60
              hover:shadow-[0_0_60px_rgba(239,68,68,0.6)]
            ">
              <Image
                src="/Profile.jpeg"
                alt="SarfrazCodes"
                fill
                className="object-cover"
              />
            </div>
          </Link>

          {/* Content Side */}
          <div>
            <h1 className="text-5xl font-bold text-white mb-6">
              SarfrazCodes
            </h1>

            <p className="text-gray-400 leading-8 mb-8">
              Learning Python, AI, Machine Learning, DSA and Web Development
              in the simplest way possible. I document my journey publicly,
              build real-world projects and share structured technical knowledge.
            </p>

            <Link
              href="https://www.youtube.com/@sarfrazcodes"
              target="_blank"
              className="
                inline-block px-8 py-4
                bg-red-600 hover:bg-red-700
                rounded-2xl font-medium
                transition-all duration-300
                shadow-lg shadow-red-900/40
                hover:shadow-red-500/60
              "
            >
              Visit Channel →
            </Link>
          </div>

        </div>

        {/* HORIZONTAL TIMELINE */}
        <div className="mb-24">

          <h2 className="text-3xl font-semibold text-white mb-12 text-center">
            My YouTube Journey
          </h2>

          <div className="relative flex justify-between items-center">

            <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-800 -translate-y-1/2"></div>

            {[
              "Started Sharing Basics",
              "Focused on AI & ML",
              "Project-Based Learning",
              "Growing Tech Community",
            ].map((step, index) => (
              <div key={index} className="relative z-10 text-center">

                <div className="
                  w-6 h-6 rounded-full bg-red-500
                  shadow-lg shadow-red-500/60
                  mb-4 mx-auto
                "></div>

                <p className="text-gray-400 text-sm w-40">
                  {step}
                </p>

              </div>
            ))}

          </div>

        </div>

        {/* VIDEOS SECTION */}
        <h2 className="text-3xl font-semibold text-white mb-12 text-center">
          Latest Videos
        </h2>

        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto scroll-smooth no-scrollbar"
          >
            {videos.map((videoId, index) => (
              <div
                key={index}
                className="
                  min-w-[350px] aspect-video
                  rounded-3xl overflow-hidden
                  border border-gray-800
                  shadow-xl
                  transition-all duration-300
                  hover:scale-[1.03]
                  hover:shadow-red-900/40
                "
              >
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title="YouTube video"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ARROWS */}
        <div className="flex justify-center gap-10 mt-8">
          <button
            onClick={() => scroll("left")}
            className="
              px-6 py-3 bg-[#151515]
              border border-gray-700
              rounded-full
              transition-all duration-300
              hover:border-red-500
              hover:shadow-red-500/40
            "
          >
            ← Previous
          </button>

          <button
            onClick={() => scroll("right")}
            className="
              px-6 py-3 bg-[#151515]
              border border-gray-700
              rounded-full
              transition-all duration-300
              hover:border-red-500
              hover:shadow-red-500/40
            "
          >
            Next →
          </button>
        </div>

      </div>
    </section>
  );
}
