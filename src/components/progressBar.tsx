import { useEffect, useState } from "react";

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);
  const [isScrollable, setIsScrollable] = useState(false);

  useEffect(() => {
    const updateProgress = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const scrollableHeight = scrollHeight - clientHeight;

      const viewportHeight = window.innerHeight;
      const hasScroll = scrollableHeight > 0 || clientHeight > viewportHeight;
      setIsScrollable(hasScroll);

      const percentage = (scrollTop / scrollableHeight) * 100;
      setProgress(percentage);
    };

    window.addEventListener("scroll", updateProgress);
    window.addEventListener("resize", updateProgress);
    updateProgress();

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  if (!isScrollable) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200">
      <div
        className="h-full bg-main-black transition-all duration-200"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
