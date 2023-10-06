import React from "react";
import { HashRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <div className="max-w-[1440px] m-auto">
      <HashRouter>
        {/* This component is Used to scroll to top when ever the user changes page */}
        <ScrollToTop />
        <Header />
        <Main />
        <Footer />
      </HashRouter>
    </div>
  );
}
