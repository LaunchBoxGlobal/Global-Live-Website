import Image from "next/image";
import React from "react";

const DiscoveryAndResearch = () => {
  return (
    <div className="w-full max-w-[1063px] mx-auto relative mt-16 grid grid-cols-3 gap-x-10">
      <div className="w-full col-span-1 flex">
        <div className="w-[20%] hidden lg:flex flex-col items-center gap-y-[5px]">
          <div className="w-[23px] h-[23px] rounded-full bg-white border-[8px] border-[var(--givexchange-primary-color)]" />
          <Image
            src={"/case-studies/givexchange/dotted-line.png"}
            alt="dotted-line"
            width={2}
            height={53}
          />
          <div className="w-[23px] h-[23px] rounded-full bg-white border-[8px] border-[var(--givexchange-primary-color)]" />
          <Image
            src={"/case-studies/givexchange/dotted-line.png"}
            alt="dotted-line"
            width={2}
            height={53}
          />
          <div className="w-[23px] h-[23px] rounded-full bg-white border-[8px] border-[var(--givexchange-primary-color)]" />
          <Image
            src={"/case-studies/givexchange/dotted-line.png"}
            alt="dotted-line"
            width={2}
            height={53}
          />
          <div className="w-[23px] h-[23px] rounded-full bg-white border-[8px] border-[var(--givexchange-primary-color)]" />
        </div>
        <div className="space-y-16 w-[80%]">
          <h3 className="text-[22px] font-semibold leading-none">
            User Research
          </h3>

          <h3 className="text-[22px] font-semibold leading-none">
            Competitor Review
          </h3>

          <h3 className="text-[22px] font-semibold leading-none">
            Feature Priorities
          </h3>

          <h3 className="text-[22px] font-semibold leading-none">
            Tech Exploration
          </h3>
        </div>
      </div>
      <div className="w-full col-span-2 space-y-8">
        <p className="text-[22px] font-normal leading-[1.2]">
          Interviews and surveys revealed how buyers and sellers behave, what
          motivates them, and where common frustrations occur.
        </p>

        <p className="text-[22px] font-normal leading-[1.2]">
          Analyzed existing marketplaces to spot UX shortcomings and
          opportunities for meaningful improvements.
        </p>

        <p className="text-[22px] font-normal leading-[1.2]">
          Identified core features like listings, filters, chat, and secure
          payments to guide MVP scope.
        </p>

        <p className="text-[22px] font-normal leading-[1.2]">
          Evaluated tools and frameworks to support performance, flexibility,
          and future scaling.
        </p>
      </div>
    </div>
  );
};

export default DiscoveryAndResearch;
