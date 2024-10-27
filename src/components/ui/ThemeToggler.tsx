import "@theme-toggles/react/css/Classic.css";
import { Classic } from "@theme-toggles/react";
import { useEffect, useState } from "react";

const ThemeToggler = () => {
  const [theme, setTheme] = useState(null);

  // Load saved theme or system preference on initial mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  // Apply theme to document class and save to localStorage on change
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Theme toggle handler
  const themeSwitchHandler = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  // Mobile device vibration trigger function
  const triggerVibration = () => {
    if (navigator.vibrate) {
      navigator.vibrate(50); // Single short vibration pulse
    } else {
      console.log("Vibration not supported on this device.");
    }
  };

  return (
    <div className="bg-gray-200 dark:bg-transparent size-10 rounded-full grid place-items-center">
      <Classic
        placeholder="Toggle theme"
        onToggle={() => {
          triggerVibration();
          themeSwitchHandler();
        }}
        className="[&_svg]:w-7 [&_svg]:h-7"
      />
    </div>
  );
};

export default ThemeToggler;
