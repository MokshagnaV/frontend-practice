import React, { useState } from "react";
import Logo from "./logo.svg";
import smallLogo from "./small-logo.svg";
import menu from "./menu.svg";
import close from "./close.svg";
import Product from "./Product";
import Template from "./Template";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="bg-white px-10 w-full fixed top-0 z-30">
        <div className="max-container px-4 py-6 flex justify-between items-center">
          <a href="/frontend-practice/bonsai-pricing-page-clone">
            <img src={Logo} width={150} alt="logo" />
          </a>
          <nav
            className={`${
              menuOpen ? "max-xl:translate-x-0" : "max-xl:translate-x-full"
            } max-xl:absolute top-0 left-0 max-xl:bg-white  max-xl:pt-20 max-xl:px-8
          max-xl:h-screen max-xl:w-screen flex max-xl:flex-col transition-all items-center`}
          >
            <a href="/frontend-practice/bonsai-pricing-page-clone">
              <img
                className="xl:hidden absolute top-6 left-14"
                src={smallLogo}
                alt="small logo"
              />
            </a>
            <ul className="max-xl:w-full flex max-xl:flex-col xl:mr-9 font-light text-black">
              <li className="group xl:mr-10 opacity-70 hover:opacity-100 max-xl:py-4 max-xl:border-b-[1px] max-xl:border-grey">
                <Product />
              </li>
              <li className="group xl:mr-10 opacity-70 hover:opacity-100 max-xl:py-4 max-xl:border-b-[1px] max-xl:border-grey">
                <Template />
              </li>
              <li className="xl:mr-10 opacity-70 hover:opacity-100 max-xl:py-4 max-xl:border-b-[1px] max-xl:border-grey">
                <a href="/frontend-practice/bonsai-pricing-page-clone/#">
                  Pricing
                </a>
              </li>
              <li className="xl:mr-10 opacity-70 hover:opacity-100 max-xl:py-4 max-xl:border-b-[1px] max-xl:border-grey">
                <a href="/frontend-practice/bonsai-pricing-page-clone/#">
                  Reviews
                </a>
              </li>
            </ul>
            <div className="text-sm flex max-xl:flex-col max-xl:w-full max-xl:gap-4 text-center max-xl:mt-4 font-bold text-white">
              <a
                href="/frontend-practice/bonsai-pricing-page-clone/#"
                className="xl:ml-4 pt-3 pb-2 px-[22px] rounded border-green border-[1px] hover:bg-green text-green hover:text-white"
              >
                LOG IN
              </a>
              <a
                href="/frontend-practice/bonsai-pricing-page-clone/#"
                className="xl:ml-4 pt-3 pb-2 px-[27px] rounded bg-green bg-opacity-95 hover:bg-opacity-100"
              >
                START FREE
              </a>
            </div>
          </nav>
          <nav className="xl:hidden z-30">
            <div
              className="w-10 max-sm:w-8 cursor-pointer"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <img src={menuOpen ? close : menu} alt="menu" />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
