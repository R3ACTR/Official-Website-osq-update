import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarInset,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import {
  Home,
  Calendar,
  Users,
  Library,
  Settings,
  LogOut,
  ArrowLeft,
  Bell,
  Search,
  Code2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { TrainerInfoSection } from '@/components/sections/trainer-info-section';

export default function JediTrainerPage() {
  return (
    <div className="bg-[#59D4EE] p-4">
      <div className="border-2 border-black">
        <SidebarProvider>
          <Sidebar collapsible="icon" side="left" variant="sidebar">
            <SidebarHeader>
              <div className="flex items-center gap-2 p-2">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Code2 className="h-6 w-6" />
                </Button>
                <h1 className="font-headline text-2xl font-bold">JEDI</h1>
              </div>
            </SidebarHeader>
            <SidebarMenu className="flex-1 p-2">
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Home" href="#">
                  <Home />
                  <span>Home</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Schedule" href="#">
                  <Calendar />
                  <span>Schedule</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Trainers" href="#" isActive>
                  <Users />
                  <span>Trainers</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Policy Library" href="#">
                  <Library />
                  <span>Policy Library</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Preferences" href="#">
                  <Settings />
                  <span>Preferences</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
            <SidebarFooter className="border-t border-sidebar-border p-2">
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="Log out" href="#">
                    <LogOut />
                    <span>Log out</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarFooter>
          </Sidebar>
          <SidebarInset>
            <header className="flex h-16 items-center justify-between border-b-2 border-black bg-background px-4">
              <div className="flex items-center gap-4">
                <SidebarTrigger className="md:hidden" />
                <Button variant="outline" size="icon" className="border-2 border-black rounded-md">
                  <ArrowLeft />
                </Button>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    placeholder="Find courses, trainers, etc."
                    className="w-64 rounded-md border-2 border-black pl-10"
                  />
                </div>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Bell />
                </Button>
                <Avatar className="h-9 w-9 border-2 border-black">
                  <AvatarImage src="https://picsum.photos/seed/hillary/40/40" alt="User" data-ai-hint="user avatar" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              </div>
            </header>
            <main className="flex-1 p-8 bg-[#F0EBE3]">
              <TrainerInfoSection />
            </main>
          </SidebarInset>
        </SidebarProvider>
      </div>
    </div>
  );
}
