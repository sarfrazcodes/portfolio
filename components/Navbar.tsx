"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const linkClasses = (path: string) =>
    `transition ${
      pathname === path
        ? "text-blue-500"
        : "text-gray-300 hover:text-white"
    }`;

  return (
    <nav className="w-full border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide">
          Mohd <span className="text-blue-500">Sarfraz</span>
        </h1>

        <div className="space-x-8 hidden md:flex text-sm font-medium">
          <Link href="/" className={linkClasses("/")}>
            Home
          </Link>
          <Link href="/projects" className={linkClasses("/projects")}>
            Projects
          </Link>
          <Link href="/youtube" className={linkClasses("/youtube")}>
            YouTube
          </Link>
          <Link href="/notes" className={linkClasses("/notes")}>
            Notes
          </Link>
          <Link href="/contact" className={linkClasses("/contact")}>
            Contact Me
          </Link>
        </div>
      </div>
    </nav>
  );
}
