import React from "react";
import data from "../../../second_db";
import "./style.scss";
import LinkIcon from "../../../assets/icons/linkicon.svg";

const index = () => {
  const { works_of_me } = data;

  return (
    <div className="flex justify-between flex-col gap-y-4">
    {works_of_me?.map((item, index) => (
      <ul
        className="flex justify-between nere  {` dark:bg-black dark:text-white`} hover:shadow-2xl flexys bg-slate-50 p-4"
        key={index}
      >
        {index % 2 === 0 ? (
          <>
     <div className="flex items-center ">    <img
              className="left_img transition duration-300 ease-in-out hover:scale-110  max-h-[90%]"
              src={item.img}
              alt=""
            /></div>
            <div className="flex flex-col monno  gap-y-4">
              <div>
                <h3 className="balo dark:text-white">{item.title}</h3>
              </div>
              <div>
                <p className="bak  dark:text-white">{item.desc}</p>
              </div>
              <div className="flex flex-wrap gap-x-2 gap-y-2">
                {item.lang.map((language, index) => (
                  <button
                    className="hover:shadow-2xl hover:text-white bib hover:bg-[#6483c19d] px-4 tugma cursor-pointer"
                    key={index}
                  >
                    {language}
                  </button>
                ))}
              </div>
              <div className="linkolin">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={LinkIcon}
                    className=" linko max-w-xs transition duration-300 ease-in-out hover:scale-110"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col monno gap-y-4">
              <div>
                <h3 className="balo dark:text-white">{item.title}</h3>
              </div>
              <div>
                <p className="bak dark:text-white">{item.desc}</p>
              </div>
              <div className="flex flex-wrap gap-x-2 gap-y-2">
                {item.lang.map((language, index) => (
                  <button
                    className="hover:shadow-2xl hover:text-white hover:bg-[#6483c19d] px-4 tugma cursor-pointer"
                    key={index}
                  >
                    {language}
                  </button>
                ))}
              </div>
              <div className="linkolin">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={LinkIcon}
                    className=" linko  max-w-xs transition duration-300 ease-in-out hover:scale-110"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="flex items-center">    <img
              className="left_img w-[480px] h-[304px] transition duration-300 ease-in-out hover:scale-110  max-h-[90%]"
              src={item.img}
              alt=""
            /></div>
          </>
        )}
      </ul>
    ))}
  </div>
  
  );
};

export default index;
