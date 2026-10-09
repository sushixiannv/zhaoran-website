import { site } from "@/data/site";
import { Heart, Star } from "./icons";

export default function SiteFooter() {
  return (
    <footer className="py-10 px-6 border-t border-[#FBCFE8]">
      <div className="max-w-5xl mx-auto text-center">
        <p className="font-serif text-[#581C87] mb-2 flex items-center justify-center gap-2">
          {site.name}
          <Heart className="w-4 h-4 text-[#EC4899] heart-beat" />
        </p>
        <p className="text-[#7C3AED] text-sm mb-2">
          AI应用、内容资产与商业方案实践者
        </p>
        <p className="text-[#7C3AED]/60 text-xs">
          © {new Date().getFullYear()} {site.name} · AI品牌内容 · 知识资产化 · AI产品原型
        </p>
        <div className="flex justify-center gap-2 mt-4">
          <Star className="w-4 h-4 text-[#FBBF24] twinkle" />
          <Star
            className="w-4 h-4 text-[#EC4899] twinkle"
            style={{ animationDelay: "0.5s" }}
          />
          <Star
            className="w-4 h-4 text-[#7C3AED] twinkle"
            style={{ animationDelay: "1s" }}
          />
        </div>
      </div>
    </footer>
  );
}
