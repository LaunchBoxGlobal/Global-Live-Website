import Link from "next/link";

// components/Careers/JobDetailsPage.jsx
export default function JobDetailsPage({ job, id }) {
  return (
    <div className="w-full pb-20">
      {/* Job Title */}
      {/* <h2 className="text-2xl font-semibold">{job?.name}</h2> */}

      <div className="w-full space-y-2">
        {/* Department */}
        {job?.department_id && (
          <p className="text-sm text-gray-600">
            Department: {job?.department_id[1]}
          </p>
        )}

        {/* Location */}
        {job?.address_id && (
          <p className="text-sm text-gray-600">
            Location: {job?.address_id[1]}
          </p>
        )}

        {/* Open Positions */}
        {job?.no_of_recruitment && (
          <p className="text-sm text-gray-600">
            Positions: {job?.no_of_recruitment}
          </p>
        )}
      </div>
      <div className="w-full mt-6">
        {/* Description (HTML from Odoo) */}
        <h2 className="text-2xl font-semibold">Description:</h2>
        <div
          className="prose prose-invert max-w-none mt-2"
          dangerouslySetInnerHTML={{
            __html: job.website_description || job.description || "",
          }}
        />
      </div>

      <div className="w-full mt-10">
        <Link
          href={`/careers/${id}/apply`}
          className="bg-[#F40E00] text-white px-5 lg:px-7 py-4 font-bold rounded-xl text-sm lg:text-[18px] 2xl:text-[25px] hover:bg-[#000] transition-all duration-300"
        >
          Apply Now
        </Link>
      </div>
    </div>
  );
}
