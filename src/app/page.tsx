import SiteHeader from "@/components/site-header";
import Hero from "@/components/hero";
import About from "@/components/about";
import WhatIDo from "@/components/what-i-do";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Voyages from "@/components/voyages";
import Faq from "@/components/faq";
import Contact from "@/components/contact";
import SiteFooter from "@/components/site-footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFF5F5] notebook-bg">
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <WhatIDo />
        <Skills />
        <Projects />
        <Voyages />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
