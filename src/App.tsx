import "./App.css";

import GlobalLayout from "./layouts/globalLayout.tsx";
import TitleSection from "./sections/titleSection.tsx";
import SectionLayout from "./layouts/sectionLayout.tsx";

function App() {
  return (
    <>
      <GlobalLayout>
        <TitleSection />
        <SectionLayout />
      </GlobalLayout>
    </>
  );
}

export default App;
