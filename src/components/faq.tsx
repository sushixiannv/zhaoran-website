import Accordion from "./ui/accordion";
import { faqItems } from "@/data/faq";
import { MessageCircle } from "./icons";

export default function Faq() {
  return (
    <section id="faq" className="py-16 px-6 bg-[#FAE8FF]/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-2xl font-semibold text-[#581C87] mb-8 flex items-center gap-3 justify-center">
          <MessageCircle className="w-5 h-5 text-[#EC4899]" />
          常见问题
          <MessageCircle className="w-5 h-5 text-[#EC4899]" />
        </h2>
        <div className="border-[#FBCFE8] card-soft bg-white rounded-2xl overflow-hidden">
          <div className="p-6">
            <Accordion items={faqItems} />
          </div>
        </div>
      </div>
    </section>
  );
}
