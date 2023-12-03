import Image from "next/image";
import Category from "./Category";

export default function Categories() {
  return (
    <div className="flex gap-6 mb-8">
      <div>
        <Category />
      </div>
      <div>
        <Category />
      </div>
      <div>
        <Category />
      </div>
    </div>
  );
}
