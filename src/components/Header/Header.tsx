import "./Header.css";
function Header() {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="/src/assets/smoking-burger-with-lettuce-3624ld.png" alt="" />
      </div>
      <nav className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
