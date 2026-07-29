"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function CtaAnimation() {
  return (
    <div className="w-full flex items-center justify-center min-h-[400px] md:min-h-[650px] relative lg:absolute right-0 max-w-[600px] -bottom-10 mx-auto">
      {/* Center Mockup */}
      <Image
        src="/case-studies/lookalike/lookalikematch-home-screen-mockup.png"
        alt="Center Mockup"
        width={333}
        height={405}
        className="relative z-20 object-contain mx-auto w-[220px] md:w-[320px] lg:w-[333px] h-auto"
      />

      {/* LEFT SIDE */}
      <motion.div
        className="absolute z-30 -left-5 bottom-[10%]"
        animate={{
          opacity: [0, 1, 1, 1, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.15, 0.65, 0.8, 1],
        }}
      >
        {/* Hello Bubble */}
        <motion.div
          className="absolute -top-10 right-10 z-20 bg-white border-2 border-gray-100 rounded-xl rounded-bl-none px-3 py-2 text-xs md:text-sm shadow-lg"
          animate={{
            opacity: [0, 0, 0, 1, 1, 0],
            y: [10, 10, 10, 0, 0, 10],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.45, 0.55, 0.65, 0.8, 1],
          }}
        >
          Hello!
        </motion.div>

        <Image
          src="/case-studies/lookalike/left-mockup.png"
          alt="Left Mockup"
          width={280}
          height={350}
          className="object-contain w-[140px] md:w-[220px] lg:w-[210px] h-auto z-30 relative left-20 midlg:w-[260px] midlg:left-0"
        />
      </motion.div>

      {/* RIGHT SIDE */}
      <motion.div
        className="absolute z-10 right-10 bottom-[17%]"
        animate={{
          opacity: [0, 0, 1, 1, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.25, 0.4, 0.8, 1],
        }}
        style={{
          right: "6%",
          bottom: "15%",
        }}
      >
        {/* Celebration Cone */}
        <motion.div
          className="absolute -top-14 left-10 z-30"
          animate={{
            opacity: [0, 0, 0, 1, 1, 0],
            scale: [0.8, 0.8, 0.8, 1, 1, 0.8],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.45, 0.55, 0.65, 0.8, 1],
          }}
        >
          <Image
            src="/case-studies/lookalike/celeberation-cone.png"
            alt="celeberation-cone"
            width={102}
            height={102}
            className="object-contain w-[50px] md:w-[75px] lg:w-[102px] h-auto"
          />
        </motion.div>

        <Image
          src="/case-studies/lookalike/right-mobile-mockup.png"
          alt="Right Mockup"
          width={240}
          height={400}
          className="object-contain w-[130px] md:w-[190px] lg:w-[200px] h-auto rotate-[2deg]"
        />
      </motion.div>
    </div>
  );
}
