import Image from "next/image";
import React from "react";

const ChallengeCard = ({ ch, idx }) => {
  return (
    <div
      className={`w-full relative border-t border-gray-300 z-10 flex items-center flex-wrap lg:flex-nowrap gap-y-5 gap-x-10 group ${idx % 2 !== 0 ? "lg:pl-10 midlg:pl-20" : ""} ${idx === 4 ? "pt-10" : "py-10"}`}
      key={ch.title}
    >
      {/* number image */}
      <div className="">
        <Image
          src={ch.num}
          width={ch.numWidth}
          height={120}
          sizes="(min-width: 1024px) 120px, 100px"
          className="object-contain w-[100px] lg:min-w-[120px]"
          alt={`Challenge ${idx + 1}`}
          loading="lazy"
        />
      </div>

      {/* icon + heading */}
      <div className="flex items-start flex-col lg:items-center md:flex-row gap-4">
        <div className="min-w-[54px] h-[54px] p-1 md:p-2.5 midlg:w-[60px] midlg:h-[60px] rounded-[16px] flex items-center justify-center border border-[#5E51C9] bg-[#5E51C926] group-hover:bg-[linear-gradient(46.52deg,_#5E51C9_-15.16%,_#408EE8_119.82%)] group-hover:-rotate-12 transition-all duration-700">
          <Image
            src={ch.icon}
            width={ch.iconWidth}
            height={ch.iconHeight}
            sizes="60px"
            className="object-contain group-hover:brightness-0 group-hover:invert transition-all duration-300"
            alt={`${ch.title} icon`}
            loading="lazy"
          />
        </div>
        <h3 className="text-lg md:text-[20px] lg:text-[24px] font-bold leading-[1.25] w-full max-w-[305px]">
          {ch.title}
        </h3>
      </div>

      {/* description */}
      <div className="">
        <p className="w-full lg:max-w-[465px] leading-[1.35] text-gray-600">
          {ch.description}
        </p>
      </div>
    </div>
  );
};

export default ChallengeCard;
