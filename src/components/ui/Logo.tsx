import { Link } from "react-scroll";

const Logo = () => {
  return (
    <Link
      to="/"
      spy={true}
      smooth={true}
      offset={-80}
      duration={500}
      className="text-black dark:text-blue-300 h-fit text-2xl cursor-pointer sm:p-2"
    >
      {"</> Augustine"}
    </Link>
  );
};

export default Logo;
