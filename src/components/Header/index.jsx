import "./style.scss";
import Menu from "../../assets/icons/menu.svg"

const index = () => {
  return (
    <header className="header  px-[32px] bg-white ">
      <div className="container">
        <div className=" flex justify-between items-center py-4  ">
          <div className="title">
          <h1 className="text-[30px] py-[6px] cursor-pointer font-normal">
           &lt;TM/&gt;</h1>

            
          </div>

<div className="menubar">
  <img src={Menu} alt="" />
</div>
          <div className="flex asso_1">
            <div className="flex  py-[6px] justify-between fonto  font-normal   ">
              <a className="  likki" href="id:hww">
                About
              </a>
              <a className=" likki " href="/">
                Work
              </a>
              <a className=" likki " href="">
                Testimonials
              </a>
              <a className=" likki " href="">
                Contact
              </a>
            </div>
            <div className="  py-[6px] mx-[24px] border-r-2"> </div>
            <div className="">
              <i className="px-[6px] mr-[16px]  max-w-xs transition duration-300 ease-in-out hover:scale-110  sunmk bx bx-sun"></i>
              <button className="px-4 download text-white w-[136px] totorino hover:bg-slate-400 hover:text-[#224184] bg-[#111827]">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default index;
