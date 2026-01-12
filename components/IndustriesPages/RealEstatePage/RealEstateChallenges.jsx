import React from "react";
import ChallengesSlider from "../HealthCarePage/ChallengesSlider";
import { REAL_ESTATE_APP_DEVELOPMENT_CHALLENGES } from "@/constants/industries/real-estate-content/real-estate-challenges";

const RealEstateChallenges = () => {
  return (
    <section className="w-full py-20 bg-[#fff] padding-x overflow-hidden">
      <div className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading mx-auto">
          Common Challenges in Real Estate{" "}
          <span className="red-text">App Development</span>
        </h2>

        <p className="section-paragraph lg:w-[90%] mx-auto">
          Building real estate app development solutions comes with its own set
          of challenges. Clients often have to deal with multiple challenges,
          like outdated systems, which cause poor communication and further
          challenges. So, we deal with them on your behalf and make sure you
          never have to worry about those things again.
        </p>
      </div>

      <ChallengesSlider Challenges={REAL_ESTATE_APP_DEVELOPMENT_CHALLENGES} />
    </section>
  );
};

export default RealEstateChallenges;
