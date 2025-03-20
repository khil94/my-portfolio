import SectionWrapper from "../layouts/sectionWrapper.tsx";
import { ABOUT_TEXT } from "../constants/about.ts";

export default function AboutSection() {
  return (
    <SectionWrapper title={"About"}>
      <div className="w-full flex items-center justify-center break-all">
        <p className={`whitespace-pre-wrap`}>{ABOUT_TEXT}</p>
      </div>
    </SectionWrapper>
  );
}
