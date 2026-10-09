import { projects } from "@/data/projects";
import { Star } from "./icons";

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-2xl font-semibold text-[#581C87] mb-2 flex items-center gap-3 justify-center">
          <Star className="w-5 h-5 text-[#FBBF24]" />
          代表项目
          <Star className="w-5 h-5 text-[#FBBF24]" />
        </h2>
        <p className="text-[#7C3AED] mb-8 text-center">
          真实参与、真实交付、真实结果
        </p>
        <div className="space-y-6">
          {projects.map((project) => (
            <article
              key={project.id}
              className="border-[#FBCFE8] card-soft bg-white rounded-2xl overflow-hidden"
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
                    {project.status}
                  </span>
                </div>

                <p className="font-serif text-lg font-semibold text-[#EC4899] mb-3">
                  {project.result}
                </p>

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

                {project.note && (
                  <p className="text-xs text-[#7C3AED]/70 flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    {project.note}
                  </p>
                )}

                {project.highlights && (
                  <div>
                    <p className="text-xs font-medium text-[#7C3AED] mb-2">
                      可展示项目
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.highlights.map((item) => (
                        <span
                          key={item}
                          className="inline-flex items-center bg-[#FAE8FF] text-[#7C3AED] rounded-full px-2.5 py-0.5 text-xs"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
