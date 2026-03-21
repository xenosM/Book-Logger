export default function Header() {
  return (
    <>
      <header className="w-full h-16 p- flex items-center justify-center">
        <nav className="nav-container w-11/12 h-9/12 bg-primary rounded-sm flex items-center justify-between">
            <div className="title font-medium text-xl cursor pointer">Book Log</div>
            <div className="nav-btn-wrapper">
                <button className="nav-btn mr-4 hover:text-accent">Library</button>
                <button className="nav-btn hover:text-accent">Add Book</button>
            </div>
        </nav>
      </header>
    </>
  );
}