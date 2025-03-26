import { Career, CareerProject } from "../constants/career.ts";

interface Prop {
  target: Career;
}

export default function CareerComp({ target }: Prop) {
  const CareerProjectComp = ({ target }: { target: CareerProject }) => {
    return (
      <div className={"border-white border-2 rounded-3xl p-8"}>
        <h3 className={"font-bold text-xl mb-8"}>{target.name}</h3>
        {target.description.map((d, i) => {
          return (
            <span className={"flex flex-row gap-2"} key={`${target.name}-project-desc-${i}`}>
              <p>• </p>
              <p>{`${d}`}</p>
            </span>
          );
        })}
      </div>
    );
  };

  const getYYYYMMDD = (d: Date) => {
    return `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}`;
  };

  return (
    <div className={`flex flex-col gap-4`}>
      <div className={"text-left"}>
        <h3 className={"font-bold text-2xl"}>{target.name}</h3>
        <p>{`${getYYYYMMDD(target.startDate)} ~ ${target.endDate ? getYYYYMMDD(target.endDate) : ""}`}</p>
      </div>
      <div className={"flex flex-col gap-4"}>
        {target.projects.map((p, i) => {
          return (
            <CareerProjectComp target={p} key={`career-${target.name}-project-${p.name}-${i}`} />
          );
        })}
      </div>
    </div>
  );
}
