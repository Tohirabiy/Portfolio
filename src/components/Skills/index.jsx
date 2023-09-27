import Card from '../UI/Card'
import "./style.scss";

const index = () => {
  return (
    <section id="skills">
      <div className="px-[32px] skilo mb-[106px]">
        <div className="flex items-center bordiringa">
          <button
            id="skills"
            className="px-[20px] mt-[96px] mb-[16px] buttonof bg-[#E5E7EB]  items-center flex bordiringan py-1 hover:shadow-2xl hover:text-white hover:bg-[#245dd1] "
          >
            Skills
          </button>
        </div>
        <div className="v">
          <div className="pasi flex  items-center justify-center mb-[48px]">
            <h3 className="bordiringa hello  flex items-center">
              The skills, tools and technologies I am really good at:
            </h3>
          </div>
        </div>
        <Card/>
      </div>
    </section>
  );
};

export default index;
