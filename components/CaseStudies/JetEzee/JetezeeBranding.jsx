import Image from "next/image";
import React from "react";

const JetezeeBranding = () => {
  return (
    <section className="w-full pb-10 relative padding-x">
      <section className="w-full flex flex-col items-center relative z-10">
        <h2 className="section-heading text-center z-10">Branding</h2>
        <p className="text-center text-base lg:text-xl mt-7 z-10 lg:w-2/3">
          We began with low-fidelity wireframes to validate structure and
          usability for both buyer and admin journeys. Once approved, we
          developed high-fidelity prototypes that showcased realistic
          interaction flows and visual hierarchy.
        </p>
      </section>

      <section className="w-full mt-14 z-10 relative ">
        <Image
          src={"/case-studies/jetezee/jetezee-font-family.png"}
          alt="jetezee-font-family"
          width={1271}
          height={522}
          className="object-contain z-20"
        />
      </section>

      <section className="w-full flex items-end justify-between gap-5 mt-10">
        <h3 className="font-bold text-[22px]">Color Palette</h3>
        <p className="text-[22px] font-normal leading-[1.2] lg:w-[45%]">
          We began with low-fidelity wireframes to validate structure and
          usability for both buyer and admin journeys.Once approved, we
          developed high-fidelity prototypes that showcased realistic
          interaction flows and visual hierarchy.
        </p>
      </section>

      <section className="w-full mt-10">
        {/* <Image src={'/jetezee-color-pallete'}/> */}
        <Image
          src={"/case-studies/jetezee/jetezee-color-pallete.png"}
          alt="jetezee-color-pallete"
          width={1134}
          height={534}
          className="object-contain z-20 mx-auto"
        />
      </section>

      <div className="bg-[var(--jetezee-primary-color)] rounded-full w-[700px] h-[700px] absolute top-[10%] left-[-20%] z-0 blur-[400px] hidden lg:block" />
      <div className="bg-[var(--jetezee-primary-color)] rounded-full w-[700px] h-[700px] absolute top-[10%] right-[-20%] z-0 blur-[500px] opacity-60 hidden lg:block" />
    </section>
  );
};

export default JetezeeBranding;
