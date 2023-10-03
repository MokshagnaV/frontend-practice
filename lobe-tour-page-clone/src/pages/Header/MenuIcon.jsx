import React from "react";
import { useState } from "react";

export default function MenuIcon({ setStatus }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="relative p-5 bg-gray-200 rounded-full"
      onClick={() =>
        setIsOpen((prev) => {
          setStatus(!prev);
          return !prev;
        })
      }
    >
      <span
        className={`${
          isOpen && "rotate-45 translate-y-[8px]"
        } top-[10px] left-2 h-1 w-6 bg-black absolute rounded-full transition-all`}
      ></span>
      <span
        className={`${
          isOpen && "w-0"
        } top-[18px] left-2 h-1 w-6 bg-black absolute rounded-full transition-all`}
      ></span>
      <span
        className={`${
          isOpen && "-rotate-45 -translate-y-[8px]"
        } top-[26px] left-2 h-1 w-6 bg-black absolute rounded-full transition-all`}
      ></span>
    </div>
  );
}
