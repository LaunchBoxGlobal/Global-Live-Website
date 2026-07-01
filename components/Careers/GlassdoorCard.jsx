import Image from "next/image";
import Link from "next/link";
import React from "react";
import RatingStar from "./RatingStars";

const GlassdoorCard = () => {
  const rating = 4.8;
  return (
    <Link
      href="https://www.glassdoor.com/Overview/Working-at-LaunchBox-Global-EI_IE10675829.11,27.htm"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Check us out on Glassdoor"
    >
      <div className="max-w-max mx-auto bg-white custom-shadow rounded-[12px] mb-6 px-4 py-2">
        <div className="flex items-center gap-2">
          <Image
            src={"/glassdoor-logo.webp"}
            alt="glassdoor-icon-green"
            width={114}
            height={44}
            className="object-contain"
          />

          {/* <div className="h-8 border" /> */}

          <div className="mt-1 flex w-full justify-center gap-0">
            <RatingStar fillPercentage={(rating / 5) * 100} />
          </div>

          <span className="text-[22px] text-gray-900 font-bold">4.8</span>
        </div>
      </div>
    </Link>
  );
};

export default GlassdoorCard;
