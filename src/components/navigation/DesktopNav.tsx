import { Link } from "react-scroll";

const DesktopNav = () => {
  return (
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
  );
};

export default DesktopNav;
