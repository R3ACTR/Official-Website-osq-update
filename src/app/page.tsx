import { Header } from '@/components/sections/header';
import { HeroSection } from '@/components/sections/hero-section';
import { WhoWeAreSection } from '@/components/sections/who-we-are-section';

export default function DayosPage() {
  return (
    <div className="bg-background">
      <Header />
      <main>
        <HeroSection />
        <WhoWeAreSection />
      </main>
    </div>
  );
}
