import Image from "next/image";
import React from "react";

const DiscoveryAndResearchMobile = () => {
  return (
    <div className="w-full max-w-[1063px] mx-auto mt-16 px-4 lg:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-x-10">
        {/* Timeline (desktop only) */}
        <div className="hidden lg:flex flex-col items-center pt-2">
          <div className="w-[23px] h-[23px] rounded-full bg-white border-[8px] border-[var(--givexchange-primary-color)]" />
          <Image
            src="/case-studies/givexchange/dotted-line.png"
            alt=""
            width={2}
            height={53}
          />
          <div className="w-[23px] h-[23px] rounded-full bg-white border-[8px] border-[var(--givexchange-primary-color)]" />
          <Image
            src="/case-studies/givexchange/dotted-line.png"
            alt=""
            width={2}
            height={53}
          />
          <div className="w-[23px] h-[23px] rounded-full bg-white border-[8px] border-[var(--givexchange-primary-color)]" />
          <Image
            src="/case-studies/givexchange/dotted-line.png"
            alt=""
            width={2}
            height={53}
          />
          <div className="w-[23px] h-[23px] rounded-full bg-white border-[8px] border-[var(--givexchange-primary-color)]" />
        </div>

        {/* Content */}
        <div className="space-y-12">
          <div className="space-y-3">
            <h3 className="text-lg lg:text-[22px] font-semibold">
              User Research
            </h3>
            <p className="text-base lg:text-[22px] leading-[1.4]">
              Interviews and surveys revealed how buyers and sellers behave,
              what motivates them, and where common frustrations occur.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg lg:text-[22px] font-semibold">
              Competitor Review
            </h3>
            <p className="text-base lg:text-[22px] leading-[1.4]">
              Analyzed existing marketplaces to spot UX shortcomings and
              opportunities for meaningful improvements.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg lg:text-[22px] font-semibold">
              Feature Priorities
            </h3>
            <p className="text-base lg:text-[22px] leading-[1.4]">
              Identified core features like listings, filters, chat, and secure
              payments to guide MVP scope.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg lg:text-[22px] font-semibold">
              Tech Exploration
            </h3>
            <p className="text-base lg:text-[22px] leading-[1.4]">
              Evaluated tools and frameworks to support performance,
              flexibility, and future scaling.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoveryAndResearchMobile;
