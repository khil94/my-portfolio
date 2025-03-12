import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

export default function SectionWrapper({ title, children }: Props) {
  return (
    <div id={title} className={`w-full flex flex-col items-center justify-center`}>
      <h1 className={`min-w-60 text-2xl font-bold text-center`}>{title}</h1>
      <div className={`p-12`}>{children}</div>
    </div>
  );
}
