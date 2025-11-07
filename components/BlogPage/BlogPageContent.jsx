import BlogClient from "@/components/BlogPage/BlogClient";
import { notFound } from "next/navigation";

export default async function BlogPageContent({ slug }) {
  // Fetch main blog
  const blogRes = await fetch(
    `https://public-api.wordpress.com/wp/v2/sites/blogs0864.wordpress.com/posts?slug=${slug}&_embed=author`,
    {
      cache: "no-store",
      headers: {
        Authorization:
          `Bearer DWK4UhkW*^@OACYDrZTCGF%nwYs!zk*Im3z0h1jVTllrTWh%92PHXq6OCCIKeJy2`,
      },
    }
  );

  const blogData = await blogRes.json();
  const blog = blogData?.[0];

  if (!blog) notFound();

  const author = blog?._embedded?.author?.[0] || null;
  const blogDate = blog?.date;

  const htmlString = blog.content?.rendered || "";
  const headings = extractHeadingsFromHTML(htmlString);

  const [allBlogsRes, categoriesRes] = await Promise.all([
    fetch(
      "https://public-api.wordpress.com/wp/v2/sites/blogs0864.wordpress.com/posts"
    ),
    fetch(
      "https://public-api.wordpress.com/wp/v2/sites/blogs0864.wordpress.com/categories"
    ),
  ]);

  const allBlogs = await allBlogsRes.json();
  const categories = await categoriesRes.json();

  return (
    <BlogClient
      blog={blog}
      blogs={allBlogs}
      headings={headings}
      categories={categories}
      author={author}
      blogDate={blogDate}
      slug={slug}
    />
  );
}

function extractHeadingsFromHTML(html) {
  const headings = [];
  const h1Matches = [...html.matchAll(/<h1[^>]*>(.*?)<\/h1>/gi)];
  const h2Matches = [...html.matchAll(/<h2[^>]*>(.*?)<\/h2>/gi)];

  h1Matches.forEach((match) => headings.push(stripTags(match[1])));
  h2Matches.forEach((match) => headings.push(stripTags(match[1])));

  return headings;
}

function stripTags(str) {
  return str.replace(/<[^>]*>?/gm, "").trim();
}
