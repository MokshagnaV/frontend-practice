import React, { useState } from "react";
import Logo from "../media/logo.svg";

export default function Header() {
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isLongMoreOpen, setIsLongMoreOpen] = useState(false);
  // const [scrollUp, setScrollUp] = useState(false);
  // const [lastTop, setLastTop] = useState(0);
  // const navbar = useRef();

  // useEffect(() => {
  //   const checkScroll = () => {
  //     const currTop = window.scrollY || document.documentElement.scrollTop;
  //     if (lastTop < currTop) {
  //       setLastTop(currTop);
  //       setScrollUp(true);
  //     }else{
  //       setScrollUp(false);
  //     }
  //   };
  //   window.addEventListener("scroll", checkScroll);

  //   return window.removeEventListener("scroll", checkScroll);
  // }, [lastTop]);

  const moreMenu = {
    "More on Ableton.com: ": [
      "Blog",
      "Ableton for the Classroom",
      "Ableton for Colleges and Universities",
      "Certified Training",
      "About Ableton",
      "Jobs",
      "Apprenticeships",
    ],

    "More from Ableton: ": [
      {
        title: "Loop",
        content:
          "Watch Talks, Performances and Features from Ableton's Summit for Music Makers",
      },
      {
        title: "Learning Music",
        content:
          "Learn the fundamentals of music making right in your browser.",
      },

      {
        title: "Learning Synths",
        content:
          "Get started with synthesis using a web-based synth and accompanying lessons.",
      },
      {
        title: " Making Music",
        content:
          "Some tips from 74 Creative Strategies for Electronic Producers.",
      },
    ],
  };

  return (
    <header className="relative">
      <nav
        className={`${
          isLongMoreOpen ? "bg-blue text-white h-auto" : "max-xl:h-16"
        } py-5 max-sm:px-5 px-10  overflow-hidden transition-all`}
      >
        {/* Top visible nav in large screens */}
        <div className="flex w-full">
          <div className="max-xl:absolute flex gap-10">
            <a href="/">
              <img src={Logo} alt="logo" className="w-[60px]"></img>
            </a>
            <button
              className="xl:hidden font-bold"
              onClick={() => setIsLongMoreOpen((prev) => !prev)}
            >
              Menu {isLongMoreOpen ? "▴" : "▾"}
            </button>
          </div>
          <ul className="flex flex-col xl:flex-row max-xl:mt-12 xl:ml-10 gap-5 xl:gap-8 text-xl font-bold flex-1 ">
            <div className="flex flex-col xl:flex-row gap-5 xl:gap-8 flex-1">
              <li>
                <a href="/#">Live</a>
              </li>
              <li>
                <a href="/#">Push</a>
              </li>
              <li>
                <a href="/#">Note</a>
              </li>
              <li>
                <a href="/#">Link</a>
              </li>
              <li>
                <a href="/#">Shop</a>
              </li>
              <li>
                <a href="/#">Packs</a>
              </li>
              <li>
                <a href="/#">Help</a>
              </li>
              {/* More button for large screens */}
              <li className="text-orange max-xl:hidden">
                <button onClick={() => setIsMoreOpen((prev) => !prev)}>
                  <span>More {isMoreOpen ? "-" : "+"}</span>
                </button>
              </li>
            </div>
            <div className="flex flex-col xl:flex-row gap-5 xl:gap-8 xl:items-center">
              <li className="text-white xl:text-blue">
                <a href="/#">Try Live for free</a>
              </li>
              <li className="text-sm xl:text-base">
                <a href="/#">Log in or register</a>
              </li>
            </div>
          </ul>
        </div>
        {/* More menu */}
        <section
          className={`${
            isMoreOpen ? "xl:pt-12 xl:pb-16" : "xl:h-0"
          } overflow-hidden flex flex-col gap-6 xl:gap-10 transition-all`}
        >
          <div>
            <h3 className="text-xl xl:text-3xl font-bold mb-3">
              More on Ableton.com:{" "}
            </h3>
            <ul className="flex flex-col gap-3 xl:flex-row xl:gap-8 text-sm xl:text-xl max-xl:font-bold">
              {moreMenu["More on Ableton.com: "].map((i, index) => (
                <li key={index}>
                  <a href="/#">{i}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl xl:text-3xl font-bold mb-2">
              More from Ableton:
            </h3>
            <ul className="flex text-sm xl:text-xl gap-3 xl:gap-10 overflow-x-scroll pb-3">
              {moreMenu["More from Ableton: "].map((i, index) => (
                <li key={index} className="min-w-[190px]">
                  <a href="/#">
                    <h4 className="font-bold">{i.title}</h4>
                    <p>{i.content}</p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </nav>
      <nav
        // ref={navbar}
        className="border-t-[1px] sticky top-0 text-base max-sm:text-sm bg-white bg-opacity-90 max-sm:px-5 px-10"
      >
        <ul className="flex py-5 gap-8 font-bold">
          <li className="text-orange">
            <a href="/#">About</a>
          </li>
          <li>
            <a href="/#">jobs</a>
          </li>
          <li>
            <a href="/#">Apprenticeships</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
