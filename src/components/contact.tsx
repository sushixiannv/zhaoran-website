import { contactDirections, contactIntro, contactItems } from "@/data/contact";
import { iconMap, Heart } from "./icons";

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-2xl font-semibold text-[#581C87] mb-2 flex items-center gap-3 justify-center">
          <Heart className="w-5 h-5 text-[#EC4899]" />
          {contactIntro.title}
          <Heart className="w-5 h-5 text-[#EC4899]" />
        </h2>
        <p className="text-[#7C3AED] mb-8 text-center max-w-2xl mx-auto">
          {contactIntro.description}
        </p>

        {/* 合作方向入口 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {contactDirections.map((direction) => {
            const Icon = iconMap[direction.icon];
            return (
              <a
                key={direction.label}
                href="#contact-methods"
                className="border-[#FBCFE8] card-soft bg-white rounded-2xl p-4 text-center hover:bg-[#FAE8FF] transition-colors"
              >
                <div
                  className="w-11 h-11 mx-auto rounded-full mb-2 flex items-center justify-center"
                  style={{ backgroundColor: `${direction.color}20` }}
                >
                  <Icon className="w-5 h-5" style={{ color: direction.color }} />
                </div>
                <span className="text-sm font-medium text-[#581C87]">
                  {direction.label}
                </span>
              </a>
            );
          })}
        </div>

        {/* 联系方式区域 */}
        <div
          id="contact-methods"
          className="border-[#FBCFE8] card-soft bg-white rounded-2xl overflow-hidden scroll-mt-24"
        >
          <div className="p-6">
            <h3 className="font-semibold text-[#581C87] mb-4 flex items-center gap-2">
              <Heart className="w-5 h-5 text-[#EC4899]" />
              联系方式
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {contactItems.map((item) => {
                const inner = (
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#FAE8FF] flex items-center justify-center text-lg shrink-0">
                      {item.emoji}
                    </div>
                    <div>
                      <p className="text-[#581C87] text-sm font-medium">
                        {item.name}
                      </p>
                      <p className="text-[#7C3AED]/70 text-xs">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );

                return item.href ? (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group"
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={item.name}>{inner}</div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
