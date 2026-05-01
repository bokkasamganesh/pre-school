import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo">
              <span className="logo-icon">☀️</span>
              <span className="logo-text">Little <span style={{ color: 'var(--secondary)' }}>Millennium</span></span>
            </div>
            <p>A place where little minds bloom and big dreams begin. Nurturing every child with love, creativity, and world-class early education since 2010.</p>
            <div className="social-links">
              <a className="social-link" href="#">📘</a>
              <a className="social-link" href="#">📸</a>
              <a className="social-link" href="#">▶️</a>
              <a className="social-link" href="#">🐦</a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/admissions">Admissions</Link></li>
              <li><Link to="/classes">Classes</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Programs</h4>
            <ul>
              <li><Link to="/classes">Playgroup</Link></li>
              <li><Link to="/classes">Nursery</Link></li>
              <li><Link to="/classes">Junior KG</Link></li>
              <li><Link to="/classes">Senior KG</Link></li>
              <li><Link to="/activities">Summer Camp</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="#">📍 222, 6th Cross Rd, Mico Layout, BTM Layout</a></li>
              <li><a href="tel:+917892326254">📞 +91 78923 26254</a></li>
              <li><a href="mailto:bokkasamganesh009@gmail.com">✉️ bokkasamganesh009@gmail.com</a></li>
              <li><a href="#">🕐 Mon–Fri: 9AM–5PM | Sat: 9AM–12PM</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Little Millennium Preschool. All rights reserved. Made with ❤️ for little learners.</p>
        </div>
      </div>
    </footer>
  );
}
