import React, { useState } from "react";
import discount from "../discount.svg";
import Switch from "../Switch";
import PlanCard from "../PlanCard";
import { plansData, addonsData, faqData } from "../../data";
import FAQItem from "../common/FAQItem";

export default function Main() {
  const [planSwitch, setPlanSwitch] = useState(false);
  const handleCheck = (e) => {
    setPlanSwitch(e.target.checked);
  };

  return (
    <main className="overflow-hidden">
      <div className="relative xl:pt-28 xl:pb-10 px-10 text-grey">
        <div className="absolute -top-[88%] -r-[23%] rotate-[-23deg] w-[90%] h-[120%] bg-blue-50 -z-10" />
        {/* Plan Switch */}
        <div className="max-container">
          <div className="max-w-[36rem] flex flex-col sm:flex-row justify-between mt-5 m-auto">
            {/* Plan and pricing heading */}
            <div>
              <h2 className="text-3xl sm:text-[2.5rem]">Plans & Pricing</h2>
            </div>
            {/* switch */}
            <div className="relative max-sm:w-full max-sm:mt-10 flex gap-5 items-center justify-end">
              <span
                className={`${
                  planSwitch ? "opacity-70" : "opacity-100"
                } uppercase`}
              >
                Monthly
              </span>
              <Switch handleCheck={handleCheck} />
              <span
                className={`${
                  planSwitch ? "opacity-100" : "opacity-70"
                } uppercase`}
              >
                Yearly
              </span>
              <img
                className="absolute -right-5 -top-7"
                src={discount}
                alt="discount"
              />
            </div>
          </div>
        </div>
        {/* Plans */}
        <div className="max-container pt-10 flex max-xl:flex-col flex-wrap justify-between">
          {plansData.map((plan, index) => (
            <PlanCard
              key={index}
              customStyle=" xl:w-[32%] "
              data={plan}
              period={planSwitch ? "year" : "month"}
            />
          ))}
        </div>
        {/* Add ons */}
        <div className="max-container mt-20">
          <h2 className="text-4xl text-center mt-5 mb-10">
            Super charge your work with add-ons
          </h2>
          <div
            className={`flex ${planSwitch ? "flex-col-reverse" : "flex-col"} `}
          >
            {addonsData.map((addon) => {
              const key = planSwitch ? "year" : "month";
              const { title, description, price } = addon[key];
              return (
                <div
                  key={title}
                  className={`px-10 pt-5 pb-2 mb-3 shadow-md rounded-2xl flex flex-row-reverse justify-between items-center`}
                >
                  <div className="flex flex-col py-9 w-[20%] text-center">
                    <span className="text-4xl font-bold">{price}</span>
                    {price !== "Free" && (
                      <span className="text-sm">
                        /{planSwitch ? "YEAR" : "MONTH"}
                      </span>
                    )}
                  </div>
                  <div>
                    <h4 className="font-bold text-2xl">{title}</h4>
                    <p className="font-light">{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* slogan */}
      <div className="max-container mx-5 py-10">
        <div className=" flex flex-col justify-between items-center py-16 px-12 bg-blue-50 rounded-lg max-w-[58rem] m-auto">
          <div className=" w-[70%] max-sm:text-center text-grey mb-5">
            <p className="text-4xl sm:text-[2.75rem] ">
              It's <span className="text-green">your</span> business.
            </p>
            <p className="text-4xl sm:text-[2.75rem]">
              We're here to help it grow.
            </p>
          </div>
          <button className="bg-green hover:bg-opacity-80 tracking-wider px-6 pt-[15px] pb-[13px] text-white text-sm rounded">
            START FREE
          </button>
        </div>
      </div>
      {/* FAQs */}
      <div className="max-container py-10">
        <div className=" max-w-[58rem] m-auto">
          <h3 className="font-bold text-green text-3xl text-center mt-5 mb-2">
            Frequently Asked Questions
          </h3>
          {faqData.map((faq, index) => (
            <FAQItem data={faq} key={index} />
          ))}
        </div>
      </div>
    </main>
  );
}
