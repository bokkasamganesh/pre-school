import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export default function Navbar({ onLoginClick }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/admissions', label: 'Admissions' },
    { to: '/classes', label: 'Classes' },
    { to: '/teachers', label: 'Teachers' },
    { to: '/activities', label: 'Activities' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => navigate('/')}>
        <span className="logo-icon">☀️</span>
        <span className="logo-text">Little <span>Millennium</span></span>
      </div>
      <ul className={`nav-links${open ? ' open' : ''}`}>
        {links.map(l => (
          <li key={l.to}>
            <NavLink
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) => isActive ? 'active' : ''}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          </li>
        ))}
        <li>
          <a
            href="#"
            className="nav-btn"
            onClick={(e) => { e.preventDefault(); setOpen(false); onLoginClick(); }}
          >
            Login
          </a>
        </li>
      </ul>
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <span /><span /><span />
      </div>
    </nav>
  );
}
