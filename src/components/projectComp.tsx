import { Project } from "../constants/projects.ts";
import Github from "../assets/github.svg?react";
import Menu from "../assets/burger.svg?react";
import Url from "../assets/web.svg?react";

interface Prop {
  targetProject: Project;
}

export default function ProjectComp({ targetProject }: Prop) {
  return (
    <div
      className={`flex-[0_0_100%] border-2 flex flex-col justify-between gap-4 text-center border-white rounded-2xl p-4 `}
    >
      <h2 className={"font-bold text-2xl"}>{targetProject.name}</h2>
      <p>{targetProject.description}</p>
      <div className={"p-4 text-left break-keep"}>
        {targetProject.summary.map(v => {
          return <p key={v}>{`• ${v}`}</p>;
        })}
      </div>
      <div className={"flex flex-row justify-center gap-4"}>
        <button>
          <Menu width={40} height={40} stroke={"white"} fill={"white"} />
        </button>
        {targetProject.url && (
          <a className={"w-fit"} href={targetProject.url} target={"_blank"}>
            <Url width={40} height={40} stroke={"white"} fill={"white"} />
          </a>
        )}
        {targetProject.git && (
          <a href={targetProject.git} target={"_blank"}>
            <Github width={40} height={40} stroke={"white"} fill={"white"} />
          </a>
        )}
      </div>
    </div>
  );
}
