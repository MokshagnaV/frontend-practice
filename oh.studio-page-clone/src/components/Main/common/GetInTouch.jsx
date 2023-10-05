import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function GetInTouch({ big }) {
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const children = entry.target.childNodes;
            children.forEach((child) => {
              console.log(child);
              child.classList.add("in-view");
            });
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        threshold: 0,
        rootMargin: "0px 0px 0px 0px",
      }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  });

  return (
    <div
      ref={ref}
      className={`${
        big
          ? "text-4xl md:text-5xl xl:text-7xl xl:leading-tight h-screen -my-[112px]"
          : "text-3xl sm:text-[38px] h-[40vh] sm:h-[30vh]"
      } flex flex-col justify-center align-center text-center sm:leading-tight p-5 sm:p-10`}
    >
      <p className="not-in-view">Let's work together.</p>
      <p className="text-gray not-in-view hover:text-opacity-70 cursor-pointer delay-200">
        <Link to="/#">Get in touch.</Link>
      </p>
    </div>
  );
}
