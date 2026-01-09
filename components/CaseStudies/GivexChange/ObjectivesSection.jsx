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
    </section>
  );
};

export default ObjectivesSection;
