import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";
import bookCover from "../assets/book_cover.jpg";

export default function BookCard() {
  const bookName = "Harry Potter and the Goblet of Fire";
  const starArray = [1, 1, 1, 0.5, 0];
  return (
    <>
      <div className="  w-full h-full flex justify-center items-center">
        <div className=" book-card w-10/12 h-11/12 p-3 bg-secondary rounded-md flex flex-col items-center justify-start gap-1 object-contain">
          <img
            src={bookCover}
            alt={`${bookName} coverpage`}
            className=" w-7/12 h-8/12 shadow-lg rounded "
          />
          <h3 className=" book-name text-center font-semibold text-lg min-block-16 line-clamp-2">
            {bookName}
          </h3>
          <div className=" Review flex">
            {starArray.map((starScore) => {
              if (starScore == 0) return <IoMdStarOutline />;
              else if (starScore == 0.5) return <IoMdStarHalf />;
              else return <IoMdStar />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
