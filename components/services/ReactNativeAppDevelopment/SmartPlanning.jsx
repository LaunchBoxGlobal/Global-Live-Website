"use client";
import React, { useRef, useState } from "react";
import AgileWorkflow from "./AgileWorkflow";
import { SMART_PLANNING } from "@/constants/mobile-app-development/SmartPlanning";
import { MOBILE_APP_WATERFALL_WORKFLOW } from "@/constants/mobile-app-development/MobileAppWaterfall";
import { MOBILE_APP_RECOMMENDED_WORKFLOW } from "@/constants/mobile-app-development/MobileAppRecommendedWorkflow";
import NewWorkflow from "@/components/Common/NewWorkflow";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import {
  FLORDIA_AGILE_PROCESS,
  FLORDIA_RECOMMENDED_PROCESS,
  FLORDIA_WATERFALL_PROCESS,
} from "@/constants/locations/mobile-app-developer/agile-process-florida";
import { useInView } from "framer-motion";

const SmartPlanning = () => {
  const [activeTab, setActiveTab] = useState("recommended");

  return (
    <section className="w-full padding-x py-10 lg:py-20 lg:pb-60 relative overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading w-full">
          Our Step-by-Step Process to Develop React Native{" "}
          <span className="blueText"> Apps Right</span>
        </h2>
        <p className="section-paragraph lg:w-[85%]">
          We follow a clear path to build your React Native app, from idea to
          launch. No guesswork, just smart planning and careful building at
          every step.
        </p>
      </section>

      {/* <div className="w-full flex justify-center mt-10">
        <div className="w-full md:w-[413px] h-[56px] border rounded-full flex items-center justify-between p-1">
          <button
            type="button"
            name="agile methodology button"
            onClick={() => setActiveTab("agile")}
            className={`uppercase text-sm lg:text-lg font-semibold px-3.5 h-full rounded-full ${
              activeTab === "agile"
                ? "bg-[#00A7D4] text-white"
                : "bg-white text-gray-500"
            }`}
          >
            AGILE
          </button>
          <button
            type="button"
            name="recommended methodology button"
            onClick={() => setActiveTab("recommended")}
            className={`uppercase text-sm lg:text-lg font-semibold px-3.5 h-full rounded-full ${
              activeTab === "recommended"
                ? "bg-[#00A7D4] text-white"
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
                ? "bg-[#00A7D4] text-white"
                : "bg-white text-gray-500"
            }`}
          >
            Waterfall
          </button>
        </div>
      </div> */}

      {/* {activeTab === "agile" && <AgileWorkflow workflow={SMART_PLANNING} />}
      {activeTab === "recommended" && (
        <AgileWorkflow workflow={MOBILE_APP_RECOMMENDED_WORKFLOW} />
      )}
      {activeTab === "waterfall" && (
        <AgileWorkflow workflow={MOBILE_APP_WATERFALL_WORKFLOW} />
      )} */}
      <div className="w-full flex justify-center mt-10 lg:mt-14">
        <div className="w-full md:w-[413px] h-[56px] border rounded-full flex items-center justify-between p-1">
          <button
            type="button"
            name="agile methodology button"
            onClick={() => setActiveTab("agile")}
            className={`uppercase text-sm lg:text-lg font-semibold px-3.5 h-full rounded-full ${
              activeTab === "agile"
                ? "bg-[#00A7D4] text-white"
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
                ? "bg-[#00A7D4] text-white"
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
                ? "bg-[#00A7D4] text-white"
                : "bg-white text-gray-500"
            }`}
          >
            Waterfall
          </button>
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto relative py-20 lg:pb-40">
        <AnimatedLine />

        {/* Cards */}
        {activeTab === "agile" && (
          <>
            {FLORDIA_AGILE_PROCESS?.map((process, index) => (
              <ProcessCard process={process} key={index} index={index} />
            ))}
          </>
        )}
        {activeTab === "recommended" && (
          <>
            {FLORDIA_RECOMMENDED_PROCESS?.map((process, index) => (
              <ProcessCard process={process} key={index} index={index} />
            ))}
          </>
        )}
        {activeTab === "waterfall" && (
          <>
            {FLORDIA_WATERFALL_PROCESS?.map((process, index) => (
              <ProcessCard process={process} key={index} index={index} />
            ))}
          </>
        )}
      </div>
    </section>
  );
};

export default SmartPlanning;

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
        className="absolute top-32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M332 2.00122H528C555.5 1.8399 610.5 17.5847 610.5 81.8546V299.151V360.13H91.5C49 360.13 1.5 366.325 1.5 447.243V742.943H528C555.5 742.297 610.5 757.365 610.5 822.796V1090.43V1135H91.5C61.5 1133.83 1.5 1145.6 1.5 1202V1485.5L550.5 1486.41C578 1485.5 610.5 1492.84 610.5 1533.13C610.5 1573.43 610.5 1768.5 610.5 1861H91.5C55 1860.6 1.5 1869.5 1.5 1945.5L4.28717 2579.18C5.78719 2596.5 1.5 2632.46 69.9 2632.46H598C665.5 2632.46 680.5 2630.9 680.5 2566.5V2454.5"
          stroke="#00A7D4"
          strokeWidth={4}
          fill="none"
          style={{ pathLength }}
        />
      </svg>

      <div className="absolute bottom-[12%] right-[-1%] items-center justify-center hidden lg:flex">
        <img
          src={"/react-native-rocket-image.png"}
          alt="Rocket"
          width={119}
          height={274}
          className="absolute z-20 left-1/2 -translate-x-1/2"
          priority
        />
        <span className="animate-ping absolute inline-flex h-[130px] w-[130px] rounded-full bg-[#E1E1E1] opacity-75"></span>
        <span className="animate-ping absolute inline-flex h-[150px] w-[150px] rounded-full bg-[#E1E1E1] opacity-50"></span>
        <span className="animate-ping absolute inline-flex h-[130px] w-[130px] rounded-full bg-[#E1E1E1] opacity-25"></span>
        <span className="relative inline-flex rounded-full h-[170px] w-[170px] bg-[#E1E1E1]"></span>
      </div>
    </div>
  );
};

const ProcessCard = ({ process, index }) => {
  return (
    <div
      className={`w-full lg:w-[608px] h-[312px] bg-white rounded-[25px] custom-shadow ${
        index % 2 === 0 ? "px-10 py-10" : "py-10 px-14 ml-auto"
      } relative ${index !== 0 && "mt-16"}`}
    >
      <h3 className="font-medium text-[26px] lg:text-[39px] text-[#00A7D4] leading-[1]">
        {process?.title}
      </h3>
      <p className="text-lg lg:text-[22px] leading-[1.2] mt-2 z-10 relative">
        {process?.description}
      </p>
      <p
        className={`text-[#DADADA] text-[84px] font-bold leading-none m-0 p-0 absolute right-6 bottom-4 z-0`}
      >
        0{index + 1}
      </p>
      <div
        className={`w-[70px] h-[70px] lg:w-[89px] lg:h-[89px] bg-white rounded-full p-2 absolute ${
          index % 2 === 0
            ? "-top-7 -right-4 lg:-top-7 lg:-right-7"
            : "-top-7 -left-4 lg:-top-8 lg:-left-8"
        }`}
      >
        <div className="w-full h-full bg-[#00A7D4] rounded-full flex items-center justify-center">
          <img
            src={process?.icon}
            alt={process?.title}
            width={process?.iconWidth || 41}
            height={process?.iconHeight || 43}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};
