import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection, type Project } from "@/components/sections/projects-section";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";

const projects: Project[] = [
  {
    title: "QuantumLeap CRM",
    description: "A futuristic CRM platform with predictive analytics and a focus on minimalist design.",
    link: "#",
    image: "https://placehold.co/600x400.png",
    tags: ["Development", "Design"],
    dataAiHint: "technology abstract"
  },
  {
    title: "Project Nova",
    description: "An e-commerce site for a streetwear brand, built with a raw, brutalist aesthetic.",
    link: "#",
    image: "https://placehold.co/600x400.png",
    tags: ["Development"],
    dataAiHint: "fashion retail"
  },
  {
    title: "AI Art Generator",
    description: "A web app that uses artificial intelligence to create unique art pieces from text prompts.",
    link: "#",
    image: "https://placehold.co/600x400.png",
    tags: ["Artificial Intelligence"],
    dataAiHint: "robot art"
  },
  {
    title: "Zenith Mobile App",
    description: "A wellness app with a clean, uncluttered interface promoting digital minimalism.",
    link: "#",
    image: "https://placehold.co/600x400.png",
    tags: ["Design", "Minimalism"],
    dataAiHint: "mobile app"
  },
   {
    title: "DataWave Analytics",
    description: "A business intelligence dashboard design focusing on data clarity and brutalist UI principles.",
    link: "#",
    image: "https://placehold.co/600x400.png",
    tags: ["Design", "Development"],
    dataAiHint: "data dashboard"
  },
   {
    title: "CodeScribe",
    description: "A technical documentation generator that automates developer guides.",
    link: "#",
    image: "https://placehold.co/600x400.png",
    tags: ["Development"],
    dataAiHint: "code screen"
  },
];


export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Header />
      <main className="flex-1 container mx-auto px-4 md:px-8">
        <HeroSection />
        <ProjectsSection projects={projects} />
        <AboutSection allProjects={projects} />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
