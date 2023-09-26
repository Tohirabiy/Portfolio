import data from "../../../second_db";
import "./style.scss"

const index = () => {
    const { data_experience } = data;
    return (
        <div className="center-card mb-[96px] flex flex-col justify-between gap-y-[48px]">
          {data_experience?.map((item) => (
            
              
                <ul className="flex btrr hover:shadow-2xl cardss  p-8 justify-between">
                  <div>
                    <img src={item.img} alt="" />
                  </div>
                  <div className="flex justify-between   text-center gap-x-[48px]">
                    <div>
                      <h3 className="birbalooo"> {item.title}</h3>
                      <div className="wor">
                        <p className="workingclass items-start text-start">{item.work_1}</p>
                        <p className="workingclass items-start text-start">{item.work_2}</p>
                        <p className="workingclass items-start text-start">{item.work_3}</p>

                      </div>
                    </div>


                    <div>
                      {" "}
                      <h4>{item.duration}</h4>
                    </div>
                  </div>
                </ul>
          
            
            ))}
            </div>
    );
};

export default index;