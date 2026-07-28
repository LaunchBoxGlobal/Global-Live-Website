import React from "react";
import "./styles.css";
import OtherCaseStudies from "../Bloom/OtherCaseStudies";
import Hero from "./Hero";
import Challenges from "./Challenges";
import { DiscoveryResearch } from "./DiscoveryAndResearch";
import { Workflow } from "./Workflow";
import Wireframes from "./Wireframes";
import Branding from "./Branding";
import TechStack from "./TechStack";
import Objectives from "./Objectives";

const LookAlikeCaseStudy = () => {
  return (
    <main className="w-full overflow-hidden flex flex-col gap-14 lg:gap-20 midlg:gap-40">
      <Hero />

      <Challenges />

      <Objectives />

      <DiscoveryResearch />

      <Workflow />

      <Wireframes />

      <Branding />

      <TechStack />

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
