import Image from "next/image";
import React from "react";

const Objectives = () => {
  return (
    <section className="w-full padding-x relative">
      {/* Header */}
      <div className="mb-14 relative z-10 text-center">
        <h2 className="section-heading z-10 mb-5">
          Our <span className="lookalike-gradient-text">Objectives</span>
        </h2>

        <Image
          src="/case-studies/lookalike/objectives.webp"
          alt="LookAlike Match project objectives"
          width={1604}
          height={1581}
          sizes="(min-width: 1280px) 1200px, (min-width: 768px) 90vw, 100vw"
          loading="lazy"
          quality={90}
          className="object-contain mx-auto w-full max-w-[1200px] h-auto"
        />
      </div>
    </section>
  );
};

export default Objectives;
