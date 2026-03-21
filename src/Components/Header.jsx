export default function Header({ setToggleTab, toggleTab }) {
  return (
    <>
      <header className="w-full h-16 p- flex items-center justify-center">
        <nav className="nav-container w-11/12 h-9/12 bg-primary rounded-sm flex items-center justify-between">
          <div className="title font-medium text-xl cursor-pointer select-none">
            Book Log
          </div>
          <div className="nav-btn-wrapper">
            <button
              onClick={() => {
                setToggleTab((prevState) => !prevState);
              }}
              className="nav-btn mr-4 hover:text-accent"
              disabled={toggleTab}
            >
              Library
            </button>
            <button
              onClick={() => {
                setToggleTab((prevState) => !prevState);
              }}
              className="nav-btn hover:text-accent"
              disabled={!toggleTab}
            >
              Add Book
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}
