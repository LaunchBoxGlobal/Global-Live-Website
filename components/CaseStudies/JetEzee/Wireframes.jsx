import Image from "next/image";
import React from "react";
import ImageSlider from "./ImageSlider";

const images = [
  "/case-studies/jetezee/jetezee-wireframes-01.png",
  "/case-studies/jetezee/jetezee-wireframes-02.png",
  "/case-studies/jetezee/jetezee-wireframes-03.png",
  "/case-studies/jetezee/jetezee-wireframes-04.png",
  "/case-studies/jetezee/jetezee-wireframes-05.png",
];

const Wireframes = () => {
  return (
    <section className="w-full pb-10 relative padding-x">
      <section className="w-full flex flex-col items-center relative z-10">
        <h2 className="section-heading text-center z-10">Wireframes</h2>
        <p className="text-center text-base lg:text-xl mt-7 z-10 lg:w-2/3">
          We began with low-fidelity wireframes to validate structure and
          usability for both buyer and admin journeys. Once approved, we
          developed high-fidelity prototypes that showcased realistic
          interaction flows and visual hierarchy.
        </p>
      </section>

      <section className="w-full mt-14 z-10">
        <ImageSlider images={images} />
        {/* <Image
          src={"/case-studies/jetezee/jetezee-wireframes.png"}
          alt="jetezee-wireframes"
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

export default Wireframes;
