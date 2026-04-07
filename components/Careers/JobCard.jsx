import Link from "next/link";

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
    <Link href={`/careers/${job.id}`} className="w-full relative">
      <div className="flex items-start justify-between gap-4 border border-gray-100 p-5">
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-2">
            {dept && <span className="text-xs text-black">{dept}</span>}
            {dept && location && (
              <span className="text-xs text-white/20">·</span>
            )}
            {location && (
              <span className="text-xs text-gray-500">{location}</span>
            )}
            {job.no_of_recruitment > 0 && (
              <>
                <span className="text-xs text-white/20">·</span>
                <span className="text-xs text-gray-500">
                  {job.no_of_recruitment}{" "}
                  {job.no_of_recruitment === 1 ? "opening" : "openings"}
                </span>
              </>
            )}
          </div>

          <h2 className="text-lg font-semibold text-black transition-colors duration-200 mb-1">
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

        <span className="text-black text-sm mt-1 shrink-0 transition-colors">
          →
        </span>
      </div>
    </Link>
  );
}
