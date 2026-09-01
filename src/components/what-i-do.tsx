import { whatIDo } from "@/data/what-i-do";
import { iconMap, Star } from "./icons";

export default function WhatIDo() {
  return (
    <section id="whatido" className="py-16 px-6 bg-[#FAE8FF]/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-2xl font-semibold text-[#581C87] mb-8 flex items-center gap-3 justify-center">
          <Star className="w-5 h-5 text-[#FBBF24]" />
          我现在在做什么
          <Star className="w-5 h-5 text-[#FBBF24]" />
        </h2>
        <div className="space-y-6">
          {whatIDo.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <article
                key={item.title}
                className="border-[#FBCFE8] card-soft bg-white rounded-2xl overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${item.color}20` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: item.color }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-[#581C87] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-[#581C87]/70 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
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
