import * as Icons from "@heroicons/react/24/outline";
import { Link } from "react-scroll";

const HeadNav = () => {
  return (
    <header className="w-full flex  justify-center gap-x-20 bg-slate-800 shadow-xl shadow-blue-600/30 text-white h-20 z-50 px-5 sm:px-10">
      <nav className="flex justify-between items-center gap-x-20 w-full max-w-screen-lg px-10 select-none">
        <Link
          to="/"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className="text-blue-300 h-fit text-2xl cursor-pointer sm:p-2"
        >
          {"</> Augustine"}
        </Link>

        <div className="flex place-items-center gap-x-5">
          <nav className="hidden md:flex justify-between">
            <ul className="flex gap-x-6 items-center justify-center">
              <li className="header-nav">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  className="cursor-pointer"
                >
                  About
                </Link>
              </li>
              <li className="header-nav">
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  className="cursor-pointer"
                >
                  Projects
                </Link>
              </li>
              <li className="header-nav">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <button className="h-fit">
            <Icons.SunIcon className="text-white h-7" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default HeadNav;
