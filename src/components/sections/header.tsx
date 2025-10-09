'use client';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const DayosLogo = () => (
    <div className="flex items-center gap-2">
        <Image
          src="https://r3actr.vercel.app/images/rfretr.png"
          alt="Dayos Logo"
          width={90}
          height={22.5}
          className="invert"
        />
    </div>
);


export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <DayosLogo />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="bg-white/30 backdrop-blur-sm rounded-full shadow-md px-6 py-3 flex items-center gap-8">
            <a href="#" className="text-sm text-gray-700 hover:text-black transition-all duration-300 ease-in-out transform hover:scale-110">Platform</a>
            <a href="#" className="text-sm text-gray-700 hover:text-black transition-all duration-300 ease-in-out transform hover:scale-110">Solutions</a>
            <a href="#" className="text-sm text-gray-700 hover:text-black transition-all duration-300 ease-in-out transform hover:scale-110">Use Cases</a>
            <a href="#" className="text-sm text-gray-700 hover:text-black transition-all duration-300 ease-in-out transform hover:scale-110">Resources</a>
            <a href="#" className="text-sm text-gray-700 hover:text-black transition-all duration-300 ease-in-out transform hover:scale-110">Plans</a>
            <a href="#" className="text-sm text-gray-700 hover:text-black transition-all duration-300 ease-in-out transform hover:scale-110">Partnership</a>
            <a href="#" className="text-sm text-gray-700 hover:text-black transition-all duration-300 ease-in-out transform hover:scale-110">Company</a>
          </div>
        </div>
        <div className="flex items-center">
          <Button className="bg-black text-white rounded-full hover:bg-gray-800 px-6">
            Schedule a Demo
          </Button>
        </div>
      </nav>
    </header>
  );
}
