import React from "react";
import ContactButton from "@/components/Global/ContactButton";
import HeroAnimation from "./HeroAnimation";

const Hero = () => {
  return (
    <section className="w-full relative pt-36 2xl:pt-52 padding-x overflow-hidden bg-white">
      <section className="w-full relative pt-10 flex flex-col items-center justify-start gap-5 lg:gap-3 z-10">
        <h1 className="font-bold text-[8.5vw] md:text-[5.5vw] text-center tracking-normal leading-[1] w-full z-10">
          Inspire Trust and Relevance{" "}
          <span className="red-text">Immediately</span>
        </h1>

        <p className="text-base md:text-lg lg:text-[22px] my-2 2xl:text-[26px] font-medium text-gray-500 text-center md:w-2/3 lg:w-[85%] lg:leading-8 z-10">
          Where Travel Meets Technology — Build apps that elevate guest
          experiences, simplify bookings, and redefine hospitality efficiency.
        </p>
        <div className="flex items-center justify-center gap-4 mt-1 mb-10 z-20">
          <ContactButton text={"Schedule A Free Strategy Call"} />
        </div>

        <HeroAnimation />
      </section>
    </section>
  );
};

export default Hero;
