import React, { useRef } from "react";
import "./style.scss";
import Git from "../../assets/icons/git.svg";
import Twitter from "../../assets/icons/twitter.svg";
import Figma from "../../assets/icons/figma.svg";
import C_icon from "../../assets/icons/c_icon.svg";

const index = () => {
  const emailRef = useRef(null); // Create a ref for the email address element
  const phoneRef = useRef(null); // Create a ref for the phone number element

  const copyTextToClipboard = (text) => {
    const tempInput = document.createElement("input");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  };

  const handleEmailCopy = () => {
    if (emailRef.current) {
      copyTextToClipboard(emailRef.current.textContent);
    }
  };

  const handlePhoneCopy = () => {
    if (phoneRef.current) {
      copyTextToClipboard(phoneRef.current.textContent);
    }
  };

  return (
    <footer className=" dark:bg-black dark:text-white">
      <div className=" px-[32px] flex items-center bordiringa">
        <button
          id="contact"
          className="px-[20px] mt-[96px] hewww  mb-[16px] buttonof bg-[#E5E7EB]  items-center flex bordiringan py-1 hover:shadow-2xl hover:text-white hover:bg-[#245dd1] "
        >
          Get in touch
        </button>
      </div>
      <div className="expertize flex flex-col">
        <div className="pasi flex items-center justify-center ">
          <h3 className="bordiringa dark:text-white hello salomm flex items-center">
            Imom Buxoriy bobomizning “Al Jome as sahih” kitobining eng birinchi
            hadisi shu hadis bilan boshlangan: “Innamal a’malu bin niyyati”
            ya’ni, “Barcha amallar niyatga bog’liq”.
          </h3>
        </div>
        <div className=" items-center flex flex-col">
          <div className="obshiy py-[50px] flex flex-col  items-center">
            {" "}
            <div className="perviy flex items-center gap-5">
              <a 
                target="_blank"
                rel="noopener noreferrer"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=muhammadiyevtohirjon9@gmail.com"
              >
                <i className="bx text-[32px] iclass  bx-envelope"></i>
              </a>
              <h3 className="emaili dark:text-white" ref={emailRef}>
                tohirjon9@gmail.com
              </h3>
              <i
                className="bx bx-copy iclass text-[32px] "
                onClick={handleEmailCopy}
              ></i>
            </div>
            <div className="vtoroy flex items-center gap-5">
              <i className="bx text-[32px] iclass  bx-phone"></i>
              <h3 className="phonen dark:text-white" ref={phoneRef}>
                +998 91 282 84 92
              </h3>
              <i
                className="bx  iclass text-[32px] bx-copy"
                onClick={handlePhoneCopy}
              ></i>
            </div>
          </div>
          <div className="paso flex flex-col items-center">
            <p>You may also find me on these platforms!</p>

            <div className="bottom flex gap-x-1 items-center">
              <a className="underline dark:text-white" href="https://github.com/Tohirabiy">
                <img
                  className="p-[6px] dark:text-white max-w-xs transition duration-300 ease-in-out hover:scale-110     "
                  src={Git}
                  alt=""
                />
              </a>
              .
              <a href="https://twitter.com">
                <img
                  className="p-[6px] dark:text-white max-w-xs transition duration-300 ease-in-out hover:scale-110  "
                  src={Twitter}
                  alt=""
                />
              </a>
              <a href="https://www.figma.com">
                <img
                  className="p-[6px]  max-w-xs transition duration-300 ease-in-out hover:scale-110  "
                  src={Figma}
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="flex flex-rows bmbm mt-[96px]  dark:text-white py-[24px] items-center">
            <img src={C_icon} alt="" />
            <h2 className="songi dark:text-white">
              2023 | <span className="underline"> Designed </span> and{" "}
              <span className="underline">coded</span> with ❤️️ by NAJOT TA’LIM
            </h2>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default index;
