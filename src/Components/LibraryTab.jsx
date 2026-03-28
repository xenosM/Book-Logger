import BookCard from "./BookCard";
export default function LibraryTab() {
  return (
    <>
      <section className="h-11/12 w-11/12 bg-primary rounded-md">
        <div className="library-tab-grid h-full grid-layout grid grid-cols-none grid-flow-col overflow-scroll no-scrollbar">
          <BookCard />
        </div>
      </section>
    </>
  );
}
