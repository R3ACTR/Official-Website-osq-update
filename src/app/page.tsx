import { Header } from '@/components/sections/header';
import { HeroSection } from '@/components/sections/hero-section';
import { AiGapClosedSection } from '@/components/sections/ai-gap-closed-section';
import { TrainerInfoSection } from '@/components/sections/trainer-info-section';

export default function DayosPage() {
  return (
    <div className="bg-background">
      <Header />
      <main>
        <HeroSection />
        <AiGapClosedSection />
        <div className="py-24 px-6 bg-black">
          <div className="container mx-auto">
            <TrainerInfoSection />
          </div>
        </div>
      </main>
    </div>
  );
}
