import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative text-center py-20 px-4 overflow-hidden">
      <div className="relative z-10">
        <h1 className="text-7xl font-headline font-medium mb-4">
          <span className="text-gray-400">Don't type,</span>
          <span className="text-black"> just speak</span>
        </h1>
        <p className="max-w-md mx-auto text-lg mb-8">
          The voice-to-text AI that turns speech into clear, polished writing in every app.
        </p>
        <Button variant="outline" size="lg" className="border-2 border-light-purple text-black bg-white hover:bg-primary/10 mb-4 px-6 py-6 text-base">
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
        <p className="text-sm text-gray-500">Available on Mac, Windows and iPhone</p>
      </div>

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          <div className="hero_animation is-left w-embed">
            <svg id="hero-svg" width="100%" height="auto" viewBox="0 0 1048 594" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path id="curve1" d="M0.597656 50.924805C17.4612 143.2965 97.8522 293.141 284.508 353.548C440.828 399.056 583.839 294.067 500.618 184.7492C417.397 75.4309 238.217 282.098 499.258 441.668C551.913 477.802 817.468 561.26 1046.43 565.235" stroke="white"></path>
              <text x="-3300" fontSize="24">
                <textPath id="marquee-text-hero1" xlinkHref="#curve1">Umm, hope your week has started well…I was talking to Cheyene earlier but reception was really bad and I think their going to handle the first part of the project, but I’m not totally sure. Also, I told the team the the new timeline should be ready by Friday, although it’s probably going to slip. There’s been a lot of back and forth and honestly the the whole thing’s been kind of chaotic, like nobody really knows what’s going on so can you check in with them and see if the notes from yesterday’s meeting were sent out, or if they’re still waiting. I think Cheyene mentioned it but didn’t confirm, and now I’m a little lost.</textPath>
                <animate id="marquee1-anim" attributeName="x" dur="35s" values="-3300; 0" repeatCount="indefinite"></animate>
              </text>
            </svg>
          </div>
          <div className="hero_animation is-right w-embed">
            <svg width="100%" height="auto" viewBox="0 0 1024 620" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path id="curve2" d="M2.04309 563.872C111.592 558.268 316.491 554.016 517.963 490.064C703.017 431.323 875.319 444.531 1021.88 453.216" stroke="#1A1A1A" strokeWidth="30"></path>
              <text x="-4500" fontSize="24">
                <textPath id="marquee-text-hero2" xlinkHref="#curve2">Hope your week is off to a good start. I was talking to Cheyene earlier, but the reception was really bad. I think they’re going to handle the first part of the project, but I’m not totally sure. I also told the team the new timeline should be ready by Friday — although it might slip. There’s been a lot of back and forth, and honestly, the whole thing has been a bit chaotic. It feels like nobody really knows what’s going on. Can you check in with them and see if the notes from yesterday’s meeting were sent out, or if they’re still waiting? I think Cheyene mentioned it, but didn’t confirm — and now I’m a little lost!</textPath>
                <animate id="marquee2-anim" attributeName="x" dur="50s" values=" -4500; 0" repeatCount="indefinite"></animate>
              </text>
            </svg>
          </div>
        </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
          <div className="w-40 h-16 bg-white rounded-full border-2 border-black flex items-center justify-center">
              <svg width="80" height="25" viewBox="0 0 100 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0" y="10" width="4" height="5" fill="black"></rect>
                  <rect x="6" y="7" width="4" height="11" fill="black"></rect>
                  <rect x="12" y="4" width="4" height="17" fill="black"></rect>
                  <rect x="18" y="7" width="4" height="11" fill="black"></rect>
                  <rect x="24" y="10" width="4" height="5" fill="black"></rect>
                  <rect x="30" y="12" width="4" height="1" fill="black"></rect>
                  <rect x="36" y="12" width="4" height="1" fill="black"></rect>
                  <rect x="42" y="12" width="4" height="1" fill="black"></rect>
                  <rect x="48" y="10" width="4" height="5" fill="black"></rect>
                  <rect x="54" y="7" width="4" height="11" fill="black"></rect>
                  <rect x="60" y="4" width="4" height="17" fill="black"></rect>
                  <rect x="66" y="7" width="4" height="11" fill="black"></rect>
                  <rect x="72" y="10" width="4" height="5" fill="black"></rect>
                  <rect x="78" y="12" width="4" height="1" fill="black"></rect>
                  <rect x="84" y="12" width="4" height="1" fill="black"></rect>
                  <rect x="90" y="12" width="4" height="1" fill="black"></rect>
                  <rect x="96" y="12" width="4" height="1" fill="black"></rect>
              </svg>
          </div>
      </div>
    </section>
  );
}
