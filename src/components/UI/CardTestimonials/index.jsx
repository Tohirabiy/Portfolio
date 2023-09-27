import React from "react";
import data from "../../../second_db";
import "./style.scss";

const index = () => {
  const { opinions } = data;
  return (

    <div className="center-card carding mb-[96px]  flex justify-between gaping">
      {opinions?.map((item) => (
        <div key={item.id} className="cardoo  items-center ">
          <div className="card_image flex items-center">
            <img className="flex items-center justify-center" src={item.img} alt="" />
          </div>
          <h4 className="card-op py-[24px]">{item.op}</h4>
          <div className="card_t">
            <h2 className="card-title">{item.title}</h2>
            <p className="card-p">{item.pad}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default index;

