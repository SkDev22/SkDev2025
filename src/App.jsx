import Footer from "./components/Footer";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import { Routes, Route } from "react-router-dom";
// import Ribbons from "../ReactBits/Ribbons/Ribbons";
import SplashCursor from "../ReactBits/SplashCursor/SplashCursor";

const App = () => {
  return (
    <div className="scroll-smooth">
      <SplashCursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
