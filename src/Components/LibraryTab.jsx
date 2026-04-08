import BookCard from "./BookCard";

export default function LibraryTab() {
  return (
    <>
      <section className="h-11/12 w-11/12 bg-primary rounded-md">
        <h1 className="text-center font-semibold text-xl mt-1.5">Library</h1>
        <div className="library-tab-grid h-11/12 grid-layout grid grid-cols-none grid-flow-col overflow-scroll no-scrollbar"></div>
      </section>
    </>
  );
}
