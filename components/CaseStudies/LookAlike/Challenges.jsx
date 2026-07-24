import { LOOKALIKE_CHALLENGES } from "@/constants/case-studies/lookalike/lookalike-challenges";
import Image from "next/image";
import React from "react";

const Challenges = () => {
  return (
    <section className="w-full relative padding-x">
      <section className="w-full text-start relative z-10">
        <h2 className="section-heading text-start z-10">
          The <span className="lookalike-gradient-text">Challenge</span>
        </h2>
      </section>

      <section className="w-full relative z-10 mt-10 lg:mt-12">
        {LOOKALIKE_CHALLENGES?.map((ch, idx) => {
          return (
            <div
              className={`w-full relative border-t border-gray-300 py-10 z-10 flex items-center gap-x-10 group ${idx % 2 !== 0 ? "lg:pl-20" : ""}`}
              key={ch.title}
            >
              <div className="">
                <Image
                  src={ch.num}
                  width={ch.numWidth}
                  height={120}
                  className="object-contain"
                  alt={`list number`}
                />
              </div>
              <div className="flex items-center gap-4">
                <div className="w-[64px] h-[64px] rounded-[16px] flex items-center justify-center border border-[#5E51C9] bg-[#5E51C926] group-hover:bg-[linear-gradient(46.52deg,_#5E51C9_-15.16%,_#408EE8_119.82%)] group-hover:-rotate-12 transition-all duration-700">
                  <Image
                    src={ch.icon}
                    width={ch.iconWidth}
                    height={ch.iconHeight}
                    className="object-contain group-hover:brightness-0 group-hover:invert transition-all duration-300"
                    alt={`list number`}
                  />
                </div>
                <h3 className="text-[24px] font-bold leading-[1.25] w-full max-w-[305px]">
                  {ch.title}
                </h3>
              </div>
              <div className="">
                <p className="w-full max-w-[465px] leading-[1.35] text-gray-600">
                  {ch.description}
                </p>
              </div>
            </div>
          );
        })}
      </section>

      <div className="bg-[#5E51C9] rounded-full w-[50vw] h-[50vw] blur-[500px] pointer-events-none opacity-70 absolute top-[20%] left-[-15%] z-0" />
    </section>
  );
};

export default Challenges;
