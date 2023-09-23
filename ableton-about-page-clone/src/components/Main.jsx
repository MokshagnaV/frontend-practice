import React from "react";
import TextBox from "./common/TextBox";
//images
import Hero from "../media/hero-bg.jpg";
import FirstRight from "../media/first-right.jpg";
import FirstLeft from "../media/first-left.jpg";
import Second from "../media/second.jpg";
import Third11 from "../media/third-1.jpg";
import Third12 from "../media/third-2.jpg";
import Third2 from "../media/third-3.jpg";
import Fourth from "../media/fourth.jpg";
import Fifth1 from "../media/fifth-1.jpg";
import Fifth2 from "../media/fifth-2.jpg";

export default function Main() {
  return (
    <main>
      {/* Hero section */}
      <section className="max-w-7xl flex justify-center items-center">
        <div
          className="flex bg-cover bg-center h-[80vh] w-[90vw] sm:w-[85vw] justify-center items-center"
          style={{ backgroundImage: `url(${Hero})` }}
        >
          <h1 className="md:text-9xl text-6xl text-orange font-extrabold">
            Ableton
          </h1>
        </div>
      </section>
      {/* 1st section */}
      <section>
        <TextBox>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
            We make <span className="text-blue">Live</span>,{" "}
            <span className="text-blue">Push</span> and{" "}
            <span className="text-blue">Link</span> — unique software and
            hardware for music creation and performance. With these products,
            our community of users creates amazing things.
          </h2>
          <p className="text-base sm:text-lg">
            Ableton was founded in 1999 and released the first version of Live
            in 2001. Our products are used by a community of dedicated
            musicians, sound designers, and artists from across the world.
          </p>
        </TextBox>
        <div className="relative min-h-[58vw] min-w-[100vw] flex">
          <div className="absolute right-0 bg-yellow w-[58vw] h-[58vw]"></div>
          <div className="flex-1 z-10 flex justify-end items-center">
            <div className="w-[40vw] h-[40vw]">
              <img
                src={FirstLeft}
                className="object-cover h-full"
                alt="collection of albums"
              />
            </div>
          </div>
          <div className="flex-1 z-10 flex justify-center items-center">
            <div className="w-[33vw]">
              <img src={FirstRight} alt="man mixing music" />
            </div>
          </div>
        </div>
      </section>
      {/* 2nd section */}
      <section>
        <TextBox>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
            Making music isn't easy. It takes time, effort, and learning. But
            when you're in the flow, it's incredibly rewarding.
          </h2>
          <p className="text-base sm:text-lg">
            We feel the same way about making Ableton products. The driving
            force behind Ableton is our passion for what we make, and the people
            we make it for.
          </p>
        </TextBox>
        <div className="flex justify-center items-center">
          <img
            src={Second}
            className="w-[85vw] md:w-[50vw]"
            alt="a man mixing audio"
          />
        </div>
      </section>
      {/* 3rd section */}
      <section>
        <TextBox>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
            We are more than 350 people from 30 different countries divided
            between our headquarters in Berlin and our offices in Los Angeles
            and Tokyo.
          </h2>
          <p className="text-base sm:text-lg">
            Most of us are active musicians, producers, and DJs, and many of us
            use Live and Push every day. We come from a wide range of cultural
            and professional backgrounds. Some of us have PhDs, some are
            self-taught, and most of us are somewhere in between. What connects
            us is the shared belief that each of us has the skills and knowledge
            to contribute to something big: helping to shape the future of music
            culture.
          </p>
        </TextBox>
        <div className="relative h-[75vw] min-w-[100vw] flex items-center">
          <div className="absolute left-0 bg-cyan w-[58vw] h-[75vw]"></div>
          <div className="flex-1 z-10 flex flex-col justify-around items-center min-h-[75vw]">
            <div className="w-[33vw] h-[25vw]">
              <img
                src={Third11}
                className="object-cover h-full"
                alt="collection of albums"
              />
            </div>
            <div className="w-[33vw] h-[25vw]">
              <img
                src={Third12}
                className="object-cover h-full"
                alt="collection of albums"
              />
            </div>
          </div>
          <div className="flex-1 z-10 flex justify-start items-center">
            <div className="w-[43vw] h-[43vw] overflow-hidden">
              <img
                src={Third2}
                className="object-cover"
                alt="collection of albums"
              />
            </div>
          </div>
        </div>
      </section>
      {/* 4th section */}
      <section>
        <TextBox>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
            We believe it takes focus to create truly outstanding instruments.
            We only work on a few products and we strive to make them great.
          </h2>
          <p className="text-base sm:text-lg">
            Rather than having a one-size-fits-all process, we try to give our
            people what they need to work their magic and grow. We've learned
            that achieving the best results comes from building teams that are
            richly diverse, and thus able to explore problems from a wider set
            of perspectives. We don't always agree with each other, but opinion
            and debate are valued and openly encouraged.
          </p>
        </TextBox>
        <div className="flex justify-center items-center">
          <img src={Fourth} className="w-[85vw]" alt="audio mixin machine" />
        </div>
      </section>
      {/* 5th section */}
      <section>
        <TextBox>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
            We're passionate about what we do, but we're equally passionate
            about improving who we are.
          </h2>
          <p className="text-base sm:text-lg">
            We work hard to foster an environment where people can grow both
            personally and professionally, and we strive to create a wealth of
            opportunities to learn from and with each other.
          </p>
          <p className="text-base sm:text-lg">
            Alongside an internal training program, employees are actively
            supported in acquiring new knowledge and skills, and coached on
            applying these in their daily work. In addition, staff-organized
            development and music salons are a chance to discuss new
            technologies, production techniques and best practices.
          </p>
        </TextBox>
        <div className="relative min-h-[58vw] min-w-[100vw] flex">
          <div className="absolute right-[16vw] bg-violet w-[66vw] h-[58vw]"></div>
          <div className="flex-1 z-10 flex justify-center items-center">
            <div className="w-[33vw]">
              <img src={Fifth1} alt="meeting" />
            </div>
          </div>
          <div className="flex-1 z-10 flex justify-end items-center">
            <div className="w-[40vw] h-[40vw] overflow-hidden">
              <img
                src={Fifth2}
                className="object-cover w-full -translate-y-20"
                alt="meeting room full of people"
              />
            </div>
          </div>
        </div>
      </section>
      {/* 6th section */}
      <section>
        <TextBox>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
            We want our employees to love it here. Since we're looking for
            exceptional talent from around the world, we will do everything we
            can to make your transition as easy as possible.
          </h2>
          <p className="text-base sm:text-lg">
            If you're joining us in Berlin, we'll help with relocation and
            paperwork. We'll even provide you with free German or English
            lessons. Plus, working in Germany means you can expect comprehensive
            health insurance for you and your family, as well as generous
            maternity and paternity leave. Office hours are flexible, but it's
            not all work; we have several company and team outings throughout
            the year as well as a variety of fun, informal small-group
            activities.
          </p>
        </TextBox>
      </section>
      {/* Card section */}
      <section className="flex justify-center mb-[8.3vw]">
        <div className="w-[85vw] max-sm:max-h-[90vh] flex flex-col xl:flex-row">
          <div className="flex-grow xl:max-w-[50%]">
            <img
              src="https://ableton-production.imgix.net/about/photo-8.jpg?"
              alt="office"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-grow bg-light-blue xl:text-3xl font-bold leading-7 p-[8.3vw]">
            <p className="mb-3 xl:mb-10">
              We're really proud of the work we've done so far. But there's so
              much more to come. If you'd like to be a part of it, please join
              us.
            </p>
            <a href="/#" className="text-blue">
              See latest jobs ›
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
