import { PROJECT_LIST } from "../constants/projects.ts";
import ProjectComp from "./projectComp.tsx";
import Carousel from "./carousel.tsx";

export default function ProjectCompWrapper() {
  return (
    <Carousel targetList={PROJECT_LIST}>
      {PROJECT_LIST.map(v => {
        return <ProjectComp key={`project-${v.name}`} targetProject={v} />;
      })}
    </Carousel>
  );
}
