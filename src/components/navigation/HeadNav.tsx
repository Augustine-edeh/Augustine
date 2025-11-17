import ThemeToggler from "../ui/ThemeToggler";
import Logo from "../ui/Logo";
import DesktopNav from "./DesktopNav";

const HeadNav = () => {
  return (
    <header className="w-full flex  justify-center gap-x-20 bg-white dark:bg-slate-800 shadow-xl dark:shadow-blue-600/30 text-black dark:text-white h-20 z-50 px-5 sm:px-10">
      <nav className="flex justify-between items-center gap-x-20 w-full max-w-screen-lg px-10 select-none">
        <Logo />

        <div className="flex place-items-center gap-x-5">
          <DesktopNav />

          <ThemeToggler />
        </div>
      </nav>
    </header>
  );
};

export default HeadNav;
