import { projects } from "@/data/projects";
import { Star } from "./icons";

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6 bg-[#FAE8FF]/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-2xl font-semibold text-[#581C87] mb-2 flex items-center gap-3 justify-center">
          <Star className="w-5 h-5 text-[#FBBF24]" />
          项目作品集
          <Star className="w-5 h-5 text-[#FBBF24]" />
        </h2>
        <p className="text-[#7C3AED] mb-8 text-center">真实项目经历与成果展示</p>
        <div className="space-y-6">
          {projects.map((project) => {
            const resultText = project.metric?.value ?? project.status ?? project.category;
            const bullets = project.metric
              ? [project.metric.label, project.metric.note].filter(
                  (x): x is string => Boolean(x),
                )
              : project.highlights ?? [];

            return (
              <article
                key={project.id}
                className="border-[#FBCFE8] card-soft bg-white rounded-2xl group overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3 flex-wrap">
                    <span className="text-2xl">{project.emoji}</span>
                    <h3 className="font-semibold text-[#581C87]">{project.title}</h3>
                    <span
                      className="inline-flex items-center font-semibold rounded-full px-3 py-1 text-xs"
                      style={{
                        backgroundColor: `${project.color}20`,
                        color: project.color,
                      }}
                    >
                      {resultText}
                    </span>
                  </div>
                  <p className="text-[#581C87]/70 leading-relaxed mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="sticker inline-flex items-center font-semibold bg-[#FFF5F5] text-[#EC4899] border border-[#FBCFE8] rounded-full px-2 py-0.5 text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {bullets.map((bullet) => (
                      <span
                        key={bullet}
                        className="text-xs text-[#7C3AED]/70 flex items-center gap-1"
                      >
                        <Star className="w-3 h-3" />
                        {bullet}
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
