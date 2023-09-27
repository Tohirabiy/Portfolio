import "./style.scss"
import WorkCard from "../UI/WorkCard"
const index = () => {
    return (
        <section className="work  {` dark:bg-black dark:text-white text-black`}  ">
    <div className="container">
    <div className="flex items-center bordiringa">
          <button
            id="work"
            // #1F2937
            className="px-[20px] mt-[96px] mb-[16px] buttonof bg-[#E5E7EB] dark:text-[#1F2937]  items-center flex bordiringan py-1 hover:shadow-2xl hover:text-white hover:bg-[#245dd1] "
          >
            Work
          </button>
        </div>
        <div className="expertize flex flex-col">
          <div className="pasi flex  items-center justify-center mb-[48px]">
            <h3 className="yeah text-[#4B5563]  flex items-center">
              
              Some of the noteworthy projects I have built:
            </h3>
          </div>
    </div>


<WorkCard/>
         
        </div>
      </section>
    );
};

export default index;