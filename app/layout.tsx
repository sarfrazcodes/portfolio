import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Mohd Sarfraz Saifi | Portfolio",
  description:
    "B.Tech CSE (AI & ML) student building intelligent systems and documenting my tech journey.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#0f0f0f] text-white min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1 max-w-6xl mx-auto px-6 md:px-8 transition-all duration-300">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
