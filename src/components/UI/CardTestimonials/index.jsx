import data from "../../../second_db";
import "./style.scss";

const index = () => {
  const { opinions } = data;
  return (
    <div className="center-card  mb-[96px] flex  justify-between gap-y-[24px] gap-x-[48px]">
      {opinions?.map((item) => (
        
          <div className="cardoo   transition duration-300 ease-in-out hover:scale-110 p-[48px] items-center w-[373.33px] ">
            <div className="card_image flex items-center">
              <img className="flex  items-center justify-center"  src={item.img} alt="" />
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

{
  /*<ul className="flex btrr hover:shadow-2xl cardss  p-8 justify-between">
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
</ul>*/
}
