import { WHAT_CHANGES } from "@/constants/systems-page/whatChanges";
import Image from "next/image";

export default function WhatChangesCards() {
  return (
    <div className="w-full bg-transparent flex items-center justify-center pt-8 lg:pt-16">
      <div className="max-w-7xl w-full flex flex-col gap-6">
        {/* Main Comparison Card */}
        <div className="bg-white rounded-[2rem] w-full p-3 md:p-8 lg:p-10 border border-red-50 relative z-20">
          {/* Desktop Headers */}
          <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] gap-8 mb-8 md:mb-10 items-center">
            <div className="flex justify-center">
              <div className="bg-[#F7F8F7] text-gray-600 border border-[#90909040] text-[16px] font-medium uppercase tracking-[0.15em] px-6 py-2.5 rounded-full">
                BEFORE LAUNCH
              </div>
            </div>
            <div className="w-8"></div>
            <div className="flex justify-center">
              <div className="bg-[#FEF5F5] red-text border border-[#F40E004F] text-[16px] font-medium uppercase tracking-[0.15em] px-6 py-2.5 rounded-full">
                after LAUNCH
              </div>
            </div>
          </div>

          {/* Rows */}
          <div className="flex flex-col gap-5 w-full">
            {WHAT_CHANGES.map((row, index) => (
              <div
                key={index}
                className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-5 items-stretch group relative"
              >
                {/* Before Card */}
                <div className="bg-[#F2F2F2] rounded-[16px] p-5 flex gap-4 md:gap-5 items-start lg:items-center border border-gray-100/50 shadow-sm transition-transform duration-300 hover:-translate-y-0.5">
                  <div className="w-[50px] h-[50px] lg:w-[80px] lg:h-[80px] p-3 lg:p-0 rounded-[16px] bg-[#F3F3F4] flex items-center justify-center text-white shrink-0 custom-shadow">
                    <Image
                      src={row.before.icon}
                      width={42}
                      height={26}
                      className=""
                    />
                  </div>
                  <div className="flex flex-col gap-1 mt-0.5">
                    <h3 className="text-base md:text-lg leading-none font-extrabold text-gray-900 tracking-wide">
                      {row.before.title}
                    </h3>
                    <p className="text-base md:text-[17px] text-[#00000080] font-medium leading-[1.3] pr-2">
                      {row.before.description}
                    </p>
                  </div>
                </div>

                <div className="w-[60px] h-[60px] bg-white rounded-full custom-shadow absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-20 hidden lg:flex items-center justify-center">
                  <Image
                    src={"/systems-page/arrow-right.png"}
                    alt="arrow-right"
                    width={14}
                    height={6}
                    className=""
                  />
                </div>

                {/* After Card */}
                <div className="bg-[#FEF4F4] rounded-2xl py-5 pr-5 pl-8 flex gap-4 md:gap-5 items-start lg:items-center border border-red-50 shadow-sm transition-transform duration-300 hover:-translate-y-0.5">
                  <div className="w-[50px] h-[50px] lg:w-[80px] lg:h-[80px] p-3 lg:p-0 rounded-[16px] bg-[#FEEAE9] border border-[#F40E0026] flex items-center justify-center text-white shrink-0 shadow-[0_4px_14px_rgba(239,68,68,0.4)]">
                    <Image
                      src={row.after.icon}
                      width={42}
                      height={26}
                      className=""
                    />
                  </div>
                  <div className="flex flex-col gap-1 mt-0.5">
                    <h3 className="text-base md:text-lg leading-none font-extrabold red-text tracking-wide">
                      {row.after.title}
                    </h3>
                    <p className="text-base md:text-[17px] text-[#00000080] leading-[1.3] pr-2">
                      {row.after.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="bg-white z-20 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-red-50 p-5 md:p-6 relative overflow-hidden flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
          <div className="">
            <Image
              src={"/systems-page/rocket-box-icon.png"}
              alt="rocket-box-icon"
              width={55}
              height={55}
              className=""
            />
          </div>
          <p className="text-gray-800 text-[15px] md:text-[20px] lg:text-[24px] font-medium z-10 leading-[1] max-w-[800px]">
            This is what it looks like when the right team executes on your
            vision at the speed your startup actually{" "}
            <span className="text-[#EF4444] font-bold">needs.</span>
          </p>

          {/* Decorative corner */}
          <div className="absolute bottom-0 right-0 w-32 h-32 pointer-events-none">
            <svg
              viewBox="0 0 100 100"
              className="absolute bottom-0 right-0 w-full h-full text-[#FEF2F2]"
              fill="currentColor"
            >
              <circle
                cx="100"
                cy="100"
                r="85"
                fill="none"
                stroke="currentColor"
                strokeWidth="15"
              />
              <circle
                cx="100"
                cy="100"
                r="50"
                fill="currentColor"
                className="text-[#FEE2E2]"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
