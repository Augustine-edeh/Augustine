import About from "../sections/About";
import Contact from "../sections/Contact";
import Hero from "../sections/Hero";
import Projects from "../sections/Projects";
import BottomNav from "../components/navigation/BottomNav";
import Header from "../components/ui/Header";
import LightUI from "../components/ui/LightUI";

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
