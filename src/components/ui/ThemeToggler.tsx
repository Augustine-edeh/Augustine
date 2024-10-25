import * as Icons from "@heroicons/react/24/outline";
import "@theme-toggles/react/css/Classic.css";
import { Classic } from "@theme-toggles/react";
import { useEffect, useState } from "react";

const ThemeToggler = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    return () => {};
  }, [theme]);

  const themeSwitchHanlder = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  // Mobile device vibration trigger function
  const triggerVibration = () => {
    if (navigator.vibrate) {
      // Single short vibration pulse for subtle feedback
      navigator.vibrate(50);
    } else {
      console.log("Vibration not supported on this device.");
    }
  };

  return (
    <>
      {/* <button className="h-fit">
        <Icons.SunIcon onClick={triggerVibration} className="text-white h-7" />
        <span className="sr-only">Toggle Theme</span>
      </button> */}

      <Classic
        placeholder="Toggle theme"
        onToggle={() => {
          triggerVibration();
          themeSwitchHanlder();
        }}
        className="[&_svg]:w-7 [&_svg]:h-7"
      />
    </>
  );
};

export default ThemeToggler;
