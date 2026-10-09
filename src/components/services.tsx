import { services } from "@/data/services";
import { iconMap, Sparkles } from "./icons";

export default function Services() {
  return (
    <section id="services" className="py-16 px-6 bg-[#FAE8FF]/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-2xl font-semibold text-[#581C87] mb-2 flex items-center gap-3 justify-center">
          <Sparkles className="w-5 h-5 text-[#FBBF24]" />
          我能提供的服务
          <Sparkles className="w-5 h-5 text-[#FBBF24]" />
        </h2>
        <p className="text-[#7C3AED] mb-8 text-center">
          围绕品牌内容、知识资产和AI原型，提供从需求梳理到实际产出的支持
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <article
                key={service.id}
                className="border-[#FBCFE8] card-soft bg-white rounded-2xl overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${service.color}20` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: service.color }} />
                    </div>
                    <h3 className="font-serif text-lg text-[#581C87]">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-[#581C87]/70 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <div className="mb-3">
                    <p className="text-xs font-medium text-[#7C3AED] mb-2">
                      适用客户
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.clients.map((item) => (
                        <span
                          key={item}
                          className="inline-flex items-center bg-[#FFF5F5] text-[#581C87]/70 border border-[#FBCFE8] rounded-full px-2.5 py-0.5 text-xs"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-3">
                    <p className="text-xs font-medium text-[#7C3AED] mb-2">
                      适用场景
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.scenarios.map((item) => (
                        <span
                          key={item}
                          className="inline-flex items-center bg-[#FAE8FF] text-[#7C3AED] rounded-full px-2.5 py-0.5 text-xs"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs font-medium text-[#7C3AED] mb-2">
                      可提供内容
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.deliverables.map((item) => (
                        <span
                          key={item}
                          className="inline-flex items-center bg-[#FFF5F5] text-[#EC4899] border border-[#FBCFE8] rounded-full px-2.5 py-0.5 text-xs"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-[#FAE8FF] rounded-xl p-4 mb-4">
                    <p className="text-sm text-[#581C87] leading-relaxed">
                      {service.value}
                    </p>
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full border border-[#EC4899] text-[#EC4899] px-5 py-2 text-sm font-medium hover:bg-[#EC4899] hover:text-white transition-colors"
                  >
                    {service.cta}
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
