import Image from "next/image";
import React from "react";

const fonts = [
  {
    title: "Headline",
    desc: "Font size: 24px | Line Height: 130%",
  },
  {
    title: "Title",
    desc: "Font size: 16px | Line Height: 130%",
  },
  {
    title: "Body",
    desc: "Font size: 12px | Line Height: 130%",
  },
  {
    title: "Button & Tag ",
    desc: "Font size: 14px | Line Height: 130%",
  },
];

const BrandingSection = () => {
  return (
    <section className="w-full pb-10 relative padding-x">
      <section className="w-full flex flex-col items-center relative z-10">
        <h2 className="section-heading text-center z-10">Branding</h2>
        <p className="text-center lg:w-[85%] text-base lg:text-xl mt-7 z-10">
          The GiveXchange brand was designed to communicate trust, simplicity,
          and a sense of shared community from the very first interaction. Our
          goal was to build an identity that feels modern and reliable while
          remaining warm and approachable for everyday users. By establishing a
          clear visual language—supported by cohesive typography, iconography,
          and color direction—we ensured the brand could scale consistently
          across mobile, web, and admin environments. The result is a unified
          experience that reinforces credibility, improves usability, and
          strengthens the platform’s overall personality.
        </p>
      </section>

      <section className="w-full mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="">
          <Image
            src={
              "/case-studies/givexchange/givexchange-logo-with-white-background.png"
            }
            alt="givexchange-logo-with-white-background"
            width={620}
            height={593}
          />
        </div>
        <div className="">
          <Image
            src={"/case-studies/givexchange/givexchange-sidebar-mockup.png"}
            alt="givexchange-sidebar-mockup"
            width={620}
            height={593}
          />
        </div>
      </section>

      <section className="w-full mt-20">
        <Image
          src={"/case-studies/givexchange/general-sans-fonts-label.png"}
          alt="general-sans-fonts-label"
          width={1304}
          height={150}
          className="mx-auto object-contain"
        />

        <div className="w-full mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {fonts?.map((f, i) => {
            return (
              <div
                key={i}
                className={`w-full flex flex-col itmes-start gap-3 ${
                  i !== 3 && "lg:border-r border-5 pr-5"
                }`}
              >
                <h3 className="text-[26px] font-medium">{f?.title}</h3>
                <p className="text-lg font-normal text-[#212121]">{f?.desc}</p>
              </div>
            );
          })}
        </div>

        <Image
          src={"/case-studies/givexchange/givexchange-color-pallete.png"}
          alt="givexchange-color-pallete"
          width={1270}
          height={600}
          className="mx-auto object-contain mt-12"
        />
      </section>
    </section>
  );
};

export default BrandingSection;
