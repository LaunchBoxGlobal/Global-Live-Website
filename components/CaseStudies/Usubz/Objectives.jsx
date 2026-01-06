import React from "react";
import ObjectiveCard from "./ObjectiveCard";
import { USUBZ_OBJECTIVES } from "@/constants/case-studies/usubz/UsubzObjectives";

const Objectives = () => {
  return (
    <section className="w-full pb-10 relative padding-x">
      <section className="w-full flex flex-col items-center relative z-10">
        <h2 className="section-heading text-center z-10">Our Objectives</h2>
        <p className="text-center text-base lg:text-xl mt-7 z-10 lg:w-2/3">
          We then aimed to create a platform where skill-building and career
          growth feel natural, motivating, and rewarding.
        </p>
      </section>

      <section className="w-full flex items-center justify-center gap-y-10 gap-x-20 relative flex-wrap mt-10 lg:mt-20">
        {USUBZ_OBJECTIVES?.map((c, i) => {
          return <ObjectiveCard key={i} challenge={c} index={i} />;
        })}
      </section>

      <div className="bg-[#1CE98A] blur-[845px] rounded-full w-[800px] h-[800px] absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 opacity-30 z-0" />
    </section>
  );
};

export default Objectives;
