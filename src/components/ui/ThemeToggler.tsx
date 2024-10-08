import * as Icons from "@heroicons/react/24/outline";

const ThemeToggler = () => {
  // Mobile device vibration trigger function
  const triggerVibration = () => {
    if (navigator.vibrate) {
      // Vibrates for 200ms, pauses for 100ms, then vibrates for 200ms
      navigator.vibrate([200, 100, 200]);
      console.log("Device vibrating...");
    } else {
      console.log("Vibration not supported on this device.");
    }
  };

  return (
    <button className="h-fit">
      <Icons.SunIcon onClick={triggerVibration} className="text-white h-7" />
    </button>
  );
};

export default ThemeToggler;
