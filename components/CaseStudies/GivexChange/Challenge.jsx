import { GIVEXCHANGE_CHALLENGES } from "@/constants/case-studies/givexchange/GivexChangeChallenges";
import Image from "next/image";
import React from "react";
import ChallengeCard from "./ChallengeCard";

const Challenge = () => {
  return (
    <section className="w-full pb-10 relative padding-x">
      <section className="w-full flex flex-col items-center relative z-10">
        <h2 className="section-heading text-center z-10">The Challenge</h2>
        <p className="text-center lg:w-[85%] text-base lg:text-xl mt-7 z-10">
          Creating GiveXchange required solving several interconnected UX and
          technical hurdles to ensure the platform felt seamless, secure, and
          enjoyable for a closed community. The challenge was to design an
          experience that balanced trust, usability, scalability, and smooth
          navigation—across both mobile and web—without overwhelming users as
          the marketplace grows.
        </p>
      </section>

      <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-y-6 gap-x-10 mt-20 lg:mt-20 relative">
        <div className="bg-[var(--givexchange-primary-color)] blur-[845px] rounded-full w-[300px] lg:w-[700px] h-[300px] absolute top-1/2 -translate-y-1/2 left-[-60%] lg:left-[-50%] z-0" />
        <div className="bg-[var(--givexchange-primary-color)] blur-[845px] rounded-full w-[300px] lg:w-[700px] h-[300px] absolute top-1/2 -translate-y-1/2 right-[-60%] lg:right-[-50%] z-0" />
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-y-20 lg:gap-6 relative z-20">
          {GIVEXCHANGE_CHALLENGES?.map((ch, index) => {
            return <ChallengeCard challenge={ch} key={index} index={index} />;
          })}
        </div>
        <div className="z-20 relative">
          <Image
            src={
              "/case-studies/givexchange/givexchange-challenges-mobile-mockup.png"
            }
            alt="givexchange-challenges-mobile-mockup"
            width={587}
            height={886}
            className="object-contain z-20"
          />
        </div>
      </section>
    </section>
  );
};

export default Challenge;
