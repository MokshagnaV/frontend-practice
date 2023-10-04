import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  return (
    <header className="w-full fixed top-0">
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
              className={`py-3 px-8 text-sm rounded-full ${
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
