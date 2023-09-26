import "./style.scss";
import Git from "../../assets/icons/git.svg";
import Twitter from "../../assets/icons/twitter.svg";
import Figma from "../../assets/icons/figma.svg";
import Location from "../../assets/icons/location.svg";
import Dot from "../../assets/icons/dot.svg";
import Me from "../../assets/images/me.jpg";
// components
import About from "../../components/About";
import Skills from "../Skills";
import Experience from "../Experience";
import Work from "../Work";
import Testimonials from '../Testimonials'

const index = () => {
  return (
    <main>
      <section className="hero pt-[106px] mb-[96px]">
        <div className="container ">
          <div className="herod flex justify-between">
            <div className="left">
              <div className="top">
                <h2 className="mb-[8px] font-bold leadingd text-[62px]">
                  Hi, I’m Tohirjon 👋
                </h2>
                <p className="dsd leading-6 font-normal">
                  I'm a full stack developer (React.js & Vue.js and Node.js &
                  Laravel ) with a focus on creating exceptional digital
                  experiences that are fast, accessible, visually appealing, and
                  responsive. Even though I have been creating web applications
                  for over 7 years, I still love it as if it was something new.
                </p>
              </div>
              <div className="middle mt-[48px]">
                <div className="firsrr mb-2 flex gap-x-[8px] text-[#4B5563]">
                  <img src={Location} alt="" />
                  <p>Tashkent, Chilonozor</p>
                </div>
                <div className="firsrr flex gap-x-[8px] text-[#4B5563]">
                  <img src={Dot} alt="" />
                  <p>Available for new projects</p>
                </div>
              </div>

              <div className="bottom flex gap-x-1 mt-[48px]">
                <a className="underline" href="https://github.com/Tohirabiy">
                  <img
                    className="p-[6px]  max-w-xs transition duration-300 ease-in-out hover:scale-110     "
                    src={Git}
                    alt=""
                  />
                </a>
                .
                <a href="https://twitter.com">
                  <img
                    className="p-[6px]  max-w-xs transition duration-300 ease-in-out hover:scale-110  "
                    src={Twitter}
                    alt=""
                  />
                </a>
                <a href="https://www.figma.com">
                  <img
                    className="p-[6px]  max-w-xs transition duration-300 ease-in-out hover:scale-110  "
                    src={Figma}
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="right">
              <div class="vv">
                <img className="top-image" src={Me} alt="Base Image" />
                <div className="bottom-image"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Skills />
      <Experience/>
      <Work/>
      <Testimonials/>


    </main>
  );
};

export default index;
