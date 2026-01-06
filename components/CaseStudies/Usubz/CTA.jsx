import Image from "next/image";
import React from "react";

const CTA = () => {
  return (
    <section
      className="w-full relative h-screen pt-20 padding-x"
      style={{
        backgroundImage: `url(/case-studies/usubz/cta-background.png)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="w-full flex flex-col items-center justify-center text-center gap-3">
        <h2 className="text-white font-medium text-[32px] lg:text-[50px] leading-none">
          Your Idea Could Be Our Next Success Story
        </h2>
        <p className="text-gray-200 font-medium text-lg lg:text-[24px] lg:w-1/2 leading-[1.3]">
          Don’t wait. Your idea has the potential to be your next big
          achievement. Take action today!
        </p>
      </div>

      <h3 className="text-[55px] md:text-[70px] lg:text-[120px] font-semibold text-white text-center leading-none tracking-tight mt-14">
        Start Your Project with{" "}
        <span className="text-gray-200">LaunchBox Global</span>
      </h3>

      {/* cursor-icon */}
      <Image
        src={"/case-studies/usubz/cursor-icon.png"}
        alt="cursor-icon"
        width={103}
        height={109}
        className="absolute right-0 md:right-[13%] bottom-[10%] md:bottom-[32%]"
      />

      <Image
        src={"/case-studies/usubz/cta-mockup.png"}
        width={1045}
        height={1521}
        alt="cta-mockup"
        className="absolute -left-10 lg:left-[10%] bottom-0 z-10"
      />
    </section>
  );
};

export default CTA;
