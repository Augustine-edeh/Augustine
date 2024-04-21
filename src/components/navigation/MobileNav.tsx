import * as Icons from "@heroicons/react/24/outline";

const MobileNav = () => {
  return (
    <nav className="flex justify-between items-center md:hidden h-20 fixed w-full z-20 bg-transparent backdrop-blur-[6px] shadow-lg pr-6">
      <img
        src="../../../public/augustine-high-resolution-logo-transparent.png"
        alt=""
        className="h-full"
      />
      <Icons.MoonIcon className="h-10" />
    </nav>
  );
};

export default MobileNav;
