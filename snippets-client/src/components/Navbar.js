import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="primary-color">Snippets app</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/add" className="ml-3">
          New snippet
        </Link>
      </div>
    </nav>
  );
}
