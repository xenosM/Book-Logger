//* MUI
import Autocomplete from "@mui/joy/Autocomplete";
// * COMPONENTS
import DateInput from "../UI/DateInput";
import FileInput from "../UI/FileInput";
import TextArea from "../UI/TextArea";
import RatingInput from "../UI/RatingInput";
import SubmitButton from "../UI/SubmitButton";
// * REACT
import { useState } from "react";

export default function AddForm() {
  //*STATES
  const [bookTitleValue, setTitleValue] = new useState("");

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
  function onTitleChange(e) {
    setTitleValue(e.target.value);
    console.log(bookTitleValue);
  }

  return (
    <form action={onSubmit}>
      <div className="flex justify-center gap-20 mb-10">
        {/* <input
          className="outline-1 outline-secondary shadow-2xs px-2 py-1 rounded-sm w-2xs"
          type="text"
          name="bookTitle"
          placeholder="Enter Book Name"
          required
          value={bookTitleValue}
          onChange={(e) => {
            onTitleChange(e);
          }}
        /> */}
        <Autocomplete options={genres} />
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
      <div className="flex justify-center gap-20 mb-10">
        <DateInput dateInputLabel="Publication Date" />
        <DateInput dateInputLabel="Start reading date" />
        <DateInput dateInputLabel="End reading date" />
      </div>
      <div className="flex justify-center gap-20 m-10">
        <TextArea inputType="Likes" />
        <TextArea inputType="Dislikes" />
      </div>
      <div className="flex flex-col justify-center items-center gap-6">
        <RatingInput />
        <FileInput />
        <SubmitButton />
      </div>
    </form>
  );
}
