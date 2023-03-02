import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Header() {
  return (
    <div className="main-nav">
      <Link
        className="logo-nav"
        to="/"
      >
        <img
          src={logo}
          alt="logo HRnet"
          className="logo-nav-img"
        />
      </Link>
      <div className="links">
        <Link
          className="nav-link"
          to="/"
        >
          <p>Create Employee</p>
        </Link>
        <Link
          className="nav-link"
          to="/current-employee"
        >
          <p>Current Employee</p>
        </Link>
      </div>
    </div>
  );
}

export default Header;
