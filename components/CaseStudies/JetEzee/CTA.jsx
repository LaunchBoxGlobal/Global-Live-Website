import Image from "next/image";
import Link from "next/link";
import React from "react";

const CTA = () => {
  return (
    <section className="w-full relative padding-x">
      <div className="w-full bg-white rounded-[80px] p-7 lg:py-20 px-20 relative z-10 flex items-center justify-between gap-y-6 flex-wrap">
        <div className="flex flex-col items-start gap-6 w-full lg:w-1/2 z-10">
          <h2 className="text-[35px] font-bold leading-[1]">
            Have a marketplace idea that demands{" "}
            <span className="text-[var(--jetezee-primary-color)]">
              precision and elegance?
            </span>
          </h2>

          <p className="text-[22px] font-normal leading-[1.2] mb-3">
            Let’s prototype your vision into a clickable reality — from concept
            to high-fidelity interface.
          </p>
          <Link
            href={"/contact-us"}
            className="py-3.5 w-full max-w-[429px] bg-[var(--jetezee-primary-color)] text-white rounded-[10px] text-center text-[22px] font-bold"
          >
            Connect with LaunchBox Global today
          </Link>
        </div>

        <Image
          src={"/case-studies/jetezee/jetezee-cta-mockup.png"}
          alt="jetezee-cta-mockup"
          width={585}
          height={446}
          className="z-10 md:max-w-[80%] mx-auto lg:ml-0 lg:max-w-[40%]"
        />
      </div>

      <div className="bg-[var(--jetezee-primary-color)] rounded-full w-[700px] h-[700px] absolute top-[0%] left-[-20%] z-0 blur-[400px] opacity-75 hidden lg:block" />
      <div className="bg-[var(--jetezee-primary-color)] rounded-full w-[700px] h-[700px] absolute top-[10%] right-[-20%] z-0 blur-[500px] opacity-40 hidden lg:block" />
    </section>
  );
};

export default CTA;
