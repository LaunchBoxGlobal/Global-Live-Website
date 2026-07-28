import Image from "next/image";
import React from "react";

const TechStack = () => {
  return (
    <section className="w-full padding-x relative flex justify-center">
      {/* Header */}
      <div className="mb-14 relative z-10 text-center">
        <h2 className="section-heading z-10 mb-5">
          Tech Stack & <span className="lookalike-gradient-text">Tools</span>
        </h2>

        <Image
          src={"/case-studies/lookalike/lookalike-tech-stack-and-tools.png"}
          alt="lookalike-tech-stack-and-tools"
          width={1680}
          height={180}
          className="object-contain w-full relative z-10 mx-auto mt-12"
        />
        <Image
          src={"/case-studies/lookalike/lookalike-tech-stack-tools.png"}
          alt="lookalike-tech-stack-tools"
          width={1680}
          height={228}
          className="object-contain w-full relative z-10 mx-auto mt-12"
        />
      </div>
    </section>
  );
};

export default TechStack;
