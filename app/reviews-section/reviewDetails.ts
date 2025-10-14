import { StaticImageData } from "next/image";
import abhinav from "../../public/abhinav.webp";
import sree from "../../public/sreehari.webp";
import kali from "../../public/kali.webp";
import neeraj from "../../public/neeraj.webp";


export type reviewProps = {
  name: string;
  role: string;
  company: string;
  profileImg: StaticImageData;
  testimonial: string;
  index: number;
};

export const reviewDetails = [
  {
    name: "Abhinav R",
    role: "Co-Founder",
    company: "R3ACTR",
    profileImg: abhinav,
    testimonial:
      "Designs intuitive, accessible, and beautiful interfaces. Ensures every product feels as good as it functions — blending usability with a modern aesthetic.",
  },
  {
    name: "Sreehari R",
    role: "Co-Founder",
    company: "R3ACTR",
    profileImg: sree,
    testimonial:
      "Builds deep learning systems that think and adapt. Ensures every model feels as natural as it is powerful — merging intelligence with innovation.",
  },
  {
    name: "Kalidas V S",
    role: "Co-Founder",
    company: "R3ACTR",
    profileImg: kali,
    testimonial:
      "Outstanding professional, developed our startup's website and delivered it in a very short time and with high quality.",
  },
  {
    name: "Neeraj Sukumaran",
    role: "Co-Founder",
    company: "R3ACTR",
    profileImg: neeraj,
    testimonial:
      "Builds scalable web systems, APIs, and robust backends. Bridges frontend and backend to deliver seamless, reliable digital experiences.",
  },

  
];
