'use client';
import { Button } from '@/components/ui/button';

const DayosLogo = () => (
    <div className="flex items-center gap-2">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 0.5C11.95 0.5 10.02 1.2 8.44996 2.45L5.19996 4.95C4.30996 5.65 3.59996 6.51 3.04996 7.48L1.15996 10.7C0.559961 11.83 0.249961 13.06 0.249961 14.3C0.249961 16.92 1.34996 19.27 3.04996 20.98L4.33996 22.28C5.55996 23.51 7.10996 24.42 8.83996 24.92L12.56 26.03C13.01 26.17 13.5 26.25 14 26.25C16.05 26.25 17.98 25.55 19.55 24.3L22.8 21.8C23.69 21.1 24.4 20.24 24.95 19.27L26.84 16.05C27.44 14.92 27.75 13.69 27.75 12.45C27.75 9.83 26.65 7.48 24.95 5.77L23.66 4.47C22.44 3.24 20.89 2.33 19.16 1.83L15.44 0.72C14.99 0.58 14.5 0.5 14 0.5Z" stroke="black" strokeWidth="1.5"/>
            <path d="M14 6.8125C18.05 6.8125 21.25 10.0125 21.25 14.0625C21.25 18.1125 18.05 21.3125 14 21.3125C9.95 21.3125 6.75 18.1125 6.75 14.0625C6.75 10.0125 9.95 6.8125 14 6.8125Z" stroke="black" strokeWidth="1.5"/>
        </svg>
        <span className="font-bold text-2xl">Dayos</span>
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
          <div className="bg-white/30 backdrop-blur-sm rounded-full shadow-md px-4 py-2 flex items-center gap-6">
            <a href="#" className="text-sm text-gray-700 hover:text-black transition-all duration-300 ease-in-out hover:scale-110">Platform</a>
            <a href="#" className="text-sm text-gray-700 hover:text-black transition-all duration-300 ease-in-out hover:scale-110">Solutions</a>
            <a href="#" className="text-sm text-gray-700 hover:text-black transition-all duration-300 ease-in-out hover:scale-110">Use Cases</a>
            <a href="#" className="text-sm text-gray-700 hover:text-black transition-all duration-300 ease-in-out hover:scale-110">Resources</a>
            <a href="#" className="text-sm text-gray-700 hover:text-black transition-all duration-300 ease-in-out hover:scale-110">Plans</a>
            <a href="#" className="text-sm text-gray-700 hover:text-black transition-all duration-300 ease-in-out hover:scale-110">Partnership</a>
            <a href="#" className="text-sm text-gray-700 hover:text-black transition-all duration-300 ease-in-out hover:scale-110">Company</a>
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
