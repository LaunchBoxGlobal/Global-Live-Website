"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });
  return (
    <section className="w-full relative overflow-hidden bg-white">
      <section className="w-full relative pt-36 2xl:pt-52 padding-x flex flex-col items-center justify-start gap-5 lg:gap-3 overflow-hidden z-10">
        <h1 className="font-extrabold text-[8.5vw] md:text-[5.5vw] lg:text-[70px] xl:text-[70px] text-center tracking-normal leading-[1] w-full z-10 f">
          Wyoming Digital Marketing That Drives{" "}
          <span className="red-text">Real Results</span>
        </h1>

        <p className="text-base md:text-lg lg:text-[22px] my-2 2xl:text-[26px] font-medium text-gray-500 text-center md:w-2/3 lg:w-[75%] leading-7 mx-auto z-10">
          Enhance your brand visibility with expert Wyoming digital marketing
          services designed to fuel growth, engagement, and long-term success.
        </p>

        <section className="w-full mt-5 z-10">
          <Link
            href={`/contact-us`}
            className="max-w-[220px] bg-[#F40E00] hover:bg-black h-[56px] rounded-[9px] text-center flex items-center justify-center text-lg font-bold text-white mx-auto z-10"
          >
            Get Started
          </Link>
        </section>

        <section
          ref={ref}
          className="lg:h-[509px] midlg:h-[545px] xl:h-[609px] w-full max-w-[1200px] mx-auto flex justify-center relative items-end mt-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
            className="absolute top-[30%] left-0 hidden lg:block z-20"
          >
            <Image
              src="/locations/digital-marketing/hero-section-left-card.png"
              alt="hero-section-left-card"
              width={218}
              height={212}
              className="z-20"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
            className="absolute bottom-[13%] -left-3 lg:left-7 midlg:left-[12%] xl:left-[10%] z-20"
          >
            <Image
              src={"/locations/digital-marketing/likes-card-1.png"}
              alt="likes-card-1"
              width={125}
              height={58}
              className="z-20  w-[60px] md:w-[100px] lg:w-auto"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
            className="absolute top-[33%] -right-6 lg:right-2 midlg:right-[11%] xl:right-[9%] z-20"
          >
            <Image
              src={"/locations/digital-marketing/likes-card-2.png"}
              alt="likes-card-2"
              width={125}
              height={58}
              className="z-20 w-[60px] md:w-[100px] lg:w-auto"
            />
          </motion.div>
          <motion.div
            initial={{ y: 600 }}
            animate={inView ? { y: 0 } : { y: 600 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="mx-auto z-10"
          >
            <Image
              src="/locations/digital-marketing/wyoming-digital-marketing-hero-section-mockup.png"
              alt="Wyoming digital marketing dashboard displaying campaign analytics and audience engagement metrics"
              width={900}
              height={573}
              priority
              quality={85}
              sizes="(max-width: 768px) 100vw,
               (max-width: 1100px) 80vw,
               1052px"
              className="mx-auto h-auto object-contain z-10 relative lg:w-[85%] midlg:w-[85%] xl:w-[85%]"
            />
          </motion.div>
        </section>
      </section>
    </section>
  );
};

export default Hero;
