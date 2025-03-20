import SectionWrapper from "../layouts/sectionWrapper.tsx";
import ProjectComp from "../components/projectComp.tsx";
import { PROJECT_LIST } from "../constants/projects.ts";
import ProjectCompWrapper from "../components/projectCompWrapper.tsx";

export default function ProjectSection() {
  return (
    <SectionWrapper title={"Personal Project"}>
      <div className="w-full whitespace-pre-wrap text-base/8 flex items-center justify-center">
        <ProjectCompWrapper />
      </div>
    </SectionWrapper>
  );
}
