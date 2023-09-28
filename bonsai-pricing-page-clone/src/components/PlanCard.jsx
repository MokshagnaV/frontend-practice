import React from "react";
import Tick from "./tick.svg";

export default function PlanCard({ data, period, customStyle }) {
  const { title, description, price, features, popular } = data;
  return (
    <div
      className={`relative px-[4%] py-[50px] flex flex-col xl:py-[6%] border-[1px] bg-white
      max-xl:mb-8 rounded ${customStyle}  overflow-hidden`}
    >
      {popular && (
        <div
          className="top-10 -right-16 rotate-45 text-md font-bold py-3 px-20 text-center
       bg-green text-white absolute"
        >
          MOST POPULAR
        </div>
      )}
      <h4 className="text-2xl font-bold ">{title}</h4>
      <p className="text-sm max-w-[75%]">{description}</p>
      <div className="mt-5 flex items-center border-b-green border-b-2 pb-1">
        <span className="text-[30px] self-start mr-2">$</span>
        <span className="text-[70px] leading-1 font-bold">{price[period]}</span>
        <span className="text-2xl self-end ml-4">/MONTH</span>
      </div>
      <div className="py-10 flex flex-col gap-4 flex-grow">
        {features.map((f) => (
          <div key={f} className="flex gap-2 items-center">
            <img src={Tick} alt="tick mark" width={12} />
            <p>{f}</p>
          </div>
        ))}
      </div>
      <button
        className="bg-green bg-opacity-90 hover:opacity-100 text-white 
      rounded-md w-full font-bold py-5 px-6 "
      >
        START FREE
      </button>
    </div>
  );
}
