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
        <p className="text-center text-base lg:text-xl mt-7 z-10 lg:w-[90%]">
          We began with the low-fidelity wireframes to validate the structure
          and usability for both the buyer and the admin journeys. Once it is
          approved, we will develop the definable prototypes, which showcase the
          realistic interaction flows and the visual hierarchy. Our design
          journey began with the low-fidelity wireframes to map the user
          journeys, test layout logic, and confirm clarity across the buyer,
          seller, and admin paths. Such wireframes acted as a foundation for the
          visual skeleton, validating the structure and usability before
          investing in development. Once approved, they evolved into
          high-fidelity prototypes that showcased the realistic interaction
          flows, the polished visual hierarchy, and the premium detailing
          including high fidelity wireframes created through our expert user
          experience design services. The Web App wireframes captured the
          homepage, aircraft listings, comparison views, and inquiry forms,
          while the Admin Dashboard included vendor management, list approval,
          and analytics views. Each frame was carefully planned so that both
          function and form could move together, ensuring that nothing felt
          accidental; everything felt intentional.
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
