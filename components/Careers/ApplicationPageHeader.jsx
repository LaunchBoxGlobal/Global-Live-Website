import Link from "next/link";
import React from "react";
import { FiArrowLeft } from "react-icons/fi";

const ApplicationPageHeader = ({ jobId }) => {
  return (
    <div className="w-full">
      <div className="w-full mx-auto">
        <Link
          href={`/careers/${jobId}`}
          className="inline-flex items-center gap-1 text-sm text-gray-700 transition-colors duration-200"
        >
          <FiArrowLeft size={14} /> Job Description
        </Link>
      </div>

      <div className="w-full mx-auto pt-8 pb-6">
        <h1 className="text-3xl md:text-5xl font-bold text-black mt-5">
          Apply Now
        </h1>
        <p className="text-gray-500 text-sm lg:text-base leading-[1.2] mt-4 max-w-md">
          Complete the form below and we'll get back to you as soon as possible.
        </p>
      </div>
    </div>
  );
};

export default ApplicationPageHeader;
