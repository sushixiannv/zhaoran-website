import { navItems } from "@/data/nav";
import { site } from "@/data/site";
import { Heart } from "./icons";

export default function SiteHeader() {
  return (
    <nav className="sticky top-0 z-50 bg-[#FFF5F5]/90 backdrop-blur-md border-b border-[#FBCFE8]">
      <div className="max-w-5xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <span className="font-serif text-xl font-semibold text-[#581C87] flex items-center gap-2">
            {site.name}
            <Heart className="w-4 h-4 text-[#EC4899] heart-beat" />
          </span>
          <div className="hidden md:flex items-center gap-6 text-sm text-[#7C3AED]">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-[#EC4899] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
