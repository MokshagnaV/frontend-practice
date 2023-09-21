import React from "react";
import images from "../assets";

export default function Main() {
  const categories = [
    {
      img: "Abstract",
      title: "Using Abstract",
      content:
        "Abstract lets you manage, version, and document your designs in one place.",
    },
    {
      img: "Account",
      title: "Manage your account",
      content:
        "Configure your account settings, such as your email, profile details, and password.",
    },
    {
      img: "Organization",
      title: "Manage organizations, teams, and projects",
      content:
        "Use Abstract organizations, teams, and projects to organize your people and your work.",
    },
    {
      img: "Billing",
      title: "Manage billing",
      content: "Change subscriptions and payment details.",
    },
    {
      img: "Security",
      title: "Authenticate to Abstract",
      content: "Set up and configure SSO, SCIM, and Just-in-Time provisioning.",
    },
    {
      img: "Support",
      title: "Abstract support",
      content: "Get in touch with a human.",
    },
  ];

  return (
    <main>
      <section className="bg-light_blue px-4 md:px-8 pt-20 pb-28">
        <div className="max-w-[720px] m-auto flex flex-col justify-center items-center">
          <h1 className="text-4xl max-sm:tracking-[-4px] sm:text-6xl md:text-7xl mb-10">
            How can we help?
          </h1>
          <div className="relative w-full">
            <form>
              <input
                type="search"
                placeholder="Search"
                className="w-full p-4 border-black border-[1px] rounded-md
                 hover:border-blue focus-visible:border-blue outline-none
                  transition-all ease-in-out text-2xl text-black"
              />
              <i className="bx bx-right-arrow-alt text-4xl absolute right-4 top-3"></i>
              <input type="submit" value="" className="hidden" />
            </form>
          </div>
        </div>
      </section>
      <section className="mt-5 py-40 px-5 flex justify-center">
        <div className="sm:mx-10 md:mx-28 md:grid md:grid-cols-2 gap-3 ">
          {categories.map((cat) => {
            return (
              <div>
                <div
                  key={cat.title}
                  className="grid grid-cols-4 place m-auto mb-10"
                >
                  <div>
                    <img
                      className="max-h-[90px] mt-5 sm:max-h-[100px] md:max-h-[120px] mr-8"
                      src={images[cat.img]}
                      alt={cat.title}
                    />
                  </div>
                  <div className="col-span-3 pl-4 flex flex-col gap-4">
                    <h3 className="text-2xl font-bold mt-4">{cat.title}</h3>
                    <p className="text-xl">{cat.content}</p>
                    <a
                      href="/"
                      className="text-xl text-blue hover:underline transition-all font-light"
                    >
                      Learn More →
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
