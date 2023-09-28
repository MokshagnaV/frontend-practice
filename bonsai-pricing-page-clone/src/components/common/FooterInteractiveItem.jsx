import React, { useState } from "react";

export default function FooterInteractiveItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="font-light">
      <button
        className=" text-slate-500 hover:text-black mb-1"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {item.title} <span className="text-3xl">⌄</span>
      </button>
      {item.children && (
        <div
          className={`${
            isOpen ? "h-full" : "h-0"
          } overflow-hidden flex flex-col pl-2 gap-2`}
        >
          {item.children.map((i) => (
            <a href="/#" key={i} className=" text-slate-500 hover:text-black ">
              {i}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
