import Image from "next/image";
import React from "react";

const TechStack = () => {
  return (
    <section className="w-full pb-10 relative padding-x grid grid-cols-1 lg:grid-cols-2 gap-y-8">
      <section className="w-full flex flex-col items-start relative z-10">
        <h2 className="text-[40px] font-medium z-10">Tech Stack & Tools</h2>
        <p className="text-start text-base lg:text-lg mt-7 z-10 leading-[1.2]">
          The design workflow for UsubZ relied on tools that kept the process
          fast, collaborative, and user-focused. We used Figma for wireframes
          and final UI, and FigJam for journey mapping and teamwork. Adobe
          Illustrator helped create visual assets and icons. Maze and
          UserTesting validated interactive prototypes and provided real user
          feedback. These tools ensured a precise, data-driven design process.
        </p>
      </section>

      <div className="w-full flex justify-end items-center">
        <Image
          src={"/case-studies/usubz/usubz-tech-stack-and-tools.png"}
          width={414}
          height={122}
          alt="usubz-tech-stack-and-tools"
        />
      </div>
    </section>
  );
};

export default TechStack;
