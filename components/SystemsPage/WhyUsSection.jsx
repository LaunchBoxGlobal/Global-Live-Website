import { WHY_US } from "@/constants/systems-page/whyUs";
import Image from "next/image";
import React from "react";

export default function WhyUsSection() {
  return (
    <section className="section padding-x">
      <div
        className={`w-full relative overflow-hidden z-20 text-start flex flex-col items-start`}
      >
        <p className="red-text font-medium tracking-widest uppercase text-lg md:text-xl lg:text-2xl xl:text-[32px] mb-5">
          Why us
        </p>
        <h2 className="systems-section-heading">
          A Lot of Agencies Build MVPs <br className="hidden lg:block" />
          Here's What Makes Us <span className="text-[#ea2b2b]">Different</span>
        </h2>
        <p className="text-gray-400 font-light leading-[1.2] text-lg md:text-xl xl:text-[24px] md:max-w-[95%] mt-5">
          We have worked with enough funded founders to know what they actually
          need. Speed, accountability, and a team that treats your product like
          their own.
        </p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 pt-10 relative z-20">
        {WHY_US?.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-[22px] border border-[#EAEAEA] shadow-sm overflow-hidden flex flex-col group hover:shadow-md transition-all duration-300 hover:-translate-y-1 w-full"
          >
            <div className="relative h-36 w-full flex items-center justify-center p-6 bg-gradient-to-b from-[#FFF5F5] to-white overflow-hidden border-b border-[#EAEAEA]">
              <div className="absolute top-6 left-6 text-xs font-bold text-[#ef4444] border border-red-200/50 bg-white/80 backdrop-blur-sm px-2.5 py-1 rounded-full z-10 shadow-sm">
                {card.id}
              </div>
              <div className="relative z-10 scale-[1.3] group-hover:scale-[1.35] transition-transform duration-500 ease-out">
                <Image
                  src={card.icon}
                  width={card.width}
                  height={card.height}
                  alt={card.title}
                  className="object-contain"
                />
              </div>
              <Image
                src={"/systems-page/why-us-card-glow.png"}
                alt="why-us-card-glow"
                width={270}
                height={270}
                className="absolute top-0 right-0 z-0 opacity-80"
              />
              {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-red-500/5 rounded-full blur-3xl z-0"></div> */}
            </div>

            <div className="p-8 flex-grow bg-white">
              <h3 className="text-[24px] font-semibold text-gray-900 mb-3 tracking-tight">
                {card.title}
              </h3>
              <p className="text-base text-[#737373] leading-[1.3] font-normal">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-[100vw] h-[100vw] rounded-full bg-red-500/20 blur-[200px] opacity-30 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-0" />
    </section>
  );
}
