"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import ProcessCard from "@/components/StaffAugmentation/ProcessCard";
import { WYOMING_DIGITAL_MARKETING_PROCESS } from "@/constants/locations/wyoming-digital-marketing/wyoming-digital-marketing-process";

const Process = () => {
  return (
    <section className="w-full padding-x py-20 midlg:py-28 overflow-hidden relative">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading lg:w-[90%] mx-auto">
          Agile, Waterfall & Hybrid — Built for{" "}
          <span className="red-text">Wyoming Businesses</span>
        </h2>

        <p className="section-paragraph lg:w-[90%] mx-auto">
          As a leading digital solutions provider serving nationwide clients,
          we've helped Wyoming businesses achieve real results through different
          targeted digital strategies:
        </p>
      </section>
      <div className="w-full max-w-7xl mx-auto relative  py-20">
        <AnimatedLine />

        {/* Cards */}
        {WYOMING_DIGITAL_MARKETING_PROCESS?.map((process, index) => (
          <ProcessCard process={process} key={index} index={index} />
        ))}
      </div>
    </section>
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
      <div className="absolute bottom-[22%] left-[-13.5%] items-center justify-center hidden lg:flex">
        <img
          src={"/staff-augmentation/Rocket.webp"}
          alt="Rocket"
          width={110}
          height={267}
          loading="lazy"
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

{
  /* <svg
  width="613"
  height="2054"
  viewBox="0 0 613 2054"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M332.5 2.06861H528.5C556 1.90729 611 17.6521 611 81.922V299.219V360.198H92C49.5 360.198 2 366.392 2 447.31V743.01H528.5C556 742.365 611 757.432 611 822.863V1090.49H92C53.5 1090.49 2 1090.49 2 1147.12V1442.33H528.5C559.5 1442.33 611 1442.33 611 1502.34V1812.08V2014.02C611 2050.8 611 2050.8 533.5 2050.8H92C47.5 2050.8 2 2064.7 2 2000.5V1839.18"
    stroke="#F40E00"
    stroke-width="2.5"
  />
</svg>; */
}
