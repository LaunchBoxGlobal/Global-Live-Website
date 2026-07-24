import React from "react";
import WhatChangesCards from "./WhatChangesCards";

const WhatChanges = () => {
  return (
    <section className="w-full section padding-x relative">
      <section className="bg-transparent lg:pt-24 relative">
        <div
          className={`w-full relative overflow-hidden z-20 text-center flex flex-col items-center`}
        >
          <p className="red-text font-medium tracking-widest uppercase text-lg md:text-xl lg:text-2xl xl:text-[32px] mb-5">
            What Changes
          </p>
          <h2 className="systems-section-heading">
            What Your Startup Looks <br className="hidden lg:block" /> Like
            After <span className="red-text">Launch</span>
          </h2>
          <p className="text-gray-400 font-light leading-[1.2] text-lg md:text-xl xl:text-[24px] md:max-w-[75%] mt-5">
            When you have the right team executing at the right speed,
            everything moves differently.
          </p>
        </div>
      </section>

      <WhatChangesCards />

      <div className="w-[100vw] h-[100vw] rounded-full bg-red-500/20 blur-[200px] opacity-30 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-0" />
    </section>
  );
};

export default WhatChanges;
