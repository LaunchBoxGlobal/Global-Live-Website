"use client";
import React, { useRef, useState } from "react";
import AgileWorkflow from "./AgileWorkflow";
import RecommendedWorkflow from "./RecommendedWorkflow";
import WaterfallWorkflow from "./WaterfallWorkflow";
// import { ECOMMERCE_RECOMMENDED_WORKFLOW } from "@/constants/ecommerce-develpment/EcommerceRecommendedWorkflow";
import { ECOMMERCE_AGILE_WORKFLOW } from "@/constants/ecommerce-develpment/ecommerceagileworkflow";
import { ECOMMERCE_WATERFALL_WORKFLOW } from "@/constants/ecommerce-develpment/ecommercewaterfallworkflow";
import { ECOMMERCE_RECOMMENDED_WORKFLOW } from "@/constants/ecommerce-develpment/ecommercerecommendedworkflow";
import NewWorkflow from "@/components/Common/NewWorkflow";
import Image from "next/image";
import ProcessCard from "@/components/StaffAugmentation/ProcessCard";
import { WYOMING_DIGITAL_MARKETING_PROCESS } from "@/constants/locations/wyoming-digital-marketing/wyoming-digital-marketing-process";
import { motion, useScroll, useTransform } from "framer-motion";

const Workflow = () => {
  const [activeTab, setActiveTab] = useState("recommended");

  return (
    <section className="w-full padding-x py-10 lg:py-20 relative overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading w-full">
          The Process Behind <br className="hidden lg:block" /> Profitable{" "}
          <span className="red-text">Stores</span>
        </h2>
        <p className="section-paragraph lg:w-[85%]">
          It’s not just about how your ecommerce platform looks. It’s about how
          it works. We design seamless shopping experiences backed by powerful
          integrations, delivering custom ecommerce solutions to convert.
        </p>
      </section>

      <div className="w-full flex justify-center mt-10">
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
            name="recommened workflow button"
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

      {/* <NewWorkflow
        agileProcess={ECOMMERCE_AGILE_WORKFLOW}
        recommendedProcess={ECOMMERCE_RECOMMENDED_WORKFLOW}
        waterfallProcess={ECOMMERCE_WATERFALL_WORKFLOW}
      /> */}

      {/* <div className="w-full flex justify-center mt-10">
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
            name="recommened workflow button"
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

      {activeTab === "agile" && (
        <AgileWorkflow workflow={ECOMMERCE_AGILE_WORKFLOW} />
      )}
      {activeTab === "recommended" && (
        <RecommendedWorkflow workflow={ECOMMERCE_RECOMMENDED_WORKFLOW} />
      )}
      {activeTab === "waterfall" && (
        <WaterfallWorkflow workflow={ECOMMERCE_WATERFALL_WORKFLOW} />
      )} */}

      <div className="w-full relative  py-20">
        <AnimatedLine />
        <div className="absolute bottom-[7%] lg:left-[11%] midlg:left-[12.2%] xl:left-[13%] items-center justify-center hidden lg:flex">
          <Image
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

        {activeTab === "agile" && (
          <>
            {ECOMMERCE_AGILE_WORKFLOW?.map((process, index) => (
              <ProcessCard process={process} key={index} index={index} />
            ))}
          </>
        )}
        {activeTab === "recommended" && (
          <>
            {ECOMMERCE_RECOMMENDED_WORKFLOW?.map((process, index) => (
              <ProcessCard process={process} key={index} index={index} />
            ))}
          </>
        )}
        {activeTab === "waterfall" && (
          <>
            {ECOMMERCE_WATERFALL_WORKFLOW?.map((process, index) => (
              <ProcessCard process={process} key={index} index={index} />
            ))}
          </>
        )}
      </div>
    </section>
  );
};

export default Workflow;

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
      className="absolute left-[20%] top-28 h-[2654px] hidden lg:block"
    >
      <svg
        width="613"
        height="2654"
        viewBox="0 0 613 2654"
        fill="none"
        className="absolute left-[20%] top-32"
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
    </div>
  );
};
