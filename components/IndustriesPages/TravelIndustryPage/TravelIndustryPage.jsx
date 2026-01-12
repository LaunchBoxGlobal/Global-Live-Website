import React from "react";
import Hero from "./Hero";
import ShiftInTravel from "./ShiftInTravel";
import Platforms from "@/components/Common/Platforms";
import WhyYouNeedTravelApp from "./WhyYouNeedTravelApp";
import MidPageCta from "./MidPageCta";
import Workflow from "./Workflow";
import TechStack from "./TechStack";
import StaffAugmentation from "./StaffAugmentation";
import ScaleSmarter from "./ScaleSmarter";
import EmergingTrends from "./EmergingTrends";
import WhyChooseUs from "./WhyChooseUs";
import TravelIndustryContactSection from "./TravelIndustryContactSection";
import FAQs from "@/components/Common/FAQs";

const TravelIndustryPage = () => {
  return (
    <main className="w-full h-auto relative overflow-hidden">
      <Hero />
      <Platforms />
      <ShiftInTravel />
      <WhyYouNeedTravelApp />
      <MidPageCta />
      <Workflow />
      <TechStack />
      <StaffAugmentation />
      <ScaleSmarter />
      <EmergingTrends />
      <WhyChooseUs />
      <TravelIndustryContactSection />
      <FAQs />
    </main>
  );
};

export default TravelIndustryPage;
