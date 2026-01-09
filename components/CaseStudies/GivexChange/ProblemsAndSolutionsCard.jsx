import Image from "next/image";
import React from "react";

const ProblemsAndSolutionsCard = () => {
  return (
    <div className="w-full max-w-[442px] min-h-[251px] bg-white rounded-[17px] relative z-20 flex flex-col items-start justify-center gap-4 p-10">
      <div className="w-full flex items-center gap-3">
        <Image
          src={"/case-studies/givexchange/problem-card-icon.png"}
          alt="problem-card-icon"
          width={28}
          height={28}
        />
        <p className={`text-[#FF544B] text-[20px] font-medium`}>Problem 1</p>
      </div>

      <h3 className={`text-[24px] font-medium leading-none`}>
        Category Navigation
      </h3>
      <p className={`text-lg font-normal leading-[1.2] text-[#212121]`}>
        Designing a structure that helps users move naturally between categories
        and discover products quickly.
      </p>
    </div>
  );
};

export default ProblemsAndSolutionsCard;
