import data from "../../../second_db";
import "./style.scss";

const index = () => {
  const { data_experience } = data;
  return (


    <div className="center-card  pb-[96px]  {` dark:bg-[#1F2937] dark:text-white text-black`} flex flex-col justify-between gap-[48px]">
      {data_experience?.map((item) => (
        <ul className="flex btrr hover:shadow-2xl cardss {` dark:bg-[#1F2937] dark:text-white text-black`} p-8 justify-between">
          <div>
            <img
              className=" max-w-xs transition duration-300 ease-in-out hover:scale-110 "
              src={item.img}
              alt=""
            />
          </div>
          <div className="flex justify-between birf  text-center ">
            <div>
              <h3 className="birbalooo {` dark:bg-[#1F2937] dark:text-white text-black`} "> {item.title}</h3>
              <div className="wor">
                <p className="workingclass {` dark:bg-[#1F2937] dark:text-white text-black`}  items-start text-start">
                  {item.work_1}
                </p>
                <p className="workingclass  {` dark:bg-[#1F2937] dark:text-white text-black`} items-start text-start">
                  {item.work_2}
                </p>
                <p className="workingclass {` dark:bg-[#1F2937] dark:text-white text-black`}  items-start text-start">
                  {item.work_3}
                </p>
              </div>
            </div>

            <div className="endi">
              
              <h4 className="sons">{item.duration}</h4>
            </div>
          </div>
        </ul>
      ))}
    </div>
  );
};

export default index;
