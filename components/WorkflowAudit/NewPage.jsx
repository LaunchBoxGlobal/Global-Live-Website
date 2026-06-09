"use client";
import React, { lazy, useState } from "react";
import "./style.css";
import BusinessProblems from "./BusinessProblems";
import WhatWeDo from "./WhatWeDo";
import BuiltAroundYou from "./BuiltAroundYou";
import WhoWeWorkWith from "./WhoWeWorkWith";
import Process from "./Process";
import WhatChanges from "./WhatChanges";
import WhyUs from "./WhyUs";
import CustomSolutions from "./CustomSolutions";
import FAQ from "./FAQ";
import CTA from "./CTA";
import WorkflowAuditForm from "./WorkflowAuditForm";
const Hero = lazy(() => import("./Hero"));
const TrustedByOperators = lazy(() => import("./TrustedByOperators"));

const NewPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    setStep(1);
    setIsSubmitted(false);
  };
  return (
    <main className={`bg-transparent relative`}>
      <Hero openModal={openModal} />
      <TrustedByOperators />
      <BusinessProblems openModal={openModal} />
      <WhatWeDo openModal={openModal} />
      <BuiltAroundYou openModal={openModal} />
      <WhoWeWorkWith openModal={openModal} />
      <Process openModal={openModal} />
      <WhatChanges />
      <WhyUs />
      <CustomSolutions openModal={openModal} />
      <FAQ />
      <CTA openModal={openModal} />
      <WorkflowAuditForm
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        step={step}
        setStep={setStep}
        isSubmitted={isSubmitted}
        setIsSubmitted={setIsSubmitted}
        openModal={openModal}
      />
    </main>
  );
};

export default NewPage;
