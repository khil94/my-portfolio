import SectionWrapper from "../layouts/sectionWrapper.tsx";
import Github from "../assets/github.svg?react";
import Mail from "../assets/email.svg?react";
import Blog from "../assets/blog.svg?react";

export default function ContactSection() {
  return (
    <SectionWrapper title={"Contact"} type={"left"}>
      <div className={`flex flex-col gap-8`}>
        <a
          className={"flex flex-row gap-8 items-center"}
          href={"https://github.com/khil94"}
          target={"_blank"}
        >
          <Github width={40} height={40} stroke={"white"} fill={"white"} />
          <p>https://github.com/khil94</p>
        </a>
        <div className={"flex flex-row gap-8 items-center"}>
          <a href={"mailto:khilkhil@naver.com"} target={"_blank"}>
            <Mail width={40} height={40} stroke={"white"} fill={"white"} />
          </a>
          <p>khilkhil@naver.com</p>
        </div>
        <a
          className={"flex flex-row gap-8 items-center"}
          href={"https://zidru-blog.vercel.app/"}
          target={"_blank"}
        >
          <Blog width={40} height={40} stroke={"white"} fill={"white"} />
          <p>https://zidru-blog.vercel.app/</p>
        </a>
      </div>
    </SectionWrapper>
  );
}
