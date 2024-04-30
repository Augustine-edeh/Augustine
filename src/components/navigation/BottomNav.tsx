import * as Icons from "@heroicons/react/24/outline";
import { Link } from "react-scroll";

const BottomNav = () => {
  return (
    <nav className="fixed md:hidden bottom-5 right-0 left-0 bg-slate-800 backdrop-blur-[6px] shadow-xl rounded-full w-[90dvw] mx-auto text-white z-10 select-none">
      <ul className="flex justify-evenly py-2">
        <li className="bottom-nav cursor-pointer">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="grid place-items-center"
          >
            <Icons.UserCircleIcon id="about" className="h-8 icons" />
            <label htmlFor="about" className="cursor-pointer">
              About
            </label>
          </Link>
        </li>
        <li className="bottom-nav cursor-pointer">
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="grid place-items-center"
          >
            <Icons.BriefcaseIcon id="projects" className="h-8 icons" />
            <label htmlFor="projects" className="cursor-pointer">
              Projects
            </label>
          </Link>
        </li>
        <li className="bottom-nav cursor-pointer">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="grid place-items-center"
          >
            <Icons.EnvelopeIcon id="contact" className="h-8 icons" />
            <label htmlFor="contact" className="cursor-pointer">
              Contact
            </label>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default BottomNav;
