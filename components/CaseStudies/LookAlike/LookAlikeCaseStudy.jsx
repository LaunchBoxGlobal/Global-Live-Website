import React from "react";
import "./styles.css";
import OtherCaseStudies from "../Bloom/OtherCaseStudies";
import Hero from "./Hero";
import Challenges from "./Challenges";
import { DiscoveryResearch } from "./DiscoveryAndResearch";
import { Workflow } from "./Workflow";

const LookAlikeCaseStudy = () => {
  return (
    <main className="w-full overflow-hidden flex flex-col gap-14 lg:gap-20 midlg:gap-48">
      <Hero />
      {/* <div className="w-full border border-black lg:hidden"></div> */}
      <Challenges />

      <DiscoveryResearch />

      <Workflow />

      {/* <WorkflowSection /> */}

      {/* <WirframesSection /> */}

      {/* <BrandingSection /> */}

      {/* <ProblemsAndSolutions /> */}
      <div className="w-full padding-x pb-10">
        <div className="w-full border" />
      </div>
      {/* <div className="w-full" /> */}
      {/* <TechStack /> */}

      {/* <Outcomes />
      <CTA /> */}
      <OtherCaseStudies />
    </main>
  );
};

export default LookAlikeCaseStudy;
