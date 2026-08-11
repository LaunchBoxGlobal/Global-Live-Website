"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import ProcessCard from "../StaffAugmentation/ProcessCard";
import { AI_BASED_PROJECT_PROCESS } from "@/constants/ai-based-projects-content/ai-based-project-process";

const ProcessAnimation = () => {
  return (
    <div className="w-full max-w-7xl mx-auto relative py-20 lg:pb-60 midlg:pb-40">
      <AnimatedLine />

      {/* Cards */}
      {AI_BASED_PROJECT_PROCESS?.map((process, index) => (
        <ProcessCard process={process} key={index} index={index} />
      ))}
    </div>
  );
};

export default ProcessAnimation;

const AnimatedLine = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end end"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div
      ref={ref}
      className="absolute left-[20%] top-[11%] h-[1887px] hidden lg:block"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="767"
        height="1891"
        viewBox="0 0 767 1891"
        fill="none"
      >
        <motion.path
          d="M332.5 2.00122H528.5C556 1.8399 611 17.5847 611 81.8546V299.151V360.13H92.0003C49.5003 360.13 2.00028 366.325 2.00028 447.243V742.943H528.5C556 742.297 611 757.365 611 822.796V1090.43H92.0003C53.5003 1090.43 2.00028 1090.43 2.00028 1147.05V1442.26V1648.5C1.99965 1680.5 2.00028 1705.49 2.00028 1765.5V1837.5C2.00185 1870.5 14.5013 1889.46 92.0003 1889.46H528.5H718.002C761.451 1889.46 765.451 1874.5 765.451 1822V1673.5"
          stroke="#F40E00"
          strokeWidth={4}
          fill="none"
          style={{ pathLength }}
        />
      </svg>

      <div className="absolute lg:bottom-[10%] right-[-10.6%] items-center justify-center hidden lg:flex">
        <Image
          src={"/staff-augmentation/Rocket.webp"}
          alt="Rocket"
          width={110}
          height={267}
          className="object-contain absolute z-20 left-1/2 -translate-x-1/2"
        />
        <span className="animate-ping absolute inline-flex h-[130px] w-[130px] rounded-full bg-[#E1E1E1] opacity-75"></span>
        <span className="animate-ping absolute inline-flex h-[150px] w-[150px] rounded-full bg-[#E1E1E1] opacity-50"></span>
        <span className="animate-ping absolute inline-flex h-[130px] w-[130px] rounded-full bg-[#E1E1E1] opacity-25"></span>
        <span className="relative inline-flex rounded-full h-[170px] w-[170px] bg-[#E1E1E1]"></span>
      </div>
    </div>
  );
};
