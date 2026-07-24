import React from "react";
import SoundFamiliarAnimation from "./SoundFamiliarAnimation";

const SoundFamiliar = () => {
  return (
    <section className="section">
      <div
        className={`w-full relative overflow-hidden z-20 text-center flex flex-col items-center pt-10 padding-x`}
      >
        <p className="red-text font-medium tracking-widest uppercase text-lg md:text-xl lg:text-2xl xl:text-[32px] mb-5">
          Sound Familiar?
        </p>
        <h2 className="systems-section-heading">
          You Have The Vision, The Funding, <br className="hidden lg:block" />{" "}
          And The Pressure. Just Not The{" "}
          <span className="text-[#ea2b2b]">Team</span>
        </h2>
        <p className="text-gray-400 font-light leading-[1.2] text-lg md:text-xl xl:text-[24px] md:max-w-[95%] mt-5">
          Most non-technical founders hit the same wall after closing their
          round. Here is what that usually looks like.
        </p>
      </div>

      <SoundFamiliarAnimation />

      <div className="w-full padding-x">
        <p className="mx-auto text-center text-lg md:text-xl lg:text-[24px] lg:mt-10">
          If this is where you are right now, you are exactly{" "}
          <br className="hidden lg:block" /> who we built this{" "}
          <span className="red-text">for.</span>
        </p>
      </div>
    </section>
  );
};

export default SoundFamiliar;
