import * as Icons from "@heroicons/react/24/outline";

const BottomNav = () => {
  return (
    <nav className="fixed md:hidden bottom-5 right-0 left-0 bg-slate-800 backdrop-blur-[6px] shadow-xl rounded-full w-[90dvw] mx-auto text-white">
      <ul className="flex justify-evenly py-2">
        <a href="#about" className="grid place-items-center">
          <Icons.UserCircleIcon id="about" className="h-8" />
          <label htmlFor="about">About</label>
        </a>
        <a href="#projects" className="grid place-items-center">
          <Icons.BriefcaseIcon id="projects" className="h-8" />
          <label htmlFor="projects">Projects</label>
        </a>
        <a href="#contact" className="grid place-items-center">
          <Icons.EnvelopeIcon id="contact" className="h-8" />
          <label htmlFor="contact">Contact</label>
        </a>
      </ul>
    </nav>
  );
};

export default BottomNav;
