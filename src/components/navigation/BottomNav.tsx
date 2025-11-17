import * as Icons from "@heroicons/react/24/outline";
import { Link } from "react-scroll";

const BottomNav = () => {
  const navList = [
    {
      icon: "UserCircleIcon",
      label: "about",
    },
    {
      icon: "BriefcaseIcon",
      label: "projects",
    },
    {
      icon: "EnvelopeIcon",
      label: "contact",
    },
  ];

  return (
    <nav className="fixed md:hidden bottom-5 right-0 left-0 bg-white dark:bg-slate-800 backdrop-blur-[6px] shadow-xl rounded-full w-[90dvw] mx-auto text-black dark:text-white z-10 select-none">
      <ul className="flex justify-evenly py-2">
        {navList.map(({ label, icon }) => {
          const IconComponent = Icons[icon as keyof typeof Icons]; // dynamic component

          return (
            <li key={label} className="bottom-nav cursor-pointer">
              <Link
                to={label}
                spy={true}
                smooth={true}
                offset={25}
                duration={500}
                className="grid place-items-center"
              >
                {IconComponent && <IconComponent className="h-8 icons" />}
                <label htmlFor={label} className="cursor-pointer capitalize">
                  {label}
                </label>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default BottomNav;
