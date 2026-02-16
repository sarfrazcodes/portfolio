import Link from "next/link";
import { notesIndex } from "@/content/notesIndex";

export default function NotesPage() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold text-white mb-12">
          Notes
        </h1>

        <div className="grid md:grid-cols-2 gap-10">

  {notesIndex.map((note) => (
    <Link key={note.slug} href={`/notes/${note.slug}`}>
      <div
        className="
          h-full
          min-h-[220px]
          flex flex-col justify-between

          bg-[#151515]
          p-10
          rounded-3xl
          border border-gray-800
          transition-all duration-300
          hover:scale-[1.03]
          hover:border-blue-500
          hover:shadow-2xl
          hover:shadow-blue-900/40
        "
      >
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">
            {note.title}
          </h2>

          <p className="text-gray-400">
            {note.description}
          </p>
        </div>

      </div>
    </Link>
  ))}

</div>
      </div>
    </section>
  );
}
