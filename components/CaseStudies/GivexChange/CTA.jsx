import Image from "next/image";
import Link from "next/link";
import React from "react";

const CTA = () => {
  return (
    <section className="w-full relative padding-x py-20 grid grid-cols-1 lg:grid-cols-2 gap-5">
      <div className="z-10">
        <Image
          src={"/case-studies/givexchange/givexchange-cta-mockup.png"}
          width={630}
          height={606}
          className="object-contain z-10"
        />
      </div>
      <div className="flex flex-col items-start justify-center gap-4 z-10">
        <h2 className="text-[30px] lg:text-[40px] font-bold leading-none tracking-tight z-10">
          Ready to build a fast, scalable, and user-friendly community
          marketplace?
        </h2>
        <p className="text-lg md:text-xl lg:text-[22px] font-normal leading-[1.2] z-10">
          Let LaunchBox Global turn your vision into a fully functional,
          growth-ready platform.
        </p>
        <div className="w-full mt-6 z-10">
          <Link
            href={"/contact-us"}
            className="w-full z-10 max-w-[309px] px-10 py-4 rounded-[17px] bg-[var(--givexchange-primary-color)] text-white font-medium text-lg lg:text-[22px]"
          >
            Start your project today
          </Link>
        </div>
      </div>

      <div className="bg-[var(--givexchange-primary-color)] blur-[845px] rounded-full w-[300px] lg:w-[800px] h-[500px] absolute top-1/2 -translate-y-1/2 left-[-60%] lg:left-[-10%] z-0" />
      <div className="bg-[var(--givexchange-primary-color)] blur-[845px] rounded-full w-[300px] lg:w-[800px] h-[500px] absolute top-1/2 -translate-y-1/2 right-[-60%] lg:right-[-50%] z-0" />
    </section>
  );
};

export default CTA;
