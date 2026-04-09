/* eslint-disable */
//* MUI
import Autocomplete from "@mui/joy/Autocomplete";
import CircularProgress from "@mui/joy/CircularProgress";

// * COMPONENTS
import DateInput from "../UI/DateInput";
import FileInput from "../UI/FileInput";
import TextArea from "../UI/TextArea";
import RatingInput from "../UI/RatingInput";
import SubmitButton from "../UI/SubmitButton";
// * REACT
import { useState, useEffect } from "react";

export default function AddForm() {
  //*STATES
  const [bookTitleValue, setTitleValue] = useState("");
  const [bookTitleInputValue, setTitleInputValue] = useState("");
  const [booksData, setBooksData] = useState([]);
  const [loading, setLoading] = useState(false);
  // *VARIABLES
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
  const autoCompleteStyles = {
    root: {
      sx: {
        "&::before": {
          boxShadow: "none",
        },
        bgcolor: "transparent",
        maxWidth: 320,
        width: 320,
      },
    },
    listbox: {
      sx: {
        bgcolor: "#F9F8F6",
      },
    },
  };
  const bookTitles = Array.from(
    new Set(booksData.map((book) => book.title.toLowerCase().trim())),
  );
  console.log("books are: " + bookTitles);

  //* USE EFFECT
  useEffect(() => {
    const value = bookTitleInputValue;
    const delay = 500;
    const URL = `https://openlibrary.org/search.json?q=${value}`;
    //Ensures the API call is made at only a certain input character
    if (value.trim().length <= 3 || bookTitles.includes(value)) {
      // setBooksData([]);
      return;
    }

    const delayTimer = setTimeout(async () => {
      try {
        setLoading(true);
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error("Errorrr!!!!!!!!!");
        }

        const data = await response.json();
        console.log(data.docs);
        setBooksData(data.docs || []);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }, delay);
    return () => clearTimeout(delayTimer);
  }, [bookTitleInputValue]);

  //* FUNCTION
  function onSubmit() {}

  return (
    <form action={onSubmit}>
      <div className="flex justify-center gap-20 mb-10">
        <Autocomplete
          options={bookTitles}
          freeSolo={true}
          autoComplete
          slotProps={autoCompleteStyles}
          value={bookTitleValue}
          onChange={(e, newValue) => {
            setTitleValue(newValue);
          }}
          inputValue={bookTitleInputValue}
          onInputChange={(e, newInputValue) => {
            setTitleInputValue(newInputValue);
          }}
          loading={loading}
          endDecorator={
            loading ? (
              <CircularProgress
                size="sm"
                sx={{ bgcolor: "background.surface" }}
              />
            ) : null
          }
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
