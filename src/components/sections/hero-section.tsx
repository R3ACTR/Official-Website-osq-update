import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative text-center py-20 px-4 overflow-hidden bg-gray-100">
      <div className="relative z-10">
        <h1 className="text-6xl font-bold mb-4 text-gray-800">
          The Data OS for modern data teams
        </h1>
        <p className="max-w-2xl mx-auto text-lg mb-8 text-gray-600">
          A programmable, observable, and scalable data management platform to unify your data infrastructure
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" className="bg-black text-white rounded-full hover:bg-gray-800 px-6">
            Schedule a Demo
          </Button>
          <Button variant="outline" size="lg" className="bg-white text-black rounded-full border-gray-300 hover:bg-gray-200 px-6">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
}
