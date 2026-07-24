"use client";
import { motion } from "framer-motion";

export default function ProcessTimelinePath() {
  const path =
    "M3.02661 213.777C104.688 290.79 347.745 373.664 506.676 89.0601C552.154 7.61918 678.63 -58.0246 792.531 102.672C906.431 263.369 994.505 182.002 1037.92 119.963C1072.51 70.5294 1160.01 24.9611 1220.03 119.963C1249.46 166.55 1299.86 188.545 1342.53 166.55C1377.36 148.601 1403.68 112.617 1437.82 14.6093";

  return (
    <svg
      viewBox="0 0 1439 292"
      className="absolute top-[32%] left-0 w-full h-auto pointer-events-none"
      fill="none"
    >
      {/* Gray path */}
      <path d={path} stroke="#f78383" strokeWidth="5" strokeLinecap="round" />

      {/* Animated Red Path */}
      <motion.path
        d={path}
        stroke="#EF4444"
        strokeWidth="5"
        strokeLinecap="round"
        initial={{
          pathLength: 0,
          opacity: 1,
        }}
        whileInView={{
          pathLength: 1,
        }}
        viewport={{
          once: true,
          amount: 0.4,
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
        }}
      />
    </svg>
  );
}
