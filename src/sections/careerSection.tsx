import SectionWrapper from "../layouts/sectionWrapper.tsx";
import { CAREER_LIST } from "../constants/career.ts";
import CareerComp from "../components/careerComp.tsx";

export default function CareerSection() {
  return (
    <SectionWrapper title={"Career"} type={"right"}>
      {CAREER_LIST.map((c, i) => {
        return <CareerComp key={`career-${c.name}-${i}`} target={c} />;
      })}
    </SectionWrapper>
  );
}
