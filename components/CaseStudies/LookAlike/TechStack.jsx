import Image from "next/image";
import React from "react";

const TechStack = () => {
  return (
    <section className="w-full padding-x relative pt-24">
      {/* Header */}
      <div className="w-full relative z-10 text-center">
        <h2 className="section-heading z-10">
          Tech Stack & <span className="lookalike-gradient-text">Tools</span>
        </h2>

        <Image
          src="/case-studies/lookalike/lookalike-tech-stack-and-tools.png"
          alt="LookAlike Match technology stack and development tools"
          width={1680}
          height={180}
          sizes="(min-width: 1280px) 1680px, 100vw"
          loading="lazy"
          quality={80}
          className="object-contain w-full relative z-10 mx-auto mt-12"
        />

        <Image
          src="/case-studies/lookalike/lookalike-tech-stack-tools.png"
          alt="LookAlike Match technology stack tools"
          width={1680}
          height={228}
          sizes="(min-width: 1280px) 1680px, 100vw"
          loading="lazy"
          quality={80}
          className="object-contain w-full relative z-10 mx-auto mt-12"
        />
      </div>
    </section>
  );
};

export default TechStack;
