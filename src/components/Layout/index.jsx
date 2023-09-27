import "./style.scss";
import Git from "../../assets/icons/git.svg";
import Twitter from "../../assets/icons/twitter.svg";
import Figma from "../../assets/icons/figma.svg";
import Location from "../../assets/icons/location.svg";
import Dot from "../../assets/icons/dot.svg";
import Me from "../../assets/images/me.jpg";
// components
import About from "../../components/About";
import Hero from "../Hero"
import Skills from "../Skills";
import Experience from "../Experience";
import Work from "../Work";
import Testimonials from '../Testimonials'

const index = () => {
  return (
    <main>
     <Hero/>
      <About />
      <Skills />
      <Experience/>
      <Work/>
      <Testimonials/>


    </main>
  );
};

export default index;
