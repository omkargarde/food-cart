import { useState } from "react";
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
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
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
