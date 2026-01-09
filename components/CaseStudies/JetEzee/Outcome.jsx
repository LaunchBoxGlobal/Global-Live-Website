import Image from "next/image";
import React from "react";
import ImageSlider from "./ImageSlider";

const images = [
  "/case-studies/jetezee/final-outcome-mockup-1.png",
  "/case-studies/jetezee/final-outcome-mockup-2.png",
  "/case-studies/jetezee/final-outcome-mockup-3.png",
  "/case-studies/jetezee/final-outcome-mockup-4.png",
  "/case-studies/jetezee/final-outcome-mockup-5.png",
];

const Outcome = () => {
  return (
    <section className="w-full pb-10 relative padding-x">
      <section className="w-full flex flex-col items-center relative z-10">
        <h2 className="section-heading text-center z-10">Final Outcome</h2>
        <p className="text-center text-base lg:text-xl mt-7 z-10 lg:w-[90%]">
          The JetEzee prototype successfully turned an ambitious concept into a
          tangible, validated aviation marketplace experience. Through strong UX
          foundations and design-led clarity, we translated the traditionally
          complex buying and selling process into a guided, trustworthy journey.
          Usability testing revealed a significant rise in the buyer
          understanding, seller accuracy, and administrative speed. Through
          completing fully aligned prototypes for both the Web App and the Admin
          Dashboard, LaunchBox Global ensured that JetEzee’s development team
          could move forward without confusion or rework. The
          design-to-development handoff was smooth, enabling JetEzee to progress
          into its build phase with the structure, confidence, and aesthetic
          precision intact, truly reflecting what exceptional UI/UX design
          services and web app development can achieve.
        </p>
      </section>

      <section className="w-full mt-14 z-10">
        <ImageSlider images={images} />
        {/* <Image
          src={"/case-studies/jetezee/jetezee-final-outcome-mockups.png"}
          alt="jetezee-final-outcome-mockups"
          width={1271}
          height={615}
          className="object-contain z-10"
        /> */}
      </section>

      <div className="bg-[var(--jetezee-primary-color)] blur-[245px] rounded-full w-[500px] h-[500px] absolute left-[2%] top-[5%] opacity-30 z-0" />
      <div className="bg-[var(--jetezee-primary-color)] blur-[245px] rounded-full w-[500px] h-[500px] absolute right-[-20%] bottom-0 opacity-40 z-0" />
    </section>
  );
};

export default Outcome;
