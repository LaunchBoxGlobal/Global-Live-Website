"use client";
import {
  LOOKALIKE_OUTCOME_MOCKUPS_1,
  LOOKALIKE_OUTCOME_MOCKUPS_2,
} from "@/constants/case-studies/lookalike/lookalike-mockups";
import Image from "next/image";
import React from "react";
import OutcomesMarqueeColumn from "../Bloom/OutcomesMarqueeColumn";
// import OutcomesMarqueeColumn from "./OutcomesMarqueeColumn";

const OutcomesAnimation = () => {
  const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  const column1Images = shuffleArray([
    ...LOOKALIKE_OUTCOME_MOCKUPS_1,
    ...LOOKALIKE_OUTCOME_MOCKUPS_1,
  ]);
  const column2Images = shuffleArray([
    ...LOOKALIKE_OUTCOME_MOCKUPS_2,
    ...LOOKALIKE_OUTCOME_MOCKUPS_2,
  ]);
  const column3Images = shuffleArray([
    ...LOOKALIKE_OUTCOME_MOCKUPS_1,
    ...LOOKALIKE_OUTCOME_MOCKUPS_1,
  ]);
  const column4Images = shuffleArray([
    ...LOOKALIKE_OUTCOME_MOCKUPS_2,
    ...LOOKALIKE_OUTCOME_MOCKUPS_2,
  ]);
  const column5Images = shuffleArray([
    ...LOOKALIKE_OUTCOME_MOCKUPS_1,
    ...LOOKALIKE_OUTCOME_MOCKUPS_1,
  ]);
  const column6Images = shuffleArray([
    ...LOOKALIKE_OUTCOME_MOCKUPS_2,
    ...LOOKALIKE_OUTCOME_MOCKUPS_2,
  ]);

  return (
    <div className="w-full mt-10 midlg:mt-12 max-w-[1271px] mx-auto">
      <div className="w-full relative h-[771px] max-h-[771px] lookalike-gradient overflow-hidden rounded-[40px]">
        <Image
          src={"/case-studies/lines_Grid-2.webp"}
          alt="lines_Grid"
          width={1271}
          height={771}
          className="w-full h-full absolute inset-0 object-cover"
        />
        <div className="w-full absolute h-full inset-0 -rotate-[20deg] hidden md:flex gap-3">
          <OutcomesMarqueeColumn images={column1Images} />

          <OutcomesMarqueeColumn images={column2Images} reverse={true} />

          <OutcomesMarqueeColumn images={column3Images} reverse={false} />

          <OutcomesMarqueeColumn images={column4Images} reverse={true} />

          <OutcomesMarqueeColumn images={column5Images} reverse={false} />

          <OutcomesMarqueeColumn images={column6Images} reverse={true} />
        </div>
        <div className="w-full absolute h-full inset-0 -rotate-[20deg] flex md:hidden gap-3">
          <OutcomesMarqueeColumn images={column1Images} />

          <OutcomesMarqueeColumn images={column2Images} reverse={true} />

          <OutcomesMarqueeColumn images={column3Images} reverse={false} />
        </div>
      </div>
    </div>
  );
};

export default OutcomesAnimation;
