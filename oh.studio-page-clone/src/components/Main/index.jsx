import React from "react";
import { Routes, Route } from "react-router-dom";
import Profile from "./Profile";
import Home from "./Home";
import Contact from "./Contact";

export default function Main() {
  return (
    <main className="mt-[112px]">
      <span className="absolute top-2 left-[43vw]">
        *Note: Not a original page*
      </span>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/profile" Component={Profile} />
        <Route path="/contact" Component={Contact} />
      </Routes>
    </main>
  );
}
