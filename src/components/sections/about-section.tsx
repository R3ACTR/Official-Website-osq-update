'use client';

import { useState } from 'react';
import type { FC } from 'react';
import { Loader2, Wand2 } from 'lucide-react';
import { handleSuggestionAction } from '@/app/actions/suggest-projects';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { type Project } from './projects-section';

interface AboutSectionProps {
  allProjects: Project[];
}

interface Suggestion {
  title: string;
  description: string;
  link: string;
}

export const AboutSection: FC<AboutSectionProps> = ({ allProjects }) => {
  const [aboutText, setAboutText] = useState(
    'Passionate about creating honest and impactful digital experiences. My work explores the intersection of brutalist design principles and modern web development. I thrive on building things that are both functional and thought-provoking, with a soft spot for anything related to artificial intelligence and minimalism.'
  );
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [loading, setLoading] = useState(false);

  const getSuggestions = async () => {
    setLoading(true);
    setSuggestions([]);
    const projectDescriptions = allProjects.map((p) => p.description);
    const suggestedDescriptions = await handleSuggestionAction(aboutText, projectDescriptions);

    const matchedProjects = allProjects
      .filter((p) => suggestedDescriptions.includes(p.description))
      .map((p) => ({ title: p.title, description: p.description, link: p.link }));
    
    setSuggestions(matchedProjects);
    setLoading(false);
  };

  return (
    <section id="about" className="py-20 md:py-32 border-t-2 border-primary">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="font-headline text-4xl md:text-6xl font-bold mb-8">
            About Me
          </h2>
          <Textarea
            value={aboutText}
            onChange={(e) => setAboutText(e.target.value)}
            className="font-body text-lg h-64 border-2 border-primary bg-background focus:ring-accent focus:ring-offset-0"
            placeholder="Tell us about yourself, your skills, and your philosophy..."
          />
        </div>
        <div>
          <h3 className="font-headline text-2xl md:text-3xl font-bold mb-4">
            AI Project Suggestions
          </h3>
          <p className="font-body mb-6 text-foreground/80">
            Based on the "About Me" text, our AI can suggest which of my projects might interest you most. Give it a try!
          </p>
          <Button
            onClick={getSuggestions}
            disabled={loading}
            className="w-full md:w-auto border-2 border-primary bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent shadow-neo-sm hover:shadow-neo transition-none"
          >
            {loading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Wand2 className="mr-2 h-4 w-4" />
            )}
            {loading ? 'Analyzing...' : 'Suggest Projects'}
          </Button>

          {loading && (
             <div className="mt-8 space-y-4">
                <div className="w-full h-24 bg-muted animate-pulse border-2 border-primary"></div>
                <div className="w-full h-24 bg-muted animate-pulse border-2 border-primary"></div>
             </div>
          )}

          {suggestions.length > 0 && !loading && (
            <div className="mt-8">
              <h4 className="font-headline text-xl font-bold mb-4">Recommended for you:</h4>
              <div className="space-y-4">
                {suggestions.map((s) => (
                  <Card key={s.title} className="bg-background border-2 border-primary/70">
                    <CardHeader className="p-4">
                      <CardTitle className="font-headline text-lg">{s.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="font-body text-sm text-foreground/80">{s.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
