import Image from "next/image";
import React from "react";

const DiscoveryCard = ({ challenge, index }) => {
  return (
    <div
      className={`w-full max-w-[523px] h-[264px] bg-white z-10 rounded-[29.51px] p-5 lg:p-14 flex flex-col items-center justify-center gap-7 text-start relative ${
        index === 1 ? "lg:top-40" : index === 3 ? "lg:top-40" : ""
      } objective-card-shadow`}
    >
      <div className="w-full flex items-center justify-between gap-4">
        <h3 className="text-[#212121] text-[25px] font-bold leading-none">
          {challenge?.title}
        </h3>
        <div className="w-[65px] h-[65px] rounded-full bg-[var(--green)] flex items-center justify-center">
          <Image
            src={challenge?.image}
            width={challenge?.imgWidth}
            height={challenge?.imgHeight}
            alt={challenge?.img_alt_tag}
          />
        </div>
      </div>

      <p className="text-[#212121] leading-[1.3] text-lg">
        {challenge?.description}
      </p>
    </div>
  );
};

export default DiscoveryCard;
