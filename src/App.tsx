import Header from "./components/Header";
import Hero from "./components/Hero";
// import BottomNav from "./components/navigation/BottomNav";
import BottomNavigation from "./BottomNavigation";
import NavBar from "./components/navigation/NavBar";
import BottomNav from "./components/navigation/BottomNav";
import Contact from "./components/Contact";
import About from "./components/About";
BottomNav;
const App = () => {
  return (
    <main className="bg-slate-900">
      <Header />
      <Hero />
      <BottomNav />
      <Contact />
      <About />
    </main>
  );
};

export default App;
