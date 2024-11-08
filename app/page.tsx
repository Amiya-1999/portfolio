import LeftSide from "./components/LeftSide";

export default function Home() {
  return (
    <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
      <div className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0">
        <LeftSide />
      </div>
    </div>
  );
}
