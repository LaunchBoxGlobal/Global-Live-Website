import React from "react";
import "./styles.css";
import Hero from "./Hero";
import Challenges from "./Challenges";
import Objectives from "./Objectives";
import DiscoveryAndResearch from "./DiscoveryAndResearch";
import DesignStrategy from "./DesignStrategy";
import WebAppDesign from "./WebAppDesign";
import TechStack from "./TechStack";
import FinalOutcomes from "./FinalOutcomes";
import CTA from "./CTA";
import OtherCaseStudies from "../Bloom/OtherCaseStudies";

const UsubzPage = () => {
  return (
    <main className="w-full overflow-hidden flex flex-col gap-14 lg:gap-20 midlg:gap-36">
      <Hero />
      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>
      <Challenges />
      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>
      <Objectives />
      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>
      <DiscoveryAndResearch />
      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>
      <DesignStrategy />
      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>
      <WebAppDesign />
      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>
      <TechStack />
      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>
      <FinalOutcomes />
      <CTA />
      <OtherCaseStudies />
    </main>
  );
};

export default UsubzPage;
