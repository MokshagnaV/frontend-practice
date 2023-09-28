import React, { useState } from "react";

export default function FAQItem({ data }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <div className="mx-[9%] text-grey">
      <div
        className="flex justify-between items-center group cursor-pointer"
        onClick={() => setIsDropdownOpen((prev) => !prev)}
      >
        <h4 className="mt-5 mb-2 text-2xl font-bold cursor-pointer group-hover:text-green">
          {data.question}
        </h4>
        <span
          className={`${
            isDropdownOpen ? "rotate-180" : ""
          } text-4xl group-hover:text-green transition-all`}
        >
          ⌄
        </span>
      </div>
      <div
        className={`${
          isDropdownOpen ? "h-full" : "h-0"
        } overflow-hidden transition-all`}
      >
        <p>{data.answer}</p>
      </div>
    </div>
  );
}
