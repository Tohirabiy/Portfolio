import React, { useEffect } from "react";

const Typewriter = () => {
  useEffect(() => {
    var TxtType = function (el, toRotate, period) {
      // ... (Your existing TxtType code here)
    };

    TxtType.prototype.tick = function () {
      // ... (Your existing tick function here)
    };

    window.onload = function () {
      var elements = document.getElementsByClassName("typewrite");
      for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute("data-type");
        var period = elements[i].getAttribute("data-period");
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
      }
      // INJECT CSS
      var css = document.createElement("style");
      css.type = "text/css";
      css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff }";
      document.body.appendChild(css);
    };
  }, []); // Empty dependency array ensures this code runs only once when the component mounts

  return (
    <h1>
      <a
        href=""
        className="typewrite"
        data-period="2000"
        data-type='[ "Hi, I’m Tohirjon 👋
        ", "I am Creative.", "I Like Web Developing." ]'
      >
        <span className="wrap"></span>
      </a>
    </h1>
  );
};

export default Typewriter;
