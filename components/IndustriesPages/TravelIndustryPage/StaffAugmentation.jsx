"use client";
import { TRAVEL_STAFF_AUGMENTATION } from "@/constants/industries/travel-industry/travel-staff-augmentation";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const StaffAugmentation = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <section className="w-full py-20 bg-[#fff] padding-x overflow-hidden">
      <div className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading mx-auto">
          Scale Faster with Offshore <br />
          <span className="red-text">Staff Augmentation</span>
        </h2>

        <p className="section-paragraph lg:w-[90%] mx-auto">
          Our IT staff augmentation company provides the right tech talent when
          you need it skilled, affordable, and ready to work on your schedule.
        </p>
      </div>

      <section className="w-full my-10 lg:mt-20 lg:mb-28 flex flex-col lg:flex-row gap-y-10 items-center justify-center">
        {TRAVEL_STAFF_AUGMENTATION?.map((plan, i) => {
          const isHovered = hoveredIndex === i;

          const isMiddle = i === 1;
          const middleShouldBeRed = hoveredIndex === null || hoveredIndex === 1;

          const bgColor = isMiddle
            ? middleShouldBeRed
              ? "bg-[#F40E00] text-white"
              : "bg-white text-black"
            : isHovered
            ? "bg-[#F40E00] text-white"
            : "bg-white text-black";

          return (
            <div
              key={i}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`w-[90%] md:w-[60%] lg:w-[400px] h-[480px] rounded-[14px] custom-shadow flex flex-col items-center justify-center gap-6 group text-center p-10 relative transition-all duration-300 hover:scale-110 overflow-hidden ${
                i === 0
                  ? "lg:-rotate-6 z-10 lg:top-5 hover:rotate-0 hover:top-0"
                  : i === 2
                  ? "lg:rotate-6 z-10 lg:top-5 hover:rotate-0 hover:top-0"
                  : "z-20"
              } ${bgColor}`}
            >
              <Image
                src={"/custom-software-journey-card-texture-image.webp"}
                alt="custom-software-journey-card-texture-image"
                width={500}
                height={580}
                className="w-[150%] h-[150%] absolute inset-0 z-0 opacity-[0.02]"
              />
              <h4 className="text-[25px] font-bold lg:leading-8">
                {plan?.title}
              </h4>

              <p className="text-base">{plan?.description}</p>

              <Link
                href="/contact-us"
                className={`w-[200px] z-10 h-[46px] py-4 rounded-full flex items-center justify-center font-semibold text-base transition-all duration-300 ${
                  bgColor.includes("bg-white")
                    ? "bg-[#F40E00] text-white hover:bg-[#F40E00]"
                    : "bg-white text-[#F40E00] hover:bg-white"
                }`}
              >
                {plan?.ctaText}
              </Link>

              <p className="text-sm md:text-base lg:text-lg font-semibold group-hover:text-white transition-all duration-300">
                {plan?.phrase}
              </p>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default StaffAugmentation;
