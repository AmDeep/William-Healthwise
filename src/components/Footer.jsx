import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <Link to="/" className="footer-brand">
              <img src="/assets/healthwise_icon.png" alt="HealthWise" />
              <span>HealthWise</span>
            </Link>
            <p className="footer-tag">Your companion for better diabetes care.</p>
          </div>
          <div>
            <h5>Pages</h5>
            <div className="links">
              <Link to="/">Home</Link>
              <Link to="/how-it-works">How It Works</Link>
              <Link to="/about">About Us</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
          <div className="footer-contact">
            <h5>Get in Touch</h5>
            <p>healthwise@uhnopenlab.ca</p>
            <p>489 College Street, Suite 400,<br />Toronto, Ontario, M6G 1A5</p>
          </div>
        </div>
        <div className="footer-bottom">© 2026 HealthWise. All rights reserved.</div>
      </div>
    </footer>
  )
}
