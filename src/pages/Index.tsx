import { Nav } from "@/components/Nav";
import { KineticCursor } from "@/components/KineticCursor";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/Marquee";
import { About } from "@/components/sections/About";
import { Work } from "@/components/sections/Work";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";

const Index = () => (
  <main className="min-h-screen bg-background text-foreground">
    <KineticCursor />
    <Nav />
    <Hero />
    <Marquee items={["engineer", "design", "strategist", "writer", "proj mgmt", "bombay 22.9°N"]} />
    <About />
    <Work />
    <Marquee items={["campaigns", "ui/ux", "database", "web-dev", "ai/ml", "research"]} reverse />
    <Experience />
    <Skills />
    <Contact />
  </main>
);

export default Index;
