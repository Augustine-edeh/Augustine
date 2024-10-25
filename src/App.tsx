import Header from "./components/ui/Header";
import Hero from "./pages/Hero";
import BottomNav from "./components/navigation/BottomNav";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Projects from "./pages/Projects";
import LightUI from "./components/ui/LightUI";

const App = () => {
  return (
    <main className="bg-slate-900 relative overflow-hidden">
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
