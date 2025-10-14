"use cleint";
import { useEffect } from "react";
import { preLoaderAnim } from "./loader";
import "./preloader.css";

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <div className="preloader gap-[5px] overflow-hidden text-[12px] sm:gap-[10px] sm:text-[14px] md:text-[16px] lg:text-[18px]">
      <div className="texts-container w-500 flex h-60 items-center justify-center gap-[5px] overflow-hidden text-[12px] font-extrabold text-[#e4ded7] opacity-0 sm:gap-[10px] sm:text-[14px] md:text-[16px] lg:text-[18px]">
        <span>Innovating,</span>
        <span>Researching,</span>
        <span>Developing.</span>
        <div className="sub hidden"></div>
      </div>
    </div>
  );
};

export default PreLoader;
