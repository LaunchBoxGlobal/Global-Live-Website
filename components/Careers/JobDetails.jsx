import React from "react";

const JobDetails = ({ dept, location, job }) => {
  return (
    <aside className="space-y-6">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">
          You're applying for
        </p>
        <h3 className="text-lg font-semibold text-black mb-4 leading-snug">
          {job.name}
        </h3>

        <div className="space-y-3 text-sm">
          {dept && <p className="text-[0000]">{dept}</p>}
          {location && <p className="text-gray-600">{location}</p>}
          {job.no_of_recruitment > 0 && (
            <p className="text-black">{job.no_of_recruitment} openings</p>
          )}
        </div>
      </div>
    </aside>
  );
};

export default JobDetails;
