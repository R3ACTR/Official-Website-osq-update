import Image from "next/image";

export function HeroSection() {
  return (
    <section className="container mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-7xl font-extrabold mb-4 text-black leading-tight">
            AGENTIC COPILOT<br />
            FOR YOUR<br />
            ENTERPRISE
          </h1>
          <p className="max-w-md text-lg mb-8 text-gray-700">
            The business apps your depend on, the support you deserve, and the AI you've been waiting for - all in one platform.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src="https://picsum.photos/seed/dayos-hero/600/500"
            alt="Agentic Copilot Blocks"
            width={600}
            height={500}
            data-ai-hint="abstract 3d blocks"
          />
        </div>
      </div>
    </section>
  );
}
