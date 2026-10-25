import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header className="sticky top-0 z-10 bg-card border-border">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h2 className=" font-serif font-bold text-xl text-accent">RecipFinder</h2>
          <Link to="/" className="text-text hover:text-accent font-medium">Home</Link>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
