import { Rocket, ShieldCheck, Star } from "lucide-react";
import React from "react";

const StatsRow = () => {
  return (
    <div className="flex flex-wrap justify-between gap-x-8 gap-y-6 border-t border-b border-gray-200 py-8 my-7">
      <div className="flex items-center gap-3">
        <div className="w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] rounded-full bg-[#FEE9E7] flex items-center justify-center text-[#FF2B2B]">
          <Star className="w-7 h-7 fill-current text-[#FF2B2B]" />
        </div>
        <div>
          <div className="font-bold text-lg lg:text-[24px] text-gray-900 leading-tight">
            4.9/5
          </div>
          <div className="text-[15px] text-gray-600 font-normal mt-0.5">
            Client Rating
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] rounded-full bg-[#FEE9E7] flex items-center justify-center text-[#FF2B2B]">
          <Rocket className="w-7 h-7 fill-current text-[#FF2B2B]" />
        </div>
        <div>
          <div className="font-bold text-lg lg:text-[24px] text-gray-900 leading-tight">
            97+
          </div>
          <div className="text-[15px] text-gray-600 font-normal mt-0.5">
            Project Delivered
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] rounded-full bg-[#FEE9E7] flex items-center justify-center text-[#FF2B2B]">
          <ShieldCheck className="w-6 h-6 fill-current text-[#FF2B2B]" />
        </div>
        <div>
          <div className="font-bold text-lg lg:text-[24px] text-gray-900 leading-tight">
            95%
          </div>
          <div className="text-[15px] text-gray-600 font-normal mt-0.5">
            Client Retention
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsRow;
