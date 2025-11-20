import BlogsPage from "@/components/Blogs/BlogsPage";
import Loader from "@/components/Common/Loader";
import { BLOGS_METADATA } from "@/constants/blogs/blogsMetadata";
import { Suspense } from "react";

export const metadata = {
  title: "Explore Our Blog Archive | Latest Stories & Creative Ideas",
  description:
    "Browse our blog archive for practical advice, inspiring stories, and tips to grow your skills. Fresh content updated weekly!",
  alternates: { canonical: "https://launchboxglobal.com/blog" },
};

async function BlogsData() {
  const count = Object.keys(BLOGS_METADATA).length;

  const postsRes = await fetch(
    `https://public-api.wordpress.com/wp/v2/sites/blogs0864.wordpress.com/posts?_embed=author&per_page=${count}`,
    {
     next: { revalidate: 600 }, 
      headers: {
        Authorization:
          `Bearer DWK4UhkW*^@OACYDrZTCGF%nwYs!zk*Im3z0h1jVTllrTWh%92PHXq6OCCIKeJy2`,
      },
    }
  );

  const categoriesRes = await fetch(
    "https://public-api.wordpress.com/wp/v2/sites/blogs0864.wordpress.com/categories?per_page=100",
  next: { revalidate: 600 }, 
  );

  const blogs = await postsRes.json();
  const categories = await categoriesRes.json();

  return <BlogsPage blogs={blogs} categories={categories} />;
}

export default function Page() {
  return (
    <Suspense fallback={<div className="p-10 text-center"><Loader/></div>}>
      <BlogsData />
    </Suspense>
  );
}
