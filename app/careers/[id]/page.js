import { fetchJobById } from "@/lib/odoo";
import JobDetailsPage from "@/components/Careers/JobDetailsPage";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  let job = null;

  try {
    job = await fetchJobById(params.id);
  } catch (err) {
    console.error("Metadata fetch failed:", err);
  }

  if (!job) {
    return {
      title: "Job Not Found | Careers",
      description: "This job listing is no longer available.",
    };
  }

  // Strip HTML if description contains HTML
  const cleanDescription =
    job.website_description?.replace(/<[^>]+>/g, "").slice(0, 160) ||
    job.description?.slice(0, 160) ||
    `Apply for ${job.name}`;

  return {
    title: `${job.name} | Careers | LaunchBox Global`,
    description: cleanDescription,

    openGraph: {
      title: `${job.name} | Careers | LaunchBox Global`,
      description: cleanDescription,
      type: "website",
    },

    twitter: {
      card: "summary",
      title: `${job.name} | Careers | LaunchBox Global`,
      description: cleanDescription,
    },
  };
}

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
      {/* <h1 className="text-4xl font-bold">{job.name}</h1> */}

      <JobDetailsPage job={job} id={params.id} />
    </div>
  );
}
