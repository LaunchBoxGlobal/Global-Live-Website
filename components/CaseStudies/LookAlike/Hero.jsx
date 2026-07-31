import Image from "next/image";
import React from "react";
import Timeline from "./Timeline";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="w-full relative">
      <section className="w-full relative z-10 pt-36 2xl:pt-52 flex flex-col items-center justify-start gap-5 padding-x">
        <Image
          src={"/case-studies/lookalike/lookalikematch-logo.svg"}
          width={155}
          height={108}
          priority
          alt="LookAlike Match logo"
        />

        <h1 className="text-[40px] lg:text-[80px] leading-none tracking-tight font-extrabold relative z-10 my-10">
          LookAlike Match
        </h1>
        <h2 className="text-[22px] font-medium tracking-tight">Overview</h2>
        <p className="text-xl text-center lg:w-[90%] z-10 text-[#4A5565]">
          LookaLike is a friendship-based social app that helps people discover
          and connect with others based on genuine compatibility. Users create a
          profile, browse others on the home screen, and simply like or skip to
          explore potential connections. Alongside the bio and profile details,
          every match also shows a match percentage, a unique feature that
          measures facial compatibility to help users find connections that feel
          right from the start. LaunchBox Global built the mobile app and a
          companion admin dashboard to power this experience, delivering the
          complete platform in 12 weeks within the Social Networking and
          Friendship space.
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
      <div className="w-full relative z-10 padding-x">
        <Image
          src={"/case-studies/lookalike/LOOKALIKE.svg"}
          width={2034}
          height={209}
          alt="LookAlike logo"
          className="absolute inset-x-0 z-10 top-[30%] w-full mx-auto h-auto"
        />
        <Image
          src={`/case-studies/lookalike/lookalikematch-mockups.svg`}
          alt={`lookalike match home screen mobile mockup`}
          width={1108}
          height={917}
          priority
          className="mx-auto z-20 relative object-contain w-[85%] h-auto"
        />
        {/* <div className="bg-[#5E51C9] blur-[845px] rounded-full w-[300px] lg:w-[500px] h-[300px] absolute top-1/2 -translate-y-1/2 right-[-60%] lg:right-[-20%] z-0 hidden md:block" /> */}
      </div>
      <div className="bg-[#408EE8] rounded-full w-[50vw] h-[50vw] blur-[500px] pointer-events-none opacity-70 absolute top-[-20%] right-[-20%] z-0" />
    </section>
  );
};

export default Hero;
