import "./style.scss";
import CardTestimonials from "../UI/CardTestimonials";
const index = () => {
  return (
    <>
      <section className="testimonials   mt-[96px] mb-[96px]">
     <div className=" ">
     <div className="flex items-center bordiringa">
          <button
            id="testimonials"
            className="px-[20px] mt-[96px] mb-[16px] buttonof bg-[#E5E7EB]  items-center flex bordiringan py-1 hover:shadow-2xl hover:text-white hover:bg-[#245dd1] "
          >
            Testimonials
          </button>
        </div>
        <div className="expertize flex flex-col">
          <div className="pasi flex  items-center justify-center  mb-[48px]">
            <h3 className="bordiringa hello  flex items-center">
              {" "}
              Nice things people have said about me:
            </h3>
          </div>

          <CardTestimonials />
        </div>
     </div>
      </section>
    </>
  );
};

export default index;
