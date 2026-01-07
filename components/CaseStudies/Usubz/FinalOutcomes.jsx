import Image from "next/image";
import React from "react";

const mockups = [
  "/case-studies/usubz/usubz-mockup-2.png",
  "/case-studies/usubz/usubz-mockup-3.png",
  "/case-studies/usubz/usubz-mockup-4.png",
  "/case-studies/usubz/usubz-mockup-5.png",
  "/case-studies/usubz/usubz-mockup-6.png",
  "/case-studies/usubz/usubz-mockup-7.png",
  "/case-studies/usubz/usubz-mockup-8.png",
  "/case-studies/usubz/usubz-mockup-9.png",
  "/case-studies/usubz/usubz-mockup-10.png",
];

const FinalOutcomes = () => {
  return (
    <section className="w-full pb-10 relative padding-x">
      <section className="w-full flex flex-col items-center relative z-10">
        <h2 className="section-heading text-center z-10">Final Outcomes</h2>
        <p className="text-center text-base lg:text-xl mt-7 z-10 lg:w-2/3">
          The final design successfully merged education, motivation, and
          employability into a unified platform. Usubz’s redesigned interface
          empowered users to learn, earn recognition, and stand out in one
          continuous journey. This approach positioned the platform among the
          best job portals, increasing engagement and building trust between
          learners and recruiters.
        </p>
      </section>
      <section className="w-full mt-14 grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-20 pb-20 z-10">
        {mockups?.map((mc, i) => {
          return (
            <Image
              src={mc}
              key={i}
              width={371}
              height={757}
              className={`object-contain relative z-10 ${
                i === 1
                  ? "lg:top-20"
                  : i === 4
                  ? "lg:top-20"
                  : i === 7
                  ? "lg:top-20"
                  : ""
              }`}
            />
          );
        })}
      </section>

      <div className="bg-[#1CE98A] blur-[245px] rounded-full w-[500px] h-[500px] absolute left-[2%] top-[5%] opacity-30 z-0" />
      <div className="bg-[#1CE98A] blur-[245px] rounded-full w-[500px] h-[500px] absolute right-[-20%] bottom-0 opacity-40 z-0" />
    </section>
  );
};

export default FinalOutcomes;
