import Image from "next/image";
import React from "react";

const Timeline = () => {
  return (
    <div className="w-full padding-x">
      <div className="w-full flex flex-col lg:flex-row lg:items-center items-start justify-between tracking-tight lg:border rounded-full md:px-6 min-h-[107px] my-20 timeline-shadow gap-4">
        <div className="flex items-center gap-3">
          <div className="min-w-[66px] h-[66px] bg-[var(--primary-color)] rounded-full flex items-center justify-center">
            <Image
              src={"/case-studies/time-icon.webp"}
              alt="time-icon"
              width={40}
              height={40}
              priority
            />
          </div>
          <div className="flex flex-col items-start gap-1">
            <p className="text-lg text-gray-500">Time</p>
            <p className="text-[18px] lg:text-[20px] font-bold">
              34 Weeks of Hustle
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="min-w-[66px] h-[66px] bg-[var(--primary-color)] rounded-full flex items-center justify-center">
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
              EdTech + Job Hunting Hybrid
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="min-w-[66px] h-[66px] bg-[var(--primary-color)] rounded-full flex items-center justify-center">
            <Image
              src={"/case-studies/constribution-icon.webp"}
              alt="time-icon"
              width={44}
              height={40}
              priority
            />
          </div>
          <div className="flex flex-col items-start gap-1">
            <p className="text-lg text-gray-500">Our Contribution</p>
            <p className="text-[18px] lg:text-[20px] font-bold">
              Complete UI/UX Design for Mobile & Web Application
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
