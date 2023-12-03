import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <Link href="/">{"< Back"}</Link>
      <div className="relative w-full h-96 overflow-hidden rounded-lg mt-5">
        <Image src={""} alt="" layout="" objectFit="cover" />
      </div>
      <div className="mt-4">
        <h1 className="text-3xl font-semibold">{"Title of blog"}</h1>
        <p className="text-gray-600 mt-2">{"Blog Description"}</p>
        <div className="mt-4 flex items-center text-gray-400">
          <span className="text-sm">
            Published on {""}
            {"03-12-2023"}
          </span>
        </div>
      </div>
    </div>
  );
}