import React from "react";
import ChallengeCard from "./ChallengeCard";
import { USUBZ_CHALLENGES } from "@/constants/case-studies/usubz/UsubzChallenges";

const Challenges = () => {
  return (
    <section className="w-full pb-10 relative">
      <section className="w-full padding-x flex flex-col items-center relative z-10">
        <h2 className="section-heading text-center z-10">The Challenges</h2>
        <p className="text-center lg:w-[85%] text-base lg:text-xl mt-7 z-10">
          Designing Usubz required addressing a unique set of challenges. The
          platform needed to combine two distinct goals: skill-building and job
          discovery, without overwhelming users while setting a benchmark among
          the best job portals.
        </p>
      </section>

      <section className="w-full flex items-center justify-center gap-6 relative flex-wrap mt-10 lg:mt-14">
        {USUBZ_CHALLENGES?.map((c, i) => {
          return <ChallengeCard key={i} challenge={c} />;
        })}
      </section>

      <div className="bg-[#1CE98A] blur-[845px] rounded-full w-[800px] h-[800px] absolute bottom-0 left-[-60%] z-0" />
      <div className="bg-[#1CE98A] blur-[845px] rounded-full w-[800px] h-[800px] absolute bottom-[-10%] right-[-60%] z-0" />
    </section>
  );
};

export default Challenges;
