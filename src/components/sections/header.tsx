'use client';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown, BarChart, ArrowRight } from 'lucide-react';

const FlowLogo = () => (
  <div className="flex items-center gap-2">
    <BarChart className="h-6 w-6" />
    <span className="font-bold text-xl">Flow</span>
  </div>
);

export function Header() {
  return (
    <header className="bg-cream">
      <div className="bg-dark-green text-secondary-foreground py-2 text-center text-sm">
        <span>Learn more about the technical and research problems we're solving at Wispr</span>
        <a href="#" className="underline ml-2 inline-flex items-center">
          Read Article <ArrowRight className="h-4 w-4 ml-1" />
        </a>
      </div>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-8">
          <FlowLogo />
          <div className="hidden md:flex items-center gap-6">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm outline-none">
                Product <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Product 1</DropdownMenuItem>
                <DropdownMenuItem>Product 2</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm outline-none">
                Individuals <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>For Individuals</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <a href="#" className="text-sm">Business</a>
            <a href="#" className="text-sm">Pricing</a>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm outline-none">
                About <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>About us</DropdownMenuItem>
                <DropdownMenuItem>Careers</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
             <Button variant="outline" className="text-sm border-gray-400">Research</Button>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" className="border-light-purple text-black bg-white hover:bg-primary/10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="mr-2"
            >
              <path d="M0 0H7V7H0V0Z" fill="#0D0D0D" />
              <path d="M9 0H16V7H9V0Z" fill="#0D0D0D" />
              <path d="M0 9H7V16H0V9Z" fill="#0D0D0D" />
              <path d="M9 9H16V16H9V9Z" fill="#0D0D0D" />
            </svg>
            Download for Windows
          </Button>
        </div>
      </nav>
    </header>
  );
}
