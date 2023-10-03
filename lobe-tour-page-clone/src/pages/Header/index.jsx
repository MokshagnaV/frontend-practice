import React from "react";
import Logo from "./logo.png";
import MenuIcon from "./MenuIcon";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="z-10 bg-white bg-opacity-80 backdrop-blur-lg fixed top-0 w-full">
      <div
        className={`${
          isOpen ? "max-md:h-[500px] max-md:pt-20" : "max-md:h-20"
        } overflow-hidden transition-all duration-500 max-container flex max-md:flex-col justify-between items-center px-5 xl:px-14 py-3`}
      >
        <a
          href="/frontend-practice/lobe-tour-page-clone"
          className={`z-20 max-md:absolute top-3 left-5`}
        >
          <img src={Logo} className="h-14" alt="logo" />
        </a>
        <button className="z-20 absolute top-[18px] right-5 md:hidden">
          <MenuIcon status={isOpen} setStatus={setIsOpen} />
        </button>
        <nav
          className={`${
            isOpen ? "max-md:opacity-100" : "max-md:opacity-0"
          } max-md:w-full translate-all duration-500`}
        >
          <ul
            className={`flex max-md:flex-col items-center gap-10 text-lg font-[500] text-grey max-md:pt-5 transition-all`}
          >
            <li className="w-full hover:scale-105 transition-all duration-300">
              <a
                href="/frontend-practice/lobe-tour-page-clone/#"
                className="hover:text-black"
              >
                Overview
              </a>
            </li>
            <li className="w-full hover:scale-105 transition-all duration-300">
              <a
                href="/frontend-practice/lobe-tour-page-clone/#"
                className="hover:text-black"
              >
                Examples
              </a>
            </li>
            <li className="w-full hover:scale-105 transition-all duration-300">
              <a
                href="/frontend-practice/lobe-tour-page-clone/#"
                className="hover:text-black text-black"
              >
                Tour
              </a>
            </li>
            <li className="w-full hover:scale-105 transition-all duration-300">
              <a
                href="/frontend-practice/lobe-tour-page-clone/#"
                className="hover:text-black"
              >
                Blog
              </a>
            </li>
            <li className="w-full hover:scale-105 transition-all duration-300">
              <a
                href="/frontend-practice/lobe-tour-page-clone/#"
                className="hover:text-black"
              >
                Help
              </a>
            </li>
          </ul>
        </nav>
        <div className="max-md:w-full max-md:py-8">
          <button
            className="text-xl text-white rounded-full py-[10px] px-4 bg-cyan font-bold
          hover:scale-105 transition-all duration-300 w-full"
          >
            Download
          </button>
        </div>
      </div>
    </header>
  );
}
