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
import ProblemsAndSolutions from "./ProblemsAndSolutions";
import CTA from "./CTA";
import FinalOutcomes from "./FinalOutcomes";

const LookAlikeCaseStudy = () => {
  return (
    <main className="w-full overflow-hidden flex flex-col gap-20 lg:gap-32 midlg:gap-40">
      <Hero />

      <Challenges />

      <Objectives />

      <DiscoveryResearch />

      <Workflow />

      <Wireframes />

      <Branding />

      <ProblemsAndSolutions />

      <TechStack />

      <FinalOutcomes />

      <CTA />

      <OtherCaseStudies />
    </main>
  );
};

export default LookAlikeCaseStudy;
