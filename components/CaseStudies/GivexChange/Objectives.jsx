import Image from "next/image";
import React from "react";

const Objectives = () => {
  return (
    <section className="w-full lg:h-[958px] relative mt-24 mx-auto max-w-[1286px] space-y-5 lg:space-y-0">
      <Image
        src={"/case-studies/givexchange/objectives-outer-circle.png"}
        alt="objectives-outer-circle"
        width={882}
        height={882}
        className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10 hidden lg:block"
      />
      <Image
        src={"/case-studies/givexchange/givexchange-logo.svg"}
        alt="givexchange-logo"
        width={260}
        height={158}
        className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10 hidden lg:block"
      />
      <Image
        src={"/case-studies/givexchange/objectives-gradient-circle.png"}
        alt="objectives-gradient-circle"
        width={505}
        height={505}
        className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10 hidden lg:block"
      />

      {/* card 1 top */}
      <div className="w-full max-w-[354px] min-h-[229px] bg-white rounded-[40px] static lg:absolute top-[-4%] lg:left-1/2 lg:-translate-x-1/2 z-20 custom-shadow flex flex-col items-start justify-center gap-3 p-8">
        <h3 className="text-[20px] font-bold leading-none">Simplified Flows</h3>
        <p className="text-lg font-normal leading-[1.2] text-[#212121]">
          Browsing, buying, and selling are designed to feel intuitive and
          seamless, allowing users to complete every step with ease and minimal
          friction.
        </p>
      </div>

      <div className="w-full max-w-[354px] min-h-[229px] bg-white rounded-[40px] static lg:absolute top-[30%] left-[-2%] z-20 custom-shadow flex flex-col items-start justify-center gap-3 p-8">
        <h3 className="text-[20px] font-bold leading-none">
          Secure & Trusted Experience{" "}
        </h3>
        <p className="text-lg font-normal leading-[1.2] text-[#212121]">
          Robust security measures and reliable systems create a safe,
          trustworthy environment for users to transact with confidence.
        </p>
      </div>

      <div className="w-full max-w-[354px] min-h-[229px] bg-white rounded-[40px] static lg:absolute top-[30%] right-[-2%] z-20 custom-shadow flex flex-col items-start justify-center gap-3 p-8">
        <h3 className="text-[20px] font-bold leading-none">
          Scalable & Future-Ready
        </h3>
        <p className="text-lg font-normal leading-[1.2] text-[#212121]">
          The platform is built to grow with the business, ensuring consistent
          performance and a high-quality experience as the ecosystem expands.
        </p>
      </div>

      <div className="w-full max-w-[354px] min-h-[229px] bg-white rounded-[40px] static lg:absolute bottom-[-1%] left-[12%] z-20 custom-shadow flex flex-col items-start justify-center gap-3 p-8">
        <h3 className="text-[20px] font-bold leading-none">
          Powerful Admin Controls
        </h3>
        <p className="text-lg font-normal leading-[1.2] text-[#212121]">
          Flexible admin tools make it easy to manage users, listings, and
          operations efficiently without adding complexity.
        </p>
      </div>
      <div className="w-full max-w-[354px] min-h-[229px] bg-white rounded-[40px] static lg:absolute bottom-[-1%] right-[12%] z-20 custom-shadow flex flex-col items-start justify-center gap-3 p-8">
        <h3 className="text-[20px] font-bold leading-none">
          Community-Driven Design
        </h3>
        <p className="text-lg font-normal leading-[1.2] text-[#212121]">
          The experience is built around real user needs, encouraging
          engagement, trust, and long-term participation across the platform.
        </p>
      </div>
    </section>
  );
};

export default Objectives;
