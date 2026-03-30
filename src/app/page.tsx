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

      <footer className="w-full py-8 text-center border-t border-zinc-800/50 mt-12 bg-zinc-950/80 backdrop-blur-sm z-10">
        <p className="text-zinc-500 flex items-center justify-center gap-2">
          Designed and built with <Coffee size={16} className="text-emerald-500" /> by Tomáš Magula. &copy; {new Date().getFullYear()}
        </p>
      </footer>
    </main>
  );
}
