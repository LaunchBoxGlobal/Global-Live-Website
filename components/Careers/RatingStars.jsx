import { Star } from "lucide-react";

const RatingStar = ({ fillPercentage }) => {
  return (
    <div className="relative h-4 w-4">
      {/* Background (empty) star */}
      <Star
        className="absolute left-0 top-0 h-4 w-4 fill-gray-300 text-gray-300"
        strokeWidth={2.5}
      />

      {/* Filled star, clipped to fillPercentage */}
      <div
        className="absolute left-0 top-0 h-4 w-4 overflow-hidden"
        style={{ width: `${fillPercentage}%` }}
      >
        <Star
          className="h-4 w-4 fill-[#00a264]/90 text-[#00a264]/90"
          strokeWidth={2.5}
        />
      </div>
    </div>
  );
};

export default RatingStar;
