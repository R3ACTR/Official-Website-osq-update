import Link from "next/link";
import { monaSans } from "../fonts/monaSans";
import { motion } from "framer-motion";
import { bodyAnimation } from "../animations/animations";
import AnimatedWords from "../animations/AnimatedWords";

const Hero = () => {
  return (
    <motion.section
      className="relative z-10 flex h-[100vh] w-full items-center justify-center bg-[url('.//../public/hero.jpg')] bg-cover  bg-center py-0"
      id="home"
      initial="initial"
      animate="animate"
    >
      <motion.div className="absolute left-0 top-0 right-0 bottom-0 h-full w-full bg-[#0E1016] mix-blend-color"></motion.div>

      <div className="absolute top-10 flex w-[90%] justify-between lg:max-w-[1440px]">
        <div>
          <Link
            href="https://cal.com/victorwilliams/30min"
            target="_blank"
            aria-label="BOOK A CALL"
          >
            <motion.button
              className="hidden rounded-md border-2 border-[#e4ded7] py-2 px-4 text-[14px] font-semibold text-[#e4ded7] sm:block  md:text-[16px] lg:block"
              variants={bodyAnimation}
            >
              BOOK A CALL
            </motion.button>
          </Link>
        </div>

        <div className="flex gap-10 text-[#e4ded7] sm:gap-12 md:gap-14 lg:gap-14">
          <Link
            href="https://github.com/victorcodess"
            target="_blank"
            aria-label="View GitHub Profile"
          >
            <motion.p
              className="text-[16px] font-bold text-[#e4ded7] md:text-[16px]"
              variants={bodyAnimation}
            >
              GH
            </motion.p>
          </Link>
          <Link
            href="https://www.linkedin.com/in/victor-williams-chukwudi/"
            target="_blank"
            aria-label="View LinkedIn Profile"
          >
            <motion.p
              className="text-[16px] font-bold text-[#e4ded7] md:text-[16px]"
              variants={bodyAnimation}
            >
              LN
            </motion.p>
          </Link>
          <Link
            href="https://twitter.com/victorwill__"
            target="_blank"
            aria-label="View Twitter Profile"
          >
            <motion.p
              className="text-[16px] font-bold text-[#e4ded7] md:text-[16px]"
              variants={bodyAnimation}
            >
              TW
            </motion.p>
          </Link>
          <Link
            href="https://contra.com/victorwilliams"
            target="_blank"
            aria-label="View Contra Profile"
          >
            <motion.p
              className="text-[16px] font-bold text-[#e4ded7] md:text-[16px]"
              variants={bodyAnimation}
            >
              CO
            </motion.p>
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center ">
        <div
          className={`relative flex flex-col items-center justify-center ${monaSans.className}`}
        >
          <AnimatedWords
            title="R3ACTR"
            style="inline-block overflow-hidden pt-1 -mb-1 sm:-mb-2 md:-mb-3 lg:-mb-4"
          />
        </div>
      </div>

      <div
        className="absolute bottom-10 flex w-[90%] items-center 
      justify-center
      lg:max-w-[1440px] lg:justify-between"
      >
        <motion.div
          className="  max-w-[350px] md:max-w-[400px] lg:max-w-[400px]"
          variants={bodyAnimation}
        >
          <p className="z-50 text-center text-[16px] font-medium text-[#e4ded7] md:text-[20px] lg:text-left">
            Frontend Engineer and Web Designer, prev at{" "}
            <Link
              href="https://www.korahq.com/"
              target="_blank"
              className="underline underline-offset-2 hover:no-underline"
              aria-label="Kora Website"
            >
              Kora,
            </Link>{" "}
            currently available for work.
          </p>
        </motion.div>

        <motion.div
          className="  hidden max-w-[500px] lg:block lg:max-w-[420px]"
          variants={bodyAnimation}
        >
          <p className="text-right text-[16px] font-semibold text-[#e4ded7] md:text-[20px]">
            Focused on interfaces and experiences, working remotely from Lagos,
            Nigeria.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
