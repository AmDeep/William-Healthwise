import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()

  const isActive = (path) => location.pathname === path ? 'active' : ''

  return (
    <nav className="nav">
      <div className="wrap">
        <Link to="/" className="brand">
          <img src="/assets/healthwise_icon.png" alt="HealthWise" />
          <span>HealthWise</span>
        </Link>
        <div className="nav-links">
          <Link to="/" className={isActive('/')}>Home</Link>
          <Link to="/how-it-works" className={isActive('/how-it-works')}>How It Works</Link>
          <Link to="/about" className={isActive('/about')}>About Us</Link>
          <Link to="/contact" className={isActive('/contact')}>Contact</Link>
        </div>
      </div>
    </nav>
  )
}
