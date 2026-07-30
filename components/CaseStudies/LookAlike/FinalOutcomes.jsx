import React from "react";
import OutcomesAnimation from "./OutcomeAnimation";

const FinalOutcomes = () => {
  return (
    <section className="w-full padding-x relative mb-10">
      {/* Header */}
      <div className="mb-14 relative z-10 text-start">
        <h2 className="section-heading z-10 mb-5">
          Final <span className="lookalike-gradient-text">Outcomes</span>
        </h2>
        <p className="text-base md:text-lg lg:text-[20px] xl:text-[22px] leading-[1.35] mx-auto text-[#4A5565]">
          The final product gives users a friendship platform built around trust
          from the first interaction: verification that feels quick rather than
          invasive, discovery that stays effortless, and real-time chat, voice
          messages, and media sharing that make conversations feel native to the
          app rather than bolted on. Subscription access is enforced cleanly
          throughout, restricting features automatically on expiry while keeping
          the experience seamless for active users.
        </p>
      </div>

      <OutcomesAnimation />
    </section>
  );
};

export default FinalOutcomes;
