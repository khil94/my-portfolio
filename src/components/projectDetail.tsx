import SkillCompWrapper from "./skillCompWrapper.tsx";
import SkillComp from "./skillComp.tsx";
import Carousel from "./carousel.tsx";
import { Project } from "../constants/projects.ts";
import { useState } from "react";
import CommonModal from "./commonModal.tsx";

interface Prop {
  targetProject: Project;
  onClose: () => void;
}

export default function ProjectDetail({ targetProject, onClose }: Prop) {
  const [showImageModal, setShowImageModal] = useState(false);
  const [target, setTarget] = useState("");

  const onImageModalClose = () => {
    setShowImageModal(false);
  };

  const handleImageClick = (t: string) => {
    setTarget(t);
    setShowImageModal(true);
  };

  return (
    <>
      <div
        className={`p-8 w-full flex flex-row sticky top-0 
        justify-between items-center backdrop-blur-xl z-10
        font-bold`}
      >
        <h2 className={"text-2xl"}>{targetProject.name}</h2>
        <button onClick={onClose} className={"cursor-pointer text-3xl "}>
          X
        </button>
      </div>
      <div className={"w-full px-8 text-left flex flex-col gap-8 mt-4"}>
        <SkillCompWrapper title={"사용 기술"}>
          {targetProject.skills.map((skill, idx) => {
            return <SkillComp key={`skill-of-${targetProject.name}-${idx}`} name={skill} />;
          })}
        </SkillCompWrapper>
        <div>
          <h3 className={`mb-4`}>상세 : </h3>
          <p className={"text-left"}>{targetProject.content}</p>
        </div>
        <div className={"p-8"}>
          {targetProject.image && (
            <Carousel targetList={targetProject.image}>
              {targetProject.image.map((v, i) => (
                <img
                  className={"cursor-pointer"}
                  onClick={() => handleImageClick(v)}
                  style={{ width: "100%" }}
                  src={v}
                  alt={`project-img-${targetProject.name}-${i}`}
                />
              ))}
            </Carousel>
          )}
        </div>
      </div>
      <CommonModal
        className={"w-fit border-2 border-white "}
        isOpen={showImageModal}
        onClose={onImageModalClose}
      >
        <div className={"cursor-pointer"} onClick={onImageModalClose}>
          <button
            className={`cursor-pointer absolute right-0 top-0 translate-x-1/4 -translate-y-1/4 p-4 border-2 border-white
            bg-main-light-black text-2xl rounded-[50%]`}
          >
            X
          </button>
          <img src={target} style={{ width: "100%" }} alt={"img-detail"} />
        </div>
      </CommonModal>
    </>
  );
}
