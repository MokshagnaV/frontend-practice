import React from "react";
import Header from "./components/pages/Header";
import Main from "./components/pages/Main";
import Footer from "./components/pages/Footer";

export default function App() {
  return (
    <div className="relative overflow-x-hidden">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
