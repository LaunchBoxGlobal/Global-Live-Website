"use client";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import CtaAnimation from "./CtaAnimation";

const CTA = ({ handleToggleWaitlistModal }) => {
  const router = useRouter();
  const pathname = usePathname();

  const scrollToSection = (id) => {
    if (pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      // Store the target section, then navigate
      sessionStorage.setItem("scrollTarget", id);
      router.push("/");
    }
  };
  return (
    <section className="w-full padding-x">
      <section className="w-full mx-auto max-w-[1274px] border border-white lookalike-gradient rounded-[40px] relative grid grid-cols-1 lg:grid-cols-2 purple-shadow">
        <div className="space-y-8 relative z-20 p-10 lg:p-12">
          <div className="rounded-full flex items-center gap-2 px-4 py-2 border border-white/50 backdrop-blur-xl text-white bg-white/10 font-bold max-w-max">
            ✦ LaunchBox Global — Ready to build
          </div>

          <h2 className="text-4xl lg:text-[48px] font-bold text-white leading-[1]">
            Ready to build a trusted, scalable friendship platform?
          </h2>

          <p className="text-gray-100 lg:max-w-[90%]">
            Let LaunchBox Global turn your vision into a fully functional,
            growth-ready platform.
          </p>

          <div className="">
            <Link
              href={"/contact-us"}
              className="bg-white py-4 px-8 rounded-[17px] text-lg lg:text-[22px] font-medium text-[#5E51C9]"
            >
              Start your project today
            </Link>
          </div>
        </div>

        <CtaAnimation />

        <Image
          src="/case-studies/lookalike/cta-bubble-top-right.webp"
          alt=""
          width={257}
          height={257}
          sizes="257px"
          loading="lazy"
          className="absolute -top-20 -right-20 z-0 pointer-events-none select-none"
        />

        {/* Decorative background bubble */}
        <Image
          src="/case-studies/lookalike/cta-bottom-left-bubble.webp"
          alt=""
          width={257}
          height={257}
          sizes="257px"
          loading="lazy"
          className="absolute -bottom-10 -left-10 z-0 pointer-events-none select-none"
        />
      </section>
    </section>
  );
};

export default CTA;
