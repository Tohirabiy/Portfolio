import "./style.scss"
import WorkCard from "../UI/WorkCard"
const index = () => {
    return (
        <section className="work mb-[96px]">
        <div className="flex items-center bordiringa">
          <button
            id="hww bg-[#E5E7EB]"
            className="px-[20px] mt-[96px] mb-[16px] buttonof bg-[#E5E7EB]  items-center flex bordiringan py-1 hover:shadow-2xl hover:text-white hover:bg-[#245dd1] "
          >
            Work
          </button>
        </div>
        <div className="expertize flex flex-col">
          <div className="pasi flex  items-center justify-center mb-[48px]">
            <h3 className="bordiringa hello  flex items-center">
              {" "}
              Some of the noteworthy projects I have built:
            </h3>
          </div>


<WorkCard/>
         
        </div>
      </section>
    );
};

export default index;