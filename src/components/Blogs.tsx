"use client";
import React, { useContext } from "react";
import BlogCard from "./BlogCard";
import { CategoryContext } from "@/context/CategoryContext";

export default function Blogs({ blogs }: any) {
  const { category } = useContext(CategoryContext);
  const fileteredBlogs = blogs?.data?.filter((blog: any) => {
    return blog.attributes.categories.data.some(
      (cat: any) => cat.attributes.Title == category
    );
  });
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {/* {fileteredBlogs?.map((blog: any) => ( */}
      {blogs?.data?.map((blog: any) => (
        <div key={blog.id}>
          <BlogCard blog={blog} />
        </div>
      ))}
    </div>
  );
}
