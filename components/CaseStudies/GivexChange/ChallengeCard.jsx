import Image from "next/image";
import React from "react";

const ChallengeCard = ({ challenge, index }) => {
  return (
    <div
      className={`w-full max-w-[297px] relative z-20 ${
        index % 2 === 0 ? "" : "lg:top-40"
      }`}
    >
      <div
        className={`w-full min-h-[226px] custom-shadow relative bg-[${challenge?.bgColor}] rounded-[34px] p-10 flex flex-col items-start justify-center gap-4`}
      >
        <div className="w-[77px] h-[77px] bg-[var(--givexchange-primary-color)] flex items-center justify-center rounded-full absolute left-10 top-[-20%]">
          <Image
            src={challenge?.icon}
            width={challenge?.iconWidth}
            height={challenge?.iconHeight}
            alt={challenge?.iconAlt}
          />
        </div>
        <h3
          className={`text-lg font-bold leading-none tracking-tight ${
            index === 1 || index === 3 ? "text-[#fff]" : "text-[#212121]"
          }`}
        >
          {challenge?.title}
        </h3>
        <p
          className={`leading-[1.2] ${
            index === 1 || index === 3 ? "text-[#fff]" : "text-[#212121]"
          }`}
        >
          {challenge?.description}
        </p>
      </div>
    </div>
  );
};

export default ChallengeCard;
