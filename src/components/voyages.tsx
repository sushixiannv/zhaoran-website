import { voyages } from "@/data/voyages";
import { Heart } from "./icons";

export default function Voyages() {
  return (
    <section id="voyage" className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-2xl font-semibold text-[#581C87] mb-2 flex items-center gap-3 justify-center">
          <Heart className="w-5 h-5 text-[#EC4899]" />
          航海案例集
          <Heart className="w-5 h-5 text-[#EC4899]" />
        </h2>
        <p className="text-[#7C3AED] mb-8 text-center">
          生财有术航海项目作品与实战案例
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {voyages.map((voyage) => (
            <article
              key={voyage.id}
              className="border-[#FBCFE8] card-soft bg-white rounded-2xl overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{voyage.emoji}</span>
                  <h3 className="font-semibold text-[#581C87]">{voyage.title}</h3>
                </div>
                <span
                  className="sticker inline-flex items-center font-semibold rounded-full px-3 py-1 text-xs mb-3"
                  style={{
                    backgroundColor: `${voyage.color}20`,
                    color: voyage.color,
                  }}
                >
                  {voyage.category}
                </span>
                <p className="text-[#581C87]/70 leading-relaxed mb-3 text-sm">
                  {voyage.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {voyage.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center font-semibold bg-[#FAE8FF] text-[#7C3AED] rounded-full px-2 py-0.5 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
