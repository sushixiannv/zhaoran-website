import { about } from "@/data/about";
import { Heart, Sparkles } from "./icons";

export default function About() {
  return (
    <section id="about" className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-2xl font-semibold text-[#581C87] mb-8 flex items-center gap-3 justify-center">
          <Heart className="w-5 h-5 text-[#EC4899]" />
          关于我
          <Heart className="w-5 h-5 text-[#EC4899]" />
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border-[#FBCFE8] card-soft bg-white rounded-2xl">
            <div className="p-6">
              <h3 className="font-serif text-lg text-[#581C87] flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#EC4899]" />
                我是谁
              </h3>
            </div>
            <div className="px-6 pb-6">
              <p className="text-[#581C87]/70 leading-relaxed">{about.intro}</p>
            </div>
          </div>
          <div className="border-[#FBCFE8] card-soft bg-white rounded-2xl">
            <div className="p-6">
              <h3 className="font-serif text-lg text-[#581C87] flex items-center gap-2">
                <Heart className="w-5 h-5 text-[#EC4899]" />
                {about.heading}
              </h3>
            </div>
            <div className="px-6 pb-6">
              <p className="text-[#581C87]/70 leading-relaxed">
                {about.valueIntro}
                {about.values.join("、")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
