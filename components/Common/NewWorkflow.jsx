"use client";
import React, { useRef, useState } from "react";
import ProcessCard from "../StaffAugmentation/ProcessCard";
import { motion, useTransform } from "framer-motion";
import { useScroll } from "framer-motion";
import Image from "next/image";

const NewWorkflow = ({
  agileProcess,
  recommendedProcess,
  waterfallProcess,
}) => {
  const [activeTab, setActiveTab] = useState("recommended");
  return (
    <div>
      <div className="w-full flex justify-center mt-10 lg:mt-14">
        <div className="w-full md:w-[413px] h-[56px] border rounded-full flex items-center justify-between p-1">
          <button
            type="button"
            name="agile methodology button"
            onClick={() => setActiveTab("agile")}
            className={`uppercase text-sm lg:text-lg font-semibold px-3.5 h-full rounded-full ${
              activeTab === "agile"
                ? "bg-[#F40E00] text-white"
                : "bg-white text-gray-500"
            }`}
          >
            AGILE
          </button>
          <button
            type="button"
            name="recommended workflow button"
            onClick={() => setActiveTab("recommended")}
            className={`uppercase text-sm lg:text-lg font-semibold px-3.5 h-full rounded-full ${
              activeTab === "recommended"
                ? "bg-[#F40E00] text-white"
                : "bg-white text-gray-500"
            }`}
          >
            recommended
          </button>
          <button
            type="button"
            name="waterfall methodology button"
            onClick={() => setActiveTab("waterfall")}
            className={`uppercase text-sm lg:text-lg font-semibold px-3.5 h-full rounded-full ${
              activeTab === "waterfall"
                ? "bg-[#F40E00] text-white"
                : "bg-white text-gray-500"
            }`}
          >
            Waterfall
          </button>
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto relative py-20 lg:pb-52">
        <AnimatedLine />

        {/* Cards */}
        {activeTab === "agile" && (
          <>
            {agileProcess?.map((process, index) => (
              <ProcessCard process={process} key={index} index={index} />
            ))}
          </>
        )}
        {activeTab === "recommended" && (
          <>
            {recommendedProcess?.map((process, index) => (
              <ProcessCard process={process} key={index} index={index} />
            ))}
          </>
        )}
        {activeTab === "waterfall" && (
          <>
            {waterfallProcess?.map((process, index) => (
              <ProcessCard process={process} key={index} index={index} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default NewWorkflow;

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
      className="absolute top-20 h-[2960px] left-[20%] w-[759px] hidden lg:block pb-40"
    >
      <svg
        width="759"
        height="2660"
        viewBox="0 0 759 2660"
        fill="none"
        className="absolute  top-32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M332 2.00122H528C555.5 1.8399 610.5 17.5847 610.5 81.8546V299.151V360.13H91.5C49 360.13 1.5 366.325 1.5 447.243V742.943H528C555.5 742.297 610.5 757.365 610.5 822.796V1090.43V1135H91.5C61.5 1133.83 1.5 1145.6 1.5 1202V1485.5L550.5 1486.41C578 1485.5 610.5 1492.84 610.5 1533.13C610.5 1573.43 610.5 1768.5 610.5 1861H91.5C55 1860.6 1.5 1869.5 1.5 1945.5L4.28717 2579.18C5.78719 2596.5 1.5 2632.46 69.9 2632.46H598C665.5 2632.46 680.5 2630.9 680.5 2566.5V2454.5"
          stroke="#F40E00"
          strokeWidth={4}
          fill="none"
          style={{ pathLength }}
        />
      </svg>

      <div className="absolute bottom-[13%] right-[-0.62%] items-center justify-center hidden lg:flex">
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
