import {
  REAL_ESTATE_WHY_CHOOSE_US_1,
  REAL_ESTATE_WHY_CHOOSE_US_2,
} from "@/constants/industries/real-estate-content/real-why-choose-us";
import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="w-full py-10 lg:py-20 padding-x">
      <div className="w-full flex flex-col items-center gap-5">
        <h2 className="section-heading text-center">
          Why Choose LaunchBox <br />{" "}
          <span className="text-[#F40E00]">Global?</span>
        </h2>
        <p className="section-paragraph text-center mx-auto">
          In a market filled with generalist development firms, LaunchBox Global
          sets itself apart through deep healthcare specialization, proven
          technical excellence, and a commitment to building solutions that meet
          the highest standards of security and compliance.
        </p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14">
        {REAL_ESTATE_WHY_CHOOSE_US_1?.map((c, i) => {
          return (
            <div
              className={`w-full group flex flex-col items-center justify-start text-center gap-6 py-8 px-5 lg:px-7 hover:text-white hover:bg-[#F40E00] transition-all duration-300 ${
                i === 0
                  ? "lg:border-r lg:border-b "
                  : i === 1
                  ? "lg:border-r lg:border-b"
                  : i === 2
                  ? "lg:border-b"
                  : ""
              }`}
              key={i}
            >
              <h3 className="font-semibold text-[20px] xl:text-[22px]">
                {c?.title}
              </h3>
              <img
                src={c?.icon}
                width={c?.iconWidth}
                height={c?.iconHeight}
                alt={c?.title}
                loading="lazy"
                className="transition duration-300 group-hover:invert group-hover:brightness-0"
              />
              <p className="text-lg">{c?.description}</p>
            </div>
          );
        })}
        {REAL_ESTATE_WHY_CHOOSE_US_2?.map((c, i) => {
          return (
            <div
              className={`w-full group flex flex-col items-center justify-start text-center gap-6 py-8 px-5 lg:px-7 hover:text-white hover:bg-[#F40E00] transition-all duration-300 ${
                i === 0
                  ? "lg:border-r"
                  : i === 1
                  ? "lg:border-r"
                  : i === 2
                  ? ""
                  : ""
              }`}
              key={i}
            >
              <h3 className="font-semibold text-[20px] xl:text-[22px]">
                {c?.title}
              </h3>
              <img
                src={c?.icon}
                width={c?.iconWidth}
                height={c?.iconHeight}
                alt={c?.title}
                loading="lazy"
                className="transition duration-300 group-hover:invert group-hover:brightness-0"
              />
              <p className="text-lg">{c?.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhyChooseUs;
