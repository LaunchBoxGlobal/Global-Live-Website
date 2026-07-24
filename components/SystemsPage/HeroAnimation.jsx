"use client";
import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import Image from "next/image";

export default function HeroAnimation() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const items = [
    {
      id: "sales",
      title: "Sales Pipeline",
      icon: "/systems-page/sales-pipeline-icon.png",
      dot: { x: -260, y: -130 },
      card: { x: -400, y: -130 },
      iconBg: "bg-[#8B5CF618]",
      iconColor: "text-[#8B5CF6]",
    },
    {
      id: "crm",
      title: "CRM Dashboard",
      icon: "/systems-page/CRM-dashboard-icon.png",
      dot: { x: -300, y: 0 },
      card: { x: -480, y: 0 },
      iconBg: "bg-[#3B82F618]",
      iconColor: "text-blue-500",
    },
    {
      id: "ai",
      title: "AI Assistant",
      icon: "/systems-page/ai-assistant-icon.png",
      dot: { x: -260, y: 130 },
      card: { x: -400, y: 130 },
      iconBg: "bg-pink-50",
      iconColor: "text-pink-500",
    },
    {
      id: "portal",
      title: "Customer Portal",
      icon: "/systems-page/customer-portal-icon.png",
      dot: { x: 260, y: -130 },
      card: { x: 400, y: -130 },
      iconBg: "bg-[#06B6D418]",
      iconColor: "text-[#06B6D4]",
    },
    {
      id: "app",
      title: "Mobile App",
      icon: "/systems-page/mobile-app-icon.png",
      dot: { x: 300, y: 0 },
      card: { x: 480, y: 0 },
      iconBg: "bg-orange-50",
      iconColor: "text-orange-500",
    },
    {
      id: "automations",
      title: "Automations",
      icon: "/systems-page/automations-icon.png",
      dot: { x: 260, y: 130 },
      card: { x: 400, y: 130 },
      iconBg: "bg-red-50",
      iconColor: "text-[#ef4444]",
    },
  ];

  return (
    <section className="bg-transparent flex items-center justify-center h-[280px] md:h-[400px] lg:min-h-[700px]">
      <div
        ref={containerRef}
        className="relative w-[1100px] h-[600px] scale-[0.35] xs:scale-[0.65] sm:scale-65 md:scale-[0.65] xl:scale-100 flex items-center justify-center transform-origin-center transition-transform duration-500 ease-out"
      >
        {/* Soft center red glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-400/20 rounded-full blur-[80px] pointer-events-none z-0 opacity-60"></div>

        {/* --- SVG Paths Layer --- */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
          viewBox="-550 -300 1100 600"
        >
          <defs>
            {items.map((item) => (
              <linearGradient
                key={`grad-${item.id}`}
                id={`line-gradient-${item.id}`}
                gradientUnits="userSpaceOnUse"
                x1="0"
                y1="0"
                x2={item.dot.x}
                y2={item.dot.y}
              >
                <stop offset="0%" stopColor="#ef4444" stopOpacity="0" />
                <stop offset="8%" stopColor="#ef4444" stopOpacity="1" />
                <stop offset="60%" stopColor="#ef4444" stopOpacity="1" />
                <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
              </linearGradient>
            ))}
          </defs>

          {items.map((item, index) => (
            <g key={`path-${item.id}`}>
              <motion.path
                d={`M 0,0 C ${item.dot.x * 0.4},0 ${item.dot.x * 0.6},${item.dot.y} ${item.dot.x},${item.dot.y}`}
                fill="none"
                stroke={`url(#line-gradient-${item.id})`}
                vectorEffect="non-scaling-stroke"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={
                  isInView
                    ? { pathLength: 1, opacity: 1 }
                    : { pathLength: 0, opacity: 0 }
                }
                transition={{
                  duration: 1.2,
                  delay: 0.4 + index * 0.1,
                  ease: "easeInOut",
                }}
              />
              <motion.circle
                cx={item.dot.x}
                cy={item.dot.y}
                r="6"
                fill="#ef4444"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 1.4 + index * 0.1,
                  type: "spring",
                }}
              />
            </g>
          ))}
        </svg>

        {/* --- Satellite Cards Layer --- */}
        <div className="absolute top-1/2 left-1/2 w-0 h-0 z-20">
          {items.map((item, index) => (
            <motion.div
              key={`card-${item.id}`}
              initial={{ x: 0, y: 0, scale: 0.3, opacity: 0 }}
              animate={
                isInView
                  ? { x: item.card.x, y: item.card.y, scale: 1, opacity: 1 }
                  : {}
              }
              transition={{
                duration: 1,
                delay: 1.0 + index * 0.1, // Slide out slightly staggered
                type: "spring",
                bounce: 0.25,
                damping: 15,
              }}
              className="absolute"
            >
              {/* Inner centering wrapper */}
              <div className="absolute -translate-x-1/2 -translate-y-1/2">
                <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-3 pr-6 flex items-center space-x-4 w-[220px]">
                  <div className={``}>
                    <Image
                      src={item.icon}
                      width={39}
                      height={39}
                      alt={item.title}
                      loading="lazy"
                      className="object-contain"
                    />
                  </div>
                  <span className="font-semibold text-gray-900 text-[15px] tracking-tight">
                    {item.title}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- Central Base Card Layer --- */}
        <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={isInView ? { scale: 1, opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.1,
              type: "spring",
              bounce: 0.3,
            }}
            className="w-[280px] bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-[0_15px_40px_rgb(239,68,68,0.12)] border border-red-50 pointer-events-auto"
          >
            <div className="mb-2">
              <span className="text-[11px] font-bold text-[#ef4444] uppercase tracking-widest">
                IDEA
              </span>
            </div>
            <h3 className="text-[15px] font-bold text-gray-900 leading-tight mb-1">
              Product blueprint
            </h3>
            <p className="text-xs font-normal text-gray-500 mb-6">
              Figma · Spec · Wireframe
            </p>

            <div className="space-y-6 mb-4 w-full">
              <div className="w-full border border-gray-100 rounded-full"></div>
              <div className="w-[80%] border border-gray-100 rounded-full"></div>
              <div className="w-[60%] border border-gray-100 rounded-full"></div>
            </div>

            <div className="flex items-center space-x-2 pt-2">
              <span className="bg-red-50 text-[#ef4444] text-[11px] font-medium px-3 py-1 rounded-full">
                v0.1
              </span>
              <span className="bg-gray-50 text-gray-500 text-[11px] font-medium px-3 py-1 rounded-full">
                scope
              </span>
              <span className="bg-gray-50 text-gray-500 text-[11px] font-medium px-3 py-1 rounded-full">
                plan
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
