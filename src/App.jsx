import AnimatedCursor from "react-animated-cursor";
import useIsDesktop from "./hooks/useIsDesktop";
import Footer from "./components/Footer";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const isDesktop = useIsDesktop();
  return (
    <div className="scroll-smooth">
      {isDesktop && (
        <AnimatedCursor
          innerSize={15}
          outerSize={30}
          innerScale={1.2}
          outerScale={1.8}
          innerStyle={{ backgroundColor: "#ffffff" }}
          outerStyle={{ backgroundColor: "transparent" }}
        />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
