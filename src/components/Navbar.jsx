import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const isActive = (path) => (location.pathname === path ? 'active' : '')

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="nav">
      <div className="wrap nav-inner">
        <div className="brand-group">
          <Link to="/" className="brand" onClick={closeMenu}>
            <img src="/assets/healthwise_icon.png" alt="HealthWise" />
            <span>HealthWise</span>
          </Link>

          <span className="brand-divider" aria-hidden="true" />

          <a
            href="https://www.uhnopenlab.ca/"
            target="_blank"
            rel="noopener noreferrer"
            className="openlab-brand"
            title="OpenLab – University Health Network"
          >
            <img src="/assets/openlab_logo.png" alt="OpenLab" />
          </a>
        </div>

        <button
          className={`nav-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <Link to="/" className={isActive('/')} onClick={closeMenu}>
            Home
          </Link>
          <Link
            to="/how-it-works"
            className={isActive('/how-it-works')}
            onClick={closeMenu}
          >
            How It Works
          </Link>
          <Link to="/about" className={isActive('/about')} onClick={closeMenu}>
            About Us
          </Link>
          <Link
            to="/contact"
            className={isActive('/contact')}
            onClick={closeMenu}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}
