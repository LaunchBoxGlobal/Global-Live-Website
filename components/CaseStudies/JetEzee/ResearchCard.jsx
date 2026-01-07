import Image from "next/image";
import React from "react";

const ResearchCard = ({
  imageSrc,
  imageWidth,
  imageHeight,
  imageAlt,
  title,
  description,
  bgColor,
}) => {
  return (
    <div
      className={`w-full max-w-[594px] min-h-[388px] rounded-[35px] p-7 lg:p-12 flex flex-col items-start justify-center gap-3 relative overflow-hidden z-10 text-white`}
      style={{ background: bgColor }}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={imageWidth}
        height={imageHeight}
      />
      <h3 className="text-[22px] font-semibold leading-none">{title}</h3>
      <p className="text-base lg:text-lg font-medium leading-[1.3]">
        {description}
      </p>
    </div>
  );
};

export default ResearchCard;
