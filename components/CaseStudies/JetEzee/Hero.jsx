import Image from "next/image";
import React from "react";
import Timeline from "./Timeline";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="w-full">
      <section className="w-full bg-white relative pt-36 2xl:pt-52 flex flex-col items-center justify-start gap-5 padding-x">
        <Image
          src={"/case-studies/jetezee/jetezee-logo.svg"}
          width={253}
          height={90}
          priority
          alt="jetezee logo"
        />

        <h1 className="text-[22px] font-medium z-10">Overview</h1>
        <p className="text-xl text-center lg:w-[90%] z-10">
          JetEzee is a luxury web-based marketplace created to redefine how
          private jets are bought and sold online, from Airbus and Boeing to
          Gulfstream and Bombardier. The vision was to transform complex,
          high-value aviation transactions into a fluent, secure, and visually
          elevated digital experience. LaunchBox Global led the entire
          prototyping phase, shaping the platform’s digital experience.
          LaunchBox Global led the entire prototyping phase, shaping the
          platform’s UX strategy, user flow design, wireframes, and
          high-fidelity mockups for both the web App and Admin Dashboard. Each
          of the elements was designed to deliver clarity and trust, the two
          vital pillars of digital ecommerce. Through our web app development
          services and UI/UX design services, we brought the structure, balance,
          and premium aesthetics into one stable ecosystem. The result was not
          just the prototype but a new digital benchmark for the aviation resale
          market, where confidence meets elegance in every interaction.
        </p>

        <div className="w-full flex justify-center mt-5 z-10">
          <Link href={`/`} target="_blank" className="z-10">
            <Image
              src={"/case-studies/usubz/download-app-store-image.svg"}
              alt="download-app-store-image"
              width={239}
              height={57}
              className="object-contain z-10"
            />
          </Link>

          <Link href={`/`} target="_blank" className="z-10">
            <Image
              src={"/case-studies/usubz/google-play-image.svg"}
              alt="google-play-image"
              width={239}
              height={57}
              className="object-contain z-10"
            />
          </Link>
        </div>
      </section>

      <Timeline />

      <div className="w-full mt-20 relative z-10">
        <Image
          src={`/case-studies/jetezee/jetezee-desktop-mockup.png`}
          alt={`jetezee desktop mockup`}
          width={1111}
          height={676}
          className="mx-auto z-20 relative"
        />

        <div className="bg-[var(--jetezee-primary-color)] blur-[845px] rounded-full w-[1000px] h-[300px] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-0" />
        {/* <div className="bg-[var(--jetezee-primary-color)] blur-[845px] rounded-full w-[800px] h-[800px] absolute bottom-[-10%] right-[-40%] z-0" /> */}
      </div>
    </section>
  );
};

export default Hero;
