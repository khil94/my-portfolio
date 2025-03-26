import { ReactNode } from "react";
import ProgressBar from "../components/progressBar.tsx";

interface Prop {
  children: ReactNode;
}

export default function GlobalLayout({ children }: Prop) {
  return (
    <div className={"relative w-full bg-main-light-black text-main-white flex justify-center"}>
      <ProgressBar />
      <div className={" max-w-[1280px] w-full h-full flex flex-col"}>{children}</div>
    </div>
  );
}
