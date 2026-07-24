import Image from "next/image";
import React from "react";

const Timeline = () => {
  return (
    <div className="w-full padding-x z-10 relative">
      <div className="w-full z-10 bg-white flex flex-col lg:flex-row lg:items-center items-start justify-between tracking-tight lg:border lg:hover:border-[#408EE840] lg:hover:shadow-[0px_0px_28px_10px_#a1c4ed] transition-all duration-300 rounded-full md:px-6 min-h-[107px] my-20 givexchange-timeline-shadow gap-4 relative">
        <div className="flex items-center gap-3 z-10 bg-white">
          <div className="min-w-[66px] h-[66px] lookalike-gradient rounded-full flex items-center justify-center">
            <Image
              src={"/case-studies/time-icon.webp"}
              alt="time-icon"
              width={35}
              height={35}
              priority
            />
          </div>
          <div className="flex flex-col items-start gap-1">
            <p className="text-lg text-gray-500">Time</p>
            <p className="text-[18px] lg:text-[20px] font-bold">12 Weeks</p>
          </div>
        </div>
        <div className="flex items-center gap-3 z-10 bg-white">
          <div className="min-w-[66px] h-[66px] lookalike-gradient rounded-full flex items-center justify-center">
            <Image
              src={"/case-studies/globe-icon.webp"}
              alt="time-icon"
              width={40}
              height={40}
              priority
            />
          </div>
          <div className="flex flex-col items-start gap-1">
            <p className="text-lg text-gray-500">Domain</p>
            <p className="text-[18px] lg:text-[20px] font-bold">
              Social Networking
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 z-10 bg-white">
          <div className="min-w-[66px] h-[66px] lookalike-gradient rounded-full flex items-center justify-center">
            <Image
              src={"/case-studies/constribution-icon.webp"}
              alt="time-icon"
              width={34}
              height={30}
              priority
            />
          </div>
          <div className="flex flex-col items-start gap-1">
            <p className="text-lg text-gray-500">Our Contribution</p>
            <p className="text-[18px] lg:text-[20px] font-bold">
              End-to-End App & Dashboard Delivery
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
