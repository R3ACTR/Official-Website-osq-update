export function AnimatedHeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden z-0">
        <svg id="hero-svg" className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <defs>
                <path id="hero-path1" d="M-20% 20% L120% 20%"></path>
                <path id="hero-path2" d="M-20% 80% L120% 80%"></path>
            </defs>

            <use xlinkHref="#hero-path1" />
            <use xlinkHref="#hero-path2" />

            <text id="marquee-text-hero1">
                <textPath xlinkHref="#hero-path1">
                    AGENTIC COPILOT FOR YOUR ENTERPRISE AGENTIC COPILOT FOR YOUR ENTERPRISE
                </textPath>
            </text>
            <text id="marquee-text-hero2">
                <textPath xlinkHref="#hero-path2">
                    Results Through Action, Creativity, Teamwork and Research
                </textPath>
            </text>
        </svg>
    </div>
  );
}
