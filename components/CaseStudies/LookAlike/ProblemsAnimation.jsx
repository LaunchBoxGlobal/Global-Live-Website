"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import {
  GRAD,
  GRAD_TEXT,
  GLASS_LG,
  GLASS_SM,
  C_PURPLE,
  C_BLUE,
  C_BODY,
  C_MUTED,
  C_GREEN,
  FONT,
  PAGE_BG,
  FROST,
  labelStyle,
} from "./tokens";
import Image from "next/image";
import TrustScore from "./TrustScore";

// Why try — 4 user archetypes from the HTML
const WHY_TRY = [
  {
    icon: "🤔",
    title: "If you've ever wondered who you look like",
    desc: "This is your app. One upload could turn into your weirdest discovery of the week.",
  },
  {
    icon: "🗣️",
    title: "If people say you remind them of someone",
    desc: "Now you can check properly — without being matched to a random celebrity.",
  },
  {
    icon: "📱",
    title: "If your friends love weird internet finds",
    desc: "They'll want to try it after you. This is made for the group chat.",
  },
  {
    icon: "🙂",
    title: "If you think nobody looks like you",
    desc: "That's exactly why this gets interesting.",
  },
];

// "No reason needed" copy points — same layout as the previous safety features
const REASONS = [
  {
    icon: "/person-icon.png",
    width: 18,
    height: 28,
    title: "You're talking to a real person",
    desc: "Every account goes through live selfie verification before they can match with anyone.",
  },
  {
    icon: "/lock-icon.png",
    width: 18,
    height: 28,
    title: "Your face data stays yours",
    desc: "Encrypted, never stored as raw images, and never sold. Full stop.",
  },
  {
    icon: "/eye-icon.png",
    width: 18,
    height: 28,
    title: "You decide who sees you",
    desc: "Control your visibility, who can find you, and what you share all from one place.",
  },
  {
    icon: "/flag-icon.png",
    width: 24,
    height: 25,
    title: "Something feels off? One tap.",
    desc: "Flag, block, report and an actual moderation team reviews it around the clock.",
  },
];

// Verify step animation — reused for the "upload → scan → discover" flow
const FLOW_STEPS = [
  { label: "Upload selfie", icon: "📸", done: true },
  { label: "AI scans details", icon: "🧠", done: true },
  { label: "Real match found", icon: "✨", done: true },
];

export default function ProblemsAnimation() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setStep((s) => (s + 1) % 4), 1600);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="flex justify-center w-full bg-white custom-shadow rounded-[32px] relative overflow-hidden pt-10 h-[525px]">
      <div className="w-[250px] h-[250px] rounded-full bg-[#408EE8] absolute top-[-20%] right-[-20%] blur-[100px]" />
      <div className="w-[250px] h-[250px] rounded-full bg-[#5E51C9] absolute bottom-[-20%] left-[-20%] blur-[100px]" />
      <div className="relative flex flex-col items-center justify-center gap-6">
        {/* Center face */}
        <div className="relative w-52 h-52">
          <img
            src="https://images.unsplash.com/photo-1590086782792-42dd2350140d?w=250&h=250&fit=crop&auto=format"
            alt="Real-person match"
            className="w-full h-full rounded-full object-cover"
            style={{
              border: "3px solid rgba(94,81,201,0.25)",
              boxShadow:
                "0 0 0 10px rgba(94,81,201,0.06), 0 12px 40px rgba(94,81,201,0.18)",
            }}
          />
          {step < 3 && (
            <motion.div
              className="absolute left-0 right-0 h-[2px] pointer-events-none rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(94,81,201,0.7), rgba(64,142,232,0.7), transparent)",
              }}
              animate={{ top: ["10%", "88%", "10%"] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          )}
          <motion.div
            className="absolute -inset-4 rounded-full"
            style={{ border: "1.5px solid rgba(94,81,201,0.2)" }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          {step >= 2 && (
            <motion.div
              className="absolute bottom-2 right-2 w-12 h-12 rounded-full flex items-center justify-center"
              style={{
                backgroundImage: GRAD,
                boxShadow: "0 4px 18px rgba(94,81,201,0.45)",
              }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
                <path
                  d="M1.5 7L6.5 12L16.5 2"
                  stroke="white"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          )}
        </div>

        {/* Step pipeline dots */}
        <div className="flex items-center gap-3">
          {FLOW_STEPS.map((vs, i) => (
            <div key={vs.label} className="flex items-center gap-3">
              <div className="flex flex-col items-center gap-1.5">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-sm"
                  style={
                    step > i
                      ? {
                          backgroundImage: GRAD,
                          boxShadow: "0 4px 12px rgba(94,81,201,0.4)",
                        }
                      : GLASS_SM
                  }
                >
                  {step > i ? (
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                      <path
                        d="M1 5L4.5 8.5L13 1"
                        stroke="white"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <span style={{ fontSize: "0.9rem" }}>{vs.icon}</span>
                  )}
                </div>
                <p
                  style={{
                    fontSize: "0.6rem",
                    color: step > i ? C_PURPLE : C_MUTED,
                    fontWeight: step > i ? 700 : 400,
                    textAlign: "center",
                    maxWidth: 60,
                  }}
                >
                  {vs.label}
                </p>
              </div>
              {i < FLOW_STEPS.length - 1 && (
                <div
                  className="w-6 h-px mb-4"
                  style={{
                    backgroundImage: step > i ? GRAD : undefined,
                    background: step <= i ? "rgba(94,81,201,0.2)" : undefined,
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Status pill */}
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            className="px-5 py-2.5 rounded-full text-sm"
            style={{
              ...GLASS_SM,
              fontWeight: 700,
              color: step >= 3 ? C_GREEN : C_PURPLE,
            }}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
          >
            {step === 0 && "📸 Upload your selfie..."}
            {step === 1 && "🧠 Scanning the details..."}
            {step === 2 && "✨ Finding real matches..."}
            {step >= 3 && "✓ Real match found!"}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
