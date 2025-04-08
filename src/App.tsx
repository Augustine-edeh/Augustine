import { useEffect } from "react";

import Header from "./components/ui/Header";
import Hero from "./pages/Hero";
import BottomNav from "./components/navigation/BottomNav";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Projects from "./pages/Projects";
import LightUI from "./components/ui/LightUI";

import Lenis from "lenis";

const App = () => {
  // Lenis Logic
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="bg-[#F9FAFB] dark:bg-slate-900 relative overflow-hidden">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <BottomNav />
      <LightUI />
    </main>
  );
};

export default App;
