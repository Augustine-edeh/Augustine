import { useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Portfolio from "./pages/Portfolio";

import Lenis from "lenis";
import CVPage from "./sections/CvPage";

const App = () => {
  // Lenis Logic
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/cv" element={<CVPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
