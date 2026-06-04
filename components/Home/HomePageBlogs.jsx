"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Cursor from "../Blogs/Cursor";
import HomeBlogCardCursor from "./HomeBlogCardCursor";
// import Cursor from "../Global/Cursor";

const HomePageBlogs = () => {
  const [blogs, setBlogs] = useState(null);
  const [isCursorHovering, setIsCursorHovering] = useState(false);

  const fetchBlogs = async () => {
    try {
      const res = await fetch(
        `https://public-api.wordpress.com/wp/v2/sites/blogs0864.wordpress.com/posts`,
        { cache: "no-store" }, // or "force-cache" if you're okay with caching
      );

      if (res.ok) {
        let blogs = await res.json();
        // console.log("blogs >>>>", blogs?.slice(0, 5));
        setBlogs(blogs?.slice(0, 5));
      }
    } catch (error) {
      console.error("Error fetching category blogs:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <section
      className="w-full padding-x py-12 lg:py-28 bg-[#fff]"
      id="workflow"
    >
      <section
        className="w-full flex flex-col items-center justify-center gap-5"
        id="blogs"
      >
        <h2 className="section-heading lg:w-[70%] text-center">
          Discover What’s <br /> <span className="red-text">New and Next</span>
        </h2>
        <p className="section-paragraph text-center w-full md:w-2/3">
          Stay updated with the latest trends and find simple, practical guides
          to help boost your business growth and connect with your audience more
          effectively.
        </p>
      </section>

      <section className="w-full mt-12 grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Left Column (2 blogs) */}
        <div className="col-span-1 flex flex-col gap-4">
          {blogs?.slice(0, 2).map((blog, index) => (
            <div
              className="relative"
              key={index}
              onMouseEnter={() => setIsCursorHovering((prev) => !prev)}
              onMouseLeave={() => setIsCursorHovering((prev) => !prev)}
            >
              <Link href={`/blog/${blog?.slug}`}>
                <img
                  src={blog?.jetpack_featured_media_url}
                  alt=""
                  className="rounded-[7px]"
                />
              </Link>
            </div>
          ))}
          <HomeBlogCardCursor isHovering={isCursorHovering} />
        </div>

        {/* Center Column (1 blog) */}
        <div className="col-span-1 md:col-span-2 flex flex-col items-center justify-center h-full">
          {blogs?.slice(2, 3).map((blog, index) => (
            <div
              className="relative w-full h-full"
              key={index}
              onMouseEnter={() => setIsCursorHovering((prev) => !prev)}
              onMouseLeave={() => setIsCursorHovering((prev) => !prev)}
            >
              <Link href={`/blog/${blog?.slug}`}>
                <img
                  src={blog?.jetpack_featured_media_url}
                  alt=""
                  className="h-full object-cover w-full rounded-[7px]"
                />
              </Link>
            </div>
          ))}
          <HomeBlogCardCursor isHovering={isCursorHovering} />
        </div>

        {/* Right Column (2 blogs) */}
        <div className="col-span-1 flex flex-col gap-4">
          {blogs?.slice(3, 5).map((blog, index) => (
            <div
              className="relative"
              key={index}
              onMouseEnter={() => setIsCursorHovering((prev) => !prev)}
              onMouseLeave={() => setIsCursorHovering((prev) => !prev)}
            >
              <Link href={`/blog/${blog?.slug}`}>
                <img
                  src={blog?.jetpack_featured_media_url}
                  alt=""
                  className="rounded-[7px]"
                />
              </Link>
            </div>
          ))}
          <HomeBlogCardCursor isHovering={isCursorHovering} />
        </div>
      </section>

      <section className="w-full flex justify-center mt-10">
        <Link
          href={`/blog`}
          className="red-bg text-white px-8 py-4 rounded-xl font-bold text-xl"
        >
          See More
        </Link>
      </section>
    </section>
  );
};

export default HomePageBlogs;
