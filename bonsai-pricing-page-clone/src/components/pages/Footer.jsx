import React from "react";
import { footerData } from "../../data";
import FooterInteractiveItem from "../common/FooterInteractiveItem";

export default function Footer() {
  const { PRODUCT, Pricing, Templates, BONSAI, Comparisons } = footerData;
  return (
    <footer>
      <div className="max-container px-[5%] xl:px-[16%] py-24 flex flex-col justify-between sm:flex-row ">
        <div className="xl:w-[30%] max-xl:mb-10">
          {/* Products */}
          <div>
            <h5 className="mb-10">PRODUCT</h5>
            <div className="flex flex-col gap-2 mb-6">
              {PRODUCT.map((p) => (
                <a
                  href="/frontend-practice/bonsai-pricing-page-clone/#"
                  key={p}
                  className="text-slate-500 hover:text-black font-light"
                >
                  {p}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h5 className="text-green font-light mb-2">Pricing</h5>
            <a
              href="/frontend-practice/bonsai-pricing-page-clone/#"
              className=" text-slate-500 hover:text-black font-light"
            >
              {Pricing}
            </a>
          </div>
        </div>
        <div className="xl:w-[30%] max-xl:mb-10">
          {/* Free resources */}
          <div>
            <h5 className="mb-10">FREE RESOURCES</h5>
            <div className="flex flex-col gap-2 mb-6">
              {footerData["FREE RESOURCES"].map((p, index) => (
                <a
                  href="/frontend-practice/bonsai-pricing-page-clone/#"
                  key={index}
                  className={`text-slate-500 hover:text-black font-light ${
                    index === 3 && " mb-6"
                  }`}
                >
                  {p}
                </a>
              ))}
            </div>
          </div>
          {/* Templates */}
          <div>
            <h5 className="mb-3">Templates</h5>
            <div className="flex flex-col mb-6 font-light">
              {Templates.map((p, index) => (
                <FooterInteractiveItem key={index} item={p} />
              ))}
            </div>
          </div>
        </div>
        <div className="xl:w-[30%] max-xl:mb-10">
          {/* Bonsai */}
          <div>
            <h5 className="mb-10">BONSAI</h5>
            <div className="flex flex-col gap-2 mb-6">
              {BONSAI.map((p) => (
                <a
                  href="/frontend-practice/bonsai-pricing-page-clone/#"
                  key={p}
                  className="text-slate-500 hover:text-black font-light"
                >
                  {p}
                </a>
              ))}
            </div>
          </div>
          {/* comparisons */}
          <FooterInteractiveItem
            item={{ title: "Comparisons", children: Comparisons }}
          />
        </div>
      </div>
      <p className="py-5 text-center font-normal">
        Clone developed by{" "}
        <a
          href="https://www.github.com/mokshagnav"
          className="hover:underline font-bold"
        >
          Mokshagna Vemula
        </a>
      </p>
    </footer>
  );
}
