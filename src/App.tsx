import "./App.css";
import HomeSection from "./sections/homeSection.tsx";
import AboutSection from "./sections/aboutSection.tsx";
import ProjetsSection from "./sections/projetsSection.tsx";
import ContactSection from "./sections/contactSection.tsx";
import GlobalLayout from "./layouts/globalLayout.tsx";
import TitleSection from "./sections/titleSection.tsx";

function App() {
  return (
    <>
      <GlobalLayout>
        <TitleSection />
        <HomeSection />
        <AboutSection />
        <ProjetsSection />
        <ContactSection />
      </GlobalLayout>
    </>
  );
}

export default App;
