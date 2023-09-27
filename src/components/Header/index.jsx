import React, { useState, useEffect } from "react";
import "./style.scss";
import Menu from "../../assets/icons/menu.svg";

const Index = () => {
  // State for dark mode
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true" || false
);

const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode);
};

useEffect(() => {
    if (darkMode) {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }
}, [darkMode]);

  return (
    <header className={`header px-[32px] ${darkMode ? "bg-dark" : "bg-white"} dark:bg-black dark:text-white`}>
      <div className="container">
        <div className="flex justify-between items-center py-4">
          <div className="title">
            <h1 className="text-[30px] py-[6px] {` dark:text-white text-black`} cursor-pointer fonot">
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
              <a
              target="blank"
                href="https://harlequin-sandie-64.tiiny.site/CV.pdf"
                download="CV.pdf"
              >
                <button
                  className={`px-4 download text-white w-[136px] totorino hover:bg-slate-400 hover:text-[#224184] ${
                    darkMode ? "bg-slate-400" : "bg-[#111827]"
                  }`}
                >
                  
                  Download CV
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Index;
