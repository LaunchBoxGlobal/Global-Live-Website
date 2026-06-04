import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";

function stripHtml(html) {
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

export default function JobCard({ job }) {
  const dept = Array.isArray(job.department_id) ? job.department_id[1] : null;
  const location = Array.isArray(job.address_id) ? job.address_id[1] : null;
  const preview = job.x_studio_html_job_description
    ? stripHtml(job.x_studio_html_job_description)
    : job.description
      ? stripHtml(job.description)
      : "";

  return (
    <div className="flex items-start justify-between gap-4 p-5 lg:p-7 custom-shadow">
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-2">
          {dept && <span className="text-xs text-black">{dept}</span>}
          {dept && location && <span className="text-xs text-white/20">·</span>}
          {/* {location && ( */}
          <span className="text-xs text-black">Karachi, PK</span>
          {/* )} */}
          {job?.no_of_recruitment > 0 && (
            <>
              <span className="text-xs text-white/20">·</span>
              <span className="text-xs text-black">
                {job.no_of_recruitment}{" "}
                {job.no_of_recruitment === 1 ? "opening" : "openings"}
              </span>
            </>
          )}
        </div>

        <h2 className="text-2xl font-semibold text-black transition-colors duration-200 mb-1">
          {job.name}
        </h2>

        {preview && (
          // <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
          //   {preview}
          // </p>
          <p
            className="text-gray-500 text-sm leading-relaxed line-clamp-2"
            dangerouslySetInnerHTML={{ __html: preview }}
          />
        )}
      </div>

      <Link
        href={`/careers/${job?.id}`}
        className="text-sm mt-1 shrink-0 transition-colors red-bg w-9 h-9 rounded-full text-white flex items-center justify-center"
      >
        <LuArrowUpRight size={22} />
      </Link>
    </div>
  );
}
