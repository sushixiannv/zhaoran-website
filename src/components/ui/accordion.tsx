"use client";

import { useState } from "react";
import { ChevronDown } from "../icons";
import type { FaqItem } from "@/data/types";

interface AccordionProps {
  items: FaqItem[];
}

/**
 * FAQ 折叠组件（单开模式，默认全部收起）。
 * 使用 button + aria-expanded 保证键盘与屏幕阅读器可用。
 */
export default function Accordion({ items }: AccordionProps) {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="w-full">
      {items.map((item, index) => {
        const value = `item-${index}`;
        const isOpen = open === value;

        return (
          <div
            key={item.question}
            className="border-b border-[#FBCFE8] last:border-0"
          >
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : value)}
              className="flex w-full items-start justify-between gap-4 py-4 text-left text-sm font-medium text-[#581C87] transition-all hover:text-[#EC4899] hover:underline"
            >
              {item.question}
              <ChevronDown
                className={`size-4 shrink-0 translate-y-0.5 text-[#7C3AED] transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isOpen && (
              <div className="pb-4 text-sm leading-relaxed text-[#581C87]/70">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
