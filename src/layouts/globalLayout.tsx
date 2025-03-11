import { ReactNode } from "react";

interface Prop {
  children: ReactNode;
}

export default function GlobalLayout({ children }: Prop) {
  return <div className={" bg-main-light-black text-main-white w-full h-full"}>{children}</div>;
}
