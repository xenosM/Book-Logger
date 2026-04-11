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
const delay = 600;

export default function AddForm() {
  //*STATES
  const [bookTitleValue, setTitleValue] = useState("");
  const [bookTitleInputValue, setTitleInputValue] = useState("");

  const [apiData, setApiData] = useState([]);
  const [selectedBook, setSelectedBook] = useState({});
  const [loading, setLoading] = useState(false);

  //* VARIABLES
  const bookTitles = getBookTitles();

  //* FUNCTION
  function onSubmit() {}

  async function getBookData(URL) {
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error("Errorrr!!!!!!!!!");
      }
      const data = await response.json();
      const validBooks = data.docs.filter(
        (book) =>
          book.title &&
          book.author_name &&
          book.key &&
          book.first_publish_year &&
          book.cover_i,
      );
      setApiData(validBooks || []);
    } catch (err) {
      setApiData([]);
      console.log(err);
    } finally {
      setLoading(false);
    }
  }
  function getBookTitles() {
    return apiData.map((book) => {
      return {
        title: book.title,
        id: book.key,
      };
    });
  }

  //* USE EFFECT
  useEffect(() => {
    const value = bookTitleInputValue.trim();
    const URL = `https://openlibrary.org/search.json?title=${encodeURIComponent(value)}&fields=title,key,first_publish_year,cover_i,author_name`;

    //Ensures the API call is made at only a certain input character
    if (
      value.length <= 3 ||
      bookTitles.includes(value.toLowerCase()) ||
      value == bookTitleValue
    ) {
      setApiData([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    const delayTimer = setTimeout(() => {
      getBookData(URL);
    }, delay);

    return () => clearTimeout(delayTimer);
  }, [bookTitleInputValue]);

  return (
    <form action={onSubmit}>
      <div className="flex justify-center gap-20 mb-10">
        <Autocomplete
          options={bookTitles}
          getOptionKey={(book) => book.id || ""}
          getOptionLabel={(book) => book.title || ""}
          freeSolo={true}
          slotProps={autoCompleteStyles}
          value={bookTitleValue}
          onChange={(e, newValue) => {
            setTitleValue(newValue);
            setSelectedBook(apiData.find((book) => (book.id = newValue.id)));
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
          defaultValue={
            selectedBook.author_name ? selectedBook.author_name : ""
          }
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
