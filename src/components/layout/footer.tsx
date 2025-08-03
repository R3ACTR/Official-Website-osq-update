import { Github, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t-2 border-primary bg-background">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4 py-8 md:px-8">
        <p className="text-sm text-foreground/80">&copy; {new Date().getFullYear()} NeoFolio. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="#" aria-label="Github">
            <Github className="h-6 w-6 text-primary hover:text-accent transition-none" />
          </Link>
          <Link href="#" aria-label="Twitter">
            <Twitter className="h-6 w-6 text-primary hover:text-accent transition-none" />
          </Link>
          <Link href="#" aria-label="LinkedIn">
            <Linkedin className="h-6 w-6 text-primary hover:text-accent transition-none" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
