import React from "react";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";

export default function App() {
  const [activePage, setActivePage] = useState("about");

  return (
    <main>
      <Sidebar />
      <div className="main-content">
        <Navbar activePage={activePage} setActivePage={setActivePage} />
        {activePage === "about" && <About />}
        {activePage === "resume" && <Resume />}
        {activePage === "portfolio" && <Portfolio/>}
      </div>
    </main>
  );
}
