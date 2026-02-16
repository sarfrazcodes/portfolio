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
      const scrollAmount = 600;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Auto Scroll
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
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section className="pt-16 pb-28">
      <div className="max-w-6xl mx-auto">

        {/* Profile */}
        <div className="mb-20 text-center">
          <div className="flex justify-center mb-8">
            <div className="w-60 h-60 relative rounded-full overflow-hidden border-4 border-red-500 shadow-xl shadow-red-900/40">
              <Image
                src="/Profile.jpeg"
                alt="SarfrazCodes"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <h1 className="text-4xl font-bold text-white mb-6">
            SarfrazCodes
          </h1>

          <p className="text-gray-400 max-w-3xl mx-auto leading-8">
            Learning Python, AI, ML, DSA & Web Development in the simplest way.
            Documenting my journey and building real-world projects publicly.
          </p>

          <div className="mt-10">
            <Link
              href="https://www.youtube.com/@sarfrazcodes"
              target="_blank"
              className="px-10 py-4 bg-red-600 hover:bg-red-700 transition rounded-2xl font-medium shadow-lg shadow-red-900/40"
            >
              Visit Channel →
            </Link>
          </div>
        </div>

        {/* Carousel */}
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
                className="min-w-[350px] aspect-video rounded-3xl overflow-hidden border border-gray-800 shadow-xl hover:scale-[1.03] transition"
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

        {/* Arrows Below */}
        <div className="flex justify-center gap-10 mt-8">
          <button
            onClick={() => scroll("left")}
            className="px-6 py-3 bg-[#151515] border border-gray-700 rounded-full hover:border-red-500 transition"
          >
            ← Previous
          </button>

          <button
            onClick={() => scroll("right")}
            className="px-6 py-3 bg-[#151515] border border-gray-700 rounded-full hover:border-red-500 transition"
          >
            Next →
          </button>
        </div>

      </div>
    </section>
  );
}
