const Header = () => {
  return (
    <header className="shadow-xl">
      <nav className="flex justify-between bg-blue-900 p-3">
        <div>{"</>"} Augustine</div>
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
    </header>
  );
};

export default Header;