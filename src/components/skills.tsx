import { skillGroups } from "@/data/skills";
import { iconMap, Sparkles } from "./icons";

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-2xl font-semibold text-[#581C87] mb-8 flex items-center gap-3 justify-center">
          <Sparkles className="w-5 h-5 text-[#FBBF24]" />
          技能专长
          <Sparkles className="w-5 h-5 text-[#FBBF24]" />
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group) => {
            const Icon = iconMap[group.icon];
            return (
              <article
                key={group.title}
                className="border-[#FBCFE8] card-soft bg-white rounded-2xl"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${group.color}20` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: group.color }} />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg text-[#581C87]">
                        {group.title}
                      </h3>
                      {group.highlight && (
                        <span className="text-xs text-[#EC4899]">★ 核心优势</span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="sticker inline-flex items-center font-semibold bg-[#FAE8FF] text-[#7C3AED] rounded-full px-3 py-1 text-xs"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
