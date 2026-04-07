import React from "react";

const ApplicationSuccess = ({ job }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-32 px-6">
      <div className="w-16 h-16 rounded-full bg-[#F40E00]/20 border border-[#F40E00]/40 flex items-center justify-center mb-6">
        <svg
          className="w-8 h-8 text-[#F40E00]"
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
      <h2 className="text-2xl font-bold text-black mb-3">
        Application Submitted!
      </h2>
      <p className="text-gray-400 text-sm max-w-sm mb-8">
        Thank you for applying for{" "}
        <span className="text-[#F40E00] font-medium">{job?.name}</span>. We'll
        review your application and get back to you soon.
      </p>
      <Link
        href="/careers"
        className="inline-block transition-all ease-linear hover:shadow-[0px_0px_20px_0px_rgba(132,14,205,1)] bg-[#F40E00] shadow-[0px_0px_30px_0px_rgba(132,14,205,0.25)] text-white border-2 border-[#F40E00] px-8 py-3 rounded-full text-sm font-medium"
      >
        ← Back to Careers
      </Link>
    </div>
  );
};

export default ApplicationSuccess;
