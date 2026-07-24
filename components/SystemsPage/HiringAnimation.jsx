"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const icons = [
  {
    src: "/systems-page/user.png",
    alt: "user",
    size: { w: 14, h: 16 },
    className: "top-[-10%] left-1/2 -translate-x-1/2",
  },
  {
    src: "/systems-page/file-icon.png",
    alt: "file",
    size: { w: 16, h: 20 },
    className: "top-[30%] left-[-10%]",
  },
  {
    src: "/systems-page/message-icon.png",
    alt: "message",
    size: { w: 16, h: 16 },
    className: "bottom-[-1%] left-[10%]",
  },
  {
    src: "/systems-page/calendar.png",
    alt: "calendar",
    size: { w: 16, h: 17 },
    className: "top-[30%] right-[-10%]",
  },
  {
    src: "/systems-page/real-time-progress-tracking.png",
    alt: "progress",
    size: { w: 19, h: 19 },
    className: "bottom-[-1%] right-[10%]",
  },
];

const dots = [
  "bottom-[25%] left-[2%] w-[10px] h-[10px] opacity-100",
  "bottom-[25%] left-[20%] w-[8px] h-[8px] opacity-90",
  "top-[10%] right-[15%] w-[8px] h-[8px] opacity-90",
  "bottom-[25%] right-[22%] w-[6px] h-[6px] opacity-70",
  "bottom-[35%] right-[2%] w-[6px] h-[6px] opacity-70",
  "top-[15%] right-[45%] w-[6px] h-[6px] opacity-70",
  "top-[15%] left-[10%] w-[6px] h-[6px] opacity-70",
];

export default function HiringAnimation() {
  return (
    <div className="lg:w-2/5 flex items-center justify-center">
      <div className="relative w-[165px] h-[165px] z-20">
        {/* Orbiting Layer */}
        <motion.div
          className="absolute inset-0 z-20"
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {/* Icons */}
          {icons.map((icon, index) => (
            <motion.div
              key={index}
              className={`absolute ${icon.className} w-[36px] h-[36px] bg-white rounded-full custom-shadow flex items-center justify-center z-20`}
              animate={{ rotate: -360 }}
              transition={{
                duration: 20,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              <Image
                src={icon.src}
                alt={icon.alt}
                width={icon.size.w}
                height={icon.size.h}
              />
            </motion.div>
          ))}

          {/* Dots */}
          {dots.map((cls, index) => (
            <div
              key={index}
              className={`absolute ${cls} rounded-full bg-red-500 custom-shadow z-20`}
            />
          ))}
        </motion.div>

        {/* Center Circle (doesn't rotate) */}
        <Image
          src="/systems-page/circle-card.png"
          alt="circle-card"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}
