import { Check } from "lucide-react";
import Image from "next/image";
import React from "react";

const GOOD_FIT = [
  {
    title: "Pre-seed or Seed Funded",
    description: "You have funding and are ready to start building.",
    icon: "/systems-page/seed-icon.png",
    width: 54,
    height: 56,
  },
  {
    title: "Non-Technical Founder",
    description: "You don’t have an internal engineering team.",
    icon: "/systems-page/non-technical-founder-icon.png",
    width: 54,
    height: 56,
  },
  {
    title: "Product Vision Defined",
    description: "You have a Figma, a spec, or a clear product vision.",
    icon: "/systems-page/product-vision-icon.png",
    width: 54,
    height: 56,
  },
  {
    title: "Need to Launch Fast",
    description: "You need to launch within 90 to 120 days.",
    icon: "/systems-page/launch-fast-icon.png",
    width: 54,
    height: 56,
  },
  {
    title: "One Accountable Team",
    description: "You want one team accountable for your success.",
    icon: "/systems-page/one-accountable-team-icon.png",
    width: 54,
    height: 56,
  },
  {
    title: "US Market Focused",
    description: "You are based in the US or building for a US market.",
    icon: "/systems-page/us-market-focused-icon.png",
    width: 54,
    height: 56,
  },
];

const AreWeGood = () => {
  return (
    <div className="bg-white rounded-[28px] p-6 lg:p-8 border border-[#EFEAEC]">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-[22px] font-[800] text-gray-900 mb-1">
            Are We A Good Fit
          </h2>
          <p className="text-gray-500 text-[14px]">
            We Work Best with Founders who:
          </p>
        </div>
        <div className="relative w-[72px] h-[72px] shrink-0 translate-x-1 -translate-y-1">
          <svg
            className="w-full h-full transform -rotate-90"
            viewBox="0 0 36 36"
          >
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              className="stroke-[#E8F5E9]"
              strokeWidth="3.5"
            ></circle>
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              className="stroke-[#32A20C]"
              strokeWidth="3.5"
              strokeDasharray="100.5"
              strokeDashoffset="5"
              strokeLinecap="round"
            ></circle>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center pt-0.5">
            <span className="text-[#32A20C] font-[900] text-[16px] leading-[1]">
              95%
            </span>
            <span className="text-[8px] font-bold text-gray-600 leading-[1.1] mt-[2px] text-center px-1">
              Founders
              <br />
              Match
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2.5 lg:gap-5">
        {GOOD_FIT.map((fit) => {
          return (
            <div
              key={fit.title}
              className="flex items-start md:items-center gap-3 p-3 rounded-[16px] border border-[#EFEAEC] hover:border-green-100 hover:bg-green-50/40 transition-all group"
            >
              <div>
                <Image
                  src={fit.icon}
                  width={fit.width}
                  height={fit.height}
                  alt={fit.title}
                  className="object-contain"
                />
              </div>
              <div className="flex-1">
                <div className="font-bold text-gray-900 text-[17px] mb-0.5 leading-none">
                  {fit.title}
                </div>
                <div className="text-[#909090] text-[15px] leading-snug">
                  {fit.description}
                </div>
              </div>
              <div className="w-[22px] h-[22px] rounded-full bg-[#16A34A] text-white flex items-center justify-center ml-2 shrink-0">
                <Check className="w-3 h-3 stroke-[3]" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AreWeGood;
