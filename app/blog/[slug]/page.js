import { Suspense } from "react";
import Script from "next/script";

import { BLOGS_METADATA } from "@/constants/blogs/blogsMetadata";
import BlogPageContent from "@/components/BlogPage/BlogPageContent";
import Loader from "@/components/Common/Loader";

export async function generateMetadata({ params }) {
  const res = await fetch(
    `https://public-api.wordpress.com/wp/v2/sites/blogs0864.wordpress.com/posts?slug=${params?.slug}`,
    { cache: "force-cache" }
  );

  const meta = BLOGS_METADATA[params?.slug] || {};
  const data = await res.json();
  const blog = data?.[0];

  if (!blog) {
    return {
      title: "Blog not found",
      description: "The requested blog does not exist.",
    };
  }

  return {
    title: meta?.title,
    description: meta?.description,
    alternates: { canonical: meta?.canonical },
  };
}

export default function Page({ params }) {
  const slug = params.slug;
  const meta = BLOGS_METADATA[slug] || {};

  return (
    <>
      {/* Schema injection */}
      {meta.schemas?.map((schema, i) => (
        <Script
          key={i}
          id={`schema-${i}`}
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}

      <Suspense fallback={<div className="p-10 text-center"><Loader/></div>}>
        <BlogPageContent slug={slug} />
      </Suspense>
    </>
  );
}
