import * as Icons from "@heroicons/react/24/outline";

const BottomNav = () => {
  return (
    <nav className="fixed md:hidden bottom-5 right-0 left-0 bg-slate-800 backdrop-blur-[6px] shadow-xl rounded-full w-[90dvw] mx-auto text-white">
      <ul className="flex justify-evenly py-2">
        <li>
          <a href="" className="grid place-items-center">
            <Icons.UserCircleIcon className="h-8" />
            <span>About</span>
          </a>
        </li>
        <li className="grid place-items-center">
          <a href="" className="grid place-items-center">
            <Icons.BriefcaseIcon className="h-8" />
            <span>Projects</span>
          </a>
        </li>
        <li className="grid place-items-center">
          <a href="" className="grid place-items-center">
            <Icons.EnvelopeIcon className="h-8" />
            <span>Contact</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default BottomNav;
