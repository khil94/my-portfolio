interface Props {
  name: string;
}

export default function SkillComp({ name }: Props) {
  return (
    <div className={`p-4 rounded-xl border-2 align-middle font-bold min-w-24 text-center`}>
      {name}
    </div>
  );
}
