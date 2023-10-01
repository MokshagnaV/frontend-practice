import React from "react";
import { templatesData } from "../../../data";
import placeholderIcon from "./placeholderIcon.svg";

export default function Template() {
  return (
    <div className="relative group/drop">
      <a
        href="/frontend-practice/bonsai-pricing-page-clone/#"
        className="flex items-center gap-2"
      >
        Templates <span className="xl:group-hover:rotate-180 ">⌄</span>
      </a>
      <div
        className="xl:group-hover/drop:opacity-100 xl:group-hover/drop:block hidden opacity-0 absolute bg-white
      py-2 top-full -left-[200%] shadow-more transition-opacity z-20"
      >
        {templatesData.map((template) => {
          const { title, samples } = template;
          return (
            <div className=" group/inner" key={title}>
              <div className="relative cursor-pointer py-5 px-11 flex xl:hover:bg-slate-50 w-80">
                <img src={placeholderIcon} alt="placeholder" />
                <h3 className="ml-2 w-fit">{title}</h3>
                <span className="xl:group-hover/inner:block hidden absolute top-[18%] right-4 -rotate-90 text-4xl">
                  ⌄
                </span>
              </div>
              <div
                className="xl:group-hover/inner:opacity-100 xl:group-hover/inner:z-20 opacity-0 bg-white
             absolute left-full top-0 w-[475px] pt-5 pb-11 px-11"
              >
                <h4 className="mb-6">Featured {title}</h4>
                {samples.map((s) => (
                  <p
                    key={s}
                    className="py-7 px-8 mb-2 border-[1px] xl:hover:scale-105 rounded shadow-sm xl:hover:shadow-lg
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
  );
}
