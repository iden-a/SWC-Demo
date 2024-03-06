import { Link } from 'react-router-dom';
import '../Navbar/Navbar.css'
export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/">Back</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact">Option</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
