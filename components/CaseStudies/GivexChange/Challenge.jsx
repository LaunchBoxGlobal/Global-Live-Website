import { GIVEXCHANGE_CHALLENGES } from "@/constants/case-studies/givexchange/GivexChangeChallenges";
import Image from "next/image";
import React from "react";
import ChallengeCard from "./ChallengeCard";
import FeaturedCard from "./FeaturedCard";

const Challenge = () => {
  return (
    <section className="w-full py-10 relative padding-x">
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

      <section className="w-full flex flex-col lg:flex-row items-start justify-between gap-12 mt-20 lg:mt-28 relative">
        <div className="bg-[var(--givexchange-primary-color)] blur-[845px] rounded-full w-[300px] lg:w-[700px] h-[300px] absolute top-[50%] left-[-60%] lg:left-[-50%] z-0" />
        <div className="bg-[var(--givexchange-primary-color)] blur-[845px] rounded-full w-[300px] lg:w-[700px] h-[300px] absolute top-[50%] right-[-60%] lg:right-[-50%] z-0" />

        {/* left card grid */}
        <div className="w-full lg:max-w-[55%] grid grid-cols-1 md:grid-cols-2 gap-y-20 gap-x-4 lg:gap-10 relative z-20">
          <div className="space-y-20 xl:space-y-24">
            {GIVEXCHANGE_CHALLENGES.slice(0, 3)?.map((ch, index) => {
              return (
                <FeaturedCard
                  dark={false}
                  key={index}
                  challenge={ch}
                  index={index}
                />
              );
            })}
          </div>
          <div className="space-y-20 xl:space-y-24 pt-0 lg:pt-36">
            {GIVEXCHANGE_CHALLENGES.slice(3, 5)?.map((ch, index) => {
              return (
                <FeaturedCard
                  dark={true}
                  key={index}
                  challenge={ch}
                  index={index}
                />
              );
            })}
          </div>
        </div>

        {/* right image container */}
        <div className="z-20 relative">
          <Image
            src={"/case-studies/givexchange/challenges-mockup.png"}
            alt="givexchange-challenges-mobile-mockup"
            width={587}
            height={886}
            className="object-contain z-20 mx-auto"
          />
        </div>
      </section>
    </section>
  );
};

export default Challenge;
