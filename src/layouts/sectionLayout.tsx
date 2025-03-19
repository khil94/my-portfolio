import HomeSection from "../sections/homeSection.tsx";
import AboutSection from "../sections/aboutSection.tsx";
import ProjetsSection from "../sections/projetsSection.tsx";
import ContactSection from "../sections/contactSection.tsx";
import TOC from "../components/toc.tsx";

export default function SectionLayout() {
  return (
    <div className={"w-full flex flex-row"}>
      <div className={"w-[80%]"}>
        <HomeSection />
        <AboutSection />
        <ProjetsSection />
        <ContactSection />
      </div>
      <div className={"w-[20%]"}>
        <TOC />
      </div>
    </div>
  );
}
