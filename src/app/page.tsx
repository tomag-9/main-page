import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import BrandBar from "@/components/BrandBar";
import BackToTop from "@/components/BackToTop";
import { Coffee } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <BrandBar />
      <Hero />
      <TechStack />
      <Projects />
      <Experience />
      <Contact />
      <BackToTop />

      <footer className="w-full py-8 text-center border-t mt-12 z-10 border-slate-200/15 bg-slate-950/35 backdrop-blur-xl">
        <p className="text-slate-300/75 flex items-center justify-center gap-2">
          Designed and built with <Coffee size={16} className="text-orange-300" /> by Tomáš Magula. &copy; {new Date().getFullYear()}
        </p>
      </footer>
    </main>
  );
}
