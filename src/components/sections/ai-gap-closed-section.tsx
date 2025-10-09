'use client';

import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

export function AiGapClosedSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: '0px',
        threshold: 0.1
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={cn(
        'transition-opacity duration-1000 ease-in-out',
        isVisible ? 'opacity-100' : 'opacity-0'
      )}
    >
      <section
        className={cn(
          'bg-black text-white py-24 px-6 rounded-t-[4rem]'
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
    </div>
  );
}
