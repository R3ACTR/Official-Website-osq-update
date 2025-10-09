'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export function AiGapClosedSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSectionHeight = window.innerHeight * 0.5;
      if (window.scrollY > heroSectionHeight) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check in case the page is already scrolled down
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      className={cn(
        'bg-black text-white py-24 px-6 rounded-t-[4rem] -mt-20 relative z-20 transition-all duration-1000 ease-in-out transform',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
      )}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-left">
          <div>
            <h2 className="text-7xl font-bold font-headline mb-6">AI.</h2>
            <p className="text-xl text-neutral-300">
              The technology no one can afford to ignore-buy most struggle to implement securely, understand fully, or use effectively.
            </p>
          </div>
          <div>
            <h2 className="text-7xl font-bold font-headline mb-6">GAP.</h2>
            <p className="text-xl text-neutral-300">
              The Gap between technology, skills and people resources.
            </p>
          </div>
          <div>
            <h2 className="text-7xl font-bold font-headline mb-6">CLOSED.</h2>
            <p className="text-xl text-neutral-300">
              Real solutions. Real people. Real outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
