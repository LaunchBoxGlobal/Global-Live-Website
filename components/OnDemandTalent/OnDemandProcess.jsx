"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import ProcessCard from "../StaffAugmentation/ProcessCard";
import { ON_DEMAND_PROCESS } from "@/constants/on-demand-talent-content/on-demand-process";

const OnDemandProcess = () => {
  return (
    <section className="w-full py-20 midlg:py-32 xl:py-40 bg-[#fff] padding-x overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading lg:w-[90%] mx-auto">
          We Augment Talent with Accuracy in{" "}
          <span className="red-text">48 Hours</span>
        </h2>
        <p className="section-paragraph lg:w-[90%] mx-auto">
          Our proven process delivers the right offshore staff augmentation
          professionals quickly, without compromising on quality or fit.
        </p>
      </section>
      <div className="w-full max-w-7xl mx-auto relative mt-10 pt-20 pb-24">
        <AnimatedLine />

        {/* Cards */}
        {ON_DEMAND_PROCESS?.map((process, index) => (
          <ProcessCard process={process} key={index} index={index} />
        ))}
      </div>
    </section>
  );
};

export default OnDemandProcess;

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
      className="absolute left-[20%] top-28 h-[1450px] w-[613px] hidden lg:block"
    >
      <svg
        width="613"
        height="1450"
        viewBox="0 0 613 1450"
        fill="none"
        className="absolute top-32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M332.5 2.00122H528.5C556 1.8399 611 17.5847 611 81.8546V299.151V360.13H92C49.5 360.13 2 366.325 2 447.243V742.943H528.5C556 742.297 611 757.365 611 822.796V1090.43V1135C611 1149.5 611 1189.38 611 1246V1383.5V1421.5C611 1441 611 1352.26 611 1412.28V1202.01V1403.95C611 1440.73 611 1440.73 533.5 1440.73H92C47.5 1440.73 2 1454.64 2 1390.43V1229.11"
          stroke="#F40E00"
          strokeWidth={4}
          fill="none"
          style={{ pathLength }}
        />
      </svg>

      <div className="absolute bottom-[6%] left-[-13.6%] items-center justify-center hidden lg:flex">
        <Image
          src="/staff-augmentation/Rocket.webp"
          alt="Rocket"
          width={110}
          height={267}
          loading="lazy"
          priority={false}
          sizes="(max-width: 768px) 80px, (max-width: 1200px) 100px, 110px"
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
