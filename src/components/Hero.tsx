import profileImg from "../assets/images/profileImg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  return (
    // FIXME: height should = screen - 20 tailwind units
    // FIXME: 20 units is from h-20 on header component
    <div className="min-h-[calc(100vh-5rem)] flex flex-col gap-20 lg:flex-row  justify-center items-center bg-slate-900">
      <section className="text-white text-center">
        <h3 className="text-2xl">Hello 👋, I'm</h3>
        <div>
          <p className="text-3xl"> Augustine Edeh</p>
          <p className="p-0 mt-8 text-xl">
            an{" "}
            <span className="text-teal-500">Advancing frontend developer</span>{" "}
            & <span className="text-teal-500">a fullstack developer</span> in
            the making (self tught)
          </p>
        </div>

        <div className="flex mx-auto gap-x-5 w-fit my-10">
          <button
            type="button"
            className="outline outline-1 rounded-3xl px-2 py-2"
          >
            Download CV
          </button>
          <button
            type="button"
            className="bg-slate-700 rounded-3xl px-3 py-3.5"
          >
            Contact me
          </button>
        </div>

        <div className="flex justify-center gap-x-5">
          <div className="bg-black rounded-full overflow-hidden">
            <FontAwesomeIcon icon={faGithub} size="2xl" className="h-16" />
          </div>
          <div className="bg-blue-600 rounded-full overflow-hidden">
            <FontAwesomeIcon icon={faLinkedin} size="2xl" className="h-16" />
          </div>
        </div>
      </section>

      <section className="flex place-content-center h-56 bg-blue-40 mb-20">
        {/* FIXME: remeber to remove mb-20 */}
        <div className="container h-full w-56 bg-black rounded-lg overflow-clip z-10 shadow-lg">
          <img
            // src={"https://xsgames.co/randomusers/assets/avatars/male/74.jpg"}
            src={profileImg}
            alt="Augustine"
            className="h"
          />
        </div>
        <div className="h-full w-56 h bg-slate-800 rounded-lg -ml-44 mt-8"></div>
      </section>
    </div>
  );
};

export default Hero;
