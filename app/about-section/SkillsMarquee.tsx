import { skills } from "./skills";
import "../animations/animate.css";

const SkillsMarquee = () => {
  return (
    <div className="relative mt-10 flex w-full overflow-hidden">
      <div className="animate flex shrink-0 justify-around gap-10">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center gap-2">
            <h3 className="text-2xl font-bold text-[#e4ded7]">{skill}</h3>
            <span className="text-3xl text-[#e4ded7]">*</span>
          </div>
        ))}
      </div>
      <div className="animate flex shrink-0 justify-around gap-10">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center gap-2">
            <h3 className="text-2xl font-bold text-[#e4ded7]">{skill}</h3>
            <span className="text-3xl text-[#e4ded7]">*</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsMarquee;
