import React from "react";
import logo from "./min-logo.svg";

export default function Footer() {
  const footer = {
    Abstract: ["Start Trial", "Pricing", "Download"],
    Resources: ["Blog", "Help Center", "Release Notes", "Status"],
    Community: ["Twitter", "LinkedIn", "Facebook", "Dribbble", "Podcast"],
    Company: [
      "About Us",
      "Careers",
      "Legal",
      "Contact Us",
      "info@abstract.com",
    ],
  };
  return (
    <footer className="bg-black text-white px-5 pb-16">
      <div className="flex md:mx-20 flex-wrap relative pb-[12rem]">
        {Object.keys(footer).map((foo) => (
          <div key={foo} className="w-[50%] md:w-[25%]">
            <h4 className="text-2xl font-bold mt-14 mb-4">{foo}</h4>

            {footer[foo].map((item, index) => (
              <a href="/" key={index} className="block hover:underline">
                {item}
              </a>
            ))}
          </div>
        ))}
        <div className="absolute text-xl bottom-0 max-md:left-0 md:right-0">
          <img src={logo} alt="logo" className="h-8 my-5" />
          <p>© Copyright 2023</p>
          <p>Abstract Studio Design, Inc.</p>
          <p>All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
