import React from "react";
import TravelIndustryContactForm from "./TravelIndustryContactForm";
import Image from "next/image";

const TravelIndustryContactSection = () => {
  return (
    <section className="w-full py-20 padding-x relative overflow-hidden">
      <div className="w-full bg-black text-white rounded-[17px] max-w-[1260px] grid grid-cols-1 lg:grid-cols-2 gap-10 p-5 lg:p-0 overflow-hidden relative">
        <TravelIndustryContactForm />
        <div className="w-full h-full relative">
          <Image
            src={"/industries/travel/cta-section-mobile-mockup.png"}
            width={511}
            height={641}
            alt="cta-section-mobile-mockup"
            className="lg:absolute lg:right-[0%] lg:-bottom-14 z-20"
          />
          <Image
            src="/industries/travel/cta-bg-image.png"
            alt="cta-bg-image"
            width={666}
            height={396}
            className="absolute bottom-0 right-0 z-10"
          />
          <div className="w-[300px] h-[400px] bg-red-500 absolute bottom-10 right-[12%] rounded-full z-0 blur-[200px]" />
        </div>
      </div>
    </section>
  );
};

export default TravelIndustryContactSection;
