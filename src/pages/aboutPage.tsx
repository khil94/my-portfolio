import PageWrapper from "../components/pageWrapper.tsx";
import PageFlipper from "../components/pageFlipper.tsx";
import Bookmark from "../components/bookmark.tsx";

export default function AboutPage() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <PageWrapper>
        <h1 className="text-2xl font-bold">Welcome to my Portfolio</h1>
      </PageWrapper>
    </div>
  );
}
