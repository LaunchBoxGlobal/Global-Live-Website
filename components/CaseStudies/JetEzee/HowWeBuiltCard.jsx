import Image from "next/image";
import React from "react";

const HowWeBuiltCard = ({ content, index }) => {
  return (
    <div className="w-[266px] h-[266px] rounded-full flex flex-col items-center justify-start gap-2 p-10 relative bg-[var(--jetezee-primary-color)] text-white text-center mx-auto">
      <img
        src="/case-studies/jetezee/esllipse-01.png"
        alt=""
        className={`w-full hidden midlg:block absolute ${
          index % 2 === 1 ? "rotate-180 -bottom-4" : "-top-4"
        }`}
      />
      <div className="bg-white rounded-full w-[46px] min-h-[46px] flex items-center justify-center">
        <span className="text-[24px] font-semibold text-[var(--jetezee-primary-color)]">
          0{index + 1}
        </span>
      </div>

      <div className="w-full flex items-center justify-center gap-3">
        <Image
          src={content?.icon}
          width={content?.iconWidth}
          height={content?.iconHeight}
          alt={content?.iconAlt}
        />
        <h3 className="text-[20px] font-semibold">{content?.title}</h3>
      </div>

      <p className="leading-[1.2] text-sm max-w-[90%]">
        {content?.description}
      </p>
    </div>
  );
};

export default HowWeBuiltCard;
