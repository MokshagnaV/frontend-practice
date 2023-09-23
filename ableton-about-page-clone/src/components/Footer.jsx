import React from "react";
import Facebook from "../media/facebook.svg";
import Twitter from "../media/twitter.svg";
import Youtube from "../media/youtube.svg";
import Instagram from "../media/instagram.svg";
import Logo from "../media/logo.svg";

export default function Footer() {
  return (
    <footer className="border-t-[1px] p-[8.3vw] xl:text-xl">
      <div className="pb-7 xl:pb-16">
        <h1 className="text-4xl xl:text-6xl font-bold">Ableton</h1>
      </div>
      <div className="flex flex-col xl:flex-row-reverse">
        {/* newsletter Sign up */}
        <div className="pb-9 ">
          <div>
            <p className="font-bold ">Sign up to our newsletter</p>
            <p>
              Enter your email address to stay up to date with the latest
              offers, tutorials, downloads, surveys and more.
            </p>
            <form>
              <div className="flex pt-5">
                <input
                  className="bg-slate-300 px-6 py-1 w-full"
                  placeholder="Email Address"
                />
                <input
                  type="submit"
                  className="bg-blue text-white px-6 py-1"
                  value="Sign up"
                />
              </div>
            </form>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row xl:min-w-[60%]">
          {/* Socials */}
          <div className="pb-10 w-[50%]">
            <ul className="pb-2">
              <li>Register Live or Push ›</li>
              <li>About Ableton ›</li>
              <li>Jobs ›</li>
            </ul>
            <ul className="flex gap-2">
              <li>
                <a href="/#">
                  <img src={Facebook} className="w-10 bg-blue" alt="Facebook" />
                </a>
              </li>
              <li>
                <a href="/#">
                  <img src={Twitter} className="w-10 bg-blue" alt="Twitter" />
                </a>
              </li>
              <li>
                <a href="/#">
                  <img
                    src={Youtube}
                    className="w-10 bg-red-500"
                    alt="Youtube"
                  />
                </a>
              </li>
              <li>
                <a href="/#">
                  <img
                    src={Instagram}
                    className="w-10 bg-orange"
                    alt="instagram"
                  />
                </a>
              </li>
            </ul>
          </div>
          {/* Education */}
          <div className="pb-10 w-[50%]">
            <h3 className="font-bold">Education</h3>
            <ul>
              <li>
                <a href="/#">Offers for students and teachers ›</a>
              </li>
              <li>
                <a href="/#">Ableton for the Classroom ›</a>
              </li>
              <li>
                <a href="/#">Ableton for Colleges and Universities ›</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row">
        {/* Community */}
        <div className="pb-10 w-[30%]">
          <h3 className="font-bold">Community</h3>
          <ul>
            <li>
              <a href="/#">Find Ableton User Groups ›</a>
            </li>
            <li>
              <a href="/#">Find Certified Training ›</a>
            </li>
            <li>
              <a href="/#"> Become a Certified Trainer ›</a>
            </li>
          </ul>
        </div>
        {/* Location */}
        <div className="pb-10">
          <h3 className="font-bold">Language and Location</h3>
          <div className="flex gap-1 mt-2">
            <select name="language" className="font-bold py-1 pl-2 pr-12">
              <option value="eng">English</option>
              <option value="tel">Telugu</option>
              <option value="spa">Spanish</option>
            </select>
            <select name="Location" className="font-bold py-1 pl-2 pr-12">
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="bq">Bonaire, Sint Eustatius and Saba</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row justify-between text-sm">
        {/* contact */}
        <div className="pb-10">
          <ul className="flex flex-col xl:flex-row">
            <li className="font-bold mb-2 mr-4">
              <a href="/#">Contact Us</a>
            </li>
            <li className="font-bold mb-2 mr-4">
              <a href="/#">Press Resources</a>
            </li>
            <li className="font-bold mb-2 mr-4">
              <a href="/#">Legal Info</a>
            </li>
            <li className="font-bold mb-2 mr-4">
              <a href="/#">Privacy Policy</a>
            </li>
            <li className="font-bold mb-2 mr-4">
              <a href="/#">Cookie Settings</a>
            </li>
            <li className="font-bold mb-2 mr-4">
              <a href="/#">Imprint</a>
            </li>
          </ul>
        </div>
        {/* LOGO */}
        <div className="mt-20 flex xl:flex-row-reverse gap-3 font-bold">
          <img src={Logo} alt="logo" className="h-5" />
          <p>Made in Berlin</p>
          <p>
            Clone developed by{" "}
            <a href="https://www.github.com/mokshagnav">Mokshagna Vemula</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
