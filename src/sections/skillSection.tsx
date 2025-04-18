import SectionWrapper from "../layouts/sectionWrapper.tsx";
import { SKILL_LIST } from "../constants/skill.tsx";
import SkillComp from "../components/skillComp.tsx";
import SkillCompWrapper from "../components/skillCompWrapper.tsx";

export default function SkillSection() {
  const { Experienced, Have_Experience, Collaboration_Tools } = SKILL_LIST;

  return (
    <SectionWrapper title={"Skill"}>
      <div className="w-full flex flex-col gap-12 items-center justify-center">
        <SkillCompWrapper title={"Experienced"}>
          {Experienced.map(v => {
            return <SkillComp key={`skill-comp-${v}`} name={v} />;
          })}
        </SkillCompWrapper>
        <SkillCompWrapper title={"Have Experience"}>
          {Have_Experience.map(v => {
            return <SkillComp key={`skill-comp-${v}`} name={v} />;
          })}
        </SkillCompWrapper>
        <SkillCompWrapper title={"Collaboration Tools"}>
          {Collaboration_Tools.map(v => {
            return <SkillComp key={`skill-comp-${v}`} name={v} />;
          })}
        </SkillCompWrapper>
      </div>
    </SectionWrapper>
  );
}
