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
        className="flex justify-between gap-x-4 hover:shadow-2xl flexys bg-slate-50 p-4"
        key={index}
      >
        {index % 2 === 0 ? (
          <>
            <img
              className="left_img w-[480px] h-[304px] transition duration-300 ease-in-out hover:scale-110  max-h-[90%]"
              src={item.img}
              alt=""
            />
  
            <div className="flex flex-col w-[576px] gap-y-4">
              <div>
                <h3 className="balo">{item.title}</h3>
              </div>
              <div>
                <p className="bak">{item.desc}</p>
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
                    className="max-w-xs transition duration-300 ease-in-out hover:scale-110"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col w-[576px] gap-y-4">
              <div>
                <h3 className="balo">{item.title}</h3>
              </div>
              <div>
                <p className="bak">{item.desc}</p>
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
                    className="max-w-xs transition duration-300 ease-in-out hover:scale-110"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <img
              className="left_img w-[480px] h-[304px] transition duration-300 ease-in-out hover:scale-110"
              src={item.img}
              alt=""
            />
          </>
        )}
      </ul>
    ))}
  </div>
  
  );
};

export default index;
