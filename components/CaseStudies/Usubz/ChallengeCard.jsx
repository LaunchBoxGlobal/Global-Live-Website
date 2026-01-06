import Image from "next/image";
import React from "react";

const ChallengeCard = ({ challenge }) => {
  return (
    <div className="w-full max-w-[296px] h-[457px] bg-white z-10 relative rounded-[29.51px] p-5 flex flex-col items-center justify-center gap-7 text-center">
      <h3 className="text-[#212121] font-bold uppercase">{challenge?.title}</h3>
      <Image
        src={challenge?.image}
        alt={challenge?.img_alt_tag}
        width={challenge?.imgWidth}
        height={challenge?.imgHeight}
        className="object-contain"
      />

      <p className="text-[#212121] leading-[1.2]">{challenge?.description}</p>
    </div>
  );
};

export default ChallengeCard;
