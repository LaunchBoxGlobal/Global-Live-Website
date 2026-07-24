import Image from "next/image";
import React from "react";
// idea-icon

const JOURNEY = [
  {
    title: "Idea",
    icon: "/systems-page/idea-icon.png",
    width: 24,
    height: 28,
  },
  {
    title: "Funding",
    icon: "/systems-page/funding-icon.png",
    width: 30,
    height: 28,
  },
  {
    title: "Product",
    icon: "/systems-page/product-icon.png",
    width: 22,
    height: 28,
  },
  {
    title: "Development",
    icon: "/systems-page/development-icon.png",
    width: 32,
    height: 28,
  },
  {
    title: "Launch",
    icon: "/systems-page/launch-icon.png",
    width: 23,
    height: 24,
  },
];

const JourneyCard = () => {
  return (
    <div className="bg-[#FAF6F4] rounded-[24px] p-8 border border-white shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] w-full">
      <div className="flex justify-between relative mt-2 mb-6">
        <div className="w-full border border-[#FF0000] border-dashed absolute inset-x-0 top-[30%]" />
        {JOURNEY.map((j, ind) => {
          return (
            <div
              key={j.title}
              className={`flex flex-col items-center gap-3 relative group ${ind === JOURNEY.length - 1 && "lg:-right-1"}`}
            >
              <div className="w-[40px] h-[40px] lg:w-[55px] lg:h-[55px] p-2 lg:p-0 rounded-full bg-[#E9E9E9] hover:bg-red-500 flex items-center justify-center text-gray-600">
                <Image
                  src={j.icon}
                  alt={j.title}
                  width={j.width}
                  height={j.height}
                  className="brightness-0 transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                />
              </div>
              <span className="text-[10px] md:text-base lg:text-[18px] font-medium text-gray-700">
                {j.title}
              </span>
            </div>
          );
        })}
      </div>

      <div className="text-center font-bold text-[20px] text-gray-800 mt-8 leading-[1.2]">
        We Help you go from development to launch -{" "}
        <span className="red-text">Faster</span>
      </div>
    </div>
  );
};

export default JourneyCard;
