const BottomNavigation = () => {
  return (
    <nav className="fixed bottom-0 w-full flex justify-center bg-slate-800 px-3 py-8 text-white">
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
  );
};

export default BottomNavigation;
