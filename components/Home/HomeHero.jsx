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
  // text-[34px] lg:text-[64px] xl:text-[84px] 2xl:text-[100px]
  return (
    <section className="w-full bg-white relative pt-36 2xl:pt-52 flex flex-col items-center justify-start gap-0 lg:gap-[25px] overflow-hidden">
      <h1 className="font-bold text-[9vw] md:text-[5.5vw] mb-1 text-center tracking-normal lg:leading-[78px] w-[100%]">
        <span className="flex items-center justify-center gap-2 lg:gap-6">
          Plan{" "}
          <img
            src={"/home-hero-heading-icon.webp"}
            width={80}
            height={80}
            alt={"arrow icon"}
            className="w-[20px] lg:w-[50px]"
            priority
          />{" "}
          Build{" "}
          <img
            src={"/home-hero-heading-icon.webp"}
            width={80}
            height={80}
            alt={"arrow icon"}
            className="w-[20px] lg:w-[50px]"
            priority
          />{" "}
          Succeed
        </span>

        <div className="w-full relative -top-1.5 md:-top-3 2xl:top-2">
          <FlippingText phrases={words} />
        </div>
      </h1>

      <div className="flex items-center justify-center gap-2 w-[95%] lg:w-[76%] relative -top-3 md:-top-6 2xl:top-4 padding-x">
        <h2 className="text-base lg:text-[22px] 2xl:text-[26px] font-medium text-gray-500 text-center">
          Available in your Timezone, at Affordable Rates, with Full
          Transparency.
        </h2>
      </div>

      <div className="flex items-center justify-center gap-4 mt-0 relative lg:-top-3 2xl:top-10 z-20 mb-10 lg:mb-0">
        <ContactButton text={"Get a Free Consultation"} />
      </div>

      {/* <div className="w-full flex items-center justify-center z-0">
        <GlobeDemo />
      </div> */}

      <div className="w-full max-h-[250px] lg:max-h-[250px] overflow-hidden relative flex items-start justify-center">
        <video
          width="880"
          height="468"
          autoPlay
          muted
          loop
          controls={false}
          className="w-[85%] lg:w-[65%]"
        >
          <source src="/rotating-globe.mp4" type="video/mp4" />
          {/* <source src="movie.ogg" type="video/ogg"/> */}
        </video>

        <Image
          src={"/image-glow-optimized.webp"}
          width={1710}
          height={359}
          alt="globe shadow image"
          priority
          className="w-[100%] h-[109px] md:h-[259px] lg:h-[359px] absolute bottom-[-40%] md:bottom-[-60%] lg:bottom-[-85%] left-1/2 -translate-x-1/2 z-30 opacity-100"
        />
      </div>

      {/* <Image
        src={"/hero-globe-02.webp"}
        width={410}
        height={239}
        alt="globe image"
        priority
        className="h-[109px] md:h-[160px] w-[95%] lg:hidden relative bottom-[-25%]"
      /> */}
    </section>
  );
};

export default HomeHero;
