import Link from "next/link";
import React from "react";

const CTA = ({ toggleDiscoveryCallForm }) => {
  return (
    <section className="w-full bg-[#F9F9F9] text-center flex flex-col items-center py-24 padding-x">
      <span className="text-[#fb1d10] uppercase tracking-wider font-medium text-lg md:text-xl lg:text-2xl xl:text-[32px] mb-5 block">
        LET'S build it
      </span>

      <h2 className="text-[#111] font-bold section-heading mb-5">
        Your Product Is <br className="hidden md:block" />
        Not Going To Build <span className="text-[#fb1d10]">Itself</span>
      </h2>

      <p className="text-[#9ca3af] text-[18px] md:text-[22px] lg:text-[24px] leading-[1.5] font-light lg:max-w-[70%] mb-8">
        You have the funding, the vision, and the pressure to deliver. We have
        the team, the process, and the track record to get you there. Let's talk
        about your build.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full mb-6">
        <button
          type="button"
          onClick={() => toggleDiscoveryCallForm()}
          className="w-full sm:w-auto h-[60px] px-8 bg-[#fb1d10] hover:bg-[#000] text-white font-bold text-[18px] rounded-xl flex items-center justify-center transition-colors duration-200"
        >
          Book a Free Discovery Call
        </button>
        <Link
          href={"https://launchboxglobal.com/case-studies"}
          target="_blank"
          className="w-full sm:w-auto h-[60px] px-8 lg:px-20 bg-white border-[3px] border-[#fb1d10] hover:bg-[#fb1d10] text-[#fb1d10] hover:text-white font-bold text-[18px] rounded-xl flex items-center justify-center transition-colors duration-200"
        >
          See Our Work
        </Link>
      </div>

      <p className="text-[#333] text-[17px] md:text-[19px] lg:text-[24px] lg:max-w-[60%] mx-auto font-normal leading-[1.4]">
        Free call. No commitment. Just an honest conversation about your product
        and whether we are the right team to{" "}
        <span className="red-text">build it.</span>
      </p>
    </section>
  );
};

export default CTA;
