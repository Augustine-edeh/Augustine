import profileImg from "../assets/images/profileImg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  return (
    // FIXME: height should = screen - 20 tailwind units
    // FIXME: 20 units is from h-20 on header component
    <div className="min-h-[calc(100vh-5rem)] flex flex-col gap-20 lg:flex-row  justify-center items-center bg-slate-900">
      <section className="flex h-56">
        <div className="container h-full w-56 bg-black rounded-lg overflow-clip z-10 shadow-2xl">
          <img
            // src={"https://xsgames.co/randomusers/assets/avatars/male/74.jpg"}
            src={profileImg}
            alt="Augustine"
            className="h"
          />
        </div>
        <div className="h-full w-56 h bg-slate-800 rounded-lg -ml-44 mt-8 shadow-xl"></div>
      </section>

      <section className="text-white text-center">
        <h3 className="text-2xl">Hello, I'm</h3>
        <div>
          <p className="text-3xl my-5 font-extrabold"> Augustine Edeh</p>
          <p className="p-0 mt-8">
            an{" "}
            <span className="text-teal-500 text-2xl">
              Advancing frontend developer
            </span>{" "}
            &{" "}
            <span className="text-blue-400 text-lg">a fullstack developer</span>{" "}
            in the making (self tught)
          </p>
        </div>

        <div className="flex mx-auto gap-x-5 w-fit my-10">
          <a
            href=""
            className="grid place-items-center outline outline-1 rounded-3xl px-2 py-2"
            download
          >
            Download CV
          </a>

          <a
            href="#contact"
            className="bg-slate-700 rounded-3xl px-3 py-3.5 shadow-xl"
          >
            Contact me
          </a>
        </div>

        <div className="flex justify-center gap-x-5">
          <a
            href="https://www.linkedin.com/in/augustine-edeh/"
            target="_blank"
            className="grid place-items-center bg-slate-700 rounded-full h-12 w-12"
          >
            <FontAwesomeIcon
              icon={faLinkedinIn}
              size="2xl"
              className="h-8 text-white"
            />
          </a>
          <a
            href="https://github.com/Augustine-edeh"
            target="_blank"
            className="bg-slate-700 rounded-full h-12 w-12"
          >
            <FontAwesomeIcon
              icon={faGithub}
              size="2xl"
              className="h-full w-full text-white"
            />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Hero;
