"use client";
import React, { useState } from "react";

import BlogCard from "./BlogCard";
import BlogsContactForm from "../Common/BlogsContactForm";

const BlogsPage = ({ blogs, categories }) => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredBlogs =
    activeCategory === "all"
      ? blogs
      : blogs?.filter((blog) => blog.categories?.includes(activeCategory));

  return (
    <section className="w-full relative pt-36 2xl:pt-52 padding-x">
      <div className="w-full relative pt-10 flex flex-col items-center justify-start gap-5 lg:gap-3 bg-white">
        <h1 className="font-bold text-[8.5vw] md:text-[5.5vw] text-center tracking-normal leading-[1] w-full">
          Our Exclusive <span className="red-text">Blogs</span>
        </h1>
      </div>

      <div className="w-full flex flex-wrap justify-center items-center gap-3 mt-10">
        <button
          onClick={() => setActiveCategory("all")}
          className={`px-4 py-2 rounded-full border text-sm md:text-base transition-all ${
            activeCategory === "all"
              ? "bg-red-600 text-white border-red-600"
              : "border-gray-300 hover:bg-gray-100"
          }`}
        >
          All
        </button>

        {categories?.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-full border text-sm md:text-base transition-all ${
              activeCategory === cat.id
                ? "bg-red-600 text-white border-red-600"
                : "border-gray-300 hover:bg-gray-100"
            }`}
          >
            <span dangerouslySetInnerHTML={{ __html: cat.name }}></span>
          </button>
        ))}
      </div>
      <div className="w-full my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10">
        {filteredBlogs?.length ? (
          filteredBlogs.map((blog, i) => <BlogCard key={i} content={blog} />)
        ) : (
          <div className="col-span-full text-center text-gray-500">
            No blogs found for this category.
          </div>
        )}
      </div>

      <div className="w-full border hidden lg:block" />

      <div className="w-full py-10 lg:py-28">
        <BlogsContactForm />
      </div>
    </section>
  );
};

export default BlogsPage;
