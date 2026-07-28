import Image from "next/image";
import React from "react";

const Objectives = () => {
  return (
    <section className="w-full padding-x relative flex justify-center">
      {/* Header */}
      <div className="mb-14 relative z-10 text-center">
        <h2 className="section-heading z-10 mb-5">
          Our <span className="lookalike-gradient-text">Objectives</span>
        </h2>

        <Image
          src={"/case-studies/lookalike/objectives.svg"}
          alt="objectives"
          width={1604}
          height={1581}
          className="object-contain mx-auto"
        />
      </div>
    </section>
  );
};

export default Objectives;
