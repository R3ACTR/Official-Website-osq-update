import { Header } from '@/components/sections/header';
import { HeroSection } from '@/components/sections/hero-section';

export default function FlowPage() {
  return (
    <div className="bg-gray-100">
      <Header />
      <main>
        <HeroSection />
      </main>
    </div>
  );
}
