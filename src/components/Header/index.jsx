import React, { useState, useEffect } from "react";
import "./style.scss";
import Menu from "../../assets/icons/menu.svg";

const Index = () => {
  // State for dark mode
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true" || false
  );

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode);
  };

  // Use useEffect to update the class based on dark mode
  useEffect(() => {
    if (darkMode) {
      document.body.style.backgroundColor = "black";
      document.querySelector(".title h1").style.color = "white";
    } else {
      document.body.style.backgroundColor = "white";
      document.querySelector(".title h1").style.color = "black";
    }
  }, [darkMode]);

  return (
    <header className={`header px-[32px] ${darkMode ? "bg-dark" : "bg-white"}`}>
      <div className="container">
        <div className="flex justify-between items-center py-4">
          <div className="title">
            <h1 className="text-[30px] py-[6px] cursor-pointer font-normal">
              &lt;TM/&gt;
            </h1>
          </div>

          <div className="menubar">
            <img src={Menu} alt="" />
          </div>
          <div className="flex asso_1">
            <div className="flex py-[6px] justify-between fonto font-normal">
              <a className="likki" href="#about">
                About
              </a>
              <a className="likki" href="#skills">
                Skills
              </a>
              <a className="likki" href="#experience">
                Experience
              </a>
              <a className="likki" href="#work">
                Work
              </a>
              <a className="likki" href="#testimonials">
                Testimonials
              </a>
              <a className="likki" href="#contact">
                Contact
              </a>
            </div>
            <div className="py-[6px] mx-[24px] border-r-2"> </div>
            <div className="">
              <i
                className={`px-[6px] mr-[16px] max-w-xs transition duration-300 ease-in-out hover:scale-110 ${
                  darkMode ? "moon-icon" : "sun-icon"
                } bx ${darkMode ? "bx-moon" : "bx-sun"}`}
                onClick={toggleDarkMode}
              ></i>
              <button
                className={`px-4 download text-white w-[136px] totorino hover:bg-slate-400 hover:text-[#224184] ${
                  darkMode ? "bg-[#111827]" : "bg-slate-400"
                }`}
              >
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Index;
