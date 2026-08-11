"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const HeroAnimation = () => {
  return (
    <div className="w-full max-w-7xl mx-auto h-auto lg:h-[600px] relative flex justify-center items-end mt-14 overflow-y-hidden">
      {/* Floating Card (left) */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, -15, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        className="absolute left-[8%] bottom-[10%] object-contain z-20 hidden lg:block"
      >
        <Image
          src={`/locations/mobile-app-developer-in-atlanta/card.webp`}
          width={251}
          height={172}
          alt="floating card left"
          className="object-contain"
        />
      </motion.div>

      {/* Mobile Screen */}
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 15,
          duration: 1.2,
        }}
        className="mx-auto z-20 w-[40%]"
      >
        <Image
          src={`/locations/mobile-app-developer-in-atlanta/mobile.webp`}
          width={370}
          height={564}
          alt="mobile screen mockup"
          className="w-full object-contain max-h-[550px]"
        />
      </motion.div>

      {/* Floating Card (right) */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, 20, 0] }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        className="absolute right-[4%] bottom-[40%] z-20 hidden lg:block"
      >
        <Image
          src={`/locations/mobile-app-developer-in-atlanta/card1.webp`}
          alt="floating card right"
          width={227}
          height={272}
          className="object-contain"
        />
      </motion.div>
    </div>
  );
};

export default HeroAnimation;
