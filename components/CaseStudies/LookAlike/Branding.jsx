import React from "react";
import { Heart, MessageSquare, Type, MousePointer2 } from "lucide-react";
import Image from "next/image";

const Branding = () => {
  return (
    <section className="w-full padding-x relative">
      {/* Header */}
      <div className="mb-12 relative z-10 text-start">
        <h2 className="section-heading z-10 mb-5">Branding</h2>
      </div>

      <div className="flex flex-col gap-6 relative z-10">
        {/* Top Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Logo Construction */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 custom-shadow flex flex-col">
            <h4 className="text-[12px] font-bold text-[#99A1AF] tracking-[0.2em] uppercase mb-6">
              Logo Construction
            </h4>
            <div className="mb-8 flex flex-col items-center justify-center pt-2 flex-1">
              {/* Empty placeholder box with blue background as requested */}
              <Image
                src="/case-studies/lookalike/lookalikematch-logo.svg"
                alt="LookalikeMatch logo"
                width={200}
                height={130}
                sizes="200px"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="text-lg text-[#6A7282] leading-[1.35] font-normal">
              The mark pairs a face-scan glyph with a soft rounded container
              security expressed through warmth, not hard edges.
            </p>
          </div>

          {/* Colour Palette */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 custom-shadow">
            <h4 className="text-[12px] font-bold text-[#99A1AF] tracking-[0.2em] uppercase mb-6">
              Colour Palette
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                {
                  name: "Primary",
                  hex: "#5E51C9",
                  desc: "Trust · Brand",
                  bg: "bg-[#5E51C9]",
                },
                {
                  name: "Accent",
                  hex: "#408EE8",
                  desc: "Connection",
                  bg: "bg-[#408EE8]",
                },
                {
                  name: "Ink",
                  hex: "#0A0A1A",
                  desc: "Typography",
                  bg: "bg-[#0A0A1A]",
                },
                {
                  name: "Mist",
                  hex: "#EEF0FF",
                  desc: "Surfaces",
                  bg: "bg-[#EEF0FF]",
                },
              ].map((color) => (
                <div key={color.name}>
                  <div
                    className={`w-full aspect-[4/3] rounded-[16px] ${color.bg} mb-4 shadow-sm border border-black/5`}
                  ></div>
                  <h4 className="text-[14px] font-bold text-gray-900 mb-1.5">
                    {color.name}
                  </h4>
                  <p className="text-[14px] text-[#99A1AF] font-normal mb-0.5">
                    {color.hex}
                  </p>
                  <p className="text-[14px] text-[#99A1AF]">{color.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Typography */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 custom-shadow flex flex-col h-full">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-10">
                <Type className="w-[14px] h-[14px] text-gray-400" />
                <h4 className="text-[12px] font-bold text-[#99A1AF] tracking-[0.2em] uppercase mb-6">
                  Typography — General Sans
                </h4>
              </div>

              <div className="mb-10">
                <h2 className="text-[84px] leading-none font-black text-[#1a1c29] tracking-tight mb-2">
                  Aa
                </h2>
                <p className="text-[12px] text-gray-400 font-medium tracking-[0.1em] uppercase">
                  ABCDEFGHIJKLM · abcdefghijklm · 0123456789
                </p>
              </div>
            </div>

            <div>
              <div className="w-full border border-gray-100 mb-6"></div>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <div className="text-[24px] font-bold text-[#1a1c29]">
                    <span className="font-black">Display</span>{" "}
                    <span className="font-black">· Black</span>
                  </div>
                  <div className="text-lg text-[#99A1AF] font-normal">
                    Headlines
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-lg text-[#1a1c29]">
                    <span className="font-bold">Semibold</span>{" "}
                    <span className="font-bold">· UI Labels</span>
                  </div>
                  <div className="text-lg text-[#99A1AF] font-normal">
                    Interface
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-lg text-[#4A5565]">
                    <span className="font-medium">Regular</span>{" "}
                    <span className="font-medium">
                      · Body copy for readable paragraphs
                    </span>
                  </div>
                  <div className="text-lg text-[#99A1AF] font-normal">Body</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Stack */}
          <div className="lg:col-span-5 flex flex-col gap-6 h-full">
            {/* Buttons & Components */}
            <div className="bg-white rounded-3xl p-8 custom-shadow flex-1 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-8">
                <MousePointer2 className="w-[16px] h-[16px] text-[#5E51C9]" />
                <h4 className="text-[12px] font-bold text-[#99A1AF] tracking-[0.2em] uppercase mt-0.5">
                  Buttons & Components
                </h4>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button className="bg-gradient-to-t from-[#408EE8] to-[#5E51C9] text-white px-5 py-2.5 rounded-[14px] text-[13px] font-semibold shadow-lg shadow-[#5E51C9]/25 hover:bg-[#4d42a8] transition-colors">
                  Primary
                </button>
                <button className="bg-[#EEF0FF] text-[#5E51C9] px-5 py-2.5 rounded-[14px] text-[13px] font-semibold hover:bg-[#e1e4fa] transition-colors">
                  Secondary
                </button>
                <button className="bg-white border border-[#e1e4fa] text-[#5E51C9] px-5 py-2.5 rounded-[14px] text-[13px] font-semibold shadow-sm hover:bg-gray-50 transition-colors">
                  Ghost
                </button>
                <button className="bg-gradient-to-t from-[#408EE8] to-[#5E51C9] text-white w-[38px] h-[38px] rounded-[14px] flex items-center justify-center shadow-lg shadow-[#5E51C9]/25 hover:bg-[#4d42a8] transition-colors">
                  <Heart className="w-[16px] h-[16px]" fill="currentColor" />
                </button>
                <button className="bg-[#EEF0FF] text-[#5E51C9] w-[38px] h-[38px] rounded-[14px] flex items-center justify-center hover:bg-[#e1e4fa] transition-colors">
                  <Image
                    src="/case-studies/lookalike/chat-icon.webp"
                    alt="Chat icon"
                    width={16}
                    height={16}
                    sizes="16px"
                    loading="lazy"
                    decoding="async"
                  />
                </button>
              </div>
            </div>

            {/* Match Percentage */}
            <div className="bg-gradient-to-t from-[#408EE8] to-[#5E51C9] rounded-[32px] p-8 text-white shadow-xl shadow-blue-900/10 flex-1 relative overflow-hidden flex flex-col justify-center">
              {/* Background flair */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>

              <h4 className="text-[12px] font-bold text-white/60 tracking-[0.2em] uppercase mb-8 relative z-10">
                Match Percentage · Face Recognition
              </h4>

              <div className="flex items-center gap-5 relative z-10">
                <div className="w-[72px] h-[72px] rounded-full border-[5px] border-white flex items-center justify-center shrink-0 shadow-lg shadow-black/10">
                  <span className="text-white font-bold text-[22px] tracking-tight">
                    95%
                  </span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-[18px] leading-tight mb-1">
                    Facial
                    <br />
                    Compatibility
                  </h3>
                  <p className="text-white/80 text-[13px] font-medium">
                    The signature metric
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#5E51C9] rounded-full w-[50vw] h-[50vw] blur-[500px] pointer-events-none opacity-70 absolute top-[20%] left-[-15%] z-0" />
    </section>
  );
};

export default Branding;
