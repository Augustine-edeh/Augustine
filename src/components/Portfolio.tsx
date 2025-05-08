import About from "../pages/About";
import Contact from "../pages/Contact";
import Hero from "../pages/Hero";
import Projects from "../pages/Projects";
import BottomNav from "./navigation/BottomNav";
import Header from "./ui/Header";
import LightUI from "./ui/LightUI";

const Main = () => {
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

export default Main;
