"use client";
import { SYSTEMS_BUILD_EXPERIENCE } from "@/constants/systems-page/buildExperience";
import Image from "next/image";
import React, { useState } from "react";

const OurBuildExperience = ({ toggleDiscoveryCallForm }) => {
  const [ishovered, setIsHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <section className="section padding-x">
      <div
        id="experience"
        className={`w-full relative overflow-hidden z-20 text-start flex flex-col items-start`}
      >
        <p className="red-text font-medium tracking-widest uppercase text-lg md:text-xl lg:text-2xl xl:text-[32px] mb-5">
          Our Build Experience
        </p>
        <h2 className="systems-section-heading">
          We Have Shipped <br className="hidden lg:block" /> Products Like Yours{" "}
          <span className="red-text">Before</span>
        </h2>
        <p className="text-gray-400 font-light leading-[1.2] text-lg md:text-xl xl:text-[24px] md:max-w-[75%] mt-5">
          Most non-technical founders hit the same wall after closing their
          round. Here is what that usually looks like.
        </p>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-gray-100 gap-[1px] my-10">
        {SYSTEMS_BUILD_EXPERIENCE?.map((appType, index) => {
          const Icon = appType.icon;
          const redIcon = appType.redIcon;

          return (
            <div
              key={index}
              onMouseEnter={() => {
                setIsHovered(true);
                setHoveredIndex(index);
              }}
              onMouseLeave={() => {
                setIsHovered(false);
                setHoveredIndex(null);
              }}
              className={`bg-white p-8 md:p-10 group hover:bg-red-50 transition-colors duration-300 flex flex-col items-start relative overflow-hidden`}
            >
              <Image
                src={ishovered && hoveredIndex === index ? redIcon : Icon}
                height={appType.height}
                width={appType.width}
                alt={appType.title}
                className="mb-6"
              />
              <h3 className="font-bold text-[0.95rem] tracking-wider uppercase mb-3 text-black transition-colors duration-300">
                {appType.title}
              </h3>
              <p className="text-gray-500 font-medium text-[0.95rem] leading-relaxed transition-colors duration-300">
                {appType.description}
              </p>

              <div
                className="w-full h-1 red-bg absolute bottom-0 inset-x-0
             opacity-0 group-hover:opacity-100
             transition-opacity duration-300"
              />
            </div>
          );
        })}
      </div>

      {/* RED CTA */}
      <div className="w-full mt-10 red-bg rounded-[24px] py-6 p-5 lg:px-8 lg:h-[152px] flex items-center justify-between gap-6 flex-col lg:flex-row">
        <div className="w-full md:w-[70%] lg:w-1/2">
          <p className="text-xl lg:text-[24px] font-semibold text-white leading-[1.3]">
            Not sure if your product fits? Tell us what you are building and we
            will give you an honest answer.
          </p>
        </div>
        <div className="w-full max-w-[290px]">
          <button
            type="button"
            onClick={() => toggleDiscoveryCallForm()}
            className="bg-white hover:bg-black hover:text-white transition-all duration-300 red-text rounded-[14px] flex items-center justify-center gap-2 px-5 py-4 text-lg font-medium w-full"
          >
            Book a Free Discovery Call
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurBuildExperience;
