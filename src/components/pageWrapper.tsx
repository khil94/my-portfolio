import { ReactNode } from "react";

const PageWrapper = ({ children }: { children: ReactNode }) => {
  return <div className="p-8 bg-blue shadow-lg rounded-lg">{children}</div>;
};

export default PageWrapper;
