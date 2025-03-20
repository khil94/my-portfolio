import AboutSection from "../sections/aboutSection.tsx";
import SkillSection from "../sections/skillSection.tsx";
import ProjetsSection from "../sections/projetsSection.tsx";
import ContactSection from "../sections/contactSection.tsx";
import TOC from "../components/toc.tsx";

export default function SectionLayout() {
  return (
    <div className={"w-full flex flex-row"}>
      <div className={"w-[80%]"}>
        <AboutSection />
        <SkillSection />
        <ProjetsSection />
        <ContactSection />
      </div>
      <div className={"w-[20%]"}>
        <TOC />
      </div>
    </div>
  );
}
