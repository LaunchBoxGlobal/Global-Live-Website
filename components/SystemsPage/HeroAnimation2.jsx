"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const HeroAnimation2 = () => {
  return (
    <div className="w-full flex items-center justify-center overflow-hidden relative z-20 px-4">
      <div className="relative w-full max-w-[700px] h-[280px] sm:h-[360px] md:h-[450px] lg:h-[700px] flex items-center justify-center">
        {/* Desktop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{
            opacity: 1,
            scale: 1,
            x: "clamp(-20px, -5vw, -50px)",
          }}
          transition={{
            opacity: { duration: 0.6 },
            scale: { duration: 0.6 },
            x: {
              delay: 1.2,
              duration: 0.8,
              ease: "easeInOut",
            },
          }}
          className="relative z-20 w-[75%] sm:w-[72%] md:w-[70%] lg:w-[498px]"
        >
          <Image
            src="/systems-page/hero-card-mockup.png"
            alt=""
            width={498}
            height={360}
            className="w-full h-auto relative z-20"
            priority
          />
        </motion.div>

        {/* Mobile */}
        <motion.div
          initial={{
            opacity: 0,
            x: -40,
          }}
          animate={{
            opacity: 1,
            x: "clamp(100px, 35vw, 270px)",
          }}
          transition={{
            delay: 1.35,
            duration: 0.8,
            ease: "easeOut",
          }}
          className="absolute top-[16%] md:top-[24%] lg:top-[25%] z-10 w-[30%] sm:w-[28%] md:w-[26%] lg:w-[220px]"
        >
          <Image
            src="/systems-page/hero-mobile-mockup.png"
            alt=""
            width={280}
            height={430}
            className="w-full h-auto relative z-20"
            priority
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroAnimation2;
