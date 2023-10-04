import React from "react";
import { Routes, Route } from "react-router-dom";
import Profile from "./Profile";
import Home from "./Home";
import Contact from "./Contact";

export default function Main() {
  return (
    <main className="mt-32">
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/profile" Component={Profile} />
        <Route path="/contact" Component={Contact} />
      </Routes>
    </main>
  );
}
