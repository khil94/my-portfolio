import AboutSection from "../sections/aboutSection.tsx";
import SkillSection from "../sections/skillSection.tsx";
import ProjectSection from "../sections/projectSection.tsx";
import ContactSection from "../sections/contactSection.tsx";
import TOC from "../components/toc.tsx";
import CareerSection from "../sections/careerSection.tsx";

export default function SectionLayout() {
  return (
    <div className={"w-full flex flex-row"}>
      <div className={"w-[80%]"}>
        <AboutSection />
        <CareerSection />
        <SkillSection />
        <ProjectSection />
        <ContactSection />
      </div>
      <div className={"w-[20%]"}>
        <TOC />
      </div>
    </div>
  );
}
