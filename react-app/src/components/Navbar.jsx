import { useState, useEffect } from "react";

function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <nav className={sticky ? "navbar sticky" : "navbar"}>
        <div className="container">
          {/* Logo */}
          <div className="logo">RoyalTaste</div>

          {/* Navigation Links */}
          <ul className={menuOpen ? "nav-links active" : "nav-links"}>
            <li>
              <a href="#home" onClick={() => setMenuOpen(false)}>
                Home
              </a>
            </li>

            <li>
              <a href="#about" onClick={() => setMenuOpen(false)}>
                About
              </a>
            </li>

            <li>
              <a href="#menu" onClick={() => setMenuOpen(false)}>
                Menu
              </a>
            </li>

            <li>
              <a href="#gallery" onClick={() => setMenuOpen(false)}>
                Gallery
              </a>
            </li>

            <li>
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Contact
              </a>
            </li>
          </ul>

          {/* Hamburger */}
          <div
            className={menuOpen ? "hamburger active" : "hamburger"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* Button */}
          <a
            href="#reservation"
            className="btn"
            onClick={() => setMenuOpen(false)}
          >
            Book Table
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;