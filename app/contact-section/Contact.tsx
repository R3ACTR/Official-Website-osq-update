import Link from "next/link";
import Image from "next/image";
import { monaSans } from "../fonts/monaSans";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import AnimatedWords2 from "../animations/AnimatedWords2";
import { motion } from "framer-motion";
import heartIcon from "../../public/heart icon.png";

const Contact = () => {
  return (
    <motion.section
      className="relative z-10 flex h-auto w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center py-16 md:py-20 lg:pt-0 lg:pb-28"
      id="contact"
      initial="initial"
      animate="animate"
    >
      <div className="mx-auto  flex w-[90%] flex-col items-center justify-center pt-10 md:pt-0">
        <div
          className={`flex flex-col items-start justify-center ${monaSans.className} relative w-full sm:items-center lg:max-w-[1440px] `}
        >
          <AnimatedWords2
            title={"Let's Talk"}
            style={
              "flex max-w-full flex-col items-start text-left text-[clamp(80px,22vw,390px)] font-extrabold uppercase leading-[0.9em] text-[#e4ded7] sm:flex-row sm:items-center sm:justify-center sm:text-center"
            }
          />
          <Image
            src={heartIcon}
            alt="Heart Icon"
            className="heartbeat absolute w-[80px] sm:w-[120px] md:w-[150px] lg:w-[230px] -bottom-4 left-1/2 -translate-x-1/3 sm:-bottom-10 sm:left-1/2 sm:-translate-x-1/2"
          />
        </div>

        <div className="mt-20 flex w-full flex-col items-center justify-center gap-16 sm:mt-32 sm:gap-12 md:mt-40 md:flex-row md:items-start md:justify-between lg:mt-24 lg:max-w-[1440px]">
          <div className=" flex w-full max-w-[350px] flex-col items-start text-left text-[14px] font-semibold uppercase text-[#e4ded7] sm:text-[14px] md:w-[310px] md:text-[16px] lg:w-[420px] lg:text-[16px]">
            <AnimatedBody
              text={
                "Got a question, proposal, project, or want to work together on something?"
              }
              className={
                "-mb-1 inline-block overflow-hidden pt-1 sm:-mb-2 md:-mb-3 lg:-mb-4"
              }
            />
            <div className="mt-5 flex w-full items-center gap-1 md:gap-2.5">
              <Link
                href="mailto:victor.will.chuk@gmail.com?subject=Lets%20work%20together!&body=Hello%2C%20I%20think%20we%20need%20you%20to%20work%20on%2Fcollaborate%20this%20particular%20product...%20Reach%20out%20as%20soon%20as%20you%20can."
                target="_blank"
                aria-label="Send me an email"
                className="mt-1 flex-1 underline underline-offset-2 hover:no-underline sm:mt-2 md:mt-3 lg:mt-4"
              >
                <AnimatedBody
                  text={"Send me an email"}
                  className={"pr-2"}
                />
              </Link>
              <AnimatedBody
                text={"or"}
                className={
                  " -mb-1 inline-block overflow-hidden sm:-mb-2 md:-mb-3 lg:-mb-4"
                }
              />
              <Link
                href="https://cal.com/victorwilliams/30min"
                target="_blank"
                aria-label="Book a call"
                className="mt-1 flex-1 underline underline-offset-2 hover:no-underline sm:mt-2 md:mt-3 lg:mt-4"
              >
                <AnimatedBody
                  text={"Book a call"}
                  className={"pl-2"}
                />
              </Link>
            </div>
          </div>

          <div className="flex gap-10 text-[16px] font-bold text-[#e4ded7] sm:gap-14 sm:text-[24px] md:gap-10 md:text-[16px] lg:gap-20 lg:text-[28px]">
            <Link
              href="https://github.com/victorcodess"
              target="_blank"
              aria-label="View GitHub Profile"
            >
              <AnimatedTitle
                text={"GH"}
                className={
                  "text-[16px] font-bold text-[#e4ded7] sm:text-[20px] md:text-[16px] lg:text-[28px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/victor-williams-chukwudi/"
              target="_blank"
              aria-label="View LinkedIn Profile"
            >
              <AnimatedTitle
                text={"LN"}
                className={
                  "text-[16px] font-bold text-[#e4ded7] sm:text-[20px] md:text-[16px] lg:text-[28px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
            </Link>
            <Link
              href="https://twitter.com/victorwill__"
              target="_blank"
              aria-label="View Twitter Profile"
            >
              <AnimatedTitle
                text={"TW"}
                className={
                  "text-[16px] font-bold text-[#e4ded7] sm:text-[20px] md:text-[16px] lg:text-[28px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
            </Link>
            <Link
              href="https://www.instagram.com/victorwill__/"
              target="_blank"
              aria-label="View Instagram Profile"
            >
              <AnimatedTitle
                text={"IG"}
                className={
                  "text-[16px] font-bold text-[#e4ded7] sm:text-[20px] md:text-[16px] lg:text-[28px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
            </Link>
            <Link
              href="https://blog.victorwilliams.me/"
              target="_blank"
              aria-label="View Hashnode Profile"
            >
              <AnimatedTitle
                text={"HN"}
                className={
                  "text-[16px] font-bold text-[#e4ded7] sm:text-[20px] md:text-[16px] lg:text-[28px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
