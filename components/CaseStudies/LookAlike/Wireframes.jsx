import Image from "next/image";
import React from "react";

const Wireframes = () => {
  return (
    <section className="w-full padding-x relative flex justify-center">
      {/* Header */}
      <div className="mb-14 relative z-10 text-center">
        <h2 className="section-heading z-10 mb-5">Wireframes</h2>
        <p className="text-base md:text-lg lg:text-[20px] xl:text-[22px] leading-[1.35] mx-auto text-[#212121]">
          The final product gives users a friendship platform built around trust
          from the first interaction: verification that feels quick rather than
          invasive, discovery that stays effortless, and real-time chat, voice
          messages, and media sharing that make conversations feel native to the
          app rather than bolted on. Subscription access is enforced cleanly
          throughout, restricting features automatically on expiry while keeping
          the experience seamless for active users.
        </p>

        <Image
          src={"/case-studies/lookalike/lookalikematch-wireframes.png"}
          alt="lookalikematch-wireframes"
          width={1271}
          height={771}
          className="object-contain w-full relative z-10 mx-auto mt-12"
        />
      </div>
    </section>
  );
};

export default Wireframes;
