import { useEffect } from "react";
import { Project } from "../constants/projects.ts";
import { createPortal } from "react-dom";
import SkillComp from "./skillComp.tsx";

interface Prop {
  target: Project;
  isOpen: boolean;
  onClose: () => void;
}
// ${visible ? "" : "hidden"}
export default function CommonModal({ target, isOpen, onClose }: Prop) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden"; // 모달 열릴 때 스크롤 방지
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <button
      className={`inset-0 flex bg-modal items-center justify-center z-10 fixed 
      cursor-default`}
      onClick={onClose}
    >
      <div
        className={`z-50 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-120 h-240
        bg-main-light-black text-white
        rounded-3xl flex flex-col justify-around overflow-auto no-scrollbar text-base/7 whitespace-pre-wrap`}
        onClick={e => {
          e.stopPropagation();
        }}
      >
        <div
          className={`p-8 w-full flex flex-row sticky top-0 
        justify-between items-center backdrop-blur-xl
        font-bold `}
        >
          <h2 className={"text-2xl"}>{target.name}</h2>
          <button onClick={onClose} className={"cursor-pointer text-3xl "}>
            X
          </button>
        </div>
        <div className={"w-full px-8"}>
          <div className={"flex flex-row flex-wrap w-full"}>
            {target.skills.map((skill, idx) => {
              return <SkillComp key={`skill-of-${target.name}-${idx}`} name={skill} />;
            })}
          </div>
          <p className={"text-left"}>{target.content}</p>
        </div>
        <div>IMAGES</div>
      </div>
    </button>,
    document.body
  );
}
