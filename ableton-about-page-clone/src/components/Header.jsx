import React, { useState } from "react";
import Logo from "../media/logo.svg";

export default function Header() {
  const [isMoreOpen, setIsMoreOpen] = useState(false);
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

  const menu = ["Live", "Push", "Note", "Link", "Shop", "Packs", "Help"];
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
    <header className="py-5 px-10">
      <nav>
        {/* Top visible nav in large screens */}
        <div className="flex w-full mb-5">
          <div>
            <a href="/">
              <img src={Logo} alt="logo" className="w-[60px]"></img>
            </a>
            <button className="xl:hidden"> Menu V</button>
          </div>
          <ul className="flex ml-10 gap-8 text-xl font-bold flex-1">
            <div className="flex gap-8 flex-1">
              {menu.map((m) => (
                <li key={m}>
                  <a href="/#">{m}</a>
                </li>
              ))}
              <li className="text-orange">
                <button onClick={() => setIsMoreOpen((prev) => !prev)}>
                  <span>More {isMoreOpen ? "-" : "+"}</span>
                </button>
              </li>
            </div>
            <div className="flex gap-8 items-center">
              <li className="text-blue">
                <a href="/#">Try Live for free</a>
              </li>
              <li className="text-base">
                <a href="/#">Log in or register</a>
              </li>
            </div>
          </ul>
        </div>
        {/* More menu */}
        <section
          className={`${
            isMoreOpen ? "pt-5 pb-16" : "h-0"
          } overflow-hidden flex flex-col gap-10 transition-all`}
        >
          <div>
            <h3 className="text-3xl font-bold mb-3">More on Ableton.com: </h3>
            <ul className="flex gap-8 text-xl">
              {moreMenu["More on Ableton.com: "].map((i, index) => (
                <li key={index}>
                  <a href="/#">{i}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-2">More from Ableton: </h3>
            <ul className="flex text-xl gap-10">
              {moreMenu["More from Ableton: "].map((i, index) => (
                <li key={index}>
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
        className="border-t-[1px] sticky top-0 bg-white bg-opacity-90"
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
