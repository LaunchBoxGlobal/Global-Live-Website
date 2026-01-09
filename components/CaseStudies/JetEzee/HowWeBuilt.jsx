import React from "react";
import HowWeBuiltCard from "./HowWeBuiltCard";
import { JETEZEE_HOW_WE_BUILT } from "@/constants/case-studies/jetezee/JetezeeHowWeBuilt";

const HowWeBuilt = () => {
  return (
    <section className="w-full pb-10 relative padding-x">
      <section className="w-full flex flex-col items-center relative z-10">
        <h2 className="section-heading text-center z-10">
          Building From Vision to{" "}
          <span className="text-[var(--jetezee-primary-color)]">
            Functionality
          </span>
        </h2>
        <p className="text-center lg:w-[85%] text-base lg:text-xl mt-7 z-10">
          To create a meaningful prototype for JetEzee, we implemented our
          functionality-first prototyping workflow, a concise, stepwise process
          that combines market research, user journey mapping, wireframing,
          interactive prototyping, and interactive validation to align the
          design with real user needs.
        </p>
      </section>

      <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 midlg:grid-cols-5 relative mt-10 lg:mt-14">
        {JETEZEE_HOW_WE_BUILT?.map((c, i) => {
          return <HowWeBuiltCard key={i} content={c} index={i} />;
        })}
      </section>

      <div className="bg-[var(--jetezee-primary-color)] blur-[845px] rounded-full w-[800px] h-[800px] absolute bottom-0 left-[-60%] z-0 hidden lg:block" />
      <div className="bg-[var(--jetezee-primary-color)] blur-[845px] rounded-full w-[800px] h-[800px] absolute bottom-[-10%] right-[-60%] z-0 hidden lg:block" />
    </section>
  );
};

export default HowWeBuilt;
