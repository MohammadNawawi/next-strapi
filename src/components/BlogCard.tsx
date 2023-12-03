import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BlogCard({ blog }: any) {
  const imageUrl =
    "http://127.0.0.1:1337" + blog.attributes.Image.data.attributes.url;
  return (
    <div className="rounded-lg shadow-md p-4 mb-4 overflow-hidden border border-gray-600 cursor-pointer">
      <Link href={`/blog/${blog.id}`}>
        <div className="relative w-full">
          <Image
            src={imageUrl}
            alt=""
            layout=""
            width={500}
            height={500}
            className="rounded-lg h-40"
            priority
          />
        </div>
        <div className="p-2">
          <h2 className="text-xl font-semibold mb-2 overflow-ellipsis line-clamp-3">
            {blog.attributes.Title}
          </h2>
          <p className="text-gray-600 line-clamp-5">
            {blog.attributes.Description}
          </p>
        </div>
      </Link>
    </div>
  );
}
