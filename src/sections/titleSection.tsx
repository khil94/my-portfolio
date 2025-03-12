import { TITLE_PRODUCTS } from "../constants/title.ts";

export default function TitleSection() {
  return (
    <div className="w-full flex flex-col justify-center gap-10 items-center">
      <div className="w-fit h-[30vh]  flex flex-col text-left justify-around text-6xl font-bold p-10">
        {TITLE_PRODUCTS.main_title.map((v, i) => {
          return <p key={`main_title_${i}`}>{v}</p>;
        })}
      </div>
      <div className="">
        <p>{TITLE_PRODUCTS.sub_title}</p>
      </div>
    </div>
  );
}
