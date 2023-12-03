import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BlogCard() {
  return (
    <div className="rounded-lg shadow-md p-4 mb-4 overflow-hidden border border-gray-600 cursor-pointer">
      <Link href="/">
        <div>
          <Image
            src={""}
            alt=""
            layout=""
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="p-2">
          <h2 className="text-xl font-semibold mb-2 overflow-ellipsis">
            Title of blog
          </h2>
          <p className="text-gray-600">Blog Description</p>
        </div>
      </Link>
    </div>
  );
}
