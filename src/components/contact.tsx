import { contactItems, partnerTargets } from "@/data/contact";
import { Heart, MapPin, Sparkles } from "./icons";

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-2xl font-semibold text-[#581C87] mb-8 flex items-center gap-3 justify-center">
          <Heart className="w-5 h-5 text-[#EC4899]" />
          联系我
          <Heart className="w-5 h-5 text-[#EC4899]" />
        </h2>
        <div className="border-[#FBCFE8] card-soft bg-white rounded-2xl overflow-hidden">
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-[#581C87] mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#FBBF24]" />
                  社交媒体
                </h3>
                <div className="space-y-4">
                  {contactItems.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center gap-3 group cursor-pointer"
                    >
                      <div className="w-10 h-10 rounded-full bg-[#FAE8FF] flex items-center justify-center group-hover:bg-[#EC4899] transition-colors text-lg">
                        {item.emoji}
                      </div>
                      <div>
                        <p className="text-[#581C87] text-sm font-medium group-hover:text-[#EC4899] transition-colors">
                          {item.name}
                        </p>
                        <p className="text-[#7C3AED]/70 text-xs">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-[#581C87] mb-4 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-[#EC4899]" />
                  适合合作的伙伴
                </h3>
                <p className="text-[#581C87]/70 leading-relaxed mb-4 text-sm">
                  {partnerTargets.map((target, i) => (
                    <span key={target}>
                      {i > 0 && <br />}• {target}
                    </span>
                  ))}
                </p>
                <div className="flex items-center gap-2 text-[#7C3AED] mb-4">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">中国</span>
                </div>
                <div className="flex gap-3 mt-6">
                  <div className="sticker bg-[#F9A8D4] px-3 py-1 rounded-full text-white text-xs">
                    💖 期待合作
                  </div>
                  <div
                    className="sticker bg-[#A8D5BA] px-3 py-1 rounded-full text-[#581C87] text-xs"
                    style={{ transform: "rotate(2deg)" }}
                  >
                    ✨ 共同成长
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
