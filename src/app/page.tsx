import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Mentors } from "@/components/sections/Mentors";
import { Contact } from "@/components/sections/Contact";
import { IntroLoader } from "@/components/ui/IntroLoader";
import { FloatingActions } from "@/components/ui/FloatingActions";

export default function Home() {
  return (
    <>
      <IntroLoader />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Mentors />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
