import Image from "next/image";
import React from "react";
// givexchange-desktop-mockup-6

const OutcomeMockups = () => {
  return (
    <section className="w-full">
      <div className="w-full mt-20 grid grid-cols-5 gap-5 lg:pb-40">
        <div className="flex flex-col justify-center gap-5">
          <Image
            src="/case-studies/givexchange/outcomes-mobile-mockup-1.png"
            alt=""
            width={272}
            height={645}
            className="w-full h-auto"
          />
        </div>

        <div className="flex flex-col gap-5 relative lg:top-40">
          <Image
            src="/case-studies/givexchange/outcomes-mobile-mockup-2.png"
            alt=""
            width={272}
            height={645}
            className="w-full h-auto"
          />
          <Image
            src="/case-studies/givexchange/outcomes-mobile-mockup-3.png"
            alt=""
            width={272}
            height={645}
            className="w-full h-auto"
          />
        </div>

        <div className="flex flex-col gap-5">
          <Image
            src="/case-studies/givexchange/outcomes-mobile-mockup-4.png"
            alt=""
            width={272}
            height={645}
            className="w-full h-auto"
          />
          <Image
            src="/case-studies/givexchange/outcomes-mobile-mockup-5.png"
            alt=""
            width={272}
            height={645}
            className="w-full h-auto"
          />
        </div>

        <div className="flex flex-col gap-5 relative lg:top-40">
          <Image
            src="/case-studies/givexchange/outcomes-mobile-mockup-6.png"
            alt=""
            width={272}
            height={645}
            className="w-full h-auto"
          />
          <Image
            src="/case-studies/givexchange/outcomes-mobile-mockup-7.png"
            alt=""
            width={272}
            height={645}
            className="w-full h-auto"
          />
        </div>

        <div className="flex flex-col justify-center gap-5">
          <Image
            src="/case-studies/givexchange/outcomes-mobile-mockup-8.png"
            alt=""
            width={272}
            height={645}
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="w-full mt-48 relative grid grid-cols-3 gap-5 lg:pb-40">
        <div className="flex flex-col items-center gap-5 relative lg:top-40">
          <Image
            src="/case-studies/givexchange/givexchange-desktop-mockup-1.png"
            alt="givexchange-desktop-mockup-1"
            width={512}
            height={671}
            className="w-full h-auto"
          />
          <Image
            src="/case-studies/givexchange/givexchange-desktop-mockup-2.png"
            alt="givexchange-desktop-mockup-2"
            width={512}
            height={671}
            className="w-full h-auto"
          />
        </div>
        <div className="flex flex-col items-center gap-5 relative">
          <Image
            src="/case-studies/givexchange/givexchange-desktop-mockup-3.png"
            alt="givexchange-desktop-mockup-3"
            width={512}
            height={671}
            className="w-full h-auto"
          />
          <Image
            src="/case-studies/givexchange/givexchange-desktop-mockup-4.png"
            alt="givexchange-desktop-mockup-4"
            width={512}
            height={671}
            className="w-full h-auto"
          />
        </div>
        <div className="flex flex-col items-center gap-5 relative lg:top-40">
          <Image
            src="/case-studies/givexchange/givexchange-desktop-mockup-5.png"
            alt="givexchange-desktop-mockup-5"
            width={512}
            height={671}
            className="w-full h-auto"
          />
          <Image
            src="/case-studies/givexchange/givexchange-desktop-mockup-5.png"
            alt="givexchange-desktop-mockup-5"
            width={512}
            height={671}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default OutcomeMockups;
