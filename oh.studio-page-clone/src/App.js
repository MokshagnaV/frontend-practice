import React from "react";
import { HashRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

export default function App() {
  return (
    <div className="max-w-[1440px] m-auto">
      <HashRouter>
        <Header />
        <Main />
        <Footer />
      </HashRouter>
    </div>
  );
}
