import SiteHeader from "@/components/site-header";
import Hero from "@/components/hero";
import Results from "@/components/results";
import Services from "@/components/services";
import Projects from "@/components/projects";
import About from "@/components/about";
import Contact from "@/components/contact";
import SiteFooter from "@/components/site-footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFF5F5] notebook-bg">
      <SiteHeader />
      <main>
        <Hero />
        <Results />
        <Services />
        <Projects />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
