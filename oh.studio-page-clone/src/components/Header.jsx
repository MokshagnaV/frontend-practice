import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  return (
    <header className="w-full max-w-[1440px] fixed top-0 z-10">
      <div className="py-8 px-10 flex justify-center">
        <div className="rounded-full py-3 bg-lightGray bg-opacity-50 backdrop-blur-lg p-1">
          {[
            { title: "Home", link: "/" },
            { title: "Profile", link: "/profile" },
            { title: "Contact", link: "/contact" },
          ].map((page) => (
            <Link
              key={page.title}
              to={page.link}
              className={`py-3 px-7 text-sm rounded-full ${
                location.pathname === page.link ? "bg-white" : ""
              }`}
            >
              {page.title}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
