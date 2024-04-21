import * as Icons from "@heroicons/react/24/outline";
import { Link } from "react-scroll";

const BottomNav = () => {
  return (
    <nav className="fixed md:hidden bottom-5 right-0 left-0 bg-slate-800 backdrop-blur-[6px] shadow-xl rounded-full w-[90dvw] mx-auto text-white">
      <ul className="flex justify-evenly py-2">
        <Link
          to="/"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className="grid place-items-center"
        >
          <Icons.UserCircleIcon id="about" className="h-8" />
          <label htmlFor="about">About</label>
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="grid place-items-center"
        >
          <Icons.BriefcaseIcon id="projects" className="h-8" />
          <label htmlFor="projects">Projects</label>
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="grid place-items-center"
        >
          <Icons.EnvelopeIcon id="contact" className="h-8" />
          <label htmlFor="contact">Contact</label>
        </Link>
      </ul>
    </nav>
  );
};

export default BottomNav;
