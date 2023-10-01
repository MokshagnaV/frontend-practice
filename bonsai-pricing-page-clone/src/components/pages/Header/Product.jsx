import React from "react";
import { productData } from "../../../data";
import placeholderIcon from "./placeholderIcon.svg";

export default function Product() {
  return (
    <div className="relative group/drop">
      <a
        href="/frontend-practice/bonsai-pricing-page-clone/#"
        className="flex items-center gap-2 "
      >
        Product <span className="xl:group-hover:rotate-180">⌄</span>
      </a>
      <div
        className="xl:group-hover/drop:opacity-100 xl:group-hover/drop:block xl:hover:block hidden opacity-0 absolute w-[352px]
                   -left-40 top-full bg-white shadow-more transition-opacity z-20"
      >
        {productData.map((product, index) => {
          const { children } = product;
          return (
            <div key={index} className="group/inner-drop xl:hover:bg-slate-50">
              <div
                className={`relative group/inner ${
                  index === productData.length - 1 ? "" : "border-b-[1px]"
                } xl:hover:border-white pt-10 mx-10 pb-10 cursor-pointer`}
              >
                <h2 className="text-2xl">{product.title}</h2>
                <p>{product.description}</p>
                {index === 0 && (
                  <span className="xl:group-hover/inner:block hidden absolute top-[35%] -right-4 -rotate-90 text-4xl">
                    ⌄
                  </span>
                )}
                {/* Children accordion */}
                {children && (
                  <div className="xl:group-hover/inner-drop:opacity-100 opacity-0  transition-opacity absolute bg-white left-[114%] top-0 p-2 w-[640px] grid grid-cols-2">
                    {children.map((child, index) => (
                      <div
                        key={index}
                        className="w-80 py-2 px-5 flex flex-row xl:hover:bg-slate-50 rounded-md"
                      >
                        <div className="w-8">
                          <img src={placeholderIcon} alt={child.title} />
                        </div>
                        <div className="ml-3">
                          <h3 className="mb-2">{child.title}</h3>
                          <p className="text-sm">{child.description}</p>
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
  );
}
