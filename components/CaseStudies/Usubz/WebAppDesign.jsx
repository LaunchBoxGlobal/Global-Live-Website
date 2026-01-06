import { USUBZ_WEB_APP_DESIGN } from "@/constants/case-studies/usubz/UsubzWebAppDeisgn";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const WebAppDesign = () => {
  return (
    <section className="w-full pb-10 relative padding-x">
      <section className="w-full flex flex-col items-center relative z-10">
        <h2 className="section-heading text-center z-10">Web App Design</h2>
        <p className="text-center text-base lg:text-xl mt-7 z-10 lg:w-2/3">
          Alongside the mobile app, we designed a responsive web application for
          Usubz through our{" "}
          <Link href={`/services/mobile-app-development`}>
            web app development services
          </Link>
          , so you can access learning and career tools from any browser,
          anytime. The web experience was designed for two main users: Learners
          and recruiters. Keeping navigation simple, intuitive, and consistent
          with the mobile app.
        </p>
      </section>

      <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
        {USUBZ_WEB_APP_DESIGN?.map((design, index) => {
          return (
            <div className="w-full" key={index}>
              <Image
                src={`/case-studies/usubz/web-app-design-icon.png`}
                alt="web-app-design-icon"
                width={119}
                height={139}
              />
              <h3 className="text-[22px] font-semibold mt-4 leading-none">
                {design?.title}
              </h3>
              <p className="text-lg leading-[1.2] mt-4">
                {design?.description}
              </p>
            </div>
          );
        })}
      </section>

      <section className="w-full mt-14">
        <Image
          src={"/case-studies/usubz/usubz-desktop-mockup.png"}
          alt="usubz-desktop-mockup"
          width={1271}
          height={615}
          className="object-contain"
        />
      </section>
    </section>
  );
};

export default WebAppDesign;
