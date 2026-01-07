import Image from "next/image";
import React from "react";
import {
  USUBZ_DESIGN_STRATEGY,
  USUBZ_DESIGN_STRATEGY_2,
} from "@/constants/case-studies/usubz/UsubzDesignStrategy";
import Link from "next/link";

const DesignStrategy = () => {
  return (
    <section className="w-full pb-10 relative padding-x">
      <section className="w-full flex flex-col items-center relative z-10">
        <h2 className="section-heading text-center z-10">Design Strategy</h2>
        <p className="text-center text-base lg:text-xl mt-7 z-10 lg:w-2/3">
          We followed a Functionality-First Approach, focusing on core design
          principles that balance usability with motivation. Through our custom
          <Link href={"/services/mobile-app-development"}>
            mobile app development services
          </Link>
          , we designed Usubz, keeping every interaction simple, motivating, and
          purposeful.
        </p>
      </section>

      <section className="w-full mt-16 relative lg:h-screen grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Image
          src={"/case-studies/usubz/design-strategy-border.png"}
          width={1041}
          height={730}
          className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-0 hidden lg:block"
        />

        <div className="w-full flex flex-col items-start justify-center gap-6 lg:gap-16 z-10 col-span-1">
          {USUBZ_DESIGN_STRATEGY?.map((design, index) => {
            return (
              <div
                key={index}
                className={`w-full max-w-[394px] min-h-[182px] bg-[#6EF0B2] flex flex-col items-start justify-center gap-2 p-6 z-10 text-white rounded-[40px] design-strategy-card relative ${
                  index === 0
                    ? "lg:rounded-br-none"
                    : index === 2
                    ? "lg:rounded-tr-none"
                    : ""
                }`}
              >
                {/* {index === 1 && (
                  <svg
                    width="120"
                    height="80"
                    viewBox="0 0 520 180"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-1/2 -translate-y-1/2 right-[-10%] z-0"
                  >
                    <path
                      d="M 14 0 H 0 L 520 90 L 340 180 H 24 C 10 180 0 170 0 156 V 24 C 0 10 10 0 24 0 Z"
                      fill="#6EF2B2"
                    />
                  </svg>
                )} */}

                <h3 className="text-lg font-bold leading-none z-10">
                  {design?.title}
                </h3>
                <p className="text-lg leading-[1.2] z-10">
                  {design?.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="w-full z-10 pt-10 col-span-1">
          <Image
            src={"/case-studies/usubz/design-and-strategy-mobile-mockup.png"}
            width={357}
            height={692}
            className="mx-auto z-10 object-contain"
          />
        </div>

        <div className="w-full flex flex-col items-start justify-center gap-6 lg:gap-16 z-10 col-span-1">
          {USUBZ_DESIGN_STRATEGY_2?.map((design, index) => {
            return (
              <div
                key={index}
                className={`w-full max-w-[394px] min-h-[182px] bg-[#6EF0B2] flex flex-col items-start justify-center gap-2 p-6 z-10 text-white rounded-[40px]
                    ${
                      index === 0
                        ? "lg:rounded-bl-none"
                        : index === 2
                        ? "lg:rounded-tl-none"
                        : ""
                    }
                     relative`}
              >
                {/* {index === 1 && (
                  <svg
                    width="120"
                    height="80"
                    viewBox="0 0 520 180"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute left-[-10%] z-0 top-1/2 -translate-y-1/2"
                  >
                    <path
                      d="M 24 0 H 440 L 520 90 L 440 180 H 24 C 10 180 0 170 0 156 V 24 C 0 10 10 0 24 0 Z"
                      fill="#6EF2B2"
                    />
                  </svg>
                )} */}
                <h3 className="text-lg font-bold leading-none z-10">
                  {design?.title}
                </h3>
                <p className="text-lg leading-[1.2] z-10">
                  {design?.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <div className="bg-[#1CE98A] blur-[245px] rounded-full w-[500px] h-[500px] absolute left-[2%] top-[5%] opacity-30 z-0" />
      <div className="bg-[#1CE98A] blur-[245px] rounded-full w-[500px] h-[500px] absolute right-[-20%] bottom-0 opacity-30 z-0" />
    </section>
  );
};

export default DesignStrategy;
