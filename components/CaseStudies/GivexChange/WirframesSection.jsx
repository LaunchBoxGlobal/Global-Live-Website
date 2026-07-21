import Image from "next/image";
import React from "react";

const WirframesSection = () => {
  return (
    <section className="w-full pb-10 relative">
      <section className="w-full flex flex-col items-center relative z-10 padding-x">
        <h2 className="section-heading text-center z-10">Wireframes</h2>
        <p className="text-center lg:w-[85%] text-base lg:text-xl mt-7 z-10">
          To build a platform that feels intuitive and purpose-driven from the
          start, we followed a Functionality-First Workflow. This approach
          allowed us to prioritize clarity, usability, and performance before
          introducing visual polish. By grounding every step in real user needs
          and continuous testing, the workflow ensured the product evolved in a
          structured, meaningful way. Each phase contributed to a marketplace
          experience that is dependable, scalable, and easy for both users and
          admins to adopt. This method kept the project aligned with core
          objectives while maintaining momentum throughout design and
          development.
        </p>
      </section>

      <section className="w-full overflow-hidden mt-20">
        <div className="flex gap-10 givexchange-animate-slide">
          {/* FIRST SET */}
          <Image
            src="/case-studies/givexchange/givexchange-wireframes-mockup-1.png"
            alt=""
            width={272}
            height={645}
            className="object-contain"
          />
          <Image
            src="/case-studies/givexchange/givexchange-wireframes-mockup-2.png"
            alt=""
            width={272}
            height={645}
            className="object-contain"
          />
          <Image
            src="/case-studies/givexchange/givexchange-wireframes-mockup-3.png"
            alt=""
            width={272}
            height={645}
            className="object-contain"
          />
          <Image
            src="/case-studies/givexchange/givexchange-wireframes-mockup-4.png"
            alt=""
            width={272}
            height={645}
            className="object-contain"
          />

          {/* DUPLICATE SET */}
          <Image
            src="/case-studies/givexchange/givexchange-wireframes-mockup-1.png"
            alt=""
            width={272}
            height={645}
            className="object-contain"
          />
          <Image
            src="/case-studies/givexchange/givexchange-wireframes-mockup-2.png"
            alt=""
            width={272}
            height={645}
            className="object-contain"
          />
          <Image
            src="/case-studies/givexchange/givexchange-wireframes-mockup-3.png"
            alt=""
            width={272}
            height={645}
            className="object-contain"
          />
          <Image
            src="/case-studies/givexchange/givexchange-wireframes-mockup-4.png"
            alt=""
            width={272}
            height={645}
            className="object-contain"
          />

          {/* DUPLICATE SET */}
          <Image
            src="/case-studies/givexchange/givexchange-wireframes-mockup-1.png"
            alt=""
            width={272}
            height={645}
            className="object-contain"
          />
          <Image
            src="/case-studies/givexchange/givexchange-wireframes-mockup-2.png"
            alt=""
            width={272}
            height={645}
            className="object-contain"
          />
          <Image
            src="/case-studies/givexchange/givexchange-wireframes-mockup-3.png"
            alt=""
            width={272}
            height={645}
            className="object-contain"
          />
          <Image
            src="/case-studies/givexchange/givexchange-wireframes-mockup-4.png"
            alt=""
            width={272}
            height={645}
            className="object-contain"
          />
        </div>
      </section>
    </section>
  );
};

export default WirframesSection;
