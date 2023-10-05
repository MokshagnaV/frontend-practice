import React, { useEffect, useRef } from "react";
import GetInTouch from "./common/GetInTouch";
import { products } from "./data";
import arrow from "./arrow.svg";

export default function Home() {
  const heroRef = useRef();
  const productsRef = useRef();
  const shopRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0] && entries[0].isIntersecting) {
        const children = entries[0].target.childNodes;
        children.forEach((child) => {
          child.classList.add("in-view");
        });
        observer.unobserve(entries[0].target);
      }
      if (entries[1] && entries[1].isIntersecting) {
        entries[1].target.classList.add("in-view");
        observer.unobserve(entries[1].target);
      }
      if (entries[2] && entries[2].isIntersecting) {
        entries[2].target.classList.add("in-view");
        observer.unobserve(entries[1].target);
      }
    });
    observer.observe(heroRef.current);
    observer.observe(productsRef.current);
    observer.observe(shopRef.current);
    return () => observer.disconnect();
  });

  return (
    <>
      {/* Hero */}
      <div ref={heroRef} className="p-10 flex flex-col items-center gap-10">
        <h1 className="not-in-view text-center max-w-[600px] xl:max-w-[700px] text-4xl md:text-5xl xl:text-7xl md:leading-[57px] xl:leading-tight">
          A brand and product designer working with clients globally
        </h1>
        <ul className="not-in-view max-md:hidden text-sm flex gap-[10px] items-center delay-200">
          <li>Expertise</li>
          {["Branding", "Product", "Design Systems"].map((item) => (
            <li
              key={item}
              className="py-2 px-3 rounded-full bg-lightGray flex items-center justify-center leading-4"
            >
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* products */}
      <div
        ref={productsRef}
        className="not-in-view p-5 sm:p-10 grid grid-cols-1 md:grid-cols-2 gap-5 place-items-center delay-300"
      >
        {products.map((product, index) => (
          <div
            key={index}
            className="relative max-w-[670px] max-h-[540px] w-[90vw] h-[70vw] md:w-[46vw] md:h-[35vw] overflow-hidden 
            flex flex-col gap-2 rounded-xl cursor-pointer"
          >
            <img
              src={product.src}
              alt={product.title}
              className="w-full h-full object-cover object-center rounded-xl"
            />
            <div
              className="flex justify-between backdrop-blur-md pl-2 md:p-5 md:absolute top-0 md:opacity-0 w-full md:h-full
            md:hover:opacity-100 transition-all duration-300 group"
            >
              <h4 className="text-sm md:text-white">{product.title}</h4>
              <div
                className="max-md:hidden w-12 h-12 rounded-full md:bg-white flex justify-center items-center
               m-5 group-hover:m-0 transition-all duration-300"
              >
                <img src={arrow} alt="arrow" className="w-5" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* get in touch */}
      <GetInTouch />

      {/* Shop button */}
      <div
        ref={shopRef}
        className="delay-300 not-in-view fixed bottom-10 left-[47%] z-10 bg-black text-white flex items-center gap-2 rounded-full p-2 px-4 text-sm"
      >
        <div className="flex flex-col w-3 h-3 items-center justify-center">
          <span className="w-3 h-[1px] translate-y-[3px] bg-white rotate-90"></span>
          <span className="w-3 h-[1px] translate-y-[1px] bg-white -rotate-45"></span>
          <span className="w-3 h-[1px] bg-white"></span>
          <span className="w-3 h-[1px] bg-white rotate-45"></span>
        </div>
        <span>Shop</span>
      </div>
    </>
  );
}
