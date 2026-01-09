import Image from "next/image";
import React from "react";
import Timeline from "./Timeline";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="w-full">
      <section className="w-full bg-white relative pt-36 2xl:pt-52 flex flex-col items-center justify-start gap-5 padding-x">
        <Image
          src={"/case-studies/givexchange/givexchange-logo.svg"}
          width={194}
          height={118}
          priority
          alt="givexchange logo"
        />

        <h1 className="text-[80px] leading-none tracking-tight font-extrabold z-10">
          Give{" "}
          <span className="text-[var(--givexchange-primary-color)]">X</span>{" "}
          Change
        </h1>
        <h2 className="text-[22px] font-medium tracking-tight">Overview</h2>
        <p className="text-xl text-center lg:w-[90%] z-10">
          GiveXchange is a closed-community marketplace enabling members to buy
          and sell products effortlessly across multiple categories. LaunchBox
          Global developed a mobile app, web app, and admin dashboard, ensuring
          a seamless and engaging experience for all users. The project,
          completed in 16 weeks, belongs to the eCommerce / Marketplace
          industry.
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

      <div className="w-full mt-20 relative z-10 padding-x">
        <Image
          src={"/case-studies/givexchange/givexchange-text-logo.png"}
          width={2034}
          height={209}
          alt="givexchange-text-logo"
          className="absolute inset-x-0 z-10 top-[35%]"
        />
        <Image
          src={`/case-studies/givexchange/givexchange-home-screen-mobile-mockup.png`}
          alt={`givexchange-home-screen-mobile-mockup`}
          width={673}
          height={718}
          className="mx-auto z-20 relative object-contain -bottom-4 md:-bottom-7"
        />
        <Image
          src={"/case-studies/givexchange/givexchange-mockup-stand.png"}
          alt="givexchange-mockup-stand"
          width={539}
          height={200}
          className="mx-auto"
        />

        <div className="bg-[var(--givexchange-primary-color)] blur-[845px] rounded-full w-[300px] lg:w-[1000px] h-[300px] absolute top-1/2 -translate-y-1/2 left-[-60%] lg:left-[-50%] z-0" />
        <div className="bg-[var(--givexchange-primary-color)] blur-[845px] rounded-full w-[300px] lg:w-[1000px] h-[300px] absolute top-1/2 -translate-y-1/2 right-[-60%] lg:right-[-50%] z-0" />
      </div>
    </section>
  );
};

export default Hero;
