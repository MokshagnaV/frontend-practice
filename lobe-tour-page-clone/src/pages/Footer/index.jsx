import React from "react";
import logo from "../Header/logo.png";
import youtubeIcon from "./youtube.svg";
import twitterIcon from "./twitter.svg";
import redditIcon from "./reddit.svg";

export default function Footer() {
  return (
    <footer className="max-container overflow-hidden">
      <div className="pb-4 px-4 sm:pb-14 sm:px-20 xl:px-8 xl:pb-8 flex justify-center text-black">
        <div
          className="py-14 px-6 max-w-4xl xl:max-w-5xl sm:px-20 border-t border-black border-opacity-20 flex-1
        flex justify-center flex-row-reverse sm:justify-between flex-shrink-0 max-sm:flex-wrap"
        >
          <div className="flex justify-center max-sm:flex-wrap sm:justify-between flex-grow">
            <div className="px-4 max-sm:w-[50%] min-w-max max-sm:mb-16">
              <h5 className="font-bold mb-6 max-sm:text-center">About</h5>
              {["Download", "Overview", "Examples", "Blog"].map((ele) => (
                <p
                  key={ele}
                  className="mb-5 hover:scale-105 transition-all duration-300 cursor-pointer whitespace-nowrap max-sm:text-center"
                >
                  {ele}
                </p>
              ))}
            </div>
            <div className="px-4 max-sm:w-[50%] min-w-max max-sm:mb-16">
              <h5 className="font-bold mb-6 max-sm:text-center">General</h5>
              {["Notice", "License", "Press Inquiry", "Press Images"].map(
                (ele) => (
                  <p
                    key={ele}
                    className="mb-5 hover:scale-105 transition-all duration-300 cursor-pointer whitespace-nowrap max-sm:text-center"
                  >
                    {ele}
                  </p>
                )
              )}
            </div>
            <div className="px-4 max-sm:w-[50%] min-w-max max-sm:mb-16">
              <h5 className="font-bold mb-6 max-sm:text-center">Resources</h5>
              {["Help", "Tour", "Contact", "Privacy"].map((ele) => (
                <p
                  key={ele}
                  className="mb-5 hover:scale-105 transition-all duration-300 cursor-pointer whitespace-nowrap max-sm:text-center"
                >
                  {ele}
                </p>
              ))}
            </div>
            <div className="px-4 max-sm:w-[50%] min-w-max max-sm:mb-16 flex flex-col xl:flex-row max-sm:justify-center items-center xl:items-start ">
              {[
                { src: youtubeIcon, title: "Youtube" },
                { src: twitterIcon, title: "Twitter" },
                { src: redditIcon, title: "Reddit" },
              ].map((i) => (
                <a
                  key={i.title}
                  href="/frontend-practice/lobe-tour-page-clone/#"
                  className="rounded-full overflow-hidden w-10 h-10 m-2 flex justify-center items-center
                  hover:scale-105 transition-all duration-300"
                >
                  <img src={i.src} alt={i.title} />
                </a>
              ))}
            </div>
          </div>

          <div className="flex-grow">
            <div className="px-4">
              <img src={logo} alt="logo" className="w-24 mb-3 max-sm:m-auto" />
              {[
                "A product by Microsoft.",
                "All rights reserved.",
                "© Microsoft 2021",
              ].map((ele) => (
                <p
                  key={ele}
                  className="mb-5 hover:scale-105 transition-all duration-300 cursor-pointer whitespace-nowrap max-sm:text-center"
                >
                  {ele}
                </p>
              ))}
            </div>
          </div>
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
