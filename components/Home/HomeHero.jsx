"use client";
import React from "react";
import ContactButton from "../Global/ContactButton";
import FlippingText from "./FlippingText";
import Image from "next/image";
import { GlobeDemo } from "../talk-to-us/GlobeDemo";

const words = [
  "End-to-End Product Teams",
  "Agile Development Teams",
  "Elite Software Engineers",
  "Innovative UI/UX Designers",
  "Expert Project Managers",
  "Strategic Business Analysts",
  "Visionary Software Architects",
  "Certified Scrum Masters",
  "Diligent QA Engineers",
  "Specialist Database Architects",
  "Creative Storyboard Artists",
  "Skilled Video Editors",
];

const HomeHero = () => {
  return (
    <section className="w-full bg-white relative pt-36 xl:pt-44 flex flex-col items-center justify-start gap-0 h-full md:h-auto lg:h-[100vh] 2xl:h-auto lg:gap-[25px] overflow-hidden">
      <h1 className="font-bold relative z-10 text-[9vw] md:text-[5.5vw] mb-1 text-center tracking-normal lg:leading-[78px] w-[100%]">
        <span className="flex items-center justify-center z-10 gap-2 lg:gap-6">
          Plan{" "}
          <img
            src={"/home-hero-heading-icon.webp"}
            width={80}
            height={80}
            alt=""
            aria-hidden="true"
            className="w-[20px] lg:w-[50px]"
          />{" "}
          Build{" "}
          <img
            src={"/home-hero-heading-icon.webp"}
            width={80}
            height={80}
            alt=""
            aria-hidden="true"
            className="w-[20px] lg:w-[50px]"
          />{" "}
          Succeed
        </span>

        <div className="w-full relative -top-1.5 md:-top-3 2xl:top-2">
          <FlippingText phrases={words} />
        </div>
      </h1>

      <div className="flex items-center justify-center gap-2 w-[95%] lg:w-[76%] relative z-10 -top-3 md:-top-6 2xl:top-4 padding-x">
        <h2 className="text-base lg:text-[22px] 2xl:text-[26px] font-medium text-gray-500 text-center">
          Available in your Timezone, at Affordable Rates, with Full
          Transparency.
        </h2>
      </div>

      <div className="flex items-center justify-center gap-4 mt-0 relative lg:-top-3 2xl:top-10 z-20 mb-10 lg:mb-0">
        <ContactButton text={"Get a Free Consultation"} />
      </div>

      <div className="w-full flex-1 flex items-end justify-center z-0">
        <GlobeDemo />
      </div>

      <Image
        src={"/image-glow-optimized.webp"}
        width={1710}
        height={359}
        alt="globe shadow image"
        priority
        className="w-[100%] h-[109px] lg:h-[359px] 2xl:h-[409px] absolute -bottom-16 md:-bottom-14 lg:bottom-[-33%] xl:bottom-[-25%] 2xl:-bottom-[22%] z-30 opacity-100"
      />
    </section>
  );
};

export default HomeHero;
