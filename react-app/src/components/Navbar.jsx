import { useState, useEffect } from "react";

function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      // Sticky Navbar
      setSticky(window.scrollY > 80);

      // Active Navigation
      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const top = section.offsetTop - 120;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        if (
          window.scrollY >= top &&
          window.scrollY < top + height
        ) {
          setActiveLink(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    // Page load hote hi ek baar check kare
    handleScroll();

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
              <a
                href="#home"
                className={activeLink === "home" ? "active" : ""}
                onClick={() => {
                  setActiveLink("home");
                  setMenuOpen(false);
                }}
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                className={activeLink === "about" ? "active" : ""}
                onClick={() => {
                  setActiveLink("about");
                  setMenuOpen(false);
                }}
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#menu"
                className={activeLink === "menu" ? "active" : ""}
                onClick={() => {
                  setActiveLink("menu");
                  setMenuOpen(false);
                }}
              >
                Menu
              </a>
            </li>

            <li>
              <a
                href="#gallery"
                className={activeLink === "gallery" ? "active" : ""}
                onClick={() => {
                  setActiveLink("gallery");
                  setMenuOpen(false);
                }}
              >
                Gallery
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className={activeLink === "contact" ? "active" : ""}
                onClick={() => {
                  setActiveLink("contact");
                  setMenuOpen(false);
                }}
              >
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