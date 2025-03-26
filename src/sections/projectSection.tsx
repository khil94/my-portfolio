import SectionWrapper from "../layouts/sectionWrapper.tsx";
import ProjectCompWrapper from "../components/projectCompWrapper.tsx";

export default function ProjectSection() {
  return (
    <SectionWrapper type={"right"} title={"Personal Project"}>
      <ProjectCompWrapper />
    </SectionWrapper>
  );
}
