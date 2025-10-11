import { reviewProps } from "./reviewDetails";
import Image from "next/image";
import "../globals.css";
import slash from "../../public/review-slash.svg";
import { motion } from "framer-motion";

const ReviewCard = ({
  name,
  role,
  company,
  profileImg,
  testimonial,
  index,
}: reviewProps) => {
  const abbreviateName = (name: string): string => {
    const nameParts = name.split(" ");
    if (nameParts.length < 2) return name;
    const [firstName, lastName] = nameParts;
    return `${firstName} ${lastName[0]}.`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.7,
          delay: 0.1 * index,
          ease: [0.44, 0, 0.22, 0.99],
        },
      }}
      viewport={{
        amount: "some",
        once: true,
      }}
      className="relative flex h-auto min-h-[400px] w-full flex-col justify-between rounded-[23px] border-[3px] border-[#212531] bg-transparent p-[28px] sm:min-h-[450px] lg:min-h-[393px] lg:max-w-[438px]"
    >
      <Image
        src={slash}
        alt={"slash"}
        className="absolute top-[34px] left-[28px] w-[51px]"
      />

      <p className="mt-10 text-[18px] font-[500] leading-relaxed tracking-wide text-[#e4ded7]">
        {testimonial}
      </p>

      <div className="mt-6 flex items-center gap-3">
        <Image
          src={profileImg}
          alt={name}
          width={41}
          height={41}
          className="h-[41px] w-[41px] rounded-full bg-contain object-cover grayscale"
        />
        <div className="flex flex-col gap-1">
          <h3 className="w-auto text-[23px] font-bold uppercase leading-tight tracking-[-0.46px] text-[#e4ded7]">
            {abbreviateName(name)}
          </h3>
          <p className="text-sm font-[500] leading-[16px] text-[#95979D]">
            {role} @ {company}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ReviewCard;
