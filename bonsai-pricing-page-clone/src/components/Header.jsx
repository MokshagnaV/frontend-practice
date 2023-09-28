import React, { useState } from "react";
import Logo from "../logo.svg";
import menu from "../menu.svg";
import close from "../close.svg";
import { productData } from "../data";
import { templatesData } from "../data";
import placeholderIcon from "./placeholderIcon.svg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="xl:bg-white px-10">
      <div className="max-container px-4 py-6 flex justify-between items-center">
        <a href="/">
          <img src={Logo} width={150} alt="logo" />
        </a>
        <nav className="hidden xl:flex items-center">
          <ul className="flex mr-9 font-light text-black">
            <li className="group mr-10 opacity-70 hover:opacity-100">
              <div className="relative group/drop">
                <a href="/#" className="flex items-center gap-2 ">
                  Product <span className="group-hover:rotate-180">⌄</span>
                </a>
                <div
                  className="group-hover/drop:opacity-100 group-hover/drop:block hover:block hidden opacity-0 absolute w-[352px]
                 -left-40 top-full bg-white shadow-more transition-opacity"
                >
                  {productData.map((product, index) => {
                    const { children } = product;
                    return (
                      <div
                        key={index}
                        className="group/inner-drop hover:bg-slate-50 z-10"
                      >
                        <div
                          className={`relative group/inner ${
                            index === productData.length - 1
                              ? ""
                              : "border-b-[1px]"
                          } hover:border-white pt-10 mx-10 pb-10 cursor-pointer`}
                        >
                          <h2 className="text-2xl">{product.title}</h2>
                          <p>{product.description}</p>
                          {index === 0 && (
                            <span className="group-hover/inner:block hidden absolute top-[35%] -right-4 -rotate-90 text-4xl">
                              ⌄
                            </span>
                          )}
                          {/* Children accordion */}
                          {children && (
                            <div className="group-hover/inner-drop:opacity-100 opacity-0  transition-opacity absolute bg-white left-[114%] top-0 p-2 w-[640px] grid grid-cols-2">
                              {children.map((child, index) => (
                                <div
                                  key={index}
                                  className="w-80 py-2 px-5 flex flex-row hover:bg-slate-50 rounded-md"
                                >
                                  <div className="w-8">
                                    <img
                                      src={placeholderIcon}
                                      alt={child.title}
                                    />
                                  </div>
                                  <div className="ml-3">
                                    <h3 className="mb-2">{child.title}</h3>
                                    <p className="text-sm">
                                      {child.description}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </li>
            <li className="group mr-10 opacity-70 hover:opacity-100">
              <div className="relative group/drop">
                <a href="/#" className="flex items-center gap-2">
                  Templates <span className="group-hover:rotate-180 ">⌄</span>
                </a>
                <div
                  className="group-hover/drop:opacity-100 group-hover/drop:block hidden opacity-0 absolute bg-white 
                  py-2 top-full -left-[200%] shadow-more transition-opacity"
                >
                  {templatesData.map((template) => {
                    const { title, samples } = template;
                    return (
                      <div className=" group/inner" key={title}>
                        <div className="relative cursor-pointer py-5 px-11 flex hover:bg-slate-50 w-80">
                          <img src={placeholderIcon} alt="placeholder" />
                          <h3 className="ml-2 w-fit">{title}</h3>
                          <span className="group-hover/inner:block hidden absolute top-[18%] right-4 -rotate-90 text-4xl">
                            ⌄
                          </span>
                        </div>
                        <div
                          className="group-hover/inner:opacity-100 group-hover/inner:z-20 opacity-0 bg-white
                         absolute left-full top-0 w-[475px] pt-5 pb-11 px-11"
                        >
                          <h4 className="mb-6">Featured {title}</h4>
                          {samples.map((s) => (
                            <p
                              key={s}
                              className="py-7 px-8 mb-2 border-[1px] hover:scale-105 rounded shadow-sm hover:shadow-lg
                              cursor-pointer"
                            >
                              {s}
                            </p>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </li>
            <li className="mr-10 opacity-70 hover:opacity-100">
              <a href="/#">Pricing</a>
            </li>
            <li className="mr-10 opacity-70 hover:opacity-100">
              <a href="/#">Reviews</a>
            </li>
          </ul>
          <div className="text-sm font-bold text-white">
            <a
              href="/#"
              className="ml-4 pt-3 pb-2 px-[22px] rounded border-green border-[1px] hover:bg-green text-green hover:text-white"
            >
              LOG IN
            </a>
            <a
              href="/#"
              className="ml-4 pt-3 pb-2 px-[27px] rounded bg-green bg-opacity-95 hover:bg-opacity-100"
            >
              START FREE
            </a>
          </div>
        </nav>
        <nav className="xl:hidden">
          <div
            className="w-10 max-sm:w-8 cursor-pointer"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <img src={menuOpen ? close : menu} alt="menu" />
          </div>
        </nav>
      </div>
    </div>
  );
}
