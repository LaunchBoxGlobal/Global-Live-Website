"use client";
import React, { useState } from "react";
import {
  GIVEXCHANGE_PROBLEMS,
  GIVEXCHANGE_WEB_PROBLEMS,
} from "@/constants/case-studies/givexchange/givexchange-problems";
import Image from "next/image";

const ProblemsAndSolutions = () => {
  const [platform, setPlatform] = useState("mobile");
  const content =
    platform === "mobile" ? GIVEXCHANGE_PROBLEMS : GIVEXCHANGE_WEB_PROBLEMS;
  return (
    <section className="w-full pb-10 relative padding-x">
      <section className="w-full flex flex-col items-center relative z-10">
        <h2 className="section-heading text-center z-10">
          Problems & Solutions
        </h2>
        {platform === "mobile" ? (
          <p className="text-center lg:w-[85%] text-base lg:text-xl mt-7 z-10">
            The mobile app needed to support smooth navigation, strong
            performance, and secure interactions as the marketplace grew.
            Balancing scalability with ease of use was essential, especially
            with features like payments and messaging integrated directly into
            the experience.
          </p>
        ) : (
          <p className="text-center lg:w-[85%] text-base lg:text-xl mt-7 z-10">
            The web app needed to support complex workflows, large data sets,
            and multi-role access without sacrificing performance or usability.
            Ensuring consistency across devices while maintaining speed,
            security, and scalability was essential for long-term platform
            growth.
          </p>
        )}
      </section>

      <section className="w-full mt-12">
        <div className="mx-auto w-full max-w-[428px] h-[56px] lg:h-[92px] grid grid-cols-2 p-1 bg-[#F0F0F0] rounded-full">
          <button
            type="button"
            onClick={() => setPlatform("mobile")}
            className={`w-full h-full text-lg md:text-[25px] font-medium rounded-full ${
              platform === "mobile"
                ? "bg-[var(--givexchange-primary-color)] text-white"
                : "text-[#212121] bg-transparent"
            }`}
          >
            Mobile App
          </button>
          <button
            type="button"
            onClick={() => setPlatform("web")}
            className={`w-full h-full text-lg md:text-[25px] font-medium rounded-full ${
              platform === "web"
                ? "bg-[var(--givexchange-primary-color)] text-white"
                : "text-[#212121] bg-transparent"
            }`}
          >
            Web App
          </button>
        </div>
      </section>

      <section className="w-full z-20 space-y-4 mt-20 pb-20">
        {content?.map((p, i) => {
          return (
            <div
              key={i}
              className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-5 lg:gap-x-0 gap-y-5"
            >
              <div className="">
                <div className="w-full max-w-[442px] min-h-[261px] bg-white rounded-[17px] relative z-20 flex flex-col items-start justify-center gap-4 p-10">
                  <div className="w-full flex items-center gap-3">
                    <Image
                      src={"/case-studies/givexchange/problem-card-icon.png"}
                      alt="problem-card-icon"
                      width={28}
                      height={28}
                    />
                    <p className={`text-[#FF544B] text-[20px] font-medium`}>
                      Problem 1
                    </p>
                  </div>

                  <h3 className={`text-[24px] font-medium leading-none`}>
                    {p?.problemTitle}
                  </h3>
                  <p
                    className={`text-lg font-normal leading-[1.2] text-[#212121]`}
                  >
                    {p?.problemDescription}
                  </p>
                </div>
              </div>
              <div className="items-end justify-center hidden lg:flex">
                <Image
                  src={"/case-studies/givexchange/problems-line.png"}
                  alt="problems-line"
                  width={389}
                  height={64}
                />
              </div>
              <div className="relative lg:top-20">
                <div className="w-full max-w-[442px] min-h-[261px] bg-white rounded-[17px] relative z-20 flex flex-col items-start justify-center gap-4 p-10">
                  <div className="w-full flex items-center gap-3">
                    <Image
                      src={"/case-studies/givexchange/solution-icon.png"}
                      alt="solution-icon"
                      width={28}
                      height={28}
                    />
                    <p className={`text-[#57D66B] text-[20px] font-medium`}>
                      Solution 1
                    </p>
                  </div>

                  <h3 className={`text-[24px] font-medium leading-none`}>
                    {p?.solutionTitle}
                  </h3>
                  <p
                    className={`text-lg font-normal leading-[1.2] text-[#212121]`}
                  >
                    {p?.solutionDescription}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      <div className="bg-[var(--givexchange-primary-color)] blur-[845px] rounded-full w-[300px] h-[300px] lg:w-[800px] lg:h-[500px] absolute top-1/2 -translate-y-1/2 left-[-60%] lg:left-[-50%] z-0" />
      <div className="bg-[var(--givexchange-primary-color)] blur-[845px] rounded-full w-[300px] h-[300px] lg:w-[800px] lg:h-[500px] absolute top-1/2 -translate-y-1/2 right-[-60%] lg:right-[-50%] z-0" />
    </section>
  );
};

export default ProblemsAndSolutions;
