"use client";
import ProcessCard from "@/components/StaffAugmentation/ProcessCard";
import { ECOMMERCE_AGILE_WORKFLOW } from "@/constants/ecommerce-develpment/ecommerceagileworkflow";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const Workflow = () => {
  return (
    <section className="w-full py-20 bg-[#fff] padding-x overflow-hidden">
      <div className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading mx-auto">
          Our Three Workflows: Choose What{" "}
          <span className="red-text">Fits You Best</span>
        </h2>

        <p className="section-paragraph lg:w-[90%] mx-auto">
          We follow a structured, transparent, and compliance-driven process to
          deliver healthcare solutions that are both innovative and
          regulation-ready. Each phase is designed to ensure technical
          excellence, user satisfaction, and long-term scalability.
        </p>
      </div>

      <div className="w-full relative text-lg  py-20">
        <AnimatedLine />

        {ECOMMERCE_AGILE_WORKFLOW?.map((process, index) => (
          <ProcessCard process={process} key={index} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Workflow;

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

      <div className="absolute bottom-[22%] left-[-14%] items-center justify-center hidden lg:flex">
        <img
          src={"/staff-augmentation/Rocket.png"}
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
