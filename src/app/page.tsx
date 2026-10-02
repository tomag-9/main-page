// app/page.tsx
import HeroApproach from "@/components/HeroApproach";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import BrandBar from "@/components/BrandBar";
import BackToTop from "@/components/BackToTop";
import FooterContent from "@/components/FooterContent";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <BrandBar />
      <HeroApproach />
      <Projects />
      <Stack />
      <Experience />
      <Contact />
      <BackToTop />

      <footer className="z-10 mt-12 w-full border-t border-zinc-100/10 bg-zinc-950/45 py-8 text-center backdrop-blur-xl">
        <FooterContent />
      </footer>
    </main>
  );
}
