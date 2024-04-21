import Header from "./components/Header";
import Hero from "./pages/Hero";
import BottomNav from "./components/navigation/BottomNav";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Projects from "./pages/Projects";
BottomNav;
const App = () => {
  return (
    <main className="bg-slate-900">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <BottomNav />
    </main>
  );
};

export default App;
