// app/careers/[id]/page.jsx

import { fetchJobById } from "@/lib/odoo";
import JobDetailsPage from "@/components/Careers/JobDetailsPage";
import { notFound } from "next/navigation";

export default async function JobPage({ params }) {
  let job = null;

  try {
    job = await fetchJobById(params.id);
  } catch (err) {
    console.error("Failed to fetch job:", err);
  }

  if (!job) return notFound();

  return (
    <div className="w-full relative pt-36 2xl:pt-52 padding-x">
      <h1 className="text-3xl font-bold mb-8">Apply for {job.name}</h1>

      <JobDetailsPage job={job} id={params.id} />
    </div>
  );
}
