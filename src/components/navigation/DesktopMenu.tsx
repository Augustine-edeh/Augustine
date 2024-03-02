const DesktopMenu = () => {
  return (
    <nav className="hidden md:flex items-center justify-around h-20 text-blue-100  mix-blend-difference	 font-semibold fixed w-full z-20 bg-transparent backdrop-blur-[6px] shadow-lg">
      <p className="text-3xl cursor-default">Portfolio</p>
      <ul className="flex gap-10 text-2xl">
        <li>
          <a
            href="#home"
            className="hover:text-gray-400 hover:underline underline-offset-8 decoration-white decoration-2"
          >
            Home
          </a>
        </li>
        <a
          href="#about"
          className="hover:text-gray-400 hover:underline underline-offset-8 decoration-white decoration-2"
        >
          About
        </a>
        <li>
          <a
            href="#contact"
            className="hover:text-gray-400 hover:underline underline-offset-8 decoration-white decoration-2"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopMenu;
