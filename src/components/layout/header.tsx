import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-primary bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        <Link href="/" className="font-headline text-2xl font-bold text-primary hover:text-accent transition-none">
          NeoFolio
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="#projects" className="font-headline text-lg font-medium hover:text-accent transition-none">
            Work
          </Link>
          <Link href="#about" className="font-headline text-lg font-medium hover:text-accent transition-none">
            About
          </Link>
          <Link href="#contact" className="font-headline text-lg font-medium hover:text-accent transition-none">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
