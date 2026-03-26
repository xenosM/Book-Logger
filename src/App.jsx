import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import LibraryTab from "./Components/LibraryTab";
import AddBook from "./Components/AddBook";

function App() {
  const [toggleTab, setToggleTab] = useState(true);
  return (
    <>
      <div className="w-screen h-screen bg-background-color flex flex-col">
        <Header setToggleTab={setToggleTab} toggleTab={toggleTab} />
        <main className=" flex items-center justify-center flex-1">
          {toggleTab ? <LibraryTab /> : <AddBook />}
        </main>
      </div>
    </>
  );
}

export default App;
