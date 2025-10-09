import { Header } from '@/components/sections/header';
import { HeroSection } from '@/components/sections/hero-section';
import { AiGapClosedSection } from '@/components/sections/ai-gap-closed-section';

export default function DayosPage() {
  return (
    <div className="bg-background">
      <Header />
      <main>
        <HeroSection />
        <AiGapClosedSection />
      </main>
    </div>
  );
}
