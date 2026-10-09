"use client";

import { useState } from "react";
import { navItems } from "@/data/nav";
import { site } from "@/data/site";
import { Heart, Menu, X } from "./icons";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#FFF5F5]/90 backdrop-blur-md border-b border-[#FBCFE8]">
      <div className="max-w-5xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <span className="font-serif text-xl font-semibold text-[#581C87] flex items-center gap-2">
            {site.name}
            <Heart className="w-4 h-4 text-[#EC4899] heart-beat" />
          </span>

          {/* 桌面端横向导航 */}
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

          {/* 手机端菜单按钮 */}
          <button
            type="button"
            aria-label={open ? "关闭菜单" : "打开菜单"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden text-[#581C87] p-1 -mr-1 hover:text-[#EC4899] transition-colors"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* 手机端折叠菜单 */}
        {open && (
          <div className="md:hidden mt-4 pb-2 flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm text-[#7C3AED] hover:text-[#EC4899] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
