import Image from "next/image";
import React from "react";

const FeaturedCard = ({ challenge, dark = false, index }) => {
  return (
    <div className="w-full relative max-w-[300px] mx-auto">
      <div className="w-[99px] h-[99px] bg-[#4E9D4B] rounded-full absolute top-[-26.5%] lg:top-[-23%] lg:left-[18%] xl:left-[22%] xl:top-[-24%] left-[21.5%] z-10 flex items-center justify-center">
        <Image
          src={challenge?.icon}
          width={challenge?.iconWidth}
          height={challenge?.iconHeight}
          alt={`${challenge?.title} icon`}
          className="object-contain"
        />
      </div>
      <div
        className={`givexchange-inner-curve relative pt-14 xl:pt-20 px-7 pb-5 space-y-3 ${dark ? "bg-black text-white" : "bg-white text-black"} ${index % 2 === 0 ? "" : ""} h-[210px] lg:h-[250px] xl:h-[260px]`}
      >
        <h3
          className={`text-base xl:text-lg font-bold leading-none`}
          style={{
            lineHeight: "1.4rem",
          }}
        >
          {challenge?.title}
        </h3>
        <p
          className={`text-base xl:text-lg font-normal ${dark ? "text-gray-300" : "text-gray-700"}`}
          style={{
            lineHeight: "1.5rem",
          }}
        >
          {challenge?.description}
        </p>
      </div>
    </div>
  );
};

export default FeaturedCard;
