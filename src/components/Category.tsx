"use client";

import { useContext } from "react";
import { CategoryContext } from "@/context/CategoryContext";
import Image from "next/image";

export default function Category({ cat }: any) {
  const { category, changeCategory } = useContext(CategoryContext);
  return (
    <div
      className={`${
        cat.attributes.Title === category
          ? "text-black bg-white"
          : "bg-yellow-500"
      } p-4 rounded-xl shadow-md cursor-pointer`}
      onClick={() => changeCategory(cat.attributes.Title)}
    >
      {cat.attributes.Title}
    </div>
  );
}
