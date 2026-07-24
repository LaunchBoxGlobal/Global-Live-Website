import { X } from "lucide-react";
import React from "react";
import StatsRow from "./StatsRow";
import JourneyCard from "./JourneyCard";
import AreWeGood from "./AreWeGood";
import Image from "next/image";

export default function WhoWeWorkWith({ toggleDiscoveryCallForm }) {
  return (
    <div className="section padding-x flex items-start justify-center relative">
      <div className="w-[60vw] h-[60vw] rounded-full absolute bottom-0 left-[-10%] z-0 blur-[200px] bg-red-500/20 opacity-30" />
      <div
        id="founders"
        className="max-w-[1240px] w-full grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 relative z-20"
      >
        {/* Left Column */}
        <div className="flex flex-col">
          <div className="red-text font-medium text-lg md:text-xl lg:text-2xl xl:text-[32px] mb-5 uppercase">
            Who we work with
          </div>

          <h1 className="systems-section-heading">
            Built For <br className="hidden md:block" />
            Founders <br className="hidden md:block" />
            Who Are Ready <br className="hidden md:block" />
            To <span className="text-[#FF2B2B]">Move</span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl xl:text-[24px] mt-5 leading-[1.2] mb-6 font-light">
            We work best with founders who have funding, a clear vision, and the
            urgency to launch. If that is you, we should talk.
          </p>

          <button
            className="red-btn"
            type="button"
            onClick={() => toggleDiscoveryCallForm()}
          >
            Book a Free Discovery Call
          </button>

          {/* Stats row */}
          <StatsRow />

          {/* Journey Card */}
          <JourneyCard />
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6 w-full">
          {/* Are We A Good Fit Card */}
          <AreWeGood />

          {/* Not A Fit Card */}
          <div className="bg-[#FFF5F4] rounded-[24px] p-6 lg:p-8 border border-[#F40E004D] shadow-[0_2px_10px_-4px_rgba(255,0,0,0.05)] w-full relative overflow-hidden">
            {/* Small tint overlay at bottom right just to have that warm feel if needed, but solid color usually works fine. */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFFDFD] to-[#FFF6F6] -z-10 pointer-events-none"></div>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-[54px] h-[54px] bg-[#FEE8E5] rounded-[12px] flex items-center justify-center shrink-0">
                <Image
                  src={"/systems-page/not-fit-icon.png"}
                  alt="not-fit-icon"
                  width={31}
                  height={28}
                />
              </div>
              <div>
                <h2 className="text-[20px] font-bold text-gray-900 mb-0.5">
                  Not A Fit
                </h2>
                <p className="text-gray-600 text-[18px]">
                  We are not the right team for:
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-[14px] py-1.5 rounded-full border border-[#FFD0D0] bg-transparent text-[13.5px] font-[600] text-gray-700 hover:bg-[#FFF5F5] transition-colors cursor-default">
                <X className="w-3.5 h-3.5 text-[#FF2B2B] stroke-[3.5]" />
                Idea Stage Only
              </span>
              <span className="inline-flex items-center gap-1.5 px-[14px] py-1.5 rounded-full border border-[#FFD0D0] bg-transparent text-[13.5px] font-[600] text-gray-700 hover:bg-[#FFF5F5] transition-colors cursor-default">
                <X className="w-3.5 h-3.5 text-[#FF2B2B] stroke-[3.5]" />
                Deep Research
              </span>
              <span className="inline-flex items-center gap-1.5 px-[14px] py-1.5 rounded-full border border-[#FFD0D0] bg-transparent text-[13.5px] font-[600] text-gray-700 hover:bg-[#FFF5F5] transition-colors cursor-default">
                <X className="w-3.5 h-3.5 text-[#FF2B2B] stroke-[3.5]" />
                Crypto Startups
              </span>
              <span className="inline-flex items-center gap-1.5 px-[14px] py-1.5 rounded-full border border-[#FFD0D0] bg-transparent text-[13.5px] font-[600] text-gray-700 hover:bg-[#FFF5F5] transition-colors cursor-default">
                <X className="w-3.5 h-3.5 text-[#FF2B2B] stroke-[3.5]" />
                No Budget Yet
              </span>
              <span className="inline-flex items-center gap-1.5 px-[14px] py-1.5 rounded-full border border-[#FFD0D0] bg-transparent text-[13.5px] font-[600] text-gray-700 hover:bg-[#FFF5F5] transition-colors cursor-default">
                <X className="w-3.5 h-3.5 text-[#FF2B2B] stroke-[3.5]" />
                No Launch Timeline
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
