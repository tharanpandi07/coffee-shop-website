import { useState } from "react";
import { Menu, X, Coffee } from "lucide-react";
import "../styles/navbar.css";

const links = [
  { label: "Home", href: "#home" },
  { label: "Our Story", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <a
        href="#home"
        className="nav-logo"
        onClick={() => setMenuOpen(false)}
      >
        <Coffee size={25} />
        <span>COFFE<span className="gold">.</span></span>
      </a>

      <button
        className="mobile-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        {menuOpen ? <X /> : <Menu />}
      </button>

      <nav className={'nav-links ${menuOpen ? "nav-open" : ""}'}>
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}

        <a
          className="nav-cta"
          href="#menu"
          onClick={() => setMenuOpen(false)}
        >
          Explore Coffee <span>↗</span>
        </a>
      </nav>
    </header>
  );
}