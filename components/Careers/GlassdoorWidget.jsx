import Link from "next/link";
import RatingStar from "./RatingStars";
import Image from "next/image";

const GlassdoorWidget = ({ rating = 4.8, reviewCount = 64 }) => {
  return (
    <Link
      href="https://www.glassdoor.com/Overview/Working-at-LaunchBox-Global-EI_IE10675829.11,27.htm"
      target="_blank"
      rel="noopener noreferrer"
      className="group block w-fit outline-none"
    >
      <div className="rounded-[24px] custom-shadow bg-white p-8 transition-all duration-300 w-[320px]">
        <div className="w-full flex items-center justify-between gap-3">
          <Image
            src={"/glassdoor-logo.webp"}
            alt="glassdoor-icon-green"
            width={124}
            height={44}
            className="object-contain"
          />

          <span className="rounded-[6px] bg-[#0CAA4120] text-[#0CAA41] font-bold uppercase text-xs px-2 py-1 relative">
            Verified
          </span>
        </div>

        <div className="w-full flex flex-col items-start mt-8">
          <span className="text-sm font-semibold text-[#A3A3A3] uppercase">
            Rating at a Glance
          </span>

          <span className="text-4xl lg:text-5xl font-semibold text-[#000] leading-none">
            {rating.toFixed(1)}
          </span>
        </div>
        <div className="flex flex-col items-center">
          {/* Stars */}
          <div className="mt-4 flex w-full justify-start gap-0">
            {Array.from({ length: 5 }).map((_, index) => {
              let fill = 0;

              if (rating >= index + 1) {
                fill = 100;
              } else if (rating > index) {
                fill = (rating - index) * 100;
              }

              return <RatingStar key={index} fillPercentage={fill} />;
            })}
          </div>
          <div className="w-full border my-5" />
          <div className="w-full flex items-center justify-between gap-3">
            <div className="text-start">
              <p className="text-start text-[20px] lg:text-[24px] font-semibold text-gray-900 leading-none">
                {reviewCount} Reviews
              </p>
              <p className="text-sm font-normal text-[#A3A3A3]">
                Based on all-time data
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GlassdoorWidget;
