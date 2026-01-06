import React from "react";
import DiscoveryCard from "./DIscoveryCard";
import { USUBZ_DISCOVERY_RESEARCH } from "@/constants/case-studies/usubz/UsubzDiscoveryResearch";
import Image from "next/image";

const DiscoveryAndResearch = () => {
  return (
    <section className="w-full pb-10 relative padding-x">
      <section className="w-full flex flex-col items-center relative z-10">
        <h2 className="section-heading text-center z-10">
          Discovery & Research
        </h2>
        <p className="text-center text-base lg:text-xl mt-7 z-10 lg:w-2/3">
          We conducted UX research included in our custom mobile app development
          services, and this phase involved a detailed, comprehensive approach
          to understand user needs and market opportunities.
        </p>
      </section>

      <section className="w-full flex items-center justify-center gap-10 relative flex-wrap mt-10 lg:mt-20 pb-32">
        {USUBZ_DISCOVERY_RESEARCH?.map((c, i) => {
          return <DiscoveryCard key={i} challenge={c} index={i} />;
        })}

        <Image
          src={"/case-studies/usubz/discovery-research-circle.png"}
          width={441}
          height={441}
          className="object-contain absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-0"
        />
      </section>

      <div className="bg-[#1CE98A] blur-[245px] rounded-full w-[500px] h-[500px] absolute left-[2%] top-[5%] opacity-30 z-0" />
      <div className="bg-[#1CE98A] blur-[245px] rounded-full w-[500px] h-[500px] absolute right-[-20%] bottom-0 opacity-30 z-0" />
    </section>
  );
};

export default DiscoveryAndResearch;
