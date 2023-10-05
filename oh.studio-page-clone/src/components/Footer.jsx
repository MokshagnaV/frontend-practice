import React from "react";
import SpinIcon from "./spinIcon.svg";

export default function Footer() {
  return (
    <footer
      className="p-10 max-sm:pb-20 flex flex-col justify-center items-center 
    sm:flex-row sm:justify-between text-sm"
    >
      <div>
        <img src={SpinIcon} className="inline-block w-8" alt="icon" />
        <span>© Oli Harris 2023</span>
      </div>
      <div className="flex gap-4">
        <span className="hover:text-gray cursor-pointer">Twitter</span>
        <span className="hover:text-gray cursor-pointer">Linkedin</span>
        <span className="hover:text-gray cursor-pointer">Mail</span>
      </div>
    </footer>
  );
}
