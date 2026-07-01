import { fetchJobs, fetchDepartments } from "@/lib/odoo";
import CareersClient from "@/components/Careers/CareersClient";
import Image from "next/image";
import RatingStar from "@/components/Careers/RatingStars";
import Link from "next/link";
import GlassdoorWidget from "@/components/Careers/GlassdoorWidget";
import GlassdoorCard from "@/components/Careers/GlassdoorCard";

export const metadata = {
  title: "Careers | LaunchBox Global",
  description: "Join the LaunchBox Global team. Explore our open positions.",
};

const LIMIT = 10;

export default async function CareersPage() {
  let initialJobs = [];
  let initialHasMore = false;
  let departments = [];
  let error = null;

  try {
    const [jobs, depts] = await Promise.all([
      fetchJobs(0, LIMIT),
      fetchDepartments(),
    ]);

    initialJobs = jobs;
    initialHasMore = jobs.length === LIMIT;
    departments = depts;
  } catch (err) {
    error = err instanceof Error ? err.message : "Failed to load jobs";
  }

  return (
    <div className="w-full relative pt-36 2xl:pt-52 padding-x pb-20">
      {/* Glassdoor link & rating */}
      <GlassdoorCard />

      {/* heading */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mt-5 mb-4">
          Current Openings
        </h1>
        <p className="text-gray-400 md:w-[48%] w-full mx-auto text-xl leading-[1.3]">
          We're always looking for creative builders - from product designers to
          engineers and marketers.
        </p>
      </div>

      {/* Jobs */}
      <div className="relative z-10 mx-auto">
        {error && (
          <div className="w-full min-h-[80vh] pt-24">
            <div className="border border-red-500/20 bg-red-900/10 text-red-400 rounded-xl p-5 mb-8 text-sm">
              <span className="font-medium">Failed to load jobs — </span>
              {error}
            </div>
          </div>
        )}

        {!error && (
          <CareersClient
            initialJobs={initialJobs}
            initialHasMore={initialHasMore}
            departments={departments}
          />
        )}
      </div>
    </div>
  );
}
