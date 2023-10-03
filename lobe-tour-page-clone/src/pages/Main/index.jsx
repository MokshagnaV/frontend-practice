import React, { useState } from "react";
import thumbnail from "./thumbnail.jpg";

export default function Main() {
  const [youtubePlay, setYoutubePlay] = useState(false);
  return (
    <main className="max-container mt-20 text-black">
      <section className="text-center pt-10 pb-14 md:pb-20 m-auto xl:max-w-[80%]">
        <div className="px-8 md:px-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-3">
            Lobe <span className="text-cyan">Tour</span>
          </h1>
          <p className="text-lg sm:text-2xl max-w-sm sm:max-w-xl m-auto  mb-10">
            Build your first machine learning model in ten minutes. No code or
            experience required.
          </p>
          <div className="mt-6">
            <div
              className="cursor-pointer overflow-hidden rounded-xl hover:shadow-2xl hover:scale-[1.01] transition-all ease-linear duration-400"
              onClick={() => setYoutubePlay((prev) => !prev)}
            >
              <img src={thumbnail} alt="thumbnail" />
            </div>
          </div>
        </div>
      </section>
      <section className="pb-14 md:pb-20 max-w-lg m-auto">
        <h2
          className="xl:first-letter:leading-[66px] text-4xl sm:text-5xl md:text-6xl
         text-center font-extrabold mb-8 md:mb-12 max-w-xs sm:max-w-md m-auto"
        >
          Train your app with Lobe
        </h2>
        <div className="flex justify-center">
          <button
            className="text-xl text-white rounded-full py-3 px-9 bg-cyan font-bold
          hover:scale-105 transition-all duration-300"
          >
            Download
          </button>
        </div>
      </section>

      {youtubePlay && (
        <div
          className="fixed top-0 h-screen w-screen z-10 bg-black bg-opacity-80 backdrop-blur-lg
          flex justify-center items-center sm:py-20"
          onClick={() => {
            setYoutubePlay((prev) => !prev);
          }}
        >
          <div
            className="absolute right-8 top-4 p-7 cursor-pointer group "
            onClick={(e) => {
              e.stopPropagation();
              setYoutubePlay((prev) => !prev);
            }}
          >
            <span className="absolute rotate-45 h-[2px] w-8 bg-black group-hover:scale-110 transition-all rounded-sm"></span>
            <span className="absolute -rotate-45 h-[2px] w-8 bg-black group-hover:scale-110 transition-all rounded-sm"></span>
          </div>
          <div className="bg-black h-[62%] sm:h-full w-[80%] overflow-hidden rounded-2xl max-sm:w-screen">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/Mdcw3Sb98DA?autoplay=1"
              title="Introducing Lobe  |  Build your first machine learning model in ten minutes."
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </main>
  );
}
