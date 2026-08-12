import Image from "next/image";
import React from "react";
import Timeline from "./Timeline";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="w-full relative">
      <section className="w-full relative z-10 pt-36 2xl:pt-52 flex flex-col items-center justify-start gap-5 padding-x">
        {/* Brand Logo */}
        <Image
          src="/case-studies/lookalike/lookalikematch-logo.svg"
          width={155}
          height={108}
          sizes="155px"
          priority
          alt="LookAlike Match"
        />

        <h1 className="text-[40px] lg:text-[80px] leading-none tracking-tight font-extrabold relative z-10 mt-7 mb-4">
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

        {/* App Store Buttons */}
        <div className="w-full flex flex-wrap justify-center gap-3 mt-5 z-10">
          <Link
            href="https://apps.apple.com/us/app/lookalike-match/id6766226894"
            target="_blank"
            rel="noopener noreferrer"
            className="z-10"
          >
            <Image
              src="/case-studies/usubz/download-app-store-image.svg"
              alt="Download LookAlike Match on the App Store"
              width={239}
              height={57}
              sizes="239px"
              loading="lazy"
              className="object-contain"
            />
          </Link>

          <Link
            href="https://play.google.com/store/apps/details?id=com.launchbox.lal"
            target="_blank"
            rel="noopener noreferrer"
            className="z-10"
          >
            <Image
              src="/case-studies/usubz/google-play-image.svg"
              alt="Download LookAlike Match on Google Play"
              width={239}
              height={57}
              sizes="239px"
              loading="lazy"
              className="object-contain"
            />
          </Link>
        </div>
      </section>

      <Timeline />

      {/* Product Mockups */}
      <div className="w-full relative z-10 padding-x">
        {/* Decorative Background Wordmark */}
        <Image
          src="/case-studies/lookalike/LOOKALIKE.webp"
          width={2034}
          height={209}
          sizes="100vw"
          alt=""
          loading="lazy"
          className="absolute inset-x-0 z-10 top-[30%] w-full mx-auto h-auto pointer-events-none select-none"
        />

        {/* Main Hero Visual */}
        <Image
          src="/case-studies/lookalike/lookalikematch-mockups.webp"
          alt="LookAlike Match mobile app screens"
          width={1108}
          height={917}
          sizes="(min-width: 1024px) 85vw, 95vw"
          priority
          className="mx-auto z-20 relative object-contain w-[85%] h-auto"
        />
      </div>

      {/* Background Glow */}
      <div className="bg-[#408EE8] rounded-full w-[50vw] h-[50vw] blur-[500px] pointer-events-none opacity-70 absolute top-[-20%] right-[-20%] z-0" />
    </section>
  );
};

export default Hero;
