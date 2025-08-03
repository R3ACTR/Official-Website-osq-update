import type { FC } from 'react';
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export interface Project {
  title: string;
  description: string;
  link: string;
  image: string;
  tags: string[];
  dataAiHint: string;
}

interface ProjectsSectionProps {
  projects: Project[];
}

export const ProjectsSection: FC<ProjectsSectionProps> = ({ projects }) => {
  return (
    <section id="projects" className="py-20 md:py-32">
      <h2 className="font-headline text-4xl md:text-6xl font-bold text-center mb-12">
        Curated Works
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Card key={project.title} className="bg-background border-2 border-primary shadow-neo-sm hover:shadow-neo transition-none flex flex-col">
            <CardHeader className="p-4">
              <div className="aspect-video relative border-2 border-primary">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  data-ai-hint={project.dataAiHint}
                />
              </div>
            </CardHeader>
            <CardContent className="p-4 flex-grow">
              <CardTitle className="font-headline text-2xl mb-2">{project.title}</CardTitle>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="border border-primary/50">{tag}</Badge>
                ))}
              </div>
              <p className="font-body text-foreground/80">{project.description}</p>
            </CardContent>
            <CardFooter className="p-4">
              <Button asChild className="w-full border-2 border-primary bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent shadow-neo-sm hover:shadow-neo transition-none">
                <Link href={project.link}>
                  View Project <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
