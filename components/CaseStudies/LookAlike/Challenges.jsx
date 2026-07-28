import { LOOKALIKE_CHALLENGES } from "@/constants/case-studies/lookalike/lookalike-challenges";
import React from "react";
import ChallengeCard from "./ChallengeCard";

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
          return <ChallengeCard ch={ch} idx={idx} />;
        })}
      </section>

      <div className="bg-[#5E51C9] rounded-full w-[50vw] h-[50vw] blur-[500px] pointer-events-none opacity-70 absolute top-[20%] left-[-15%] z-0" />
    </section>
  );
};

export default Challenges;
