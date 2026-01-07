import React from "react";
import "./styles.css";
import Hero from "./Hero";
import HowWeBuilt from "./HowWeBuilt";
import JetezeeResearch from "./JetezeeResearch";
import ProblemAndSolution from "./ProblemAndSolution";
import Wireframes from "./Wireframes";
import JetezeeBranding from "./JetezeeBranding";
import Outcome from "./Outcome";
import CTA from "./CTA";
import OtherCaseStudies from "../Bloom/OtherCaseStudies";

const JetEzeePage = () => {
  return (
    <main className="w-full overflow-hidden flex flex-col gap-14 lg:gap-20 midlg:gap-36">
      <Hero />

      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>

      <HowWeBuilt />

      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>

      <JetezeeResearch />

      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>

      <ProblemAndSolution />

      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>

      <Wireframes />

      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>

      <JetezeeBranding />

      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>

      <Outcome />
      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>

      <CTA />
      <div className="w-full" />
      <OtherCaseStudies />
    </main>
  );
};

export default JetEzeePage;
