export function HeroSection() {
  return (
    <section id="hero" className="flex items-center justify-center min-h-[calc(100dvh-4rem)] py-20 text-center">
      <div>
        <h1 className="font-headline text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter">
          YOUR NAME
        </h1>
        <p className="font-body text-xl md:text-2xl lg:text-3xl mt-4 text-primary">
          Creative Developer & Digital Artisan
        </p>
      </div>
    </section>
  );
}
