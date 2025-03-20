import { PROJECT_LIST } from "../constants/projects.ts";
import ProjectComp from "./projectComp.tsx";
import { useEffect, useRef, useState } from "react";

export default function ProjectCompWrapper() {
  const [idx, setIdx] = useState(1);
  const totalLength = PROJECT_LIST.length;
  const extendedList = [PROJECT_LIST[totalLength - 1], ...PROJECT_LIST, PROJECT_LIST[0]];

  const slidePrev = () => {
    setIdx(prev => (prev === 0 ? totalLength - 1 : prev - 1));
  };

  const slideNext = () => {
    setIdx(prev => (prev === totalLength - 1 ? 0 : prev + 1));
  };

  return (
    <div className={`relative overflow-hidden`}>
      <div
        className={`
        transition-transform duration-500 ease-in-out flex flex-row flex-nowrap`}
        style={{ transform: `translateX(-${idx * 100}%)` }}
      >
        {extendedList.map((v, i) => {
          return <ProjectComp key={`project-${v.name}`} targetProject={v} />;
        })}
      </div>
      <button
        className="absolute top-1/2 left-2 p-2 bg-gray-800 text-white rounded-full"
        onClick={slidePrev}
      >
        {"<"}
      </button>
      <button
        className="absolute top-1/2 right-2 p-2 bg-gray-800 text-white rounded-full"
        onClick={slideNext}
      >
        {">"}
      </button>
    </div>
  );
}
