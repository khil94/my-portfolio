import { ReactNode, useState } from "react";

interface Props<T> {
  targetList: T[];
  children: ReactNode;
}

export default function Carousel<T>({ targetList, children }: Props<T>) {
  const [idx, setIdx] = useState(0);
  const totalLength = targetList.length;

  const slidePrev = () => {
    setIdx(prev => (prev === 0 ? totalLength - 1 : prev - 1));
  };

  const slideNext = () => {
    setIdx(prev => (prev === totalLength - 1 ? 0 : prev + 1));
  };

  return (
    <div className={`relative text-base/8`}>
      <div className={`relative overflow-hidden`}>
        <div
          className={`
           flex flex-row transition-transform duration-500 ease-in-out`}
          style={{ transform: `translateX(-${idx * 100}%)` }}
        >
          {children}
        </div>
      </div>
      <button
        className="absolute cursor-pointer top-1/2 -translate-y-1/2 -translate-x-1/2 left-0 p-2 px-4 border-2 border-white bg-main-light-black text-white rounded-full"
        onClick={slidePrev}
      >
        {"<"}
      </button>
      <button
        className="absolute cursor-pointer top-1/2 -translate-y-1/2 right-0 translate-x-1/2 p-2 px-4 border-2 border-white bg-main-light-black text-white rounded-full"
        onClick={slideNext}
      >
        {">"}
      </button>
    </div>
  );
}
