import Navbar from "./assets/components/Navbar";
import Home from "./assets/components/Home";
import Gallery from "./assets/components/Gallery";
import Contact from "./assets/components/Contact";
import About from "./assets/components/About";
import Footer from "./assets/components/Footer";
import Testimonials from "./assets/components/Testimonials";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} /> {/* Fix for "/home" */}
        <Route path="/about" element={<About />} />
        <Route path="/about" element={<About />} /> {/* Fix for "/about" */}
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
