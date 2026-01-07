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
        <p className="text-center text-base lg:text-xl mt-7 z-10 lg:w-2/3">
          The Jetezee prototype successfully translated a complex aviation
          marketplace into a visually engaging and user-friendly digital
          product.UX testing showed improved clarity, buyer confidence, and
          admin efficiency through structured layouts and guided flows. By
          completing a fully validated Web App and Admin Dashboard prototype,
          LaunchBox Global enabled the Jetezee team to move into the development
          phase with confidence, ensuring design-to-development alignment and
          minimized rework.
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
