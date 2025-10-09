'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Twitter, Linkedin, Instagram, Mic } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const StatCard = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center justify-center p-4 border-2 border-black rounded-md bg-white">
    <span className="text-xl font-bold">{value}</span>
    <span className="text-sm text-center">{label}</span>
  </div>
);

export function TrainerInfoSection() {
  return (
    <div>
      <h1 className="text-4xl font-bold font-headline mb-8 text-white">Trainer info</h1>
      <div className="border-2 border-black rounded-lg bg-primary p-1">
        <div className="border-2 border-black rounded-md bg-[#FAF5E9] p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex justify-center items-center">
              <div className="relative w-48 h-48">
                <Image
                  src="https://picsum.photos/seed/hillary-main/192/192"
                  alt="Hillary Bale"
                  width={192}
                  height={192}
                  className="rounded-full border-2 border-black"
                  data-ai-hint="woman portrait"
                />
                <div className="absolute inset-0 bg-yellow-300 opacity-20 rounded-full -z-10 transform translate-x-2 translate-y-2"></div>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-3xl font-bold font-headline">Hillary Bale</h2>
                  <p className="text-muted-foreground">hill.bale@gmail.com</p>
                </div>
                <div className="flex gap-2">
                  <Link href="#">
                    <Button variant="outline" size="icon" className="border-2 border-black rounded-md">
                      <Twitter className="h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="#">
                    <Button variant="outline" size="icon" className="border-2 border-black rounded-md">
                      <Linkedin className="h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="#">
                    <Button variant="outline" size="icon" className="border-2 border-black rounded-md">
                      <Instagram className="h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-6">
                <StatCard value="10+" label="experience" />
                <StatCard value="#1" label="on platform" />
                <StatCard value="5 ya" label="of teaching" />
                <StatCard value="12" label="courses" />
              </div>
              <p className="mb-6">
                I'm a JavaScript trainer with over 10 years of experience in the software development industry. Passionate about teaching how to code and helping them develop their skills.
              </p>
              <div className="flex gap-4">
                <Button className="bg-black text-white rounded-md border-2 border-black hover:bg-gray-800">
                  <Mic className="mr-2 h-5 w-5" />
                  Request session
                </Button>
                <Button variant="outline" className="bg-white rounded-md border-2 border-black hover:bg-gray-100">
                  Portfolio
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
