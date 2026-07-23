function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <div className="container">

          <div className="logo">
            RoyalTaste
          </div>

          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <a href="#reservation" className="btn">
            Book Table
          </a>

        </div>
      </nav>
    </header>
  );
}

export default Navbar;