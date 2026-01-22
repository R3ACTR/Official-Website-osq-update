import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-20 lg:pb-0"
      id="about"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={
            "WE RESEARCH, WE INNOVATE, WE BUILD."
          }
          className={
            "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
            <AnimatedBody
              text={
                "At R3ACTR, we specialize in building innovative software solutions, research-driven projects, and cutting-edge web experiences. From AI and Web3 applications to SaaS platforms, our goal is to create products that make a real impact."
              }
            />
            <AnimatedBody
              text={
                "We combine creativity, technology, and research to craft software that is not only functional but also intelligent, scalable, and user-friendly. Whether designing sleek interfaces, developing complex applications, or exploring emerging technologies, our team is always pushing the boundaries of what’s possible."
              }
              className={"hidden md:block"}
            />
            <AnimatedBody
              text={
                "Beyond development, R3ACTR thrives on collaboration and knowledge-sharing. We actively engage with tech communities, contribute to research, and mentor upcoming talent, ensuring our work is informed, innovative, and impactful."
              }
            />
            <AnimatedBody
              text={
                "We’re constantly working on exciting projects and solutions, and we welcome opportunities for partnerships and collaborations that drive technology forward."
              }
            />
          </div>

          <div className="mb-24 flex w-[100%] flex-col gap-4 text-base font-normal leading-relaxed tracking-wide text-[#e4ded7]/80 sm:mb-32 md:mb-40 md:gap-6 md:text-[16px] md:leading-normal lg:mt-0 lg:mb-16 lg:max-w-[30%] lg:text-[18px]">
            <div className="flex flex-col gap-4 md:gap-3">
              <AnimatedTitle
                text={"Web Dev"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "Next.js, TypeScript, HTML5, Instagram, NextAuth, Firebase, Supabase, Vercel."
                }
              />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"ML Libraries"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "TensorFlow, PyTorch, scikit-learn, XGBoost, Hugging Face Transformers, OpenCV, Keras, FastAI."
                }
              />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"Design Tools"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "Figma, Framer, FigJam, Adobe XD, ProtoPie, Adobe Photoshop, UX Research, UI Design, Prototyping."
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
