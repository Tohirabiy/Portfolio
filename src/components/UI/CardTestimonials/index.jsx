import React from "react";
import data from "../../../second_db";
import "./style.scss";
import AwesomeSlider from "react-awesome-slider";

const Index = () => {
  const { opinions } = data;

  return (
    <div className="center-card dark:bg-[#111827] dark:text-white carding mb-[96px] flex justify-between gaping">
      {opinions?.map((item, index) => (
        <div key={index} className="cardoo dark:bg-[#111827] dark:text-white items-center">
          <div className="card_image flex  dark:bg-[#111827] dark:text-white items-center">
            <img
              className="flex items-center justify-center"
              src={item.img}
              alt=""
            />
          </div>
          <h4 className=" dark:bg-[#111827] dark:text-white card-op py-[24px]">{item.op}</h4>
          <div className=" dark:bg-[#111827] dark:text-white card_t">
            <h2 className=" dark:bg-[#111827] dark:text-white card-title">{item.title}</h2>
            <p className=" dark:bg-[#111827] dark:text-white card-p">{item.pad}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Index;
