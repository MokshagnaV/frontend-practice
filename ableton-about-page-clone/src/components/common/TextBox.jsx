import React from "react";

export default function TextBox({ children }) {
  return (
    <div className="mx-auto my-[8.3vw]  w-[90vw] sm:w-[70vw] md:max-w-[50vw]">
      {children}
    </div>
  );
}
