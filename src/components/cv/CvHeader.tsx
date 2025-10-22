import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faEllipsisV } from "@fortawesome/free-solid-svg-icons";

const CvHeader = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header className="w-full max-w-5xl mb-4 flex justify-between items-center bg-slate-800 px-4 py-2 rounded-md relative">
      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-1 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-all cursor-pointer"
        title="Back to Home"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
        <span className="hidden md:block">Back Home</span>
      </button>

      {/* Title */}
      <h1 className="text-xl font-semibold text-gray-100 text-center">My CV</h1>

      {/* Desktop: Download button */}
      <div className="hidden md:flex">
        <a
          href="/Augustine Edeh_CV.pdf"
          download
          className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg transition-all text-center"
        >
          Download PDF
        </a>
      </div>

      {/* Mobile: 3-dot icon and dropdown */}
      <div className="md:hidden relative" ref={menuRef}>
        <button
          onClick={() => setShowMenu((prev) => !prev)}
          aria-label="Open mobile menu"
          className="text-white p-2 rounded hover:bg-gray-700"
        >
          <FontAwesomeIcon icon={faEllipsisV} />
        </button>

        {showMenu && (
          <div className="absolute right-0 bg-slate-700 text-white rounded shadow-md z-10">
            <a
              href="/CV (Revamped Version).pdf"
              download="Augustine Edeh – Frontend_Developer"
              className="block px-4 py-2 bg-blue-700 rounded hover:bg-blue-800 transition-all text-center"
              onClick={() => setShowMenu(false)} // auto-close on click
            >
              Download CV
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default CvHeader;
