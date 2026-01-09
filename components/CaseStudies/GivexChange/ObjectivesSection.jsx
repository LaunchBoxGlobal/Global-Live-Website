import React from "react";
import Objectives from "./Objectives";

const ObjectivesSection = () => {
  return (
    <section className="w-full pb-10 relative padding-x">
      <section className="w-full flex flex-col items-center relative z-10">
        <h2 className="section-heading text-center z-10">Our Objectives</h2>
        <p className="text-center lg:w-[85%] text-base lg:text-xl mt-7 z-10">
          Our primary objective was to design a marketplace that feels
          effortless, secure, and community-driven—one that users can trust and
          enjoy using every day. We focused on creating a foundation that not
          only delivers smooth buying and selling experiences but also supports
          long-term scalability as the platform grows. The aim was to strike the
          right balance between intuitive user flows, powerful admin
          capabilities, and stable performance, ensuring the client could
          confidently expand their ecosystem while maintaining a high-quality
          experience for all members.
        </p>
      </section>

      <Objectives />

      <div className="bg-[var(--givexchange-primary-color)] blur-[845px] rounded-full w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-0" />
    </section>
  );
};

export default ObjectivesSection;
