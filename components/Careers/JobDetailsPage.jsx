import {
  MapPin,
  Users,
  Briefcase,
  Clock,
  Banknote,
  GraduationCap,
  Star,
  Megaphone,
} from "lucide-react";
import Link from "next/link";
import RecruitmentProcess from "./RecruitmentProcess";

export default function JobDetails({ job, id }) {
  return (
    <div className="min-h-screen">
      <main className="w-full">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-9">
          <div className="flex-1">
            <h1 className="text-[40px] md:text-[52px] font-extrabold text-[#f40e00] leading-[1.1] tracking-tight mb-6">
              {job.name}
            </h1>

            <div className="w-full max-w-[80%] flex flex-wrap gap-x-8 gap-y-4 text-[15px] font-medium text-gray-800">
              {job.address_id?.[1] && (
                <div className="flex items-center gap-2">
                  <MapPin
                    size={20}
                    className="text-[#f40e00]"
                    strokeWidth={2.5}
                  />
                  <span>{job.address_id[1]}</span>
                </div>
              )}

              {job.department_id?.[1] && (
                <div className="flex items-center gap-2">
                  <Users
                    size={20}
                    className="text-[#f40e00]"
                    strokeWidth={2.5}
                  />
                  <span>{job.department_id[1]}</span>
                </div>
              )}

              {job.x_studio_role_type && (
                <div className="flex items-center gap-2">
                  <Briefcase
                    size={20}
                    className="text-[#f40e00]"
                    strokeWidth={2.5}
                  />
                  <span>{job.x_studio_role_type}</span>
                </div>
              )}

              {job.x_studio_shift && (
                <div className="flex items-center gap-2">
                  <Clock
                    size={20}
                    className="text-[#f40e00]"
                    strokeWidth={2.5}
                  />
                  <span>{job.x_studio_shift}</span>
                </div>
              )}

              {(job.salary_min || job.salary_max) && (
                <div className="flex items-center gap-2">
                  <Banknote
                    size={20}
                    className="text-[#f40e00]"
                    strokeWidth={2.5}
                  />
                  <span>
                    Rs. {job.salary_min?.toLocaleString()} - Rs.{" "}
                    {job.salary_max?.toLocaleString()}
                  </span>
                </div>
              )}

              {job.expected_degree?.[1] && (
                <div className="flex items-center gap-2">
                  <GraduationCap
                    size={20}
                    className="text-[#f40e00]"
                    strokeWidth={2.5}
                  />
                  <span>{job.expected_degree[1]}</span>
                </div>
              )}

              {job.x_studio_experience_level && (
                <div className="flex items-center gap-2">
                  <Star
                    size={20}
                    className="text-[#f40e00]"
                    strokeWidth={2.5}
                  />
                  <span>{job.x_studio_experience_level}</span>
                </div>
              )}

              {job.no_of_recruitment && (
                <div className="flex items-center gap-2">
                  <Megaphone
                    size={20}
                    className="text-[#f40e00]"
                    strokeWidth={2.5}
                  />
                  <span>{job.no_of_recruitment} Opening(s)</span>
                </div>
              )}
            </div>
          </div>

          <Link
            href={`/careers/${id}/apply`}
            className="w-full lg:w-auto bg-[#f40e00] text-white px-10 py-3.5 rounded-[18px] font-bold text-lg transition-all shadow-[0_4px_14px_rgba(244,14,0,0.3)] hover:shadow-[0_6px_20px_rgba(244,14,0,0.4)] whitespace-nowrap shrink-0"
          >
            Apply Now
          </Link>
        </div>

        {/* Job Introduction */}
        <section className="mb-9 w-full max-w-[80%]">
          <div
            className="prose max-w-none [&_p]:text-lg [&_div]:text-lg"
            dangerouslySetInnerHTML={{
              __html: job.description,
            }}
          />
        </section>

        {/* Job Details */}
        <section className="mb-9">
          <div
            className="max-w-none text-gray-800
      [&_h4]:text-[28px]
      [&_h4]:font-bold
      [&_h4]:text-black
      [&_h4]:mb-2
      [&_h4]:mt-5

      [&_ul]:space-y-0
      [&_ul]:pl-6
      [&_ul]:list-disc
      [&_ul]:mb-8

      [&_li]:leading-8 [&_li]:text-lg 
      [&_li]:text-gray-700

      [&_p]:mb-4
      [&_p]:text-lg
      [&_p]:leading-8

      [&_strong]:font-semibold
      [&_strong]:text-black"
            dangerouslySetInnerHTML={{
              __html: job.x_studio_job_details,
            }}
          />
        </section>

        {/* Hiring Process */}
        <RecruitmentProcess job={job} />

        {/* Footer CTA */}
        <div className="mt-20 flex flex-col items-center pb-28">
          <h3 className="text-[32px] font-extrabold text-black mb-8 tracking-tight text-center">
            Ready to take the next step?
          </h3>

          <Link
            href={`/careers/${id}/apply`}
            className="bg-[#f40e00] text-white px-10 py-4 rounded-[18px] font-bold text-lg transition-all shadow-[0_4px_14px_rgba(244,14,0,0.3)] hover:shadow-[0_6px_20px_rgba(244,14,0,0.4)] hover:scale-105 active:scale-95"
          >
            Submit Your Application
          </Link>
        </div>
      </main>
    </div>
  );
}
