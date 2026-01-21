import Link from "next/link";
import Image from "next/image";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const UpcomingEvents = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-20 lg:pb-20"
      id="upcoming"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={"LIVE EVENTS"}
          className={
            "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="w-full max-w-[1200px] flex flex-col items-center justify-center gap-8">
             {/* Event Card */}
             <div className="group relative w-full max-w-[420px] overflow-hidden rounded-xl bg-[#1c1e24] border border-[#2d2f36] hover:border-[#3e414b] transition-all duration-500 p-4 flex flex-col items-center">
                <div className="w-full overflow-hidden flex justify-center bg-[#0E1016] rounded-lg relative">
                     <Image
                        src="/Events/OSQ_participant_reg.png"
                        alt="Upcoming Event"
                        width={400}
                        height={520}
                        className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                     />
                </div>

                <div className="mt-6 w-full flex justify-center">
                    <Link
                        href="/event"
                        className="inline-flex items-center justify-center px-8 py-3 text-sm font-bold tracking-wider text-[#0E1016] uppercase bg-[#e4ded7] rounded-lg group-hover:bg-blue-400 transition-all duration-300 transform group-hover:-translate-y-1"
                    >
                        Explore
                    </Link>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
