import React from "react";
import Logo from "./logo.svg";

export default function Header() {
  return (
    <header
      className="flex flex-row items-center 
     bg-black text-white text-xl font-[GT America Standard]"
    >
      <div className="flex flex-row items-center justify-between md:px-7 py-6 w-[97%] md:w-[90%] mx-auto">
        <div className="flex flex-row items-center gap-3">
          <a href="/">
            <img className="h-8 hover:opacity-80" src={Logo} alt="logo" />
          </a>
          <a
            className="border-l-white blue border-l-2 pl-3 text-2xl hover:underline"
            href="/"
          >
            Help Center
          </a>
        </div>
        <div className=" flex flex-row items-center xl:hidden cursor-pointer">
          <i className="bx bx-search text-3xl font-bold text-white hover:scale-125 transition-all"></i>
          <i className="bx bx-menu text-3xl font-bold text-white ml-3"></i>
        </div>
        <div className="max-xl:hidden">
          <button className="rounded-lg border px-6 py-2 text-2xl">
            Submit a request
          </button>
          <button
            className="rounded-lg border ml-4 px-8 py-2 text-2xl transition-all
          bg-blue border-none hover:bg-white hover:text-black"
          >
            Sign in
          </button>
        </div>
      </div>
    </header>
  );
}
