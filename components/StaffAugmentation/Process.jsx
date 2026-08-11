"use client";

import React from "react";
import ProcessCard from "./ProcessCard";
import { STAFF_AUGMENTATION_AGILE_PROCESS } from "@/constants/StaffAugmentation/staff-augmentation-process";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const Process = () => {
  return (
    <div className="w-full relative max-w-7xl mx-auto py-20">
      <AnimatedLine />

      {/* Cards */}
      {STAFF_AUGMENTATION_AGILE_PROCESS?.map((process, index) => (
        <ProcessCard process={process} key={index} index={index} />
      ))}
    </div>
  );
};

export default Process;

const AnimatedLine = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end end"], // Trigger when element's top reaches center, end when bottom reaches center
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div
      ref={ref}
      className="absolute left-[20%] top-28 h-[2654px] w-[613px] hidden lg:block"
    >
      <svg
        width="613"
        height="2654"
        viewBox="0 0 613 2654"
        fill="none"
        className="absolute top-32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M332.5 2.00122H528.5C556 1.8399 611 17.5847 611 81.8546V299.151V360.13H92C49.5 360.13 2 366.325 2 447.243V742.943H528.5C556 742.297 611 757.365 611 822.796V1090.43H92C53.5 1090.43 2 1090.43 2 1147.05V1442.26H528.5C559.5 1442.26 611 1442.26 611 1502.28V1812.01V2013.95C611 2050.73 611 2050.73 533.5 2050.73H92C47.5 2050.73 2 2064.64 2 2000.43V1839.11"
          stroke="#F40E00"
          strokeWidth={4}
          fill="none"
          style={{ pathLength }}
        />
      </svg>

      <div className="absolute bottom-[22%] left-[-13.8%] items-center justify-center hidden lg:flex">
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
