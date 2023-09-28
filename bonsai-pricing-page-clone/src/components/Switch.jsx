import React from "react";

export default function Switch({ handleCheck }) {
  return (
    <label
      htmlFor="switch"
      className="inline-block cursor-pointer z-10 rounded-3xl relative w-12 h-7 bg-green p-1"
    >
      <input
        id="switch"
        type="checkbox"
        className="peer opacity-0 w-0 h-0"
        onInput={(e) => handleCheck(e)}
      />
      <span className="absolute top-[2px] left-[2px] rounded-full bg-white w-6 h-6 peer-checked:translate-x-5 transition-all"></span>
    </label>
  );
}
