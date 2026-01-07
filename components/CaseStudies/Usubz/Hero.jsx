import Image from "next/image";
import React from "react";
import Timeline from "./Timeline";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="w-full">
      <section className="w-full bg-white relative pt-36 2xl:pt-52 flex flex-col items-center justify-start gap-5 padding-x">
        <Image
          src={"/case-studies/usubz/usubz-logo.svg"}
          width={248}
          height={118}
          priority
          alt="usubz logo"
        />

        <h1 className="text-[22px] font-medium">Overview</h1>
        <p className="text-xl text-center lg:w-[90%]">
          Usubz is a career-development platform that merges learning and job
          hunting into one ecosystem. Users take courses and challenges to earn
          points and verified skills that boost recruiter visibility. LaunchBox
          Global designed a modern, motivating UI/UX that keeps learners engaged
          while helping recruiters easily discover qualified, verified talent.
        </p>

        <div className="w-full flex justify-center mt-5">
          <Link href={`/`} target="_blank" className="">
            <Image
              src={"/case-studies/usubz/download-app-store-image.svg"}
              alt="download-app-store-image"
              width={239}
              height={57}
              className="object-contain"
            />
          </Link>

          <Link href={`/`} target="_blank" className="">
            <Image
              src={"/case-studies/usubz/google-play-image.svg"}
              alt="google-play-image"
              width={239}
              height={57}
              className="object-contain"
            />
          </Link>
        </div>
      </section>
      <Timeline />

      <div className="w-full mt-20">
        <Image
          src={`/case-studies/usubz/usubz-mockup-1.png`}
          alt={`usubz mobile app mockup`}
          width={1948}
          height={819}
          className="mx-auto"
        />
      </div>
    </section>
  );
};

export default Hero;
