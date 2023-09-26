import "./style.scss";
import Me from "../../assets/images/me.jpg"


const index = () => {
  return (
    <section className="mt-[96px]  ">
      <div className="flex items-center bordiringa">
        <button
          id="hww bg-[#E5E7EB]" 
          className="px-[20px] mt-[96px] mb-[48px] buttonof bg-[#E5E7EB]  items-center flex bordiringan py-1 hover:text-white hover:bg-[#245dd1] "
        >
          About me
        </button>
      </div>

      <div className="  mb-[96px]  flex  gap-x-[192px] justify-between">
        <div className="left ">
          <div class="vvb">
            <img className="top-imageg" src={Me} alt="Base Image" />
            <div className="bottom-imageg"></div>
          </div>
        </div>
        <div className="right">
          <h2 className="hhe mb-[24px]">Curious about me? Here you have it:</h2>
          <div className="gap-y-[16px]">
            {" "}
            <p className=" pda bir">
              I'm a passionate, software engineer who specializes in full stack
              development (Vue.js & Node.js). I am very enthusiastic about
              bringing the technical and visual aspects of digital products to
              life. User experience, pixel perfect design, and writing clear,
              readable, highly performant code matters to me.
            </p>
            <p className=" pda ikki">
              I began my journey as a web developer in 2015, and since then,
              I've continued to grow and evolve as a developer, taking on new
              challenges and learning the latest technologies along the way.
              Now, in my early thirties, 7 years after starting my web
              development journey, I'm building cutting-edge web applications
              using modern technologies such as Next.js, TypeScript, Nestjs,
              Tailwindcss, Supabase and much more.
            </p>
            <p className=" pda uch">
              I am very much a progressive thinker and enjoy working on products
              end to end, from ideation all the way to development.
            </p>
            <p className=" pda tort">
              When I'm not in full-on developer mode, you can find me hovering
              around on twitter or on indie hacker, witnessing the journey of
              early startups or enjoying some free time. You can follow me on
              Linked where I share tech-related bites and build in public, or
              you can follow me on{" "}
              <a className="underline" href="https://github.com/Tohirabiy">GitHub</a> .
            </p>
            <p className="pda">Finally, some quick bits about me.</p>
            <div class="columns text-[#4B5563] mb-[16px]">
              <div class="column">
                <p> <span>•</span> B.E. in Computer Engineering</p>
                <p><span>•</span> Full-time coding</p>
              </div>
              <div class="column">
                <p> <span>•</span> Leadership</p>
                <p> <span>•</span> Project management</p>
              </div>
           
            </div>
            <p className="pda">One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉</p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
