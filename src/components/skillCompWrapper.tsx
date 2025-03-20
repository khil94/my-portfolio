import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  title: string;
}

export default function SkillCompWrapper({ title, children }: Props) {
  return (
    <div
      className={
        "relative w-full flex flex-row flex-wrap p-6 rounded-xl border-2 border-white gap-6"
      }
    >
      <p className={"absolute top-0 -translate-y-1/2 bg-main-light-black p-2"}>{title}</p>
      {children}
    </div>
  );
}
