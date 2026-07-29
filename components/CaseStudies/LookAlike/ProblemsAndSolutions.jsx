import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import ProblemsAnimation from "./ProblemsAnimation";

const ProblemsAndSolutions = () => {
  return (
    <section className="w-full padding-x relative">
      {/* Header */}
      <div className="mb-14 relative z-10 text-center">
        <h2 className="section-heading z-10 mb-5">
          Problems & <span className="lookalike-gradient-text">Solutions</span>
        </h2>
      </div>

      <div className="w-full flex items-center gap-4">
        <div className="lookalike-gradient text-white min-w-[109px] whitespace-nowrap px-4 py-2 rounded-full">
          Mobile App
        </div>

        <div className="w-full border border-indigo-100" />
      </div>

      {/* problems & solutions */}
      <div className="w-full mt-12 grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-10">
        <ProblemsAnimation />

        {/* content */}
        <div className="">
          <div className="w-[56px] h-[56px] rounded-[16px] flex items-center justify-center shadow-xl shadow-black/20 lookalike-gradient">
            <Image
              src={"/case-studies/lookalike/face-icon.png"}
              alt="face icon"
              width={22}
              height={22}
            />
          </div>

          <div className="inline-flex items-center gap-1 bg-[#D4183D14] rounded-full py-1 px-3 mt-6">
            <div className="bg-[#D4183D] w-2 h-2 rounded-full" />
            <span className="text-[#D4183D] text-sm font-bold">Problem</span>
          </div>

          <h3 className="text-[30px] font-bold leading-none my-4">
            Identity Verification Accuracy
          </h3>

          <p className="text-[#605F62] text-lg leading-[1.35]">
            Facial verification only works if it holds up against real-world
            conditions inconsistent lighting, blurry selfies, low-resolution
            images, and awkward angles — all of which degrade matching accuracy.
            There was also the risk of spoofing, someone holding up a photo of a
            photo to bypass verification.
          </p>

          <div className="w-full bg-white custom-shadow border border-[#5E51C924] rounded-[26px] p-6 mt-7">
            <div className="flex items-center gap-2">
              <Image
                src={"/case-studies/lookalike/right-arrow.png"}
                alt="right-arrow"
                width={15}
                height={15}
                className="object-contain"
              />
              <span className="text-[#5E51C9] text-sm font-bold">Solution</span>
            </div>

            <h4 className="text-base md:text-lg leading-none font-bold my-2">
              A Layered Verification Pipeline
            </h4>

            <p className="text-sm text-[#6A7282]">
              We added a client-side pre-validation step that checks brightness,
              blur, and face positioning before an image is ever submitted,
              rejecting poor captures immediately. To prevent spoofing, we
              layered in basic liveness checks (prompted blinks or actions). On
              the matching side, we calibrated the confidence threshold across
              varied lighting and demographics — avoiding both false matches and
              unfair rejections.
            </p>
          </div>
        </div>
      </div>

      {/* problem 2 */}
      <div className="w-full mt-60 lg:mt-32 grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-12">
        {/* content */}
        <div className="order-2 lg:order-1">
          <div className="w-[56px] h-[56px] rounded-[16px] flex items-center justify-center shadow-xl shadow-black/20 lookalike-gradient">
            <Image
              src={"/case-studies/lookalike/cursor.png"}
              alt="cursor"
              width={22}
              height={22}
            />
          </div>

          <div className="inline-flex items-center gap-1 bg-[#D4183D14] rounded-full py-1 px-3 mt-6">
            <div className="bg-[#D4183D] w-2 h-2 rounded-full" />
            <span className="text-[#D4183D] text-sm font-bold">Problem</span>
          </div>

          <h3 className="text-[30px] font-bold leading-none my-4">
            Profile Discovery Flow
          </h3>

          <p className="text-[#605F62] text-lg leading-[1.35]">
            Users needed a way to browse and act on profiles that felt instant
            and familiar, without confusion about what liking, skipping, or a
            match actually meant.
          </p>

          <div className="w-full bg-white custom-shadow border border-[#5E51C924] rounded-[26px] p-6 mt-7">
            <div className="flex items-center gap-2">
              <Image
                src={"/case-studies/lookalike/right-arrow.png"}
                alt="right-arrow"
                width={15}
                height={15}
                className="object-contain"
              />
              <span className="text-[#5E51C9] text-sm font-bold">Solution</span>
            </div>

            <h4 className="text-base md:text-lg leading-none font-bold my-2">
              An Intuitive Browse & Match Experience
            </h4>

            <p className="text-sm text-[#6A7282]">
              We implemented a clear like/skip interaction with visual cues and
              smooth transitions, paired with lazy loading so profiles and media
              load progressively without lag — keeping browsing light even as
              the profile pool grows.
            </p>
          </div>
        </div>

        <div className="w-full flex items-end justify-center lg:justify-end order-1 lg:order-2 ">
          <div
            className="w-full max-w-[570px] relative min-h-[300px] rounde-[32px]"
            style={{
              backgroundImage:
                "url('/case-studies/lookalike/problems-box-background.svg')",
              backgroundPosition: "center",
              backgroundSize: "cover",
              borderRadius: "32px",
            }}
          >
            <Image
              src={
                "/case-studies/lookalike/lookalikematch-home-screen-mockup.png"
              }
              alt="lookalike match home screen mockup"
              width={339}
              height={451}
              className="object-contain absolute bottom-10 left-1/2 -translate-x-1/2 w-[330px] lg:w-auto"
            />
            {/* left image */}
            <Image
              src={"/case-studies/lookalike/profile-card-01.png"}
              alt="Emma profile card"
              width={235}
              height={261}
              className="object-contain absolute -top-20 -left-1 w-[130px] md:w-auto"
            />
            {/* right image */}
            <Image
              src={"/case-studies/lookalike/profile-card-02.png"}
              alt="Emma profile card"
              width={235}
              height={261}
              className="object-contain absolute -top-[50%] -right-1 w-[130px] md:w-auto"
            />
          </div>
        </div>
      </div>

      {/* problem 03 */}
      <div className="w-full mt-60 lg:mt-32 grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-12">
        <div className="w-full flex items-end justify-center lg:justify-end">
          <div
            className="w-full max-w-[570px] relative min-h-[300px] rounde-[32px]"
            style={{
              backgroundImage:
                "url('/case-studies/lookalike/problems-box-background.svg')",
              backgroundPosition: "center",
              backgroundSize: "cover",
              borderRadius: "32px",
            }}
          >
            <Image
              src={
                "/case-studies/lookalike/interaction-history-management-mockup.png"
              }
              alt="lookalike match  mockup"
              width={229}
              height={451}
              className="object-contain absolute bottom-10 left-1/2 -translate-x-1/2"
            />
            {/* left image */}
            <Image
              src={"/case-studies/lookalike/user-profile-card.png"}
              alt="Emma profile card"
              width={335}
              height={261}
              className="object-contain absolute left-1/2 -translate-x-1/2 z-10 top-10"
            />
          </div>
        </div>

        {/* content */}
        <div className="">
          <div className="w-[56px] h-[56px] rounded-[16px] flex items-center justify-center shadow-xl shadow-black/20 lookalike-gradient">
            <Image
              src={"/case-studies/lookalike/clock-icon.png"}
              alt="clock icon"
              width={22}
              height={22}
            />
          </div>

          <div className="inline-flex items-center gap-1 bg-[#D4183D14] rounded-full py-1 px-3 mt-6">
            <div className="bg-[#D4183D] w-2 h-2 rounded-full" />
            <span className="text-[#D4183D] text-sm font-bold">Problem</span>
          </div>

          <h3 className="text-[30px] font-bold leading-none my-4">
            Interaction History Management
          </h3>

          <p className="text-[#605F62] text-lg leading-[1.35]">
            Users needed to track who they liked, who liked them, and who they
            matched with — without the app feeling cluttered or hard to
            navigate.
          </p>

          <div className="w-full bg-white custom-shadow border border-[#5E51C924] rounded-[26px] p-6 mt-7">
            <div className="flex items-center gap-2">
              <Image
                src={"/case-studies/lookalike/right-arrow.png"}
                alt="right-arrow"
                width={15}
                height={15}
                className="object-contain"
              />
              <span className="text-[#5E51C9] text-sm font-bold">Solution</span>
            </div>

            <h4 className="text-base md:text-lg leading-none font-bold my-2">
              Structured Activity Tracking
            </h4>

            <p className="text-sm text-[#6A7282]">
              We built dedicated, real-time sections for Likes, Liked Me, and
              Matches, giving users an organised way to revisit and act on past
              interactions.
            </p>
          </div>
        </div>
      </div>

      {/* problem 4 */}
      <div className="w-full mt-44 lg:mt-32 grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-20">
        {/* content */}
        <div className="order-2 lg:order-1">
          <div className="w-[56px] h-[56px] rounded-[16px] flex items-center justify-center shadow-xl shadow-black/20 lookalike-gradient">
            <Image
              src={"/case-studies/lookalike/wallet-icon.png"}
              alt="wallet icon"
              width={22}
              height={22}
            />
          </div>

          <div className="inline-flex items-center gap-1 bg-[#D4183D14] rounded-full py-1 px-3 mt-6">
            <div className="bg-[#D4183D] w-2 h-2 rounded-full" />
            <span className="text-[#D4183D] text-sm font-bold">Problem</span>
          </div>

          <h3 className="text-[30px] font-bold leading-none my-4">
            Subscription-Based Access Control
          </h3>

          <p className="text-[#605F62] text-lg leading-[1.35]">
            Access to the app is subscription-gated from onboarding onward, and
            the flow needed to enforce that cleanly — without frustrating users
            mid-setup or leaving expired accounts in a broken state.
          </p>

          <div className="w-full bg-white custom-shadow border border-[#5E51C924] rounded-[26px] p-6 mt-7">
            <div className="flex items-center gap-2">
              <Image
                src={"/case-studies/lookalike/right-arrow.png"}
                alt="right-arrow"
                width={15}
                height={15}
                className="object-contain"
              />
              <span className="text-[#5E51C9] text-sm font-bold">Solution</span>
            </div>

            <h4 className="text-base md:text-lg leading-none font-bold my-2">
              Controlled Access Flow
            </h4>

            <p className="text-sm text-[#6A7282]">
              We built a subscription-first onboarding sequence with validation
              checks, ensuring only active subscribers complete setup, and
              automatically restricting all features the moment a subscription
              lapses.
            </p>
          </div>
        </div>

        <div className="w-full flex items-end justify-center lg:justify-end order-1 lg:order-2">
          <div
            className="w-full max-w-[570px] relative min-h-[300px] rounde-[32px]"
            style={{
              backgroundImage:
                "url('/case-studies/lookalike/problems-box-background.svg')",
              backgroundPosition: "center",
              backgroundSize: "cover",
              borderRadius: "32px",
            }}
          >
            <Image
              src={"/case-studies/lookalike/subscription-screen.png"}
              alt="lookalike match subscription screen"
              width={309}
              height={451}
              className="object-contain absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10 w-[240px] lg:w-auto"
            />
            {/* left image */}
            <Image
              src={"/case-studies/lookalike/app-store-subscription-mockup.png"}
              alt="Emma profile card"
              width={235}
              height={261}
              className="object-contain absolute -top-[35%] -left-1"
            />
            {/* right image */}
            <Image
              src={"/case-studies/lookalike/subscription-modal.png"}
              alt="subscription-modal"
              width={225}
              height={261}
              className="object-contain absolute top-2 -right-1"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsAndSolutions;
