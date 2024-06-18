import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../../utils/constants";
import "./Header.css";
export function Header() {
  const [toggleLoginLogout, setToggleLoginLogout] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <nav className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/">Cart</Link>
          </li>
          <button
            className="login"
            onClick={() => {
              toggleLoginLogout === "Login"
                ? setToggleLoginLogout("Logout")
                : setToggleLoginLogout("Login");
            }}
          >
            {toggleLoginLogout}
          </button>
        </ul>
      </nav>
    </div>
  );
}
