import "./App.css";
import HomePage from "./pages/homePage.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/aboutPage.tsx";
import ProjectsPage from "./pages/projectsPage.tsx";
import ContactPage from "./pages/contactPage.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
