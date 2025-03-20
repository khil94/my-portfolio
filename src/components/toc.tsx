import { useEffect, MouseEvent, useState } from "react";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

const TOC = () => {
  const [toc, setToc] = useState<TocItem[]>([]);
  const [currentId, setCurrentId] = useState<string | null>(null);

  console.log(currentId);

  useEffect(() => {
    const headers = Array.from(document.querySelectorAll("h1")) as HTMLElement[];
    const tocItems = headers.map(header => {
      let id = header.id;
      if (!id) {
        id = header.textContent?.replace(/\s/g, "-").toLowerCase() || "";
        header.id = id;
      }
      return {
        id: id,
        text: header.textContent || "",
        level: Number(header.tagName.replace("H", "")),
      };
    });
    setToc(tocItems);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const visibleSection = entries.find(entry => entry.isIntersecting);
        if (visibleSection) {
          setCurrentId(visibleSection.target.id);
        }
      },
      {
        threshold: 0.1,
      }
    );

    toc.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [toc]);

  const levelPadding: { [key: number]: string } = {
    1: "pl-0",
    2: "pl-4",
    3: "pl-8",
  };

  const clickHandler = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <nav className="w-full break-all flex flex-col items-start sticky top-1/2 p-4 text-sm">
      <ul className="space-y-1 ">
        {toc.map(({ id, text, level }) => (
          <li
            key={id}
            className={`${currentId === id ? "font-bold" : ""} ${levelPadding[level] || "pl-0"} text-xl`}
          >
            <a
              onClick={e => clickHandler(e, id)}
              className="scroll-smooth hover:cursor-pointer hover:underline"
              href={`#${id}`}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TOC;
