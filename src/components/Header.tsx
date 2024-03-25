import * as Icons from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <header className="flex justify-center items-center gap-x-20 bg-slate-800 shadow-xl text-white h-20">
      <p className="text-blue-300 h-fit text-2xl">{"</> Augustine"}</p>

      <div className="flex place-items-center gap-x-5">
        <nav className="hidden md:flex justify-between">
          <ul className="flex gap-3">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Project</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </nav>
        <button className="h-fit">
          <Icons.SunIcon className="text-white h-7" />
        </button>
      </div>
    </header>
  );
};

export default Header;
