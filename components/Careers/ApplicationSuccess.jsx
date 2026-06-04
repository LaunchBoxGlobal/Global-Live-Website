import Link from "next/link";
import React from "react";
import { FiArrowUpLeft } from "react-icons/fi";

const ApplicationSuccess = ({ job }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-32 px-6 min-h-screen">
      <div className="w-28 h-28 rounded-full bg-[#F40E00]/20 border border-[#F40E00]/40 flex items-center justify-center mb-6">
        <svg
          className="w-14 h-14 text-[#F40E00]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <h2 className="text-4xl font-bold text-black mb-3">
        Application Submitted!
      </h2>
      <p className="text-gray-400 text-lg max-w-md mb-8">
        Thank you for applying for{" "}
        <span className="text-[#F40E00] font-medium">{job?.name}</span>. We'll
        review your application and get back to you soon.
      </p>
      <Link
        href="/careers"
        className="bg-[#f40e00] text-white px-10 py-3.5 rounded-[18px] font-bold text-lg transition-all shadow-[0_4px_14px_rgba(244,14,0,0.3)] hover:shadow-[0_6px_20px_rgba(244,14,0,0.4)] whitespace-nowrap shrink-0 flex items-center justify-center gap-2"
      >
        <FiArrowUpLeft size={22} className="-rotate-45" /> Back to Careers
      </Link>
    </div>
  );
};

export default ApplicationSuccess;
