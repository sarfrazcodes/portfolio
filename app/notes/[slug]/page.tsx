import { notFound } from "next/navigation";
import { dsaBasics } from "@/content/dsaBasics";
import { cBasics } from "@/content/cBasics";
import { pythonBasics } from "@/content/pythonBasics";
import { recursionBasics } from "@/content/recursionBasics";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function NotePage({ params }: Props) {
  const { slug } = await params;

  const notesMap: any = {
  "dsa-basics": dsaBasics,
  "recursion-basics": recursionBasics,
  "c-basics": cBasics,
  "python-basics": pythonBasics,
};

  const note = notesMap[slug];

  if (!note) return notFound();

  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-5xl font-bold text-white mb-6">
          {note.title}
        </h1>

        <p className="text-gray-400 mb-16">
          {note.description}
        </p>

        {note.sections.map((section: any, index: number) => (
          <div key={index} className="mb-16">

            <h2 className="text-3xl font-semibold text-white mb-6">
              {section.heading}
            </h2>

            {section.content.map((para: string, i: number) => (
              <p key={i} className="text-gray-300 leading-8 mb-4">
                {para}
              </p>
            ))}

            {section.code && (
              <div className="
                bg-[#0d0d0d]
                border border-gray-800
                rounded-2xl
                p-6
                mt-6
                shadow-xl
                shadow-blue-900/20
                overflow-x-auto
              ">
                <pre className="text-sm text-gray-300 whitespace-pre-wrap">
                  {section.code}
                </pre>
              </div>
            )}

          </div>
        ))}

      </div>
    </section>
  );
}
