import DateInput from "../UI/DateInput";
import TextArea from "../UI/TextArea";

export default function AddForm() {
  const genres = [
    "Select a Genre",
    "Action and Adventure",
    "Art & Photography",
    "Biography",
    "Children's",
    "Contemporary",
    "Crime",
    "Fantasy",
    "Graphic Novel",
    "Historical Fiction",
    "History",
    "Horror",
    "Humour",
    "Memoir",
    "Mystery",
    "Philosophy",
    "Romance",
    "Science Fiction",
    "Self-Help",
    "Thriller",
    "True Crime",
  ];

  function onSubmit() {}

  return (
    <form action={onSubmit}>
      <div className="flex justify-center gap-20 mb-14">
        <input
          className="outline-1 outline-secondary shadow-2xs px-2 py-1 rounded-sm w-2xs"
          type="text"
          name="bookTitle"
          placeholder="Enter Book Name"
          required
        />
        <input
          className="outline-1 outline-secondary shadow-2xs px-2 py-1 rounded-sm w-xs"
          type="text"
          name="authorName"
          placeholder="Enter Author Name"
          required
        />
        <select
          className="outline-1 outline-secondary shadow-2xs px-2 py-1 rounded-sm"
          name="bookGenre"
          defaultValue=""
          required
        >
          {genres.map((genre, index) => {
            return (
              <option
                key={genre}
                value={index == 0 ? "" : genre}
                disabled={index == 0}
              >
                {" "}
                {genre}{" "}
              </option>
            );
          })}
        </select>
      </div>
      <div className="flex justify-center gap-20 mb-14">
        <DateInput dateInputLabel="Publication Date" />
        <DateInput dateInputLabel="Start reading date" />
        <DateInput dateInputLabel="End reading date" />
      </div>
      <div className="flex justify-center gap-20">
        <TextArea />
        <TextArea />
      </div>
      <div className="flex"></div>
    </form>
  );
}
