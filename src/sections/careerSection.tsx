import SectionWrapper from "../layouts/sectionWrapper.tsx";
import { CAREER_LIST } from "../constants/career.ts";
import CareerComp from "../components/careerComp.tsx";

export default function CareerSection() {
  return (
    <SectionWrapper title={"Career"} type={"right"}>
      <div className={`flex flex-col gap-20`}>
        {CAREER_LIST.map((c, i) => {
          return <CareerComp key={`career-${c.name}-${i}`} target={c} />;
        })}
      </div>
    </SectionWrapper>
  );
}
