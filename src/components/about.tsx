import { about } from "@/data/about";
import { Heart } from "./icons";

export default function About() {
  return (
    <section id="about" className="py-16 px-6 bg-[#FAE8FF]/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-2xl font-semibold text-[#581C87] mb-8 flex items-center gap-3 justify-center">
          <Heart className="w-5 h-5 text-[#EC4899]" />
          关于熙然
          <Heart className="w-5 h-5 text-[#EC4899]" />
        </h2>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {about.tags.map((tag) => (
            <span
              key={tag}
              className="sticker inline-flex items-center font-semibold bg-white text-[#7C3AED] border border-[#FBCFE8] rounded-full px-4 py-1.5 text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-center text-[#581C87]/70 leading-relaxed max-w-2xl mx-auto">
          {about.intro}
        </p>
      </div>
    </section>
  );
}
