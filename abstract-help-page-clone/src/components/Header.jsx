import React, { useState } from "react";
import Logo from "./logo.svg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header
      className="relative flex flex-row items-center 
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
        <div className="flex flex-row items-center xl:hidden cursor-pointer">
          <i
            className="bx bx-search text-3xl font-bold text-white hover:scale-125 transition-all"
            onClick={() => setIsSearchOpen(true)}
          ></i>
          {!isMenuOpen ? (
            <i
              className="bx bx-menu text-3xl font-bold text-white ml-3"
              onClick={() => setIsMenuOpen(true)}
            ></i>
          ) : (
            <i
              className="bx bx-x text-3xl font-extralight text-white ml-3"
              onClick={() => setIsMenuOpen(false)}
            ></i>
          )}
        </div>
        <div
          className={`max-xl:${
            isMenuOpen ? "flex" : "hidden"
          } max-xl:absolute max-xl:left-0 max-xl:-bottom-[10.6rem]
           max-xl:bg-black max-xl:w-full max-xl:p-5 max-xl:flex-col max-xl:items-center transition-all`}
        >
          <button
            className="text-2xl py-4 px-5 xl:rounded-lg xl:border xl:px-6 xl:py-2 transition-opacity 
            max-xl:mx-4 max-xl:border-b-[1px] max-xl:hover:opacity-50 max-xl:border-opacity-5"
          >
            Submit a request
          </button>
          <button
            className="text-2xl py-4 xl:rounded-lg xl:border xl:ml-4 xl:px-8 transition-opacity 
          xl:py-2 xl:transition-all xl:bg-blue xl:border-none xl:hover:bg-white xl:hover:text-black
          max-xl:hover:opacity-50 max-xl:mx-4"
          >
            Sign in
          </button>
        </div>
        <div
          className={`${
            isSearchOpen ? "" : "hidden"
          } absolute top-0 left-0 px-4 py-4 w-full bg-white`}
        >
          <div className="relative w-full flex justify-center items-center gap-2">
            <input
              type="search"
              placeholder="Search"
              className="w-full p-3 border-black border-[1px] rounded-md
               hover:border-blue focus-visible:border-blue outline-none
                transition-all ease-in-out text-xl text-black"
            />
            <i
              className="bx bx-x text-black font-bold text-2xl cursor-pointer"
              onClick={() => setIsSearchOpen(false)}
            ></i>
          </div>
        </div>
      </div>
    </header>
  );
}
