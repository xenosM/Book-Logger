import AddForm from "./Forms/AddForm";

export default function AddBook() {
  return (
    <>
      <section className="h-11/12 w-11/12 bg-primary rounded-md">
        <h1 className="text-center font-semibold text-xl mt-1.5 mb-6">
          Add a New Book
        </h1>
        <AddForm />
      </section>
    </>
  );
}
