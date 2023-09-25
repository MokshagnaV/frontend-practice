import React, { useRef, useState } from "react";
import images from "../assets";

export default function Main() {
  const mainRef = useRef();
  const [activeSection, setActiveSection] = useState(0);
  const pageColors = [
    "pink",
    "white",
    "cyan",
    "orange",
    "yellow",
    "blue",
    "red",
  ];

  const handleScroll = () => {
    const books = document.querySelectorAll(".book");
    let index = books.length;
    while (
      --index &&
      mainRef.current.scrollTop + 50 < books[index].offsetTop
    ) {}
    setActiveSection(index);
    console.log(books[index].id, index);
  };

  const issues = [7, 6, 5, 4, 3, 2, 1];
  return (
    <>
      <main
        ref={mainRef}
        className={`snap-y snap-mandatory overflow-scroll h-[100vh] scroll-smooth bg-${pageColors[activeSection]}`}
        onScroll={handleScroll}
      >
        <header className="md:absolute top-5 left-4 snap-start max-md:pt-5 max-md:pl-4">
          <h1 className="font-bold text-2xl md:text-4xl bg-transparent">
            BACKSTAGE TALKS
          </h1>
        </header>
        <div>
          {issues.map((i) => (
            <div
              key={i}
              id={`issue${i}`}
              className="book z-20 flex flex-col items-center min-w-[100vw] min-h-[100vh] p-5 snap-start font-bold"
            >
              <img
                src={images[`Issue${i}`]}
                className="h-[80vh] object-contain"
                alt="book cover"
              />
              <p>{`Issue#${i}`}</p>
              <a
                href="/#"
                className={`hover:underline ${i !== 6 && "text-white"}`}
              >
                BUY HERE
              </a>
              <p>
                or in{" "}
                <a
                  href="/#"
                  className={`hover:underline ${i !== 6 && "text-white"}`}
                >
                  selected stores
                </a>
              </p>
            </div>
          ))}
        </div>
        <div className="md:absolute left-4 bottom-5 md:w-80 max-md:text-center max-md:p-10 snap-start text-lg font-bold">
          <p className="leading-6">
            Backstage Talks is a magazine of casual, but in depth dialogues on
            design and business. Our decisions shape and influence this complex
            world—to have a chance to make the right ones, we need to talk.
          </p>
          <p className="font-normal text-xs">© 2023 Published by Büro Milk</p>
          <p className="mt-6">Privacy Policy</p>
          <p className="text-xs font-normal">
            Clone developed by{" "}
            <a
              href="https://www.github.com/mokshagnav"
              className="hover:underline font-bold"
            >
              Mokshagna Vemula
            </a>
          </p>
        </div>
        <a
          href="mailto:info@backstagetalks.com"
          className="hover:underline block text-center max-md:pb-10 md:absolute top-5 right-4 text-lg font-bold"
        >
          info@backstagetalks.com
        </a>
        <div className="max-md:hidden md:absolute bottom-5 right-4 text-lg">
          <ul className="font-normal">
            {issues.map((i) => (
              <li className={7 - i === activeSection && "font-bold"}>
                <a href={`/#issue${i}`}>{`Issue ${i}`}</a>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}
