import Image from "next/image";
import React from "react";
import ProcessTimelinePath from "./ProcessTimelinePath";
import { SYSTEMS_PROCESS_TIMELINE } from "@/constants/systems-page/process";

const ProcessTimeline = () => {
  return (
    <>
      {/* ============== DESKTOP (lg and up) — unchanged original layout ============== */}
      <div className="w-full relative pt-20 pl-[5%] mt-20 hidden lglg:block">
        <ProcessTimelinePath />

        <Image
          src={"/systems-page/process-timeline.svg"}
          alt="process timeline"
          width={1900}
          height={500}
          className="absolute inset-x-0 top-[40%] z-0 rotate-1 opacity-40"
        />

        {/* card 1 */}
        <div
          key={SYSTEMS_PROCESS_TIMELINE[0].title}
          className={`flex flex-col items-center text-center w-full max-w-[260px] relative group top-6`}
        >
          <span className="text-[10vw] font-extrabold relative bottom-[-8%] number">
            1
          </span>

          {/* Text block */}
          <div className={`max-w-[260px] relative z-10 top-[-70px]`}>
            <h3 className="font-bold leading-none text-left">
              {SYSTEMS_PROCESS_TIMELINE[0].title}
            </h3>
            <p className="text-[15px] font-light text-gray-700 leading-[1.35] mt-2 text-left">
              {SYSTEMS_PROCESS_TIMELINE[0].description}
            </p>
          </div>

          {/* Icon below text, only when iconPosition === "bottom" */}
          <div className="h-[90px] flex items-start justify-center relative z-10 mt-10">
            <Image
              src={SYSTEMS_PROCESS_TIMELINE[0].icon}
              width={134}
              height={134}
              alt={`${SYSTEMS_PROCESS_TIMELINE[0].title} icon`}
              className="object-contain"
            />
          </div>
        </div>

        {/* card 2 */}
        <div
          key={SYSTEMS_PROCESS_TIMELINE[1].title}
          className={`flex flex-col items-center text-center w-full max-w-[260px] absolute top-[24%] left-[36%] group`}
        >
          {/* Icon above number, only when iconPosition === "top" */}
          <Image
            src={SYSTEMS_PROCESS_TIMELINE[1].icon}
            width={134}
            height={134}
            alt={`${SYSTEMS_PROCESS_TIMELINE[1].title} icon`}
            className="object-contain relative z-10 mb-10"
          />

          <span className="text-[10vw] font-extrabold relative bottom-[-8%] number z-10">
            2
          </span>

          {/* Text block */}
          <div className={`max-w-[260px] relative z-10 top-[-80px]`}>
            <h3 className="font-bold leading-none text-left">
              {SYSTEMS_PROCESS_TIMELINE[1].title}
            </h3>
            <p className="text-[15px] font-light text-gray-700 leading-[1.35] mt-2 text-left">
              {SYSTEMS_PROCESS_TIMELINE[1].description}
            </p>
          </div>
        </div>

        {/* card 3 */}
        <div
          key={SYSTEMS_PROCESS_TIMELINE[2].title}
          className={`flex flex-col items-center text-center w-full max-w-[260px] absolute right-[26.5%] top-[-14%] group`}
        >
          {/* Number */}
          {/* <Image
            src={SYSTEMS_PROCESS_TIMELINE[2].num}
            width={SYSTEMS_PROCESS_TIMELINE[2].width}
            height={147}
            alt={`${SYSTEMS_PROCESS_TIMELINE[2].title} number`}
            className="object-contain relative bottom-[-8%] z-10"
          /> */}
          <span className="text-[10vw] font-extrabold relative bottom-[-80px] number z-10">
            3
          </span>

          {/* Text block */}
          <div className={`max-w-[260px] relative z-10`}>
            <h3 className="font-bold leading-none text-left">
              {SYSTEMS_PROCESS_TIMELINE[2].title}
            </h3>
            <p className="text-[15px] font-light text-gray-700 leading-[1.35] mt-2 text-left">
              {SYSTEMS_PROCESS_TIMELINE[2].description}
            </p>
          </div>

          {/* Icon below text, only when iconPosition === "bottom" */}
          <div className="h-[90px] flex items-start justify-center relative z-10 mt-10 mx-auto">
            <Image
              src={SYSTEMS_PROCESS_TIMELINE[2].icon}
              width={134}
              height={134}
              alt={`${SYSTEMS_PROCESS_TIMELINE[2].title} icon`}
              className="object-contain mx-auto"
            />
          </div>
        </div>

        {/* card 4 */}
        <div
          key={SYSTEMS_PROCESS_TIMELINE[3].title}
          className={`flex flex-col items-center text-center w-full max-w-[260px] absolute top-[63%] right-[1%] group`}
        >
          {/* Icon above number, only when iconPosition === "top" */}
          <Image
            src={SYSTEMS_PROCESS_TIMELINE[3].icon}
            width={134}
            height={134}
            alt={`${SYSTEMS_PROCESS_TIMELINE[3].title} icon`}
            className="object-contain relative z-10 mb-2"
          />

          <span className="text-[10vw] font-extrabold relative bottom-[60px] right-14 number z-10">
            4
          </span>

          {/* Text block */}
          <div className={`max-w-[260px] relative z-10 right-14 top-[-130px]`}>
            <h3 className="font-bold leading-none text-left">
              {SYSTEMS_PROCESS_TIMELINE[3].title}
            </h3>
            <p className="text-[15px] font-light text-gray-700 leading-[1.35] mt-2 text-left">
              {SYSTEMS_PROCESS_TIMELINE[3].description}
            </p>
          </div>
        </div>
      </div>

      {/* ============== MOBILE + TABLET (below lg) — stacked vertical timeline ============== */}
      <div className="w-full lglg:hidden px-6 sm:px-10 mt-10">
        <div className="relative flex flex-col gap-12 sm:gap-14 max-w-md sm:max-w-xl mx-auto">
          {/* vertical connecting line */}
          <div className="absolute left-[27px] sm:left-[35px] top-2 bottom-2 w-px bg-gray-300 z-0" />

          {SYSTEMS_PROCESS_TIMELINE.map((step, index) => (
            <div
              key={step.title}
              className="relative z-10 flex items-start gap-5 sm:gap-7"
            >
              {/* icon bubble */}
              <div className="flex-shrink-0 w-14 h-14 sm:w-[70px] sm:h-[70px] rounded-full bg-transparent flex items-center justify-center">
                <Image
                  src={step.icon}
                  width={56}
                  height={56}
                  alt={`${step.title} icon`}
                  className="object-contain w-20 h-20"
                />
              </div>

              {/* text content */}
              <div className="flex-1 pt-1">
                <div className="flex items-center gap-2 mb-1">
                  <Image
                    src={step.num}
                    width={28}
                    height={48}
                    alt={`${step.title} number`}
                    className="object-contain h-7 w-auto"
                  />
                  <h3 className="font-bold text-base sm:text-lg leading-none">
                    {step.title}
                  </h3>
                </div>
                <p className="text-[14px] sm:text-[15px] font-light text-gray-700 leading-[1.45]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProcessTimeline;
