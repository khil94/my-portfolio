import "./App.css";
import HomeSection from "./sections/homeSection.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutSection from "./sections/aboutSection.tsx";
import ProjetsSection from "./sections/projetsSection.tsx";
import ContactSection from "./sections/contactSection.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<HomeSection />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/projects" element={<ProjetsSection />} />
          <Route path="/contact" element={<ContactSection />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
