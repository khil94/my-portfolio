import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
  type?: "left" | "right";
}

export default function SectionWrapper({ type = "left", title, children }: Props) {
  return (
    <div
      id={title}
      className={`w-full flex ${type === "left" ? "flex-row" : "flex-row-reverse"} items-center justify-center `}
    >
      <h1 className={`min-w-60 text-2xl font-bold text-center`}>{title}</h1>
      <div className={`p-12 flex text-base/7 `}>{children}</div>
    </div>
  );
}
