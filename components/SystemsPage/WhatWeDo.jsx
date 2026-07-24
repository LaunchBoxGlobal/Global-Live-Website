import React from "react";

const WhatWeDo = () => {
  return (
    <section className="section padding-x">
      <div
        id="services"
        className={`w-full relative overflow-hidden z-20 text-center flex flex-col items-center`}
      >
        <p className="red-text font-medium tracking-widest uppercase text-lg md:text-xl lg:text-2xl xl:text-[32px] mb-5">
          What we do
        </p>
        <h2 className="systems-section-heading">
          Your External Product <br className="hidden lg:block" /> Team From
          First Call to <span className="text-[#ea2b2b]">Launch</span>
        </h2>
        <p className="text-gray-400 font-light leading-[1.2] text-lg md:text-xl xl:text-[24px] md:max-w-[75%] mt-5">
          We plug in as your full product team and take your idea, Figma, or
          spec all the way to a launched MVP. Design, frontend, backend, mobile,
          cloud, integrations. One team, one timeline, one point of
          accountability.
        </p>
      </div>

      <div className="flex items-center justify-center pt-10">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1 */}
          <div className="bg-[#FCF5F3] rounded-[24px] p-6 lg:p-8 flex flex-col hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-[17px] font-bold text-gray-900 mb-4 tracking-tight leading-snug">
              You Have Designs But No Build Team
            </h2>
            <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
              We take your Figma files and build the full product, frontend to
              backend, web to mobile, exactly as designed and production ready.
            </p>
            <div className="mt-auto bg-white rounded-[16px] border border-white/40 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] p-1.5 px-4">
              <div className="divide-y divide-gray-100/80">
                <div className="py-3.5 flex justify-between items-center bg-white">
                  <span className="text-[13px] text-gray-500">
                    Figma &rarr; production
                  </span>
                  <span className="bg-[#FFEAEA] text-[#FF3636] font-bold text-[11px] px-2.5 py-0.5 rounded-full tracking-wide">
                    Ready
                  </span>
                </div>
                <div className="py-3.5 flex justify-between items-center bg-white">
                  <span className="text-[13px] text-gray-500">Frontend</span>
                  <div className="w-[100px] h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="w-[100%] h-full bg-[#FF3636] rounded-full"></div>
                  </div>
                </div>
                <div className="py-3.5 flex justify-between items-center bg-white">
                  <span className="text-[13px] text-gray-500">Backend</span>
                  <div className="w-[100px] h-1.5 bg-gray-100 rounded-full overflow-hidden flex justify-start">
                    <div className="w-[85%] h-full bg-[#FF3636] rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#F8F9FB] rounded-[24px] p-6 lg:p-8 flex flex-col hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-[17px] font-bold text-gray-900 mb-4 tracking-tight leading-snug">
              You Have An Idea But Nothing Designed Yet
            </h2>
            <p className="text-[15px] text-gray-500 leading-relaxed mb-6 gap-2">
              We start from scratch with you. Discovery, product scoping, UX
              design, and then build. We help you figure out what to build
              before we start building it.
            </p>
            <div className="mt-auto bg-white rounded-[16px] border border-white/40 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] p-1.5 px-4">
              <div className="divide-y divide-gray-100/80">
                <div className="py-3.5 flex justify-between items-center">
                  <span className="text-[13px] text-gray-500">Discovery</span>
                  <span className="font-semibold text-gray-900 text-[13px]">
                    Done
                  </span>
                </div>
                <div className="py-3.5 flex justify-between items-center">
                  <span className="text-[13px] text-gray-500">UX design</span>
                  <span className="font-semibold text-gray-900 text-[13px]">
                    In progress
                  </span>
                </div>
                <div className="py-3.5 flex justify-between items-center">
                  <span className="text-[13px] text-gray-500">Scope</span>
                  <span className="bg-[#FFEAEA] text-[#FF3636] font-bold text-[11px] px-2.5 py-0.5 rounded-full tracking-wide">
                    Locked
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#FCF5EE] rounded-[24px] p-6 lg:p-8 flex flex-col hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-[17px] font-bold text-gray-900 mb-4 tracking-tight leading-snug">
              You Have A Partial Build That Stalled
            </h2>
            <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
              We audit what exists, take over the codebase, and get your product
              across the finish line without losing time to a full rebuild.
            </p>
            <div className="mt-auto bg-white rounded-[16px] border border-white/40 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] p-1.5 px-4">
              <div className="divide-y divide-gray-100/80">
                <div className="py-3.5 flex justify-between items-center">
                  <span className="text-[13px] text-gray-500">Code audit</span>
                  <span className="bg-[#FFEAEA] text-[#FF3636] font-bold text-[11px] px-2.5 py-0.5 rounded-full tracking-wide">
                    Complete
                  </span>
                </div>
                <div className="py-3.5 flex justify-between items-center">
                  <span className="text-[13px] text-gray-500">Takeover</span>
                  <div className="w-[100px] h-1.5 bg-gray-100 rounded-full overflow-hidden flex justify-start">
                    <div className="w-[45%] h-full bg-[#FF3636] rounded-full"></div>
                  </div>
                </div>
                <div className="py-3.5 flex justify-between items-center">
                  <span className="text-[13px] text-gray-500">To launch</span>
                  <span className="font-semibold text-gray-900 text-[13px]">
                    34 days
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
