import React, { useState } from "react";

export default function FooterInteractiveItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="font-light">
      <button
        className=" text-slate-500 hover:text-black pb-2"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {item.title} {item.children && <span className="text-xl">⌄</span>}
      </button>
      {item.children && (
        <div
          className={`${
            isOpen ? `h-auto` : "h-0"
          } transition-all overflow-hidden pl-2`}
        >
          {item.children.map((i) => (
            <a
              href="/#"
              key={i}
              className="block mb-2 text-slate-500 hover:text-black "
            >
              {i}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
