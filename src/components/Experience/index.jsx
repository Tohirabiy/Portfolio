import React from "react";
import SecondCard from "../UI/SecondCard"
const index = () => {
 
  return (
    <section className="experience  px-[32px]">
      <div className="">
        <div className="flex items-center bordiringa">
          <button
            id="experience"
            className="px-[20px] mt-[96px] mb-[16px] buttonof bg-[#E5E7EB]  items-center flex bordiringan py-1 hover:shadow-2xl hover:text-white hover:bg-[#245dd1] "
          >
            Experience
          </button>
        </div>
        <div className="expertize flex flex-col">
          <div className="pasi flex  items-center justify-center mb-[48px]">
            <h3 className=" yeah text-[#4B5563] flex items-center">
              {" "}
              Here is a quick summary of my most recent experiences:
            </h3>
          </div>
<SecondCard/>
         
        </div>
      </div>
    </section>
  );
};

export default index;
