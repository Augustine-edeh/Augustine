import Header from "./components/navigation/Header";
import Hero from "./pages/Hero";
import BottomNav from "./components/navigation/BottomNav";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Projects from "./pages/Projects";
BottomNav;
const App = () => {
  return (
    <main className="bg-slate-900 relative overflow-hidden">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <BottomNav />
      <div className="hidden md:block fixed h-40 w-40 shadow-[50px_-80px_250px_#419aff93] bg-slate-700/[11%] bottom-0 left-0 rounded-full -ml-36 -mb-32"></div>
    </main>
  );
};

export default App;
