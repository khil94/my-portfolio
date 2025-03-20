import { Project } from "../constants/projects.ts";

interface Prop {
  targetProject: Project;
}

export default function ProjectComp({ targetProject }: Prop) {
  return (
    <div className={`min-w-full border-2 border-white rounded-2xl p-4 `}>
      {targetProject.content}
    </div>
  );
}
