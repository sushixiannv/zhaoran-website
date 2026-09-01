import Image from "next/image";
import { site } from "@/data/site";
import { Heart, Star } from "./icons";

/** 顶部贴纸标签的配色与旋转（与顺序一一对应） */
const tagStyles = [
  "sticker bg-[#F9A8D4] px-4 py-2 rounded-full text-white text-sm font-medium",
  "sticker bg-[#7C3AED] px-4 py-2 rounded-full text-white text-sm font-medium",
  "sticker bg-[#A8D5BA] px-4 py-2 rounded-full text-[#581C87] text-sm font-medium",
];
const tagTransforms = [undefined, "rotate(2deg)", "rotate(-1deg)"] as const;

export default function Hero() {
  const { hero } = site;

  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center gap-12">
          {/* 顶部贴纸标签 */}
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            {hero.tags.map((tag, i) => (
              <div
                key={tag}
                className={tagStyles[i]}
                style={tagTransforms[i] ? { transform: tagTransforms[i] } : undefined}
              >
                {tag}
              </div>
            ))}
          </div>

          {/* 拍立得头像 + 装饰 */}
          <div className="relative">
            <div className="polaroid">
              <Image
                src="/avatar.jpg"
                alt={site.name}
                width={192}
                height={192}
                priority
                className="h-48 w-48 rounded-none object-cover object-top"
              />
            </div>
            <Heart className="absolute -top-4 -right-4 w-8 h-8 text-[#EC4899] heart-beat" />
            <Star className="absolute -bottom-2 -left-6 w-6 h-6 text-[#FBBF24] twinkle" />
          </div>

          {/* 姓名与简介 */}
          <div className="text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-[#581C87] mb-3">
              {site.name}
            </h1>
            <p className="text-lg text-[#EC4899] font-medium mb-4 flex items-center justify-center gap-2">
              {site.brand}
              <Heart className="w-4 h-4 heart-beat" />
            </p>
            <p className="text-[#7C3AED] text-lg mb-4">{hero.subtitle}</p>
            <p className="text-[#581C87]/70 leading-relaxed max-w-xl mx-auto">
              {hero.description}
            </p>
          </div>

          {/* 口号胶囊 */}
          <div className="bg-[#FAE8FF] rounded-full px-8 py-3 text-[#581C87] font-medium flex items-center gap-2 text-center">
            <Star className="w-4 h-4 text-[#FBBF24]" />
            {hero.slogan}
            <Star className="w-4 h-4 text-[#FBBF24]" />
          </div>
        </div>
      </div>
    </section>
  );
}
