import React from "react";
import "./styles.css";
import Hero from "./Hero";
import Challenge from "./Challenge";
import ObjectivesSection from "./ObjectivesSection";
import DiscoveryAndResearchSection from "./DiscoveryAndResearchSection";
import WorkflowSection from "./WorkflowSection";
import BrandingSection from "./BrandingSection";
import WirframesSection from "./WirframesSection";
import ProblemsAndSolutions from "./ProblemsAndSolutions";
import TechStack from "./TechStack";
import Outcomes from "./Outcomes";
import CTA from "./CTA";
import OtherCaseStudies from "../Bloom/OtherCaseStudies";

const GivexChangePage = () => {
  return (
    <main className="w-full overflow-hidden flex flex-col gap-14 lg:gap-20 midlg:gap-36">
      <Hero />
      <div className="w-full lg:hidden"></div>
      <Challenge />
      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>
      <ObjectivesSection />
      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>
      <DiscoveryAndResearchSection />
      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>
      <WorkflowSection />
      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>
      <WirframesSection />
      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>
      <BrandingSection />
      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>
      <ProblemsAndSolutions />
      <div className="w-full padding-x pb-10">
        <div className="w-full border" />
      </div>
      {/* <div className="w-full" /> */}
      <TechStack />
      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>
      <Outcomes />
      <CTA />
      <OtherCaseStudies />
    </main>
  );
};

export default GivexChangePage;
