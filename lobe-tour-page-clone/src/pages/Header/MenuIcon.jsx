import React from "react";

export default function MenuIcon({ status, setStatus }) {
  return (
    <div
      className="relative p-5 bg-gray-200 rounded-full"
      onClick={() =>
        setStatus((prev) => {
          return !prev;
        })
      }
    >
      <span
        className={`${
          status ? "rotate-45 translate-y-[8px]" : ""
        } top-[10px] left-2 h-1 w-6 bg-black absolute rounded-full transition-all`}
      ></span>
      <span
        className={`${
          status ? "w-0" : "w-6"
        } top-[18px] left-2 h-1 bg-black absolute rounded-full transition-all`}
      ></span>
      <span
        className={`${
          status ? "-rotate-45 -translate-y-[8px]" : ""
        } top-[26px] left-2 h-1 w-6 bg-black absolute rounded-full transition-all`}
      ></span>
    </div>
  );
}
