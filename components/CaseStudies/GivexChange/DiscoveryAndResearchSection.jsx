import React from "react";
import DiscoveryAndResearch from "./DiscoveryAndResearch";
import DiscoveryAndResearchMobile from "./DiscoveryAndResearchMobile";

const DiscoveryAndResearchSection = () => {
  return (
    <section className="w-full pb-10 relative padding-x">
      <section className="w-full flex flex-col items-center relative z-10">
        <h2 className="section-heading text-center z-10">
          Discovery & Research
        </h2>
        <p className="text-center lg:w-[85%] text-base lg:text-xl mt-7 z-10">
          The discovery phase laid the foundation for a solution that truly
          aligns with how users think, search, and interact within a closed
          marketplace environment. Our goal during this stage was to uncover
          real user needs, validate assumptions, and understand the competitive
          landscape so we could design with clarity and purpose. By combining
          user insights, technical exploration, and feature prioritization, we
          shaped a direction that balanced usability, trust, and long-term
          scalability. This research ensured every design and development
          decision was rooted in evidence rather than intuition.
        </p>
      </section>

      <div className="w-full hidden md:block">
        <DiscoveryAndResearch />
      </div>
      <div className="w-full block md:hidden">
        <DiscoveryAndResearchMobile />
      </div>
    </section>
  );
};

export default DiscoveryAndResearchSection;
