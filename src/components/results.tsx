import { results } from "@/data/results";
import { iconMap, Star } from "./icons";

export default function Results() {
  return (
    <section id="results" className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-2xl font-semibold text-[#581C87] mb-2 flex items-center gap-3 justify-center">
          <Star className="w-5 h-5 text-[#FBBF24]" />
          真实结果
          <Star className="w-5 h-5 text-[#FBBF24]" />
        </h2>
        <p className="text-[#7C3AED] mb-8 text-center">
          来自实际参与和交付过的商业项目
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {results.map((result) => {
            const Icon = iconMap[result.icon];
            return (
              <article
                key={result.id}
                className="border-[#FBCFE8] card-soft bg-white rounded-2xl text-center p-6"
              >
                <div
                  className="w-12 h-12 mx-auto rounded-full mb-4 flex items-center justify-center"
                  style={{ backgroundColor: `${result.color}20` }}
                >
                  <Icon className="w-6 h-6" style={{ color: result.color }} />
                </div>
                <p className="font-serif text-3xl font-semibold text-[#581C87] mb-2">
                  {result.value}
                </p>
                <p className="text-[#7C3AED] font-medium mb-1">{result.label}</p>
                <p className="text-[#581C87]/60 text-sm">{result.note}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
