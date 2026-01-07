import Image from "next/image";
import React from "react";

const ObjectiveCard = ({ challenge, index }) => {
  return (
    <div
      className={`w-full lg:w-[28%] bg-transparent z-10 relative rounded-[29.51px] flex flex-col items-center justify-center ${
        index > 2 && "lg:flex-col-reverse"
      } gap-4 text-center`}
    >
      <h3 className="text-[#212121] font-bold">{challenge?.title}</h3>

      <Image
        src={`/case-studies/usubz/objective-card-arrow-down.svg`}
        alt={"enfe"}
        width={16}
        height={67}
        className={`${index > 2 && "lg:rotate-180"}`}
      />

      <div className="bg-white rounded-[29px] p-10 w-full max-w-[360px] min-h-[204px] flex items-center justify-center objective-card-shadow">
        <p className="text-[#212121] leading-[1.2]">{challenge?.description}</p>
      </div>
    </div>
  );
};

export default ObjectiveCard;
