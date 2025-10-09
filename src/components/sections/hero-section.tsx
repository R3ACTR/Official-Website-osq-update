import { DispersingText } from '@/components/ui/dispersing-text';

export function HeroSection() {
  return (
    <section className="container mx-auto px-6 py-20 flex items-center justify-center min-h-[calc(100vh-100px)] relative overflow-hidden">
      <div className="text-center z-10">
        <DispersingText>R3ACTR</DispersingText>
        <p className="mt-4 text-xl text-gray-600 animate-futuristic-arrival-slow">
          Results Through Action, Creativity, Teamwork and Research
        </p>
      </div>
    </section>
  );
}
