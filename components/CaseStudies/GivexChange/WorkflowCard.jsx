import Image from "next/image";
import React from "react";

const WorkflowCard = ({
  title,
  description,
  icon,
  iconWidth,
  iconHeight,
  iconAlt,
  num,
}) => {
  return (
    <div className="w-full lg:max-w-[400px] min-h-[210px] rounded-[17px] p-7 relative bg-gradient-to-b from-[#EBEBEB] to-[#F9F9F9] z-10">
      <div className="w-full flex items-center justify-between z-10">
        <div className="w-[53px] h-[53px] rounded-full flex items-center justify-center bg-[var(--givexchange-primary-color)] shadow-xl border-[4px] border-white">
          <Image
            src={icon}
            width={iconWidth}
            height={iconHeight}
            alt={iconAlt}
          />
        </div>
        <p className="text-lg font-semibold leading-none z-10">{num}</p>
      </div>

      <h3 className="text-lg font-semibold leading-none mt-5 mb-2.5 z-10">
        {title}
      </h3>
      <p className="text-lg leading-[1.2] text-[#212121] z-10">{description}</p>
    </div>
  );
};

export default WorkflowCard;
