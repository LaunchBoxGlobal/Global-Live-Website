// app/careers/page.jsx

import { fetchJobs } from "@/lib/odoo";
import JobsList from "@/components/Careers/JobList";

export const metadata = {
  title: "Careers | LaunchBox Global",
  description: "Join the LaunchBox Global team. Explore our open positions.",
};

const LIMIT = 10;

export default async function CareersPage() {
  let initialJobs = [];
  let initialHasMore = false;
  let error = null;

  try {
    const jobs = await fetchJobs(0, LIMIT);
    initialJobs = jobs;
    initialHasMore = jobs.length === LIMIT;
  } catch (err) {
    error = err instanceof Error ? err.message : "Failed to load jobs";
  }

  return (
    <div className="w-full relative pt-36 2xl:pt-52 padding-x">
      {/* Hero */}
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

        {!error && initialJobs.length === 0 && (
          <div className="text-center py-24">
            <p className="text-xl font-semibold text-white mb-2">
              No open positions right now
            </p>
            <p className="text-gray-500 text-sm">
              Check back soon — we're always growing.
            </p>
          </div>
        )}

        {!error && initialJobs.length > 0 && (
          <JobsList initialJobs={initialJobs} initialHasMore={initialHasMore} />
        )}
      </div>
    </div>
  );
}
