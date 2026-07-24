import Image from "next/image";
import React from "react";
import HeroAnimationLoop from "./HeroAnimationLoop";
import Link from "next/link";

const Hero = ({ toggleDiscoveryCallForm }) => {
  return (
    <section
      aria-labelledby="hero-heading"
      id="home-hero"
      className="w-full bg-transparent overflow-hidden relative pb-20"
    >
      <div className="w-[180vw] h-[180vw] lg:w-[90vw] lg:h-[90vw] bg-red-500/20 rounded-full blur-[200px] opacity-30 absolute -top-[70%] left-1/2 -translate-x-1/2 z-0" />

      <section className="w-full padding-x relative z-20 pt-36 xl:pt-44 flex flex-col items-center justify-start gap-5 lg:gap-[25px]">
        <h1
          id="hero-heading"
          className="font-bold relative z-10 text-[8vw] md:text-[5vw] mb-1 text-center tracking-normal leading-none lg:leading-[1] w-full"
        >
          Funding Secured. Time to
          <span className="red-text"> Build</span>
        </h1>

        <h2 className="text-base lg:text-[24px] 2xl:text-[28px] font-medium text-gray-900 text-center lg:max-w-[75%] lg:leading-[1.35]">
          We take funded non-technical founders from Figma, spec, or idea to a
          launched MVP in 90–120 days. No hiring. No delays. No excuses.
        </h2>

        <div className="flex items-center justify-center gap-3 lg:gap-5 w-full">
          <button
            type="button"
            onClick={() => toggleDiscoveryCallForm()}
            aria-label="Book a Workflow Audit"
            className="red-btn"
          >
            Book a Free Discovery Call
          </button>

          <Link
            href="/case-studies"
            target="_blank"
            aria-label="See How It Works"
            className="red-outlined-btn text-center"
          >
            See Our Work
          </Link>
        </div>
      </section>

      <HeroAnimationLoop />

      <Image
        src={"/systems-page/hero-border-lines.png"}
        alt="hero-border-lines"
        width={1285}
        height={651}
        className="object-contain absolute top-0 z-0 inset-x-0"
      />

      <p className="text-lg lg:text-[24px] font-normal leading-[1.35] mx-auto text-center max-w-6xl padding-x relative z-10">
        We have shipped MVPs for funded founders across marketplaces, mobility
        apps, booking platforms, B2B SaaS, and more.
      </p>
    </section>
  );
};

export default Hero;
