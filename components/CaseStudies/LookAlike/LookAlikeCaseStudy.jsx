import React from "react";
import "./styles.css";
import OtherCaseStudies from "../Bloom/OtherCaseStudies";
import Hero from "./Hero";
import Challenges from "./Challenges";

const LookAlikeCaseStudy = () => {
  return (
    <main className="w-full overflow-hidden flex flex-col gap-14 lg:gap-20 midlg:gap-36">
      <Hero />
      {/* <div className="w-full border border-black lg:hidden"></div> */}
      <Challenges />
      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>
      {/* <ObjectivesSection /> */}
      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>
      {/* <DiscoveryAndResearchSection /> */}
      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>
      {/* <WorkflowSection /> */}
      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>
      {/* <WirframesSection /> */}
      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>
      {/* <BrandingSection /> */}
      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>
      {/* <ProblemsAndSolutions /> */}
      <div className="w-full padding-x pb-10">
        <div className="w-full border" />
      </div>
      {/* <div className="w-full" /> */}
      {/* <TechStack /> */}
      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>
      {/* <Outcomes />
      <CTA /> */}
      <OtherCaseStudies />
    </main>
  );
};

export default LookAlikeCaseStudy;
