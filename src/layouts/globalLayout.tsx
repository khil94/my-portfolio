import { ReactNode } from "react";

interface Prop {
  children: ReactNode;
}

export default function GlobalLayout({ children }: Prop) {
  return (
    <div className={"bg-main-light-black text-main-white flex justify-center"}>
      <div className={" max-w-[1280px] w-full h-full flex flex-col"}>{children}</div>
    </div>
  );
}
