import React from "react";
import thumbnail from "./thumbnail.jpg";

export default function Main() {
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
            <div className="cursor-pointer overflow-hidden rounded-xl hover:shadow-2xl hover:scale-[1.01] transition-all duration-400">
              <img src={thumbnail} alt="thumbnail" />
            </div>
          </div>
        </div>
      </section>
      <section className="pb-14 md:pb-20 max-w-lg m-auto">
        <h2 className="xl:first-letter:leading-[66px] text-4xl sm:text-5xl md:text-6xl text-center font-extrabold mb-8 md:mb-12">
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
    </main>
  );
}
