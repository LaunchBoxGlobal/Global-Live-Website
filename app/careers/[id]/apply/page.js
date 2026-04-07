import { notFound } from "next/navigation";
import { fetchJobById } from "@/lib/odoo";
import JobApplicationForm from "@/components/Careers/JobApplicationForm";

export async function generateMetadata({ params }) {
  try {
    const { id } = await params;
    const job = await fetchJobById(id);
    if (!job) return { title: "Apply | LaunchBox Global" };
    return { title: `Apply for ${job.name} | LaunchBox Global` };
  } catch {
    return { title: "Apply | LaunchBox Global" };
  }
}

export default async function ApplyPage({ params }) {
  const { id } = await params;
  const job = await fetchJobById(id);

  if (!job) notFound();

  return (
    <div>
      <div className="relative z-10">
        <JobApplicationForm job={job} />
      </div>
    </div>
  );
}
