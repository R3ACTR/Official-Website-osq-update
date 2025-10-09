export function HeroSection() {
  return (
    <section id="hero" className="relative flex items-center justify-center min-h-[calc(100dvh-4rem)] py-20 text-center overflow-hidden">
      <div className="hero_animation-wrapper-v2 w-full">
        <div className="hero_animation is-left w-embed">
          <svg id="hero-svg" width="100%" height="auto" viewBox="0 0 1048 594" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="curve1" d="M0.597656 50.924805C17.4612 143.2965 97.8522 293.141 284.508 353.548C440.828 399.056 583.839 294.067 500.618 184.7492C417.397 75.4309 238.217 282.098 499.258 441.668C551.913 477.802 817.468 561.26 1046.43 565.235" stroke="white"></path>
            <text x="-3300" style={{ fontSize: 'inherit', fontWeight: 400, fill: '#1A1A1A', baselineShift: '-20%', opacity: 0.4 }}>
              <textPath id="marquee-text-hero1" xlinkHref="#curve1">Umm, hope your week has started well…I was talking to Cheyene earlier but reception was really bad and I think their going to handle the first part of the project, but I’m not totally sure. Also, I told the team the the new timeline should be ready by Friday, although it’s probably going to slip. There’s been a lot of back and forth and honestly the the whole thing’s been kind of chaotic, like nobody really knows what’s going on so can you check in with them and see if the notes from yesterday’s meeting were sent out, or if they’re still waiting. I think Cheyene mentioned it but didn’t confirm, and now I’m a little lost.</textPath>
              <animate id="marquee1-anim" attributeName="x" dur="35s" values="-3300; 0" repeatCount="indefinite"></animate>
            </text>
          </svg>
        </div>
        <div className="hero_animation is-right w-embed">
          <svg width="100%" height="auto" viewBox="0 0 1024 620" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="curve2" d="M2.04309 563.872C111.592 558.268 316.491 554.016 517.963 490.064C703.017 431.323 875.319 444.531 1021.88 453.216" stroke="#1A1A1A" strokeWidth="30"></path>
            <text x="-4500" style={{ fontSize: 'inherit', fontWeight: 600, fill: '#fff', baselineShift: '-30%' }}>
              <textPath id="marquee-text-hero2" xlinkHref="#curve2">Hope your week is off to a good start. I was talking to Cheyene earlier, but the reception was really bad. I think they’re going to handle the first part of the project, but I’m not totally sure. I also told the team the new timeline should be ready by Friday — although it might slip. There’s been a lot of back and forth, and honestly, the whole thing has been a bit chaotic. It feels like nobody really knows what’s going on. Can you check in with them and see if the notes from yesterday’s meeting were sent out, or if they’re still waiting? I think Cheyene mentioned it but didn’t confirm — and now I’m a little lost!</textPath>
              <animate id="marquee2-anim" attributeName="x" dur="50s" values=" -4500; 0" repeatCount="indefinite"></animate>
            </text>
          </svg>
        </div>
      </div>
      <style jsx>{`
        #hero-svg path {
          fill: transparent;
        }
        .hero_animation-wrapper-v2 {
          position: absolute;
          inset: 0;
        }
        .hero_animation.is-left {
          position: absolute;
          left: 0;
          top: 0;
          right: auto;
          bottom: auto;
        }
        .hero_animation.is-right {
          position: absolute;
          left: auto;
          top: auto;
          right: 0;
          bottom: 0;
        }
      `}</style>
      <div>
        <h1 className="font-headline text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter">
          YOUR NAME
        </h1>
        <p className="font-body text-xl md:text-2xl lg:text-3xl mt-4 text-primary">
          Creative Developer & Digital Artisan
        </p>
      </div>
    </section>
  );
}
