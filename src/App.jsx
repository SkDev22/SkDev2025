// import AnimatedCursor from "react-animated-cursor";
import Footer from "./components/Footer";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { superballs } from "ldrs";
superballs.register();

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <div className="scroll-smooth">
      {loading ? (
        <div className="loader-container">
          <l-superballs size="70" speed="1.4" color="#155dfc" />
        </div>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
