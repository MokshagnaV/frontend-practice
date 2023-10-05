import React, { useEffect, useRef } from "react";
import { experience, clients } from "./data";
import GetInTouch from "./common/GetInTouch";

export default function Profile() {
  const heroRef = useRef();
  const firImgRef = useRef();
  const secImgRef = useRef();
  const aboutRef = useRef();
  const expRef = useRef();
  const cliRef = useRef();
  const positionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      console.log(entries);
      const delays = ["delay-[200ms]", "delay-[400ms]", "delay-[600ms]"];
      if (entries[0] && entries[0].isIntersecting) {
        entries[0].target.firstChild.classList.add("in-view");
        firImgRef.current.classList.add("in-view", "delay-[200ms]");
        secImgRef.current.classList.add("in-view", "delay-[400ms]");
        observer.unobserve(entries[0].target);
      }
      for (let i = 1; i < 4; i++) {
        if (entries[i].isIntersecting) {
          let x = 0;
          console.log(entries[i]);
          Array.from(entries[i].target.children).forEach((entry) => {
            entry.classList.add("in-view", delays[x]);
          });
        }
      }
    });
    observer.observe(heroRef.current);
    observer.observe(aboutRef.current);
    observer.observe(expRef.current);
    observer.observe(cliRef.current);
    observer.observe(positionRef.current);
    return () => observer.disconnect();
  });
  return (
    <>
      <div ref={heroRef}>
        <div className="not-in-view flex items-center justify-center h-[50vh] xl:h-[70vh]">
          <h1 className="text-4xl md:text-5xl xl:text-7xl">Hey 👋🏼 I'm Oli</h1>
        </div>
        <div className="flex flex-row p-5 md:p-10 gap-5">
          <div
            ref={firImgRef}
            className="not-in-view h-[300px] md:h-[420px] rounded-xl overflow-hidden flex-grow md:w-[50%]"
          >
            <img
              src="https://framerusercontent.com/images/wJINOk3BFAbQRx6ZySXfbltPxU.jpg"
              alt="oli"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div
            ref={secImgRef}
            className="not-in-view max-md:hidden h-[300px] md:h-[420px] rounded-xl overflow-hidden flex-grow w-[50%]"
          >
            <img
              src="https://framerusercontent.com/images/O3Foxt0XkzTsjGc74Ap0Hrxtz4c.jpg"
              alt="blurry oli"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>

      {/* About */}
      <div
        ref={aboutRef}
        className="flex flex-col justify-center items-center gap-5 pt-16 p-5 md:py-36 md:px-10"
      >
        <span className="py-2 px-3 rounded-full bg-lightGray flex items-center justify-center leading-4">
          About
        </span>
        <h2 className="text-2xl md:text-4xl text-center md:max-w-[600px] ">
          A freelance designer based in the UK. I combine my experience in
          product and brand to solve problems, tell stories, and create
          compelling experiences.
        </h2>
      </div>

      {/* Experience */}
      <div
        ref={expRef}
        className="flex flex-col justify-center items-center gap-5 pt-20 p-10"
      >
        <span className="py-2 px-3 rounded-full bg-lightGray flex items-center justify-center leading-4">
          Experience
        </span>
        <p className="text-3xl md:text-4xl">Where I've worked</p>
      </div>

      {/* Positions */}
      <div
        ref={positionRef}
        className="p-5 md:p-10 grid grid-cols-2 md:grid-cols-3"
      >
        {experience.map((exp, index) => {
          const { duration, title, role, type } = exp;
          return (
            <div key={index} className="flex flex-col p-10 items-center gap-6">
              <div className="flex flex-col  items-center gap-3">
                <p className="text-gray  text-sm">{duration}</p>
                <p className="text-lg">{title}</p>
                <p className="text-gray  text-sm">{role}</p>
              </div>
              <div className="py-2 px-3 bg-lightGray rounded-full">{type}</div>
            </div>
          );
        })}
      </div>

      {/* Clients */}
      <div
        ref={cliRef}
        className="flex flex-col justify-center items-center gap-5 pt-20 p-10"
      >
        <span className="py-2 px-3 rounded-full bg-lightGray flex items-center justify-center leading-4">
          Clients
        </span>
        <p className="text-3xl md:text-4xl">Who I've worked with</p>
      </div>
      {/* 
      // {/* All Clients 
      {clients.map((c, i) => (
        <img key={i} src={c} alt="client" className="w-20 grayscale" />
      ))}
      */}
      <GetInTouch />
    </>
  );
}
