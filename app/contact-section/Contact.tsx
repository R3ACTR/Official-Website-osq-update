import Link from "next/link";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import { monaSans } from "../fonts/monaSans";

const Contact = () => {
    return (
        <section className="relative w-full items-center justify-center overflow-hidden bg-[#0E1016] py-16 md:py-20 lg:py-24" id="contact">
             <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
                <AnimatedTitle
                    text={"GET IN TOUCH"}
                    className={
                        "mb-10 text-center text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                    }
                    wordSpace={"mr-[14px]"}
                    charSpace={"mr-[0.001em]"}
                />

                <div className="flex w-full flex-col items-center justify-center gap-10">
                     <div className="text-center">
                        <AnimatedBody
                            text="Got questions or want to collaborate? Reach out to us directly."
                            className="text-[#e4ded7]/80 text-lg leading-relaxed mb-8"
                        />
                        
                        <Link
                            href="mailto:r3actr@gmail.com?subject=Hello%20R3ACTR!"
                            className="inline-block"
                        >
                            <span className="text-[20px] md:text-[30px] font-bold text-[#e4ded7] underline hover:text-blue-400 transition-colors duration-300">
                                r3actr@gmail.com
                            </span>
                        </Link>
                     </div>

                     <div className="flex gap-8 mt-4">
                        <Link
                            href="https://www.linkedin.com/company/r3actr-innovations/"
                            target="_blank"
                            className="text-[#e4ded7] hover:text-blue-400 transition-colors duration-300 uppercase font-bold tracking-widest"
                        >
                            LinkedIn
                        </Link>
                        <Link
                            href="https://www.instagram.com/r3actr/"
                            target="_blank"
                            className="text-[#e4ded7] hover:text-pink-400 transition-colors duration-300 uppercase font-bold tracking-widest"
                        >
                            Instagram
                        </Link>
                         <Link
                            href="https://github.com/R3ACTR"
                            target="_blank"
                            className="text-[#e4ded7] hover:text-green-400 transition-colors duration-300 uppercase font-bold tracking-widest"
                        >
                            GitHub
                        </Link>
                     </div>
                </div>
             </div>
        </section>
    );
};

export default Contact;
