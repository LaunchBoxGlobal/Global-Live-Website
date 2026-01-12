import { WHY_YOU_NEED_TRAVEL_APP } from "@/constants/industries/travel-industry/why-you-need-travel-app";
import Image from "next/image";
import React from "react";

const WhyYouNeedTravelApp = () => {
  return (
    <section className="w-full py-20 bg-[#fff] padding-x overflow-hidden">
      <div className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading mx-auto">
          Why You Need a Travel App <br />{" "}
          <span className="red-text">Today</span>
        </h2>

        <p className="section-paragraph lg:w-[90%] mx-auto">
          In an era where travelers plan, book, and share their journeys through
          their smartphones, a dedicated travel app has become essential — not
          optional. The way people engage with travel brands has shifted to a
          mobile-first, experience-driven model. Having your own app isn’t just
          about keeping up with technology; it’s about unlocking new revenue
          opportunities, building stronger relationships, and securing your
          place in the traveler’s digital ecosystem.
        </p>
      </div>

      <div className="w-full relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 lg:mt-20 gap-6">
        {WHY_YOU_NEED_TRAVEL_APP?.map((shift, index) => {
          return (
            <div
              className={`w-full relative bg-white custom-shadow rounded-[16px] p-6 lg:p-12`}
              key={index}
            >
              <div className="w-full relative">
                <Image
                  src={shift?.icon}
                  width={shift?.iconWidth}
                  height={shift?.iconHeight}
                  alt={shift?.iconAlt}
                  className={`object-contain mx-auto z-10 relative`}
                />
              </div>
              <div className="w-full text-center space-y-5 mt-5">
                <h3 className="text-[21px] font-semibold leading-none">
                  {shift?.title}
                </h3>
                <p className="text-[#4B5563] text-lg leading-[1.2]">
                  {shift?.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhyYouNeedTravelApp;
