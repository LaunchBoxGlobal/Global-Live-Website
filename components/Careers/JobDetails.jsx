import React, { useMemo } from "react";
import GlassdoorCard from "./GlassdoorCard";

const JobDetails = ({ dept, location, job }) => {
  const parsedJobDetails = useMemo(() => {
    if (!job?.job_details || typeof window === "undefined") {
      return {
        timeToAnswer: null,
        processSteps: [],
        offerTime: null,
      };
    }

    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(job.job_details, "text/html");

      const values = Array.from(doc.querySelectorAll("h6")).map((el) =>
        el.textContent?.trim(),
      );

      return {
        timeToAnswer: values[0] || null,
        processSteps: values.slice(1, -1),
        offerTime: values[values.length - 1] || null,
      };
    } catch {
      return {
        timeToAnswer: null,
        processSteps: [],
        offerTime: null,
      };
    }
  }, [job?.job_details]);

  return (
    <aside className="lg:sticky lg:top-32 h-fit">
      <div className="flex flex-col items-start">
        <GlassdoorCard />

        <div className="w-full space-y-5">
          <InfoItem label="Role" value={job?.name} />

          <InfoItem label="Location" value={"Karachi, Pakistan"} />

          <InfoItem label="Department" value={dept} />

          <InfoItem label="Experience" value={job?.x_studio_experience_level} />

          <InfoItem label="Shift" value={job?.x_studio_shift} />

          <InfoItem label="Role Type" value={job?.x_studio_role_type} />

          <InfoItem label="Education" value={job?.expected_degree?.[1]} />

          <InfoItem label="Open Positions" value={job?.no_of_recruitment} />

          {(job?.salary_min || job?.salary_max) && (
            <InfoItem
              label="Salary Range"
              value={`PKR ${job.salary_min?.toLocaleString() || 0} - PKR ${
                job.salary_max?.toLocaleString() || 0
              }`}
            />
          )}

          <hr className="border-gray-200 my-4" />

          {parsedJobDetails.timeToAnswer && (
            <InfoItem
              label="Time to Answer"
              value={parsedJobDetails.timeToAnswer}
            />
          )}

          {parsedJobDetails.processSteps.length > 0 && (
            <div>
              <p className="text-sm text-gray-500 mb-2">Process</p>

              <div className="space-y-1">
                {parsedJobDetails.processSteps.map((step, index) => (
                  <p key={index} className="font-semibold text-black">
                    {step}
                  </p>
                ))}
              </div>
            </div>
          )}

          {parsedJobDetails.offerTime && (
            <InfoItem
              label="Days to get an Offer"
              value={parsedJobDetails.offerTime}
            />
          )}
        </div>
      </div>
    </aside>
  );
};

const InfoItem = ({ label, value }) => {
  if (!value) return null;

  return (
    <div>
      <p className="text-sm text-gray-500 mb-1">{label}</p>

      <p className="font-semibold text-black">{value}</p>
    </div>
  );
};

export default JobDetails;
